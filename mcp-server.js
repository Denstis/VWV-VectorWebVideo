#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const DEFAULT_SERVER = {
  name: 'vectorwebvideo-mcp',
  version: '1.0.0',
  protocol: '2024-11-05'
};

function readJsonSafe(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    return { error: error.message };
  }
}

function validateFilm(film) {
  if (!film || typeof film !== 'object') {
    return { valid: false, errors: ['Film must be an object'] };
  }
  const errors = [];
  if (!film.format || !['VectorWebVideo/1', 'ANM/1'].includes(film.format)) {
    errors.push('format should be "VectorWebVideo/1" or "ANM/1"');
  }
  if (!film.meta || !film.meta.width || !film.meta.height) {
    errors.push('meta.width and meta.height are required');
  }
  if (!Array.isArray(film.scenes) || film.scenes.length === 0) {
    errors.push('scenes must be a non-empty array');
  }
  return { valid: errors.length === 0, errors };
}

function buildSampleFilm() {
  return {
    format: 'VectorWebVideo/1',
    meta: {
      title: 'VectorWebVideo sample',
      author: 'AI Agent',
      fps: 30,
      width: 1280,
      height: 720,
      duration: 8,
      background: '#08101c'
    },
    symbols: {
      sun: {
        parts: [
          { pivot: [0, 0], paths: [{ d: [['E', 0, 0, 100, 100]], fill: '#fbbf24' }] }
        ]
      },
      card: {
        parts: [
          { pivot: [0, 0], paths: [{ d: [['M', -180, -70], ['L', 180, -70], ['L', 180, 70], ['L', -180, 70], ['Z']], fill: '#1e293b' }] }
        ]
      }
    },
    scenes: [
      {
        id: 'scene-1',
        name: 'Intro',
        start: 0,
        end: 8,
        layers: [
          { type: 'sky', stops: ['#08101c', '#1d4ed8', '#0ea5e9'] },
          { type: 'symbol', ref: 'sun', x: 1000, y: 180 },
          { type: 'symbol', ref: 'card', x: 640, y: 360 },
          { type: 'text', text: 'VectorWebVideo', x: 640, y: 360, size: 64, fill: '#f8fafc' }
        ]
      }
    ]
  };
}

class VectorWebVideoMCPServer {
  constructor() {
    this.tools = {
      'vectorwebvideo.validate_film': {
        description: 'Validate a VectorWebVideo film JSON object.',
        inputSchema: {
          type: 'object',
          properties: {
            film: { type: 'object', description: 'Film JSON to validate' }
          },
          required: ['film']
        },
        handler: ({ film }) => validateFilm(film)
      },
      'vectorwebvideo.read_file': {
        description: 'Read a film JSON from disk and validate it.',
        inputSchema: {
          type: 'object',
          properties: {
            file: { type: 'string', description: 'Absolute or relative path to the .json file' }
          },
          required: ['file']
        },
        handler: ({ file }) => {
          const resolved = path.resolve(process.cwd(), file);
          const film = readJsonSafe(resolved);
          if (film.error) {
            return { valid: false, errors: [film.error] };
          }
          return validateFilm(film);
        }
      },
      'vectorwebvideo.build_sample': {
        description: 'Create a sample VectorWebVideo film.',
        inputSchema: { type: 'object', properties: {} },
        handler: () => buildSampleFilm()
      },
      'vectorwebvideo.create_embed': {
        description: 'Generate a ready-to-use HTML embed snippet.',
        inputSchema: {
          type: 'object',
          properties: {
            src: { type: 'string', description: 'Path to JSON file for embed' },
            autoplay: { type: 'boolean' },
            muted: { type: 'boolean' },
            width: { type: 'number' },
            height: { type: 'number' }
          }
        },
        handler: ({ src = './sample-film.json', autoplay = false, muted = true, width = 1280, height = 720 }) => ({
          html: `
<div data-vwv="${src}" data-width="${width}" data-height="${height}" ${autoplay ? 'autoplay' : ''} ${muted ? 'muted' : ''}></div>
<script src="./vectorwebvideo.js"></script>
<script>if (window.VectorWebVideo && window.VectorWebVideo.mountAll) { window.VectorWebVideo.mountAll(); }</script>`
        })
      }
    };
  }

  listTools() {
    return Object.entries(this.tools).map(([name, def]) => ({
      name,
      description: def.description,
      inputSchema: def.inputSchema
    }));
  }

  async callTool(name, args = {}) {
    const tool = this.tools[name];
    if (!tool) {
      throw new Error(`Unknown tool: ${name}`);
    }
    const result = await tool.handler(args);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2)
        }
      ],
      structuredContent: result
    };
  }

  handleMessage(req) {
    if (!req || typeof req !== 'object') {
      return { jsonrpc: '2.0', error: { code: -32600, message: 'Invalid request' }, id: null };
    }

    if (req.method === 'initialize') {
      return {
        jsonrpc: '2.0',
        id: req.id ?? 1,
        result: {
          protocolVersion: DEFAULT_SERVER.protocol,
          capabilities: { tools: { listChanged: false } },
          serverInfo: { name: DEFAULT_SERVER.name, version: DEFAULT_SERVER.version }
        }
      };
    }

    if (req.method === 'tools/list') {
      return {
        jsonrpc: '2.0',
        id: req.id ?? 1,
        result: { tools: this.listTools() }
      };
    }

    if (req.method === 'tools/call') {
      const name = req.params?.name;
      const args = req.params?.arguments || {};
      return Promise.resolve(this.callTool(name, args)).then((result) => ({
        jsonrpc: '2.0',
        id: req.id ?? 1,
        result
      })).catch((error) => ({
        jsonrpc: '2.0',
        id: req.id ?? 1,
        error: { code: -32603, message: error.message }
      }));
    }

    return {
      jsonrpc: '2.0',
      id: req.id ?? 1,
      error: { code: -32601, message: `Method not found: ${req.method}` }
    };
  }
}

const server = new VectorWebVideoMCPServer();

if (require.main === module) {
  let buffer = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => {
    buffer += chunk;
    const parts = buffer.split(/\r?\n/);
    buffer = parts.pop() || '';
    for (const part of parts) {
      if (!part.trim()) continue;
      try {
        const req = JSON.parse(part);
        const result = server.handleMessage(req);
        if (result instanceof Promise) {
          result.then((payload) => process.stdout.write(`${JSON.stringify(payload)}\n`));
        } else {
          process.stdout.write(`${JSON.stringify(result)}\n`);
        }
      } catch (error) {
        process.stdout.write(`${JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: error.message } })}\n`);
      }
    }
  });

  process.stdin.on('end', () => {
    if (buffer.trim()) {
      try {
        const req = JSON.parse(buffer);
        const result = server.handleMessage(req);
        process.stdout.write(`${JSON.stringify(result)}\n`);
      } catch (error) {
        process.stdout.write(`${JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: error.message } })}\n`);
      }
    }
  });
}

module.exports = { VectorWebVideoMCPServer, validateFilm, buildSampleFilm };
