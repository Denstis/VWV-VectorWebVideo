(function (global, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  global.VectorWebVideo = api.VectorWebVideo;
  global.VWV = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  function safeColor(value, fallback = '#ffffff') {
    if (typeof value !== 'string') return fallback;
    const trimmed = value.trim();
    if (!trimmed) return fallback;
    const isHex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/i.test(trimmed);
    if (isHex) return trimmed;
    return trimmed;
  }

  function lerp(a, b, t) {
    if (typeof a === 'number' && typeof b === 'number') return a + (b - a) * t;
    if (Array.isArray(a) && Array.isArray(b)) {
      return a.map((v, i) => lerp(v, b[i] ?? v, t));
    }
    if (typeof a === 'string' && typeof b === 'string') {
      const ca = parseColor(a);
      const cb = parseColor(b);
      const r = Math.round(lerp(ca[0], cb[0], t));
      const g = Math.round(lerp(ca[1], cb[1], t));
      const bl = Math.round(lerp(ca[2], cb[2], t));
      const a0 = lerp(ca[3], cb[3], t);
      return a0 >= 0.99 ? rgbToHex(r, g, bl) : `rgba(${r}, ${g}, ${bl}, ${a0.toFixed(3)})`;
    }
    return t < 0.5 ? a : b;
  }

  function parseColor(value) {
    const input = safeColor(value, '#ffffff');
    if (input.startsWith('#')) {
      const hex = input.slice(1);
      const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
      return [
        Number.parseInt(full.slice(0, 2), 16),
        Number.parseInt(full.slice(2, 4), 16),
        Number.parseInt(full.slice(4, 6), 16),
        full.length === 8 ? Number.parseInt(full.slice(6, 8), 16) / 255 : 1
      ];
    }
    const m = input.match(/rgba?\(([^)]+)\)/i);
    if (m) {
      const part = m[1].split(',').map((v) => Number.parseFloat(v.trim()));
      return [part[0] || 0, part[1] || 0, part[2] || 0, Number.isFinite(part[3]) ? part[3] : 1];
    }
    return [255, 255, 255, 1];
  }

  function rgbToHex(r, g, b) {
    const value = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return `#${value}`;
  }

  function getTrack(trackDef, time) {
    if (!trackDef) return undefined;
    const keys = Array.isArray(trackDef.keys) ? trackDef.keys : (Array.isArray(trackDef) ? trackDef : []);
    const loop = trackDef.loop ?? 0;
    const safeTime = loop > 0 ? ((time % loop) + loop) % loop : time;
    if (!keys.length) return undefined;
    const ordered = [...keys].sort((a, b) => (a.t ?? 0) - (b.t ?? 0));
    if (safeTime <= (ordered[0].t ?? 0)) return ordered[0].v;
    if (safeTime >= (ordered[ordered.length - 1].t ?? 0)) return ordered[ordered.length - 1].v;
    for (let i = 0; i < ordered.length - 1; i += 1) {
      const a = ordered[i];
      const b = ordered[i + 1];
      if (safeTime >= (a.t ?? 0) && safeTime <= (b.t ?? 0)) {
        const span = (b.t ?? 0) - (a.t ?? 0) || 1;
        const progress = clamp((safeTime - (a.t ?? 0)) / span, 0, 1);
        const easing = a.e || b.e || 'linear';
        const eased = applyEasing(easing, progress);
        return lerp(a.v, b.v, eased);
      }
    }
    return ordered[ordered.length - 1].v;
  }

  function applyEasing(name, t) {
    const e = {
      linear: (n) => n,
      in: (n) => n * n,
      out: (n) => 1 - (1 - n) * (1 - n),
      inOut: (n) => (n < 0.5 ? 2 * n * n : 1 - Math.pow(-2 * n + 2, 2) / 2),
      sineIn: (n) => 1 - Math.cos((n * Math.PI) / 2),
      sineOut: (n) => Math.sin((n * Math.PI) / 2),
      sineInOut: (n) => -(Math.cos(Math.PI * n) - 1) / 2,
      cubicIn: (n) => n * n * n,
      cubicOut: (n) => 1 - Math.pow(1 - n, 3),
      cubicInOut: (n) => (n < 0.5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2),
      expoOut: (n) => (n === 1 ? 1 : 1 - Math.pow(2, -10 * n)),
      backOut: (n) => {
        const c = 1.70158;
        return 1 + (c + 1) * Math.pow(n - 1, 3) + c * Math.pow(n - 1, 2);
      },
      elasticOut: (n) => (n === 0 || n === 1 ? n : Math.pow(2, -10 * n) * Math.sin((n * 10 - 0.75) * (2 * Math.PI / 3)) + 1),
      bounceOut: (n) => {
        const n7 = 7.5625; const d = 2.75;
        if (n < 1 / d) return n7 * n * n;
        if (n < 2 / d) return n7 * (n -= 1.5 / d) * n + 0.75;
        if (n < 2.5 / d) return n7 * (n -= 2.25 / d) * n + 0.9375;
        return n7 * (n -= 2.625 / d) * n + 0.984375;
      },
      step: () => 0
    };
    return (e[name] || e.linear)(t);
  }

  function resolveValue(target, key, time, fallback) {
    if (!target) return fallback;
    if (target.tracks && target.tracks[key]) {
      return getTrack(target.tracks[key], time, target.tracks[key].loop);
    }
    return target[key] ?? fallback;
  }

  function createDefaultFilm() {
    return {
      format: 'ANM/1',
      meta: {
        title: 'VectorWebVideo demo',
        author: 'AI',
        fps: 30,
        width: 1280,
        height: 720,
        duration: 6,
        background: '#0b1020'
      },
      symbols: {
        sun: {
          parts: [
            { pivot: [0, 0], paths: [{ d: [['E', 0, 0, 120, 120]], fill: '#ffcc66' }] },
            { pivot: [0, 0], paths: [{ d: [['E', 0, 0, 150, 150]], fill: 'rgba(255, 204, 102, 0.25)' }] }
          ]
        },
        cloud: {
          parts: [{ pivot: [0, 0], paths: [
            { d: [['E', -80, 0, 40, 22]], fill: '#dfeafc' },
            { d: [['E', 0, -18, 46, 24]], fill: '#dfeafc' },
            { d: [['E', 76, 0, 38, 20]], fill: '#dfeafc' }
          ] }]
        }
      },
      scenes: [
        {
          id: 'scene-1',
          name: 'Intro',
          start: 0,
          end: 6,
          layers: [
            { type: 'sky', stops: ['#0b1020', '#1d4ed8'] },
            { type: 'symbol', ref: 'sun', x: 960, y: 240, opacity: 0.9 },
            { type: 'symbol', ref: 'cloud', x: 360, y: 180, opacity: 0.85 },
            { type: 'text', text: 'VectorWebVideo', x: 640, y: 360, size: 72, font: 'sans-serif', fill: '#ffffff', align: 'center' }
          ]
        }
      ],
      soundtrack: {
        bpm: 72,
        chord: [220, 277.18, 329.63],
        wind: 0.15
      }
    };
  }

  function validateFilm(film) {
    if (!film || typeof film !== 'object') {
      return { valid: false, errors: ['Film must be an object'] };
    }
    const errors = [];
    if (film.format !== 'VectorWebVideo/1' && film.format !== 'ANM/1') {
      errors.push('format should be "VectorWebVideo/1" or "ANM/1"');
    }
    if (!film.meta || typeof film.meta !== 'object') {
      errors.push('meta is required');
    }
    if (!Array.isArray(film.scenes) || film.scenes.length === 0) {
      errors.push('scenes must be a non-empty array');
    } else {
      film.scenes.forEach((scene, index) => {
        if (!Number.isFinite(scene.start) || !Number.isFinite(scene.end) || scene.start < 0 || scene.end <= scene.start) {
          errors.push(`scenes[${index}] must have a valid start and end time`);
        }
        if (!Array.isArray(scene.layers)) {
          errors.push(`scenes[${index}].layers must be an array`);
        }
      });
    }
    return { valid: errors.length === 0, errors };
  }

  class VectorWebVideo {
    constructor(options = {}) {
      this.options = {
        width: 1280,
        height: 720,
        autoplay: false,
        loop: true,
        muted: false,
        ...options
      };
      this.canvas = options.canvas || document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = this.options.width;
      this.canvas.height = this.options.height;
      this.film = options.film || createDefaultFilm();
      this.time = options.time || 0;
      this.playing = Boolean(options.autoplay);
      this.loop = this.options.loop;
      this.frameRequest = null;
      this.onFrame = options.onFrame || null;
      this.audioContext = null;
      this.audioMaster = null;
      this.lastBeat = -1;
      this.transitionCanvases = [];
      this.setup();
      this.loadFilm(this.film);
    }

    setup() {
      if (this.canvas && this.canvas.style) {
        this.canvas.style.display = 'block';
        this.canvas.style.width = '100%';
        this.canvas.style.height = 'auto';
      }
    }

    loadFilm(film) {
      const result = validateFilm(film);
      if (!result.valid) {
        throw new Error(result.errors.join('; '));
      }
      this.film = film;
      if (this.film.meta) {
        this.canvas.width = this.film.meta.width || this.options.width;
        this.canvas.height = this.film.meta.height || this.options.height;
      }
      this.render(this.time);
      return this;
    }

    play() {
      this.playing = true;
      this._lastTs = 0;
      this.startAudio();
      if (!this.frameRequest) {
        this.frameRequest = requestAnimationFrame(this.tick.bind(this));
      }
      return this;
    }

    pause() {
      this.playing = false;
      if (this.frameRequest) {
        cancelAnimationFrame(this.frameRequest);
        this.frameRequest = null;
      }
      if (this.audioContext && this.audioContext.state === 'running') {
        this.audioContext.suspend();
      }
      return this;
    }

    setMuted(muted) {
      this.options.muted = Boolean(muted);
      if (this.audioMaster) {
        this.audioMaster.gain.setTargetAtTime(
          this.options.muted ? 0 : (this.film.soundtrack?.volume ?? 0.08),
          this.audioContext.currentTime,
          0.04
        );
      } else if (!this.options.muted && this.playing) {
        this.startAudio();
      }
      return this;
    }

    seek(seconds) {
      const duration = this.getDuration();
      this.time = clamp(seconds, 0, duration || seconds || 0);
      this.render(this.time);
      return this;
    }

    tick(ts) {
      if (!this.playing) return;
      if (!this._lastTs) this._lastTs = ts;
      const delta = (ts - this._lastTs) / 1000;
      this._lastTs = ts;
      const duration = this.getDuration();
      this.time += delta;
      if (duration > 0 && this.time >= duration && this.loop) {
        this.time = this.time % duration;
      }
      if (duration > 0 && this.time >= duration && !this.loop) {
        this.time = duration;
        this.pause();
      }
      this.render(this.time);
      this.tickAudio();
      this.frameRequest = this.playing ? requestAnimationFrame(this.tick.bind(this)) : null;
    }

    getDuration() {
      if (!this.film || !this.film.meta) return 0;
      return Number(this.film.meta.duration || 0);
    }

    exportJSON() {
      return JSON.stringify(this.film, null, 2);
    }

    render(time = this.time) {
      const film = this.film;
      const width = this.canvas.width;
      const height = this.canvas.height;
      const scene = this.getSceneAt(time);
      if (!scene) return;
      const currentTime = Math.max(0, time - scene.start);
      const transition = scene.transition;
      const transitionDuration = Math.max(0, Number(transition?.duration) || 0);
      const previous = this.film.scenes[this.film.scenes.indexOf(scene) - 1];

      if (previous && transition && transitionDuration && currentTime < transitionDuration) {
        const progress = clamp(currentTime / transitionDuration, 0, 1);
        const previousTime = clamp(time - previous.start, 0, previous.end - previous.start);
        const previousCanvas = this.renderScene(previous, previousTime, film, 0);
        const currentCanvas = this.renderScene(scene, currentTime, film, 1);
        this.ctx.clearRect(0, 0, width, height);
        if (transition.type === 'dip') {
          const color = safeColor(transition.color, '#000000');
          if (progress < 0.5) {
            this.ctx.drawImage(previousCanvas, 0, 0);
            this.ctx.globalAlpha = progress * 2;
            this.ctx.fillStyle = color;
            this.ctx.fillRect(0, 0, width, height);
            this.ctx.globalAlpha = 1;
          } else {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(0, 0, width, height);
            this.ctx.globalAlpha = (progress - 0.5) * 2;
            this.ctx.drawImage(currentCanvas, 0, 0);
            this.ctx.globalAlpha = 1;
          }
        } else {
          this.ctx.drawImage(previousCanvas, 0, 0);
          if (transition.type === 'iris') {
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.arc(
              Number(transition.cx ?? width / 2),
              Number(transition.cy ?? height / 2),
              Math.max(0, progress * Math.hypot(width, height)),
              0,
              Math.PI * 2
            );
            this.ctx.clip();
            this.ctx.drawImage(currentCanvas, 0, 0);
            this.ctx.restore();
          } else {
            this.ctx.globalAlpha = applyEasing('inOut', progress);
            this.ctx.drawImage(currentCanvas, 0, 0);
            this.ctx.globalAlpha = 1;
          }
        }
      } else {
        this.renderSceneTo(this.ctx, scene, currentTime, film);
      }

      if (typeof this.onFrame === 'function') {
        this.onFrame({ time, scene, canvas: this.canvas });
      }
    }

    renderScene(scene, localTime, film, slot) {
      let layerCanvas = this.transitionCanvases[slot];
      if (!layerCanvas) {
        layerCanvas = document.createElement('canvas');
        this.transitionCanvases[slot] = layerCanvas;
      }
      if (layerCanvas.width !== this.canvas.width || layerCanvas.height !== this.canvas.height) {
        layerCanvas.width = this.canvas.width;
        layerCanvas.height = this.canvas.height;
      }
      this.renderSceneTo(layerCanvas.getContext('2d'), scene, localTime, film);
      return layerCanvas;
    }

    renderSceneTo(ctx, scene, localTime, film) {
      const width = this.canvas.width;
      const height = this.canvas.height;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = film.meta?.background || '#0b1020';
      ctx.fillRect(0, 0, width, height);
      const camera = scene.camera || {};
      const zoom = resolveValue(camera, 'zoom', localTime, 1);
      const cx = resolveValue(camera, 'x', localTime, width / 2);
      const cy = resolveValue(camera, 'y', localTime, height / 2);
      const rot = resolveValue(camera, 'rot', localTime, 0);
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate((rot * Math.PI) / 180);
      ctx.scale(zoom, zoom);
      ctx.translate(-cx, -cy);
      for (const layer of scene.layers || []) {
        this.drawLayer(ctx, layer, localTime + (layer.timeShift || 0), film);
      }
      ctx.restore();
    }

    getSceneAt(time) {
      const scenes = this.film.scenes || [];
      for (let i = scenes.length - 1; i >= 0; i -= 1) {
        const scene = scenes[i];
        if (time >= scene.start && time <= scene.end) return scene;
      }
      return scenes[0] || null;
    }

    drawLayer(ctx, layer, time, film) {
      if (!layer) return;
      const opacity = resolveValue(layer, 'opacity', time, layer.opacity ?? 1);
      if (opacity <= 0) return;
      ctx.save();
      ctx.globalAlpha = opacity;

      if (layer.type === 'sky') {
        const stops = resolveValue(layer, 'stops', time, layer.stops || ['#0b1020', '#1d4ed8']);
        const grad = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        const offsets = layer.offsets || [];
        const list = Array.isArray(stops[0])
          ? stops
          : stops.map((value, index) => [offsets[index] ?? index / (stops.length - 1 || 1), value]);
        list.forEach(([offset, color]) => grad.addColorStop(offset, color));
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }

      if (layer.type === 'rect') {
        ctx.fillStyle = this.createPaint(layer.fill || '#ffffff', ctx);
        ctx.fillRect(
          resolveValue(layer, 'x', time, layer.x || 0),
          resolveValue(layer, 'y', time, layer.y || 0),
          resolveValue(layer, 'w', time, layer.w || 0),
          resolveValue(layer, 'h', time, layer.h || 0)
        );
      }

      if (layer.type === 'symbol') {
        const symbol = film.symbols && film.symbols[layer.ref];
        if (!symbol) return;
        const x = resolveValue(layer, 'x', time, layer.x || 0);
        const y = resolveValue(layer, 'y', time, layer.y || 0);
        const scale = resolveValue(layer, 'scale', time, layer.scale ?? 1);
        const rot = resolveValue(layer, 'rot', time, layer.rot || 0);
        ctx.translate(x, y);
        ctx.rotate((rot * Math.PI) / 180);
        ctx.scale(scale * resolveValue(layer, 'sx', time, 1), scale * resolveValue(layer, 'sy', time, 1));
        if (layer.blend === 'screen') ctx.globalCompositeOperation = 'screen';
        this.drawSymbol(ctx, symbol, time + (layer.timeShift || 0), layer.tint || null);
      }

      if (layer.type === 'text') {
        const text = resolveValue(layer, 'text', time, layer.text || '');
        const size = resolveValue(layer, 'size', time, layer.size || 24);
        const x = resolveValue(layer, 'x', time, layer.x || 0);
        const y = resolveValue(layer, 'y', time, layer.y || 0);
        const fill = resolveValue(layer, 'fill', time, layer.fill || '#ffffff');
        const rot = resolveValue(layer, 'rot', time, layer.rot || 0);
        const scale = resolveValue(layer, 'scale', time, layer.scale ?? 1);
        ctx.translate(x, y);
        ctx.rotate((rot * Math.PI) / 180);
        ctx.scale(scale, scale);
        ctx.font = `${layer.weight || 700} ${size}px ${layer.font || 'sans-serif'}`;
        ctx.textAlign = layer.align || 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = this.createPaint(fill, ctx);
        if (layer.shadow) {
          ctx.shadowColor = layer.shadow.color || 'transparent';
          ctx.shadowBlur = layer.shadow.blur || 0;
        }
        ctx.fillText(text, 0, 0);
      }

      if (layer.type === 'particles') {
        if (layer.blend === 'screen') ctx.globalCompositeOperation = 'screen';
        this.drawParticles(ctx, layer, time, film);
      }

      ctx.restore();
    }

    drawSymbol(ctx, symbol, time, tint = null) {
      if (!symbol || !Array.isArray(symbol.parts)) return;
      for (const part of symbol.parts) {
        this.drawPart(ctx, part, time, tint);
      }
    }

    drawPart(ctx, part, time, tint = null) {
      if (!part) return;
      const x = resolveValue(part, 'x', time, part.x || 0);
      const y = resolveValue(part, 'y', time, part.y || 0);
      const rot = resolveValue(part, 'rot', time, part.rot || 0);
      const scaleX = resolveValue(part, 'sx', time, part.sx || 1);
      const scaleY = resolveValue(part, 'sy', time, part.sy || 1);
      const alpha = resolveValue(part, 'opacity', time, part.opacity ?? 1);

      ctx.save();
      ctx.globalAlpha *= alpha;
      const pivot = part.pivot || [0, 0];
      ctx.translate(pivot[0] + x, pivot[1] + y);
      ctx.rotate((rot * Math.PI) / 180);
      ctx.scale(scaleX, scaleY);
      ctx.translate(-pivot[0], -pivot[1]);
      for (const path of part.paths || []) {
        this.drawPath(ctx, path, tint);
      }
      for (const child of part.children || []) {
        if (child.ref && this.film.symbols?.[child.ref]) {
          ctx.save();
          ctx.translate(child.x || 0, child.y || 0);
          this.drawSymbol(ctx, this.film.symbols[child.ref], time, tint || child.tint || null);
          ctx.restore();
        } else {
          this.drawPart(ctx, child, time, tint);
        }
      }
      ctx.restore();
    }

    drawPath(ctx, path, tint = null) {
      if (!path || !Array.isArray(path.d)) return;
      const p = new Path2D();
      for (const command of path.d) {
        const type = command[0];
        switch (type) {
          case 'M':
            p.moveTo(command[1], command[2]);
            break;
          case 'L':
            p.lineTo(command[1], command[2]);
            break;
          case 'Q':
            p.quadraticCurveTo(command[1], command[2], command[3], command[4]);
            break;
          case 'C':
            p.bezierCurveTo(command[1], command[2], command[3], command[4], command[5], command[6]);
            break;
          case 'E':
            p.ellipse(command[1], command[2], command[3], command[4], 0, 0, Math.PI * 2);
            break;
          case 'Z':
            p.closePath();
            break;
          default:
            break;
        }
      }

      if (path.fill) {
        ctx.fillStyle = tint ? tint : this.createPaint(path.fill, ctx);
        ctx.fill(p);
      }
      if (path.stroke) {
        ctx.strokeStyle = this.createPaint(path.stroke.color || '#ffffff', ctx);
        ctx.lineWidth = path.stroke.width || 1;
        ctx.lineCap = path.stroke.cap || 'round';
        ctx.stroke(p);
      }
    }

    createPaint(fill, ctx = this.ctx) {
      if (typeof fill === 'string') return safeColor(fill);
      if (!fill || !Array.isArray(fill.stops)) return '#ffffff';
      let gradient;
      if (fill.type === 'radial') {
        const center = fill.c || [0, 0];
        gradient = ctx.createRadialGradient(center[0], center[1], fill.r0 || 0, center[0], center[1], fill.r || 1);
      } else {
        const from = fill.from || [0, 0];
        const to = fill.to || [0, 100];
        gradient = ctx.createLinearGradient(from[0], from[1], to[0], to[1]);
      }
      fill.stops.forEach(([offset, color]) => gradient.addColorStop(offset, safeColor(color)));
      return gradient;
    }

    drawParticles(ctx, layer, time, film) {
      const emitter = layer.emitter || {};
      const count = Math.max(0, Math.min(500, emitter.count || 10));
      const seed = emitter.seed || 1;
      const area = emitter.area || [0, 0, 100, 100];
      const life = emitter.life || [1, 2];
      const size = emitter.size || [10, 20];
      const ref = layer.ref || 'sun';
      const refs = Array.isArray(layer.refs) && layer.refs.length ? layer.refs : null;
      const velocity = emitter.vel || [[0, 0], [0, 0]];
      for (let i = 0; i < count; i += 1) {
        const maxLife = Math.max(0.1, life[1] || 2);
        const particleLife = lerp(life[0] || 0, maxLife, pseudoRandom(seed + i * 31));
        const phase = pseudoRandom(seed * 7 + i) * particleLife;
        const age = ((time + phase) % particleLife + particleLife) % particleLife;
        const progress = age / particleLife;
        const x0 = area[0] + pseudoRandom(seed * 2 + i) * area[2];
        const y0 = area[1] + pseudoRandom(seed * 3 + i) * area[3];
        const vx = lerp(velocity[0][0], velocity[0][1], pseudoRandom(seed * 5 + i));
        const vy = lerp(velocity[1][0], velocity[1][1], pseudoRandom(seed * 11 + i));
        const sway = emitter.sway || { amp: [0, 0], freq: [0, 0] };
        const swayAmpRange = sway.amp || [0, 0];
        const swayFreqRange = sway.freq || [0, 0];
        const swayAmp = lerp(swayAmpRange[0], swayAmpRange[1], pseudoRandom(seed * 13 + i));
        const swayFreq = lerp(swayFreqRange[0], swayFreqRange[1], pseudoRandom(seed * 17 + i));
        const x = x0 + vx * age + Math.sin(age * swayFreq) * swayAmp;
        const y = y0 + vy * age + 0.5 * (emitter.gravity || 0) * age * age;
        const s = lerp(size[0], size[1], pseudoRandom(seed + i));
        const flicker = emitter.twinkle ? 0.6 + 0.4 * Math.sin(time * (2 + pseudoRandom(seed * 29 + i) * 4) + phase) : 1;
        const alpha = (emitter.alpha ? lerp(emitter.alpha[0], emitter.alpha[1], pseudoRandom(seed * 19 + i)) : 1)
          * Math.min(1, progress * 6)
          * Math.min(1, (1 - progress) * 4)
          * flicker;
        if (alpha <= 0.01) continue;
        ctx.save();
        ctx.globalAlpha *= alpha;
        ctx.translate(x, y);
        ctx.scale(s / 100, s / 100);
        ctx.rotate(((pseudoRandom(seed * 23 + i) * 360 + (emitter.spin || 0) * age) * Math.PI) / 180);
        const particleRef = refs ? refs[Math.floor(pseudoRandom(seed * 37 + i) * refs.length)] : ref;
        const tints = Array.isArray(layer.tints) ? layer.tints : null;
        const tint = tints ? tints[Math.floor(pseudoRandom(seed * 41 + i) * tints.length)] : (layer.tint || null);
        const symbol = film.symbols && film.symbols[particleRef];
        if (symbol) this.drawSymbol(ctx, symbol, time, tint);
        ctx.restore();
      }
    }

    startAudio() {
      const soundtrack = this.film?.soundtrack;
      if (!soundtrack || this.options.muted || typeof window === 'undefined') return;
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!this.audioContext) {
        this.audioContext = new AudioContext();
        this.audioMaster = this.audioContext.createGain();
        this.audioMaster.gain.value = Math.max(0, Math.min(1, soundtrack.volume ?? 0.08));
        this.audioMaster.connect(this.audioContext.destination);
      }
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume().catch(() => {
          this.options.muted = true;
        });
      }
      this.lastBeat = -1;
    }

    tickAudio() {
      const soundtrack = this.film?.soundtrack;
      if (!soundtrack || !this.audioContext || this.audioContext.state !== 'running') return;
      const bpm = Math.max(30, Math.min(240, soundtrack.bpm || 72));
      const beat = Math.floor(this.time * bpm / 60);
      if (beat === this.lastBeat) return;
      this.lastBeat = beat;
      const sequence = soundtrack.notes || soundtrack.pattern || [0, 2, 4, 2];
      const degree = sequence[beat % sequence.length];
      if (degree === null || degree === undefined) return;
      const scale = soundtrack.scale || [0, 2, 4, 7, 9];
      const semitone = scale[((degree % scale.length) + scale.length) % scale.length];
      const frequency = (soundtrack.base || 220) * Math.pow(2, semitone / 12 + Math.floor(degree / scale.length));
      const now = this.audioContext.currentTime;
      const oscillator = this.audioContext.createOscillator();
      const envelope = this.audioContext.createGain();
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(frequency, now);
      envelope.gain.setValueAtTime(0.0001, now);
      envelope.gain.exponentialRampToValueAtTime(0.08, now + 0.015);
      envelope.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
      oscillator.connect(envelope);
      envelope.connect(this.audioMaster);
      oscillator.start(now);
      oscillator.stop(now + 0.46);
    }
  }

  function pseudoRandom(seed) {
    const x = Math.sin(seed * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  }

  function createEmbedSnippet(options = {}) {
    const id = options.id || 'vectorwebvideo-player';
    const width = options.width || 1280;
    const height = options.height || 720;
    const autoplay = options.autoplay ? ' autoplay' : '';
    const muted = options.muted ? ' muted' : '';
    const src = options.src || './sample-film.anm';
    return `
<div id="${id}" class="vectorwebvideo-player" data-vwv="${src}" data-width="${width}" data-height="${height}"${autoplay}${muted}></div>
<script src="./vectorwebvideo.js"></script>
<script>
  if (window.VectorWebVideo && window.VectorWebVideo.mountAll) {
    window.VectorWebVideo.mountAll();
  }
</script>`;
  }

  return {
    VectorWebVideo,
    validateFilm,
    getTrack,
    applyEasing,
    createDefaultFilm,
    createEmbedSnippet,
    mountAll(root = document) {
      const nodes = root.querySelectorAll('[data-vwv]');
      nodes.forEach((node) => {
        if (node.__vwv) return;
        const src = node.getAttribute('data-vwv');
        const init = {
          canvas: document.createElement('canvas'),
          autoplay: node.hasAttribute('autoplay'),
          muted: node.hasAttribute('muted')
        };
        node.appendChild(init.canvas);
        fetch(src)
          .then((res) => res.json())
          .then((film) => {
            const player = new VectorWebVideo({ ...init, film, loop: true });
            node.__vwv = player;
            player.play();
          })
          .catch((error) => {
            node.innerHTML = `<div style="padding:12px;color:#fff;background:#111827;border-radius:8px;">Unable to load film: ${error.message}</div>`;
          });
      });
      return nodes;
    }
  };
});
