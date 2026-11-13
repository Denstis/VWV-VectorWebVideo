# VWV-VectorWebVideo

Полный проект формата ANM/1 — векторной веб-анимации в JSON-контейнере `.anm`, проигрываемой через Canvas 2D.

## Что реализовано

- формат `ANM/1` в расширении `.anm`
- библиотека рендера `vectorwebvideo.js`
- загрузка фильма из `.anm` (UTF-8 JSON)
- воспроизведение, пауза, перемотка и цикл
- простые векторные объекты: `symbol`, `text`, `rect`, `sky`, `particles`
- HTML-embed для вставки в страницу
- MCP-сервер для AI-агентов
- пример `sample-film.anm`

## Запуск демо

```bash
cd /workspaces/VWV-VectorWebVideo
python3 -m http.server 8000
```

Откройте:

- http://localhost:8000/
- http://localhost:8000/examples/embed-snippet.html
- http://localhost:8000/DEMO/

## Галерея DEMO

В [DEMO/](./DEMO/) собрано 16 воспроизводимых фильмов в формате `ANM/1` с длительностью от 8 до 48 секунд. Первые десять — короткие тематические этюды. Расширенные примеры показывают:

- несколько сцен, camera tracks, переходы `fade`, `dip`, `iris`, seek и loop
- векторные команды `M/L/Q/C/E/Z`, штрихи, линейные и радиальные градиенты
- keyframe-анимацию, easing и циклические треки вложенных частей
- детерминированные частицы, sway, gravity, twinkle, tint и blend `screen`
- синтезируемые Web Audio ноты с управлением звуком в галерее

Доступны [список примеров и длительностей](./DEMO/manifest.json) и [галерея с плеером](./DEMO/index.html).

## Формат

Файл `.anm` — это JSON в формате `ANM/1`:

```json
{
  "format": "ANM/1",
  "meta": {
    "title": "Demo",
    "fps": 30,
    "width": 1280,
    "height": 720,
    "duration": 8,
    "background": "#08101c"
  },
  "symbols": {
    "sun": {
      "parts": [
        { "pivot": [0, 0], "paths": [{ "d": [["E", 0, 0, 100, 100]], "fill": "#fbbf24" }] }
      ]
    }
  },
  "scenes": [
    {
      "id": "scene1",
      "name": "Intro",
      "start": 0,
      "end": 8,
      "layers": [
        { "type": "sky", "stops": ["#08101c", "#1d4ed8"] },
        { "type": "symbol", "ref": "sun", "x": 960, "y": 200 }
      ]
    }
  ]
}
```

## HTML вставка

```html
<div data-vwv="./sample-film.anm" autoplay muted></div>
<script src="./vectorwebvideo.js"></script>
<script>
  if (window.VectorWebVideo && window.VectorWebVideo.mountAll) {
    window.VectorWebVideo.mountAll();
  }
</script>
```

Полный пример находится в [examples/embed-snippet.html](./examples/embed-snippet.html).

## MCP для AI-агентов

Сервер берёт JSON-фильм, валидирует его и генерирует HTML-embed. Запуск:

```bash
node mcp-server.js
```

Доступные инструменты:

- `vectorwebvideo.validate_film`
- `vectorwebvideo.read_file`
- `vectorwebvideo.build_sample`
- `vectorwebvideo.create_embed`

## Файлы

- `index.html` — визуальная демонстрация
- `vectorwebvideo.js` — библиотека рендера и embed API
- `sample-film.anm` — пример фильма ANM/1
- `mcp-server.js` — MCP-сервер для AI
- [DEMO/](./DEMO/) — 16 демо-фильмов `.anm` разных жанров и длительности
- `plan.md` — исходная концепция и дизайн
