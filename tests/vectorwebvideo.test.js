'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { VectorWebVideo, validateFilm, getTrack, applyEasing } = require('../vectorwebvideo.js');

const demoDirectory = path.join(__dirname, '..', 'DEMO');
const manifest = JSON.parse(fs.readFileSync(path.join(demoDirectory, 'manifest.json'), 'utf8'));

test('all gallery films validate and match their declared durations', () => {
  assert.equal(manifest.demos.length, 16);
  for (const demo of manifest.demos) {
    assert.equal(path.extname(demo.file), '.anm', demo.file);
    const film = JSON.parse(fs.readFileSync(path.join(demoDirectory, demo.file), 'utf8'));
    assert.deepEqual(validateFilm(film), { valid: true, errors: [] }, demo.file);
    assert.equal(film.format, 'ANM/1', demo.file);
    assert.equal(film.meta.duration, demo.duration, demo.file);
  }
});

test('standalone example uses the ANM/1 container extension', () => {
  const sample = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'sample-film.anm'), 'utf8'));
  assert.equal(sample.format, 'ANM/1');
  assert.deepEqual(validateFilm(sample), { valid: true, errors: [] });
});

test('gallery contains direct HTML links to every example without JavaScript', () => {
  const html = fs.readFileSync(path.join(demoDirectory, 'index.html'), 'utf8');
  for (const demo of manifest.demos) {
    assert.ok(html.includes(`href="./${demo.file}"`), `Missing static link for ${demo.file}`);
  }
});

test('tracks interpolate keyframes, easing and loops deterministically', () => {
  const track = {
    keys: [{ t: 0, v: 0, e: 'linear' }, { t: 4, v: 8 }],
    loop: 4
  };
  assert.equal(getTrack(track, 2), 4);
  assert.equal(getTrack(track, 5), 2);
  assert.equal(getTrack(track, 4), 0);
  assert.ok(applyEasing('elasticOut', 0.8) > 0.9);
});

test('all gallery films render representative frames without Canvas API errors', () => {
  class FakePath2D {
    moveTo() {}
    lineTo() {}
    quadraticCurveTo() {}
    bezierCurveTo() {}
    ellipse() {}
    closePath() {}
  }

  class FakeContext {
    save() {}
    restore() {}
    clearRect() {}
    fillRect() {}
    drawImage() {}
    translate() {}
    rotate() {}
    scale() {}
    beginPath() {}
    arc() {}
    clip() {}
    fill() {}
    stroke() {}
    fillText() {}
    createLinearGradient() { return { addColorStop() {} }; }
    createRadialGradient() { return { addColorStop() {} }; }
  }

  class FakeCanvas {
    constructor() {
      this.width = 300;
      this.height = 150;
      this.style = {};
      this.context = new FakeContext();
    }
    getContext() { return this.context; }
  }

  const previousDocument = global.document;
  const previousPath2D = global.Path2D;
  global.document = { createElement: () => new FakeCanvas() };
  global.Path2D = FakePath2D;
  try {
    for (const demo of manifest.demos) {
      const film = JSON.parse(fs.readFileSync(path.join(demoDirectory, demo.file), 'utf8'));
      const player = new VectorWebVideo({ canvas: new FakeCanvas(), film });
      const times = [0, demo.duration / 2, demo.duration - 0.1];
      film.scenes.forEach((scene) => {
        if (scene.transition) times.push(scene.start + Math.min(0.25, scene.transition.duration / 2));
      });
      times.forEach((time) => player.render(time));
    }
  } finally {
    global.document = previousDocument;
    global.Path2D = previousPath2D;
  }
});

test('invalid scene intervals return actionable validation errors', () => {
  const result = validateFilm({
    format: 'VectorWebVideo/1',
    meta: { width: 1280, height: 720, duration: 1 },
    scenes: [{ id: 'bad', start: 2, end: 1, layers: [] }]
  });
  assert.equal(result.valid, false);
  assert.match(result.errors.join(' '), /valid start and end time/);
});

test('end cards remain hidden until playback completes in both player copies', () => {
  for (const file of ['index.html', 'plan.md']) {
    const source = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
    assert.match(source, /\.end-card\[hidden\]\s*\{\s*display:\s*none\s*\}/, file);
  }
});
