<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>ANM/1 — 夜明け · Рассвет над крышей</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700;900&family=Manrope:wght@400;500;700;800&family=JetBrains+Mono:wght@400;600&family=Noto+Serif+JP:wght@700&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#0c0918; --bg2:#141026; --surface:#1a1430; --surface2:#221a3e; --line:#322856;
  --text:#f4efff; --muted:#a79ecf; --pink:#ff5c8a; --pink2:#ff8fb3; --amber:#ffb347;
  --violet:#7c6cff; --teal:#3fd8c7; --green:#5ee08a; --red:#ff5470; --blue:#5aa7ff;
  --disp:'Unbounded',system-ui,sans-serif; --body:'Manrope',system-ui,sans-serif; --mono:'JetBrains Mono',ui-monospace,monospace;
  --jp:'Noto Serif JP','Hiragino Mincho ProN','Yu Mincho',serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:var(--body);font-size:16px;line-height:1.6;overflow-x:hidden}
::selection{background:var(--pink);color:#2a0f1e}
*{scrollbar-width:thin;scrollbar-color:#ff5c8a #141026}
::-webkit-scrollbar{width:10px;height:10px}
::-webkit-scrollbar-track{background:#141026}
::-webkit-scrollbar-thumb{background:linear-gradient(180deg,var(--pink),var(--violet));border-radius:8px;border:2px solid #141026}
::-webkit-scrollbar-thumb:hover{background:linear-gradient(180deg,var(--pink2),var(--violet))}
.bg-aurora{position:fixed;inset:0;z-index:-2;overflow:hidden;pointer-events:none}
.bg-aurora i{position:absolute;border-radius:50%;filter:blur(90px);opacity:.32;animation:drift 26s ease-in-out infinite alternate}
.bg-aurora i:nth-child(1){width:56vw;height:56vw;left:-14vw;top:-18vw;background:radial-gradient(circle,#ff5c8a,transparent 65%)}
.bg-aurora i:nth-child(2){width:48vw;height:48vw;right:-12vw;top:6vh;background:radial-gradient(circle,#7c6cff,transparent 65%);animation-delay:-9s}
.bg-aurora i:nth-child(3){width:44vw;height:44vw;left:22vw;bottom:-24vw;background:radial-gradient(circle,#3fd8c7,transparent 65%);opacity:.18;animation-delay:-17s}
@keyframes drift{from{transform:translate(0,0) scale(1)}to{transform:translate(6vw,4vh) scale(1.15)}}
.bg-grain{position:fixed;inset:0;z-index:-1;pointer-events:none;opacity:.05;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E")}
header{position:fixed;top:0;left:0;right:0;z-index:50;height:64px;display:flex;align-items:center;gap:18px;padding:0 clamp(14px,3vw,32px);background:rgba(12,9,24,.72);backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
.logo{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--text)}
.logo svg{width:30px;height:30px;filter:drop-shadow(0 0 8px rgba(255,92,138,.6))}
.logo b{font-family:var(--disp);font-weight:900;font-size:19px;letter-spacing:.5px}
.logo .ver{font-family:var(--mono);font-size:11px;color:var(--pink2);border:1px solid var(--line);border-radius:20px;padding:2px 8px;background:var(--surface)}
nav{display:flex;gap:4px;margin-left:8px}
nav a{color:var(--muted);text-decoration:none;font-size:14px;font-weight:700;padding:7px 12px;border-radius:9px;transition:.2s}
nav a:hover{color:var(--text);background:var(--surface2)}
.head-actions{margin-left:auto;display:flex;gap:8px;align-items:center}
.btn{display:inline-flex;align-items:center;gap:8px;font-family:var(--body);font-weight:800;font-size:13.5px;color:var(--text);background:var(--surface);border:1px solid var(--line);border-radius:11px;padding:9px 14px;cursor:pointer;transition:.2s;text-decoration:none;white-space:nowrap}
.btn:hover{border-color:var(--pink);box-shadow:0 0 0 3px rgba(255,92,138,.15),0 4px 18px rgba(255,92,138,.18);transform:translateY(-1px)}
.btn:active{transform:translateY(0)}
.btn.primary{background:linear-gradient(120deg,var(--pink),var(--amber));color:#2a0f1e;border-color:transparent}
.btn.primary:hover{box-shadow:0 4px 22px rgba(255,140,120,.45)}
.btn.active{border-color:var(--teal);color:var(--teal);box-shadow:0 0 0 3px rgba(63,216,199,.12)}
.btn svg{width:16px;height:16px;flex:none}
.btn:focus-visible,button:focus-visible,a:focus-visible,select:focus-visible{outline:2px solid var(--teal);outline-offset:2px}
main{max-width:1180px;margin:0 auto;padding:96px clamp(14px,3vw,28px) 40px}
.hero-head{margin-bottom:22px}
.badge{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:12px;color:var(--teal);border:1px solid var(--line);background:var(--surface);border-radius:20px;padding:5px 12px;margin-bottom:14px}
.badge::before{content:'';width:7px;height:7px;border-radius:50%;background:var(--teal);box-shadow:0 0 10px var(--teal);animation:pulse 2s infinite}
@keyframes pulse{50%{opacity:.4}}
h1{font-family:var(--disp);font-weight:900;font-size:clamp(26px,4.4vw,46px);line-height:1.15;letter-spacing:.3px}
h1 .jp{font-family:var(--jp);background:linear-gradient(100deg,var(--pink2),var(--amber));-webkit-background-clip:text;background-clip:text;color:transparent;margin-right:14px}
.lead{color:var(--muted);max-width:760px;margin-top:12px;font-size:15.5px}
.lead b{color:var(--pink2)}
.stage{border:1px solid var(--line);border-radius:18px;overflow:hidden;background:var(--surface);box-shadow:0 30px 80px rgba(5,3,12,.7),0 0 0 1px rgba(255,92,138,.06)}
.screen-wrap{position:relative;background:#05030c;cursor:pointer}
canvas#screen{display:block;width:100%;height:auto}
.poster{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;background:linear-gradient(180deg,rgba(12,9,24,.42),rgba(12,9,24,.86));transition:opacity .5s;padding:20px}
.poster.hide{opacity:0;pointer-events:none}
.poster .p-badge{font-family:var(--mono);font-size:12px;color:var(--teal);letter-spacing:1px}
.poster h2{font-family:var(--jp);font-size:clamp(40px,7vw,74px);line-height:1;background:linear-gradient(100deg,#fff,var(--pink2) 60%,var(--amber));-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:0 0 40px rgba(255,143,179,.25)}
.poster .p-sub{font-family:var(--disp);font-weight:700;font-size:clamp(13px,2vw,18px);letter-spacing:2px}
.poster .p-meta{font-family:var(--mono);font-size:12px;color:var(--muted)}
.play-big{position:relative;width:88px;height:88px;border-radius:50%;border:none;cursor:pointer;background:linear-gradient(130deg,var(--pink),var(--amber));display:flex;align-items:center;justify-content:center;box-shadow:0 10px 40px rgba(255,92,138,.5);transition:.25s;margin-top:6px}
.play-big:hover{transform:scale(1.07)}
.play-big::after{content:'';position:absolute;inset:-10px;border-radius:50%;border:2px solid rgba(255,143,179,.5);animation:ring 1.8s ease-out infinite}
@keyframes ring{from{transform:scale(.9);opacity:1}to{transform:scale(1.35);opacity:0}}
.play-big svg{width:34px;height:34px;margin-left:5px}
.poster .p-hint{font-size:12.5px;color:var(--muted)}
.end-card{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;background:rgba(12,9,24,.78);backdrop-filter:blur(4px)}
.end-card[hidden]{display:none}
.end-card h3{font-family:var(--jp);font-size:52px;color:var(--pink2)}
.end-card .row{display:flex;gap:10px}
.drop-hint{position:absolute;inset:0;display:none;align-items:center;justify-content:center;background:rgba(20,16,38,.85);border:3px dashed var(--teal);border-radius:4px;font-family:var(--disp);font-weight:700;font-size:20px;color:var(--teal);z-index:5}
.screen-wrap.drag .drop-hint{display:flex}
.controls{padding:12px 16px 14px;background:linear-gradient(180deg,var(--surface),var(--bg2));border-top:1px solid var(--line)}
.tl{position:relative;height:26px;cursor:pointer;touch-action:none;margin-bottom:8px}
.tl-track{position:absolute;left:0;right:0;top:9px;height:8px;border-radius:6px;overflow:hidden;background:var(--bg2);display:flex}
.tl-seg{height:100%;opacity:.3;border-right:2px solid var(--bg)}
.tl-fill{position:absolute;left:0;top:9px;height:8px;border-radius:6px;background:linear-gradient(90deg,var(--pink),var(--amber));box-shadow:0 0 12px rgba(255,92,138,.55);pointer-events:none}
.tl-handle{position:absolute;top:13px;width:15px;height:15px;border-radius:50%;background:#fff;border:3px solid var(--pink);transform:translate(-50%,-50%);box-shadow:0 0 10px rgba(255,92,138,.8);pointer-events:none}
.tl-tip{position:absolute;bottom:26px;transform:translateX(-50%);background:var(--surface2);border:1px solid var(--line);color:var(--text);font-family:var(--mono);font-size:11px;padding:3px 8px;border-radius:7px;pointer-events:none;opacity:0;transition:opacity .15s;white-space:nowrap}
.tl:hover .tl-tip{opacity:1}
.ctrl-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.icon-btn{width:38px;height:38px;flex:none;display:flex;align-items:center;justify-content:center;background:var(--surface2);border:1px solid var(--line);border-radius:10px;color:var(--text);cursor:pointer;transition:.2s}
.icon-btn:hover{border-color:var(--pink);color:var(--pink2)}
.icon-btn.active{border-color:var(--teal);color:var(--teal);box-shadow:0 0 0 3px rgba(63,216,199,.12)}
.icon-btn svg{width:17px;height:17px}
.icon-btn.main{width:46px;height:46px;background:linear-gradient(130deg,var(--pink),var(--amber));color:#2a0f1e;border:none}
.icon-btn.main:hover{transform:scale(1.06);color:#2a0f1e}
.time-label{font-family:var(--mono);font-size:12.5px;color:var(--muted);min-width:128px}
.time-label b{color:var(--text)}
.scene-label{font-size:12.5px;font-weight:800;color:var(--pink2);margin-right:auto}
select{background:var(--surface2);border:1px solid var(--line);color:var(--text);font-family:var(--mono);font-size:12.5px;border-radius:10px;padding:8px 10px;cursor:pointer}
.stats{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}
.stat{flex:1 1 120px;background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:10px 14px}
.stat .k{font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--muted)}
.stat .v{font-family:var(--disp);font-weight:700;font-size:17px;margin-top:2px}
.stat:nth-child(1) .v{color:var(--pink2)}.stat:nth-child(2) .v{color:var(--amber)}.stat:nth-child(3) .v{color:var(--teal)}.stat:nth-child(4) .v{color:var(--violet)}.stat:nth-child(5) .v{color:var(--blue)}.stat:nth-child(6) .v{color:var(--green)}.stat:nth-child(7) .v{color:var(--pink)}
.chips{display:flex;gap:8px;margin-top:14px;overflow-x:auto;padding-bottom:4px}
.chip{display:flex;align-items:center;gap:8px;flex:none;background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:8px 15px;font-family:var(--body);font-weight:800;font-size:13px;color:var(--muted);cursor:pointer;transition:.2s}
.chip i{width:8px;height:8px;border-radius:50%;flex:none}
.chip:hover{color:var(--text);border-color:var(--pink)}
.chip.active{color:var(--text);border-color:var(--pink);background:var(--surface2);box-shadow:0 0 0 3px rgba(255,92,138,.14)}
.hotkeys{margin-top:12px;font-size:12.5px;color:var(--muted)}
kbd{font-family:var(--mono);font-size:11px;background:var(--surface2);border:1px solid var(--line);border-bottom-width:2px;border-radius:6px;padding:2px 7px;color:var(--pink2)}
.panel{margin-top:44px;scroll-margin-top:84px}
.tabbar{display:flex;gap:6px;border-bottom:1px solid var(--line);margin-bottom:24px;overflow-x:auto}
.tabbar button{background:none;border:none;color:var(--muted);font-family:var(--disp);font-weight:700;font-size:14px;padding:12px 18px;cursor:pointer;border-bottom:3px solid transparent;transition:.2s;white-space:nowrap}
.tabbar button:hover{color:var(--text)}
.tabbar button[aria-selected="true"]{color:var(--pink2);border-bottom-color:var(--pink)}
.doc{max-width:860px}
.doc h3{font-family:var(--disp);font-weight:700;font-size:19px;margin:30px 0 10px;display:flex;align-items:center;gap:10px}
.doc h3::before{content:'';width:10px;height:10px;border-radius:3px;background:linear-gradient(130deg,var(--pink),var(--amber));transform:rotate(45deg);flex:none}
.doc p{color:var(--muted);font-size:14.5px;margin-bottom:10px}
.doc p b,.doc li b{color:var(--text)}
.doc ul{margin:0 0 12px 20px;color:var(--muted);font-size:14.5px}
.doc li{margin-bottom:5px}
.doc code.inl{font-family:var(--mono);font-size:12.5px;background:var(--surface2);border:1px solid var(--line);border-radius:6px;padding:1px 6px;color:var(--teal)}
pre{background:#120d24;border:1px solid var(--line);border-radius:12px;padding:16px 18px;overflow:auto;font-family:var(--mono);font-size:12.5px;line-height:1.65;margin:12px 0 18px;color:#d8d0f0}
pre .jk{color:var(--pink2)}pre .js{color:var(--amber)}pre .jn{color:var(--teal)}pre .jb{color:var(--violet)}
table{width:100%;border-collapse:collapse;margin:12px 0 18px;font-size:13.5px}
th{font-family:var(--disp);font-weight:700;font-size:12px;text-align:left;color:var(--pink2);padding:10px 12px;border-bottom:2px solid var(--line);background:var(--surface)}
td{padding:9px 12px;border-bottom:1px solid var(--line);color:var(--muted);vertical-align:top}
td:first-child{color:var(--text);font-weight:700}
tr:hover td{background:rgba(255,92,138,.04)}
.ease-list{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0 16px}
.ease-list span{font-family:var(--mono);font-size:11.5px;background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:4px 11px;color:var(--teal)}
.scene-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}
.scene-card{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:18px;border-top:4px solid var(--pink);transition:.25s}
.scene-card:hover{transform:translateY(-4px);box-shadow:0 14px 34px rgba(5,3,12,.6)}
.scene-card .num{font-family:var(--mono);font-size:11px;color:var(--muted)}
.scene-card h4{font-family:var(--disp);font-weight:700;font-size:16px;margin:6px 0}
.scene-card .tc{font-family:var(--mono);font-size:12px;color:var(--teal);margin-bottom:8px}
.scene-card p{font-size:13px;color:var(--muted);margin-bottom:14px;min-height:60px}
.src-toolbar{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:12px}
.src-toolbar .size{font-family:var(--mono);font-size:12px;color:var(--muted);margin-right:auto}
#codeView{max-height:560px}
footer{border-top:1px solid var(--line);margin-top:50px;padding:26px clamp(14px,3vw,28px);text-align:center;color:var(--muted);font-size:13px}
footer b{color:var(--pink2)}
.toasts{position:fixed;right:18px;bottom:18px;z-index:100;display:flex;flex-direction:column;gap:8px;max-width:min(360px,90vw)}
.toast{background:var(--surface2);border:1px solid var(--line);border-left:4px solid var(--teal);border-radius:11px;padding:12px 16px;font-size:13.5px;font-weight:700;box-shadow:0 10px 30px rgba(5,3,12,.6);animation:tin .3s ease-out}
.toast.err{border-left-color:var(--red)}
.toast.ok{border-left-color:var(--green)}
@keyframes tin{from{transform:translateX(30px);opacity:0}}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s ease,transform .7s ease}
.reveal.in{opacity:1;transform:none}
.stage:fullscreen{display:flex;flex-direction:column;border-radius:0;border:none}
.stage:fullscreen .screen-wrap{flex:1;min-height:0;display:flex}
.stage:fullscreen canvas#screen{width:100%;height:100%;object-fit:contain}
@media (max-width:900px){nav{display:none}.btn .lbl{display:none}.scene-label{width:100%;order:9}}
@media (prefers-reduced-motion:reduce){.bg-aurora i,.play-big::after,.badge::before{animation:none}.reveal{transition:none;opacity:1;transform:none}}
</style>
</head>
<body>
<div class="bg-aurora"><i></i><i></i><i></i></div>
<div class="bg-grain"></div>

<header>
  <a class="logo" href="#player">
    <svg viewBox="0 0 32 32"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff8fb3"/><stop offset="1" stop-color="#ffb347"/></linearGradient></defs><path d="M16 2 C25 7 28 17 22 26 C19 30 13 30 10 26 C4 17 7 7 16 2 Z" fill="url(#lg)"/><path d="M16 8 Q19 17 16 25" stroke="#fff" stroke-width="1.6" fill="none" opacity=".7"/></svg>
    <b>ANM</b><span class="ver">формат /1</span>
  </a>
  <nav>
    <a href="#player">Плеер</a>
    <a href="#panel" data-goto="docs">Формат</a>
    <a href="#panel" data-goto="scenes">Сцены</a>
    <a href="#panel" data-goto="source">Исходник</a>
  </nav>
  <div class="head-actions">
    <button class="btn" id="btnSound" aria-pressed="true" title="Включить / выключить весь звук (M)">
      <svg id="icoSoundOn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>
      <svg id="icoSoundOff" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" hidden><path d="M11 5 6 9H2v6h4l5 4z" fill="currentColor"/><path d="m16 9 6 6M22 9l-6 6"/></svg>
      <span class="lbl" id="soundLabel">Звук вкл</span>
    </button>
    <button class="btn" id="btnOpen" title="Открыть свой .anm файл">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v12m0-12 4 4m-4-4-4 4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
      <span class="lbl">Открыть .anm</span>
    </button>
    <button class="btn primary" id="btnDownload" title="Скачать мультфильм как .anm файл">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
      <span class="lbl">Скачать .anm</span>
    </button>
    <input type="file" id="fileInput" accept=".anm,.json,application/json" hidden>
  </div>
</header>

<main>
<section id="player" class="reveal in">
  <div class="hero-head">
    <span class="badge">открытый формат · вектор · без плагинов</span>
    <h1><span class="jp">夜明け</span>Рассвет над крышей</h1>
    <p class="lead">Наследник идей <b>SWF</b>: таймлайн, спрайты и твины — но в читаемом JSON и на Canvas&nbsp;2D. Ниже — не видео: каждый кадр фильма <b>рендерится из векторного описания</b> прямо сейчас, звук синтезируется Web&nbsp;Audio. Перемотайте, скачайте исходник, отредактируйте и перетащите обратно.</p>
  </div>

  <div class="stage" id="stage">
    <div class="screen-wrap" id="screenWrap">
      <canvas id="screen" width="1280" height="720"></canvas>
      <div class="poster" id="poster">
        <span class="p-badge">ANM/1 · ВЕКТОРНАЯ АНИМАЦИЯ</span>
        <h2 id="posterTitle">夜明け</h2>
        <div class="p-sub" id="posterSub">РАССВЕТ НАД КРЫШЕЙ</div>
        <button class="play-big" id="posterPlay" aria-label="Смотреть мультфильм">
          <svg viewBox="0 0 24 24" fill="#2a0f1e"><path d="M6 3.8v16.4c0 1 1.1 1.6 2 1.1l13-8.2c.8-.5.8-1.7 0-2.2L8 2.7c-.9-.5-2 .1-2 1.1z"/></svg>
        </button>
        <div class="p-meta" id="posterMeta">48 с · 4 сцены · 1280×720 · 30 к/с</div>
        <div class="p-hint">саундтрек синтезируется в реальном времени — включите колонки</div>
      </div>
      <div class="end-card" id="endCard" hidden>
        <h3>終</h3>
        <div class="row">
          <button class="btn primary" id="replayBtn">↺ Смотреть снова</button>
          <button class="btn" id="endDownload">Скачать .anm</button>
        </div>
      </div>
      <div class="drop-hint">Отпустите .anm — плеер откроет ваш фильм</div>
    </div>
    <div class="controls">
      <div class="tl" id="tl" aria-label="Перемотка">
        <div class="tl-track" id="tlSegs"></div>
        <div class="tl-fill" id="tlFill"></div>
        <div class="tl-handle" id="tlHandle"></div>
        <div class="tl-tip" id="tlTip">00:00.0</div>
      </div>
      <div class="ctrl-row">
        <button class="icon-btn main" id="btnPlay" title="Пуск / пауза (Space)">
          <svg id="icoPlay" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15c0 .9 1 1.4 1.7 1L20.4 13c.7-.4.7-1.5 0-1.9L8.7 3.5C8 3.1 7 3.6 7 4.5z"/></svg>
          <svg id="icoPause" viewBox="0 0 24 24" fill="currentColor" hidden><rect x="6" y="4" width="4.4" height="16" rx="1.4"/><rect x="13.6" y="4" width="4.4" height="16" rx="1.4"/></svg>
        </button>
        <button class="icon-btn" id="btnPrev" title="Предыдущая сцена"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h2.4v14H6zM20 6.3v11.4c0 .9-1 1.4-1.7 1L9.6 13c-.7-.4-.7-1.5 0-1.9l8.7-5.7c.7-.5 1.7 0 1.7.9z"/></svg></button>
        <button class="icon-btn" id="btnNext" title="Следующая сцена"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.6 5H18v14h-2.4zM4 6.3v11.4c0 .9 1 1.4 1.7 1l8.7-5.7c.7-.4.7-1.5 0-1.9L5.7 5.4C5 4.9 4 5.4 4 6.3z"/></svg></button>
        <span class="time-label"><b id="timeCur">00:00.0</b> / <span id="timeDur">00:48.0</span></span>
        <span class="scene-label" id="sceneLabel">Сцена 1 · Пролог</span>
        <select id="selSpeed" title="Скорость воспроизведения">
          <option value="0.5">0.5×</option><option value="1" selected>1×</option>
          <option value="1.5">1.5×</option><option value="2">2×</option>
        </select>
        <button class="icon-btn active" id="btnLoop" title="Зациклить (L)" aria-pressed="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2.5 21 6l-4 3.5"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 21.5 3 18l4-3.5"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/></svg></button>
        <button class="icon-btn active" id="btnCinema" title="Кинорежим: каше + зерно" aria-pressed="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 9h18M3 15h18"/></svg></button>
        <button class="icon-btn" id="btnShot" title="Сохранить текущий кадр в PNG"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="14" r="3.6"/></svg></button>
        <button class="icon-btn" id="btnFS" title="На весь экран (F)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg></button>
      </div>
    </div>
  </div>

  <div class="stats" id="stats"></div>
  <div class="chips" id="chips"></div>
  <p class="hotkeys"><kbd>Space</kbd> пуск/пауза · <kbd>←</kbd><kbd>→</kbd> ±5 с · <kbd>M</kbd> звук · <kbd>L</kbd> цикл · <kbd>F</kbd> полный экран · клик по кадру — пауза · двойной клик — полный экран</p>
</section>

<section id="panel" class="panel reveal">
  <div class="tabbar" role="tablist">
    <button role="tab" aria-selected="true" data-tab="docs">Спецификация формата</button>
    <button role="tab" aria-selected="false" data-tab="scenes">Сцены фильма</button>
    <button role="tab" aria-selected="false" data-tab="source">Исходник .anm</button>
  </div>

  <div id="tab-docs" role="tabpanel" class="doc">
    <h3>Зачем ещё один формат</h3>
    <p>SWF хранил <b>векторные спрайты и таймлайн</b>, а воспроизводил его закрытый Flash Player. ANM/1 сохраняет ту же модель — определения символов, список отображения, ключевые кадры и твины — но файл это <b>UTF-8 JSON</b>, а рантайм — несколько сотен строк JavaScript поверх Canvas 2D. Файл читается глазами, диффится в git, генерируется любым скриптом и проигрывается в любом браузере без плагинов.</p>
    <h3>Структура файла</h3>
    <pre><code>{
  "format": "ANM/1",
  "meta":   { "title", "author", "fps", "width", "height", "duration", "background" },
  "palette":{ "именованные цвета для автора — необязательно" },
  "symbols":{ "имя": { "parts": [ … ] } },
  "scenes": [ { "id", "name", "start", "end", "transition", "camera", "layers": [ … ] } ],
  "soundtrack": { "base", "scale", "bpm", "patterns", "chords", "wind" }
}</code></pre>
    <p>Время везде — <b>в секундах от начала фильма</b>. Сцены идут по <code class="inl">start</code>; внутри сцены слои рисуются в порядке массива (как display list во Flash). Минимальный валидный фильм:</p>
    <pre><code>{ "format":"ANM/1",
  "meta":{ "title":"Тест","fps":30,"width":1280,"height":720,"duration":2,"background":"#141026" },
  "symbols":{ "круг":{ "parts":[{ "paths":[{ "d":[["E",0,0,40,40]], "fill":"#ff5c8a" }] }] } },
  "scenes":[{ "id":"s1","name":"Единственная","start":0,"end":2,"layers":[
    { "type":"symbol","ref":"круг","x":640,"tracks":{ "y":[{"t":0,"v":100,"e":"bounceOut"},{"t":1.6,"v":560}] } }
  ]}] }</code></pre>
    <h3>Символы и пути — векторные «шейпы»</h3>
    <p>Символ — дерево частей (<code class="inl">parts</code>, вложенность через <code class="inl">children</code>). У части есть <code class="inl">pivot</code> (точка вращения/масштаба), собственные треки и массив путей. Команды пути — компактный аналог SVG path:</p>
    <table>
      <tr><th>Команда</th><th>Аргументы</th><th>Смысл</th></tr>
      <tr><td>M</td><td>x y</td><td>перо в точку</td></tr>
      <tr><td>L</td><td>x y</td><td>линия</td></tr>
      <tr><td>Q</td><td>cx cy x y</td><td>квадратичная кривая Безье</td></tr>
      <tr><td>C</td><td>c1x c1y c2x c2y x y</td><td>кубическая кривая Безье</td></tr>
      <tr><td>E</td><td>cx cy rx ry</td><td>эллипс (круг при rx=ry)</td></tr>
      <tr><td>Z</td><td>—</td><td>замкнуть контур</td></tr>
    </table>
    <p><code class="inl">fill</code> — CSS-цвет или градиент: <code class="inl">{"type":"linear","from":[x,y],"to":[x,y],"stops":[[0,"#…"],[1,"#…"]]}</code> либо <code class="inl">{"type":"radial","c":[x,y],"r":R,"stops":…}</code>. <code class="inl">stroke</code>: <code class="inl">{"color","width","cap"}</code>.</p>
    <h3>Треки и ключевые кадры — твины</h3>
    <p>Любое свойство слоя или части анимируется треком: массив ключей <code class="inl">{t, v, e}</code>, где <code class="inl">e</code> — easing сегмента <i>от этого ключа к следующему</i>. Значения интерполируются автоматически: числа, массивы (покомпонентно, в т.ч. цвета стопов градиента) и цвета <code class="inl">#rgb/#rrggbb/rgba()</code>. Поле <code class="inl">loop: N</code> зацикливает трек каждые N секунд — так сделаны дыхание, моргание и колыхание волос героини (аналог зацикленного спрайта DefineSprite).</p>
    <pre><code>"tracks": {
  "rot": { "loop": 6, "keys": [
    { "t":0, "v":0, "e":"sineInOut" }, { "t":1.5, "v":1.8, "e":"sineInOut" },
    { "t":3, "v":0, "e":"sineInOut" }, { "t":4.5, "v":-1.8, "e":"sineInOut" },
    { "t":6, "v":0 } ] },
  "sy": { "loop": 3.6, "keys": [
    { "t":0,"v":1,"e":"linear" }, { "t":2.9,"v":1,"e":"in" },
    { "t":3.02,"v":0.06,"e":"out" }, { "t":3.16,"v":1,"e":"linear" } ] }
}</code></pre>
    <div class="ease-list"><span>linear</span><span>in</span><span>out</span><span>inOut</span><span>sineIn</span><span>sineOut</span><span>sineInOut</span><span>cubicIn</span><span>cubicOut</span><span>cubicInOut</span><span>expoOut</span><span>backOut</span><span>elasticOut</span><span>bounceOut</span><span>step</span></div>
    <h3>Типы слоёв</h3>
    <ul>
      <li><b>symbol</b> — экземпляр символа: <code class="inl">ref, x, y, scale, sx, rot, opacity, timeShift</code>; <code class="inl">tint</code> перекрашивает заливки, <code class="inl">silhouette:true</code> — весь экземпляр в один цвет (финальный силуэт).</li>
      <li><b>sky</b> — вертикальный градиент на весь кадр; треком <code class="inl">stops</code> анимируются сами цвета (ночь → рассвет).</li>
      <li><b>rect</b> — прямоугольник <code class="inl">x,y,w,h,fill</code> (пол крыши, затемнение).</li>
      <li><b>text</b> — <code class="inl">text, size, font, weight, fill, align, spacing, shadow</code> + треки.</li>
      <li><b>particles</b> — детерминированный эмиттер (ниже).</li>
    </ul>
    <p>Общие модификаторы слоя: <code class="inl">opacity</code> (трек), <code class="inl">blend:"screen"</code> — аддитивное свечение солнца, бликов и боке.</p>
    <h3>Частицы — без состояния</h3>
    <p>Главное отличие рантайма ANM от «игровых» эмиттеров: <b>всё — чистая функция времени</b>. Частица i получает параметры из seeded RNG (<code class="inl">seed</code>), а её возраст = <code class="inl">(t + фаза) mod life</code>. Поэтому перемотка назад/вперёд мгновенно даёт тот же кадр — сакура, звёзды, боке и шторм лепестков полностью seekable.</p>
    <pre><code>{ "type":"particles", "ref":"лепесток", "blend":"screen",
  "emitter":{ "count":90, "seed":51, "area":[-100,-120,1600,200],
    "vel":[[-260,-140],[80,150]], "life":[4,7], "size":[14,30],
    "spin":240, "gravity":10, "sway":{ "amp":[30,80], "freq":[1.5,3] },
    "alpha":[0.6,1], "twinkle":false } }</code></pre>
    <p><code class="inl">size</code> — процент масштаба символа; <code class="inl">refs:[…]</code> + <code class="inl">tints:[…]</code> — случайный выбор символа/оттенка на частицу.</p>
    <h3>Камера и переходы</h3>
    <p>У сцены есть <code class="inl">camera</code> с треками <code class="inl">x, y, zoom, rot</code> (наезд на лицо во 2-й сцене, панорама в 3-й). Переход к сцене описывает <code class="inl">transition</code>: <code class="inl">{"type":"fade","duration":1.4}</code>, <code class="inl">{"type":"dip","color":"#fff","duration":0.7}</code> (вспышка), <code class="inl">{"type":"iris","cx":760,"cy":280,"duration":1.1}</code> — классическая аниме-«диафрагма».</p>
    <h3>Звук</h3>
    <p>Никаких аудиофайлов: <code class="inl">soundtrack</code> описывает генеративную партитуру — базовую частоту, гаму в полутонах (<b>хираджёси</b>), BPM, ритмические паттерны нот на сцену, аккорды пэда и уровень ветра. Рантайм синтезирует щипковые ноты, пэд, колокольчик на смене сцены и шум ветра через Web Audio, точно по таймлайну фильма.</p>
    <h3>SWF ↔ ANM/1</h3>
    <table>
      <tr><th></th><th>SWF / Flash</th><th>ANM/1</th></tr>
      <tr><td>Контейнер</td><td>бинарный, закрытый</td><td>JSON UTF-8, читается глазами</td></tr>
      <tr><td>Рантайм</td><td>Flash Player + AVM</td><td>Canvas 2D, ~600 строк JS</td></tr>
      <tr><td>Графика</td><td>векторные шейпы</td><td>пути M/L/Q/C/E + градиенты</td></tr>
      <tr><td>Анимация</td><td>timeline + motion tweens</td><td>треки ключей + 15 easing</td></tr>
      <tr><td>Спрайты</td><td>DefineSprite, вложенность</td><td>symbols, children, loop-треки</td></tr>
      <tr><td>Логика</td><td>ActionScript</td><td>декларативно, кода в файле нет</td></tr>
      <tr><td>Звук</td><td>MP3 / события</td><td>Web Audio, синтез по партитуре</td></tr>
      <tr><td>Перемотка</td><td>по кадрам</td><td>в любую точку: рендер = f(t)</td></tr>
      <tr><td>Статус</td><td>EOL с 2020</td><td>открытый, работает везде</td></tr>
    </table>
    <h3>Сделайте свой мультфильм</h3>
    <ul>
      <li>Нажмите <b>«Скачать .anm»</b> — это полный исходник фильма выше.</li>
      <li>Откройте в любом редакторе: поменяйте цвета неба, добавьте символ, вставьте сцену.</li>
      <li>Перетащите файл на плеер (или «Открыть .anm») — он проверится и сыграет.</li>
      <li>Кнопка с фотоаппаратом сохраняет текущий кадр в PNG.</li>
    </ul>
  </div>

  <div id="tab-scenes" role="tabpanel" hidden>
    <div class="scene-cards" id="sceneCards"></div>
  </div>

  <div id="tab-source" role="tabpanel" hidden>
    <div class="src-toolbar">
      <span class="size" id="srcSize"></span>
      <button class="btn" id="btnCopy">Скопировать JSON</button>
      <button class="btn primary" id="btnDownload2">Скачать .anm</button>
    </div>
    <pre id="codeView"><code id="codeEl"></code></pre>
  </div>
</section>
</main>

<footer>
  <b>ANM/1</b> — открытый JSON-формат векторной анимации · плеер: Canvas 2D + Web Audio · <b>0 зависимостей</b> · пример «夜明け» собран из символов, треков и частиц — ни одного видео- или аудиофайла
</footer>
<div class="toasts" id="toasts"></div>

<script>
(function(){'use strict';
/* ---------- утилиты ---------- */
const $=id=>document.getElementById(id);
const clamp=(v,a,b)=>v<a?a:v>b?b:v;
const lerp=(a,b,u)=>a+(b-a)*u;
const K=(t,v,e)=>({t,v,e:e||'inOut'});
const T=(keys,loop)=>loop?{keys,loop}:{keys};
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;}}
const cc=new Map();
function parseColor(s){let c=cc.get(s);if(c)return c;let r=0,g=0,b=0,a=1;
  if(s[0]==='#'){let h=s.slice(1);if(h.length===3)h=h.split('').map(x=>x+x).join('');const n=parseInt(h,16);r=n>>16&255;g=n>>8&255;b=n&255;if(h.length===8)a=(n&255)/255;}
  else{const m=s.match(/rgba?\(([^)]+)\)/);if(m){const p=m[1].split(',').map(Number);r=p[0];g=p[1];b=p[2];a=p[3]===undefined?1:p[3];}}
  c=[r,g,b,a];cc.set(s,c);return c;}
function mixColor(a,b,u){const r=Math.round(lerp(a[0],b[0],u)),g=Math.round(lerp(a[1],b[1],u)),bl=Math.round(lerp(a[2],b[2],u)),al=lerp(a[3],b[3],u);
  if(al>=.999)return '#'+((1<<24)+(r<<16)+(g<<8)+bl).toString(16).slice(1);
  return 'rgba('+r+','+g+','+bl+','+(+al.toFixed(3))+')';}
function lerpVal(a,b,u){
  if(typeof a==='number')return a+(b-a)*u;
  if(Array.isArray(a))return a.map((x,i)=>lerpVal(x,b[i],u));
  if(typeof a==='string')return mixColor(parseColor(a),parseColor(b),u);
  return u<1?a:b;}
const EASE={
  linear:u=>u,in:u=>u*u,out:u=>1-(1-u)*(1-u),
  inOut:u=>u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2,
  sineIn:u=>1-Math.cos(u*Math.PI/2),sineOut:u=>Math.sin(u*Math.PI/2),sineInOut:u=>-(Math.cos(Math.PI*u)-1)/2,
  cubicIn:u=>u*u*u,cubicOut:u=>1-Math.pow(1-u,3),cubicInOut:u=>u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2,
  expoOut:u=>u===1?1:1-Math.pow(2,-10*u),
  backOut:u=>{const c=1.70158;return 1+(c+1)*Math.pow(u-1,3)+c*Math.pow(u-1,2);},
  elasticOut:u=>u===0?0:u===1?1:Math.pow(2,-10*u)*Math.sin((u*10-.75)*(2*Math.PI/3))+1,
  bounceOut:u=>{const n=7.5625,d=2.75;if(u<1/d)return n*u*u;if(u<2/d)return n*(u-=1.5/d)*u+.75;if(u<2.5/d)return n*(u-=2.25/d)*u+.9375;return n*(u-=2.625/d)*u+.984375;},
  step:()=>0};
function evalTrack(tr,time){const ks=tr.keys,n=ks.length;
  if(tr.loop)time=((time%tr.loop)+tr.loop)%tr.loop;
  if(n===1||time<=ks[0].t)return ks[0].v;
  if(time>=ks[n-1].t)return ks[n-1].v;
  let i=1;while(ks[i].t<time)i++;
  const a=ks[i-1],b=ks[i];
  const u=(EASE[a.e||'inOut']||EASE.inOut)((time-a.t)/(b.t-a.t));
  return lerpVal(a.v,b.v,u);}
function P(o,name,t,def){const tr=o.tracks&&o.tracks[name];if(tr)return evalTrack(tr,t);const v=o[name];return v===undefined?def:v;}
function fmtTime(s){const m=Math.floor(s/60),x=s-m*60;return String(m).padStart(2,'0')+':'+x.toFixed(1).padStart(4,'0');}

/* ---------- построение фильма «夜明け» (это и есть .anm) ---------- */
function buildFilm(){
const hairGrad={type:'linear',from:[0,-270],to:[0,95],stops:[[0,'#3a2350'],[.55,'#6b3d78'],[1,'#ff9ec2']]};
const hairGradF={type:'linear',from:[0,-262],to:[0,-84],stops:[[0,'#4a2c5e'],[.6,'#8a4f96'],[1,'#ffb3cd']]};
const skinGrad={type:'linear',from:[0,-252],to:[0,-128],stops:[[0,'#ffe9d8'],[1,'#ffd9c2']]};
const uniGrad={type:'linear',from:[0,-120],to:[0,-8],stops:[[0,'#ffffff'],[1,'#e8e2f8']]};
const skirtGrad={type:'linear',from:[0,-10],to:[0,54],stops:[[0,'#352f6e'],[1,'#241f4a']]};
const skinLine={color:'rgba(74,44,79,.3)',width:1.5};
const blink=l=>T([K(0,1,'linear'),K(2.9,1,'in'),K(3.02,.06,'out'),K(3.16,1,'linear')],3.6);
const sway=(amp,per,ph)=>T([K(0,0,'sineInOut'),K(per*.25,amp,'sineInOut'),K(per*.5,0,'sineInOut'),K(per*.75,-amp,'sineInOut'),K(per,0,'sineInOut')],per);
function eye(cx){const cy=-178;return{pivot:[cx,cy],tracks:{sy:blink()},children:[
  {paths:[{d:[['E',cx,cy,13,10]],fill:'#ffffff'}]},
  {paths:[{d:[['E',cx,cy+1,8.5,9.5]],fill:{type:'radial',c:[cx,cy-2],r:12,stops:[[0,'#c9a0ff'],[.5,'#8a5cf6'],[1,'#43277e']]}}]},
  {paths:[{d:[['E',cx,cy+1,4,5]],fill:'#1c1430'}]},
  {paths:[{d:[['E',cx-3,cy-3,2.6,2.6]],fill:'#ffffff'},{d:[['E',cx+3.5,cy+3,1.3,1.3]],fill:'rgba(255,255,255,.85)'}]},
  {paths:[{d:[['M',cx-14,cy-5],['Q',cx,cy-15,cx+14,cy-4],['L',cx+17,cy-6]],stroke:{color:'#241a33',width:4}},
          {d:[['M',cx-10,cy+8],['Q',cx,cy+11,cx+10,cy+8]],stroke:{color:'rgba(36,26,51,.35)',width:1.5}}]}]};}
const girl={parts:[
 {id:'hairBack',pivot:[0,-240],tracks:{rot:sway(1.8,6)},paths:[{d:[['M',-60,-240],['C',-90,-200,-96,-120,-88,-40],['C',-84,10,-70,60,-50,90],['L',-30,74],['L',-14,92],['L',2,76],['L',18,94],['L',36,74],['L',52,88],['C',72,50,86,0,90,-50],['C',96,-130,88,-200,60,-240],['C',30,-270,-30,-270,-60,-240],['Z']],fill:hairGrad}]},
 {id:'legs',paths:[
   {d:[['M',-32,48],['L',-28,108],['L',-14,108],['L',-12,48],['Z']],fill:'#ffd9c2'},
   {d:[['M',12,48],['L',14,108],['L',28,108],['L',32,48],['Z']],fill:'#ffd9c2'},
   {d:[['M',-28,100],['L',-26,150],['L',-12,150],['L',-14,100],['Z']],fill:'#2e2a5e'},
   {d:[['M',14,100],['L',12,150],['L',26,150],['L',28,100],['Z']],fill:'#2e2a5e'},
   {d:[['E',-20,154,12,6]],fill:'#4a2c33'},{d:[['E',20,154,12,6]],fill:'#4a2c33'}]},
 {id:'skirt',pivot:[0,-10],tracks:{rot:sway(1.2,4.6)},paths:[
   {d:[['M',-60,-10],['L',-78,48],['L',-58,52],['L',-44,50],['L',-30,54],['L',-14,50],['L',0,54],['L',14,50],['L',30,54],['L',44,50],['L',58,52],['L',78,48],['L',60,-10],['Z']],fill:skirtGrad},
   {d:[['M',-40,-8],['L',-50,48]],stroke:{color:'rgba(20,16,50,.55)',width:2}},
   {d:[['M',-20,-8],['L',-25,50]],stroke:{color:'rgba(20,16,50,.55)',width:2}},
   {d:[['M',0,-8],['L',0,51]],stroke:{color:'rgba(20,16,50,.55)',width:2}},
   {d:[['M',20,-8],['L',25,50]],stroke:{color:'rgba(20,16,50,.55)',width:2}},
   {d:[['M',40,-8],['L',50,48]],stroke:{color:'rgba(20,16,50,.55)',width:2}}]},
 {id:'torso',pivot:[0,-60],tracks:{y:T([K(0,0,'sineInOut'),K(1.7,-2,'sineInOut'),K(3.4,0,'sineInOut')],3.4)},children:[
   {paths:[{d:[['M',-9,-134],['L',-9,-108],['L',9,-108],['L',9,-134],['Z']],fill:'#f7c9ae'}]},
   {paths:[{d:[['M',-46,-112],['C',-60,-104,-66,-80,-64,-50],['L',-60,-10],['L',60,-10],['L',64,-50],['C',66,-80,60,-104,46,-112],['L',20,-120],['L',-20,-120],['Z']],fill:uniGrad,stroke:skinLine}]},
   {id:'armL',children:[
     {paths:[{d:[['M',-58,-96],['C',-66,-70,-66,-44,-60,-18],['L',-48,-16],['C',-52,-42,-50,-68,-46,-94],['Z']],fill:'#ffd9c2',stroke:skinLine}]},
     {paths:[{d:[['E',-54,-12,7,9]],fill:'#ffe3d0'}]},
     {paths:[{d:[['E',-52,-102,14,12]],fill:uniGrad,stroke:skinLine}]}]},
   {id:'armR',pivot:[52,-104],tracks:{rot:sway(1.5,5)},children:[
     {paths:[{d:[['M',48,-102],['C',70,-108,82,-122,80,-136],['C',78,-150,68,-162,60,-168],['L',52,-160],['C',60,-152,66,-144,66,-136],['C',66,-126,56,-114,44,-110],['Z']],fill:'#ffd9c2',stroke:skinLine}]},
     {paths:[{d:[['E',57,-165,7,8]],fill:'#ffe3d0'}]},
     {paths:[{d:[['E',50,-104,15,13]],fill:uniGrad,stroke:skinLine}]}]},
   {paths:[{d:[['M',-44,-112],['L',-8,-74],['L',0,-80],['L',8,-74],['L',44,-112],['L',52,-98],['L',0,-58],['L',-52,-98],['Z']],fill:'#2e2a5e'},
           {d:[['M',-40,-104],['L',0,-70],['L',40,-104]],stroke:{color:'#f7f4ff',width:2}}]},
   {id:'ribbon',pivot:[0,-72],tracks:{rot:sway(2,3.8)},paths:[
     {d:[['M',-4,-72],['L',-22,-82],['L',-20,-62],['Z']],fill:'#ff4d6d'},
     {d:[['M',4,-72],['L',22,-82],['L',20,-62],['Z']],fill:'#ff4d6d'},
     {d:[['M',-3,-66],['L',-8,-44],['L',-1,-48],['Z']],fill:'#e8435f'},
     {d:[['M',3,-66],['L',8,-44],['L',1,-48],['Z']],fill:'#e8435f'},
     {d:[['E',0,-70,6,6]],fill:'#ff6b85'}]}]},
 {id:'head',pivot:[0,-190],tracks:{rot:sway(1,7),y:T([K(0,0,'sineInOut'),K(1.7,-2,'sineInOut'),K(3.4,0,'sineInOut')],3.4)},children:[
   {paths:[{d:[['M',-52,-230],['C',-60,-190,-58,-168,-40,-150],['C',-25,-136,-10,-128,0,-128],['C',10,-128,25,-136,40,-150],['C',58,-168,60,-190,52,-230],['C',30,-252,-30,-252,-52,-230],['Z']],fill:skinGrad,stroke:skinLine}]},
   {paths:[{d:[['E',-34,-156,8,4]],fill:'rgba(255,157,176,.4)'},{d:[['E',34,-156,8,4]],fill:'rgba(255,157,176,.4)'}]},
   eye(-24),eye(24),
   {paths:[{d:[['M',2,-162],['L',4,-158]],stroke:{color:'#e8a58c',width:1.5}},
           {d:[['M',-8,-148],['Q',0,-142,8,-148]],stroke:{color:'#d4586e',width:2.5}}]},
   {id:'hairFront',pivot:[0,-250],tracks:{rot:sway(1,5.4)},children:[
     {paths:[{d:[['M',-58,-226],['C',-62,-246,-40,-260,0,-262],['C',40,-260,62,-246,58,-226],['L',52,-200],['L',42,-218],['L',30,-196],['L',18,-216],['L',4,-198],['L',-10,-218],['L',-22,-196],['L',-34,-216],['L',-46,-198],['L',-54,-218],['Z']],fill:hairGradF}]},
     {id:'lockL',pivot:[-52,-224],tracks:{rot:sway(2,4.4)},paths:[{d:[['M',-56,-228],['C',-66,-200,-64,-160,-58,-120],['C',-54,-100,-46,-88,-40,-84],['L',-34,-96],['C',-42,-130,-44,-170,-40,-210],['Z']],fill:hairGradF}]},
     {id:'lockR',pivot:[52,-224],tracks:{rot:sway(-2,4.4)},paths:[{d:[['M',56,-228],['C',66,-200,64,-160,58,-120],['C',54,-100,46,-88,40,-84],['L',34,-96],['C',42,-130,44,-170,40,-210],['Z']],fill:hairGradF}]}]},
   {paths:[{d:[['M',-38,-196],['Q',-24,-202,-10,-196]],stroke:{color:'#4a2c4f',width:2.5}},
           {d:[['M',10,-196],['Q',24,-202,38,-196]],stroke:{color:'#4a2c4f',width:2.5}}]},
   {id:'ahoge',pivot:[0,-258],tracks:{rot:T([K(0,0),K(.8,9),K(1.6,-5),K(2.4,3),K(3.2,0)],3.2)},paths:[{d:[['M',0,-258],['C',-4,-276,8,-286,18,-280],['C',10,-280,4,-272,6,-260],['Z']],fill:'#6b3d78'}]}]}
]};
/* город */
const rb=mulberry32(77);const cBuild=[],cWin=[];let bx=-40;
while(bx<1320){const w=60+rb()*90,h=90+rb()*170,top=600-h;
  cBuild.push({d:[['M',bx,600],['L',bx,top],['L',bx+w,top],['L',bx+w,600],['Z']],fill:'#241a3f'});
  if(rb()<.4)cBuild.push({d:[['M',bx+w/2,top],['L',bx+w/2,top-16]],stroke:{color:'#241a3f',width:3}});
  for(let wy=top+12;wy<588;wy+=18)for(let wx=bx+8;wx<bx+w-10;wx+=14)
    if(rb()<.26)cWin.push({d:[['M',wx,wy],['L',wx+5,wy],['L',wx+5,wy+7],['L',wx,wy+7],['Z']],fill:rb()<.85?'#ffd27f':'#ff9fbd'});
  bx+=w+6+rb()*22;}
/* сетка забора */
const fPaths=[];for(let gx=-130;gx<=1280;gx+=26){
  fPaths.push({d:[['M',gx,0],['L',gx+130,130]],stroke:{color:'rgba(90,76,140,.5)',width:1.2}});
  fPaths.push({d:[['M',gx,130],['L',gx+130,0]],stroke:{color:'rgba(90,76,140,.5)',width:1.2}});}
for(let px=0;px<=1280;px+=160)fPaths.push({d:[['M',px,-4],['L',px,132]],stroke:{color:'#3a2f5c',width:5}});
fPaths.push({d:[['M',0,0],['L',1280,0]],stroke:{color:'#3a2f5c',width:4}});
fPaths.push({d:[['M',0,130],['L',1280,130]],stroke:{color:'#3a2f5c',width:4}});
/* ветка сакуры */
const rb2=mulberry32(5);const bl=[];
for(let i=0;i<26;i++){const u=rb2(),px2=40+u*330+(rb2()*30-15),py2=18+u*55+(rb2()*40-20),r=7+rb2()*9;
  bl.push({d:[['E',px2,py2,r,r]],fill:['#ffc9da','#ff9fbd','#ff8fb3','#ffb7cd'][i%4]});
  bl.push({d:[['E',px2,py2,2.2,2.2]],fill:'#ffe9f1'});}
/* лучи солнца */
const rayPaths=[];for(let i=0;i<12;i++){const a=i*Math.PI/6;
  rayPaths.push({d:[['M',0,0],['L',Math.cos(a-.035)*520,Math.sin(a-.035)*520],['L',Math.cos(a+.035)*520,Math.sin(a+.035)*520],['Z']],fill:'rgba(255,220,160,.06)'});}
const symbols={
 girl,
 petal:{parts:[{paths:[
   {d:[['M',0,-42],['C',26,-30,34,4,18,30],['C',10,44,-8,46,-16,34],['C',-30,12,-24,-24,0,-42],['Z']],fill:{type:'linear',from:[0,-42],to:[0,44],stops:[[0,'#ffd3e0'],[.6,'#ff9fbd'],[1,'#ff7fa8']]}},
   {d:[['M',0,-30],['Q',6,0,2,26]],stroke:{color:'rgba(255,255,255,.55)',width:3}}]}]},
 star:{parts:[{paths:[{d:[['M',0,-10],['Q',2,-2,10,0],['Q',2,2,0,10],['Q',-2,2,-10,0],['Q',-2,-2,0,-10],['Z']],fill:'#fff6d8'}]}]},
 streak:{parts:[{paths:[{d:[['M',-160,-2],['L',160,-2],['L',160,2],['L',-160,2],['Z']],fill:'#ffffff'}]}]},
 bokehP:{parts:[{paths:[{d:[['E',0,0,50,50]],fill:{type:'radial',c:[0,0],r:50,stops:[[0,'rgba(255,143,179,.8)'],[1,'rgba(255,143,179,0)']]}}]}]},
 bokehA:{parts:[{paths:[{d:[['E',0,0,50,50]],fill:{type:'radial',c:[0,0],r:50,stops:[[0,'rgba(255,179,71,.8)'],[1,'rgba(255,179,71,0)']]}}]}]},
 bokehV:{parts:[{paths:[{d:[['E',0,0,50,50]],fill:{type:'radial',c:[0,0],r:50,stops:[[0,'rgba(124,108,255,.8)'],[1,'rgba(124,108,255,0)']]}}]}]},
 cloud:{parts:[{paths:[{d:[['E',-60,10,55,26]],fill:'#fff'},{d:[['E',0,-6,70,34]],fill:'#fff'},{d:[['E',70,12,60,26]],fill:'#fff'},{d:[['E',10,22,90,24]],fill:'#fff'}]}]},
 bird:{parts:[
   {id:'wingL',pivot:[-2,0],tracks:{sy:T([K(0,1,'sineInOut'),K(.2,-.7,'sineInOut'),K(.4,1,'sineInOut')],.4)},paths:[{d:[['M',-2,0],['Q',-18,-14,-34,-8],['Q',-18,-4,-2,2],['Z']],fill:'#241a3f'}]},
   {id:'wingR',pivot:[2,0],tracks:{sy:T([K(0,1,'sineInOut'),K(.2,-.7,'sineInOut'),K(.4,1,'sineInOut')],.4)},paths:[{d:[['M',2,0],['Q',18,-14,34,-8],['Q',18,-4,2,2],['Z']],fill:'#241a3f'}]},
   {paths:[{d:[['E',0,0,10,5]],fill:'#241a3f'}]}]},
 sun:{parts:[
   {paths:[{d:[['E',0,0,150,150]],fill:{type:'radial',c:[0,0],r:150,stops:[[0,'rgba(255,214,140,.9)'],[.35,'rgba(255,179,71,.45)'],[1,'rgba(255,179,71,0)']]}}]},
   {paths:[{d:[['E',0,0,46,46]],fill:'#fff6e0'}]}]},
 rays:{parts:[{pivot:[0,0],tracks:{rot:T([K(0,0,'linear'),K(60,360,'linear')],60)},paths:rayPaths}]},
 city:{parts:[{paths:cBuild},{paths:cWin,tracks:{opacity:T([K(0,.95,'linear'),K(6,.6,'linear'),K(12,.35,'linear')])}}]},
 fence:{parts:[{paths:fPaths}]},
 branch:{parts:[
   {paths:[{d:[['M',-20,-10],['C',120,30,240,60,360,70],['C',300,86,180,80,60,50],['C',20,40,-10,20,-20,-10],['Z']],fill:'#4a2c33'},
           {d:[['M',150,42],['C',190,20,230,10,270,12],['C',235,24,200,36,170,52],['Z']],fill:'#4a2c33'}]},
   {pivot:[0,0],tracks:{rot:sway(1.2,6)},paths:bl}]}
};
const sym=(ref,props)=>Object.assign({type:'symbol',ref},props);
const txt=(text,props)=>Object.assign({type:'text',text,font:'"Manrope",system-ui,sans-serif',weight:700,size:25,fill:'#ffffff',shadow:{blur:14,color:'rgba(20,10,40,.9)'}},props);
const sub=(text,t0,t1,t2,t3)=>txt(text,{x:640,y:645,tracks:{opacity:T([K(t0,0),K(t1,1),K(t2,1),K(t3,0)])}});
const petals=(count,seed,props)=>Object.assign({type:'particles',ref:'petal',emitter:Object.assign({count,seed,area:[-100,-80,1500,60],vel:[[20,70],[55,95]],life:[9,14],size:[14,26],spin:90,gravity:4,sway:{amp:[20,50],freq:[.8,1.6]},alpha:[.7,1]},props)},{});
const scenes=[
 {id:'s1',name:'Пролог · Рассвет',start:0,end:12,desc:'Ночь отступает: градиент неба перетекает в рассвет, гаснут звёзды, солнце поднимается над спящим городом. Ветка сакуры роняет первые лепестки на пустую крышу.',
  camera:{tracks:{zoom:T([K(0,1.03),K(12,1.1,'sineInOut')]),y:T([K(0,370),K(12,345)])}},
  layers:[
   {type:'sky',offsets:[0,.55,1],tracks:{stops:T([K(0,['#0e0b26','#241a4e','#4a2a66']),K(5,['#2c1f57','#6b3f86','#e0708a']),K(12,['#4a3a8c','#a05a9c','#ffb37d'])])}},
   {type:'particles',ref:'star',blend:'screen',tracks:{opacity:T([K(0,1,'linear'),K(6,.5,'linear'),K(10,0,'linear')])},emitter:{count:70,seed:9,area:[0,0,1280,420],vel:[[0,0],[0,0]],life:[3,6],size:[8,20],twinkle:true,alpha:[.3,.9]}},
   sym('rays',{x:900,blend:'screen',opacity:.5,tracks:{y:T([K(2,620),K(12,470,'sineOut')])}}),
   sym('sun',{x:900,scale:1.1,blend:'screen',tracks:{y:T([K(2,620),K(12,470,'sineOut')]),opacity:T([K(0,0),K(3,.9),K(12,1)])}}),
   sym('cloud',{y:120,scale:.8,tint:'#d9b8e8',opacity:.5,tracks:{x:T([K(0,-260,'linear'),K(12,420,'linear')])}}),
   sym('cloud',{y:195,scale:1.15,tint:'#e8c9d8',opacity:.45,tracks:{x:T([K(0,500,'linear'),K(12,1100,'linear')])}}),
   sym('cloud',{y:80,scale:.55,tint:'#d9b8e8',opacity:.4,tracks:{x:T([K(0,900,'linear'),K(12,1500,'linear')])}}),
   sym('city',{x:0,y:0}),
   {type:'rect',x:-400,y:600,w:2080,h:320,fill:'#191231'},
   {type:'rect',x:-400,y:598,w:2080,h:3,fill:'#3a2f5c'},
   sym('fence',{x:0,y:470,opacity:.9}),
   sym('branch',{x:0,y:0,scale:1.15}),
   petals(26,11),
   sub('город ещё спит…',2.5,4,7.5,9),
   sub('…но ветер уже проснулся',9,10.2,11.4,12)]},
 {id:'s2',name:'Героиня',start:12,end:26,desc:'Диафрагма-ирис открывается на Хане: средний план, дыхание, моргание, прядь за ухом. Камера медленно наезжает на лицо, вокруг — боке и искры света.',
  transition:{type:'iris',cx:760,cy:280,duration:1.1},
  camera:{tracks:{zoom:T([K(0,1.02),K(14,1.16,'sineInOut')]),x:T([K(0,660),K(14,720)]),y:T([K(0,360),K(14,320)])}},
  layers:[
   {type:'sky',offsets:[0,.5,1],tracks:{stops:T([K(0,['#5a4a9c','#b06ab3','#ffc9a0']),K(14,['#7a6ad0','#c98ac0','#ffe0b8'])])}},
   {type:'particles',refs:['bokehP','bokehA','bokehV'],blend:'screen',emitter:{count:16,seed:21,area:[0,80,1280,560],vel:[[-6,6],[-14,-4]],life:[6,10],size:[60,150],alpha:[.12,.3]}},
   sym('sun',{x:200,y:150,scale:.7,opacity:.8,blend:'screen'}),
   sym('cloud',{y:110,scale:.9,tint:'#ffe4d6',opacity:.7,tracks:{x:T([K(0,1300,'linear'),K(14,-300,'linear')])}}),
   {type:'rect',x:-400,y:640,w:2080,h:280,fill:'#241a3f'},
   {type:'rect',x:-400,y:638,w:2080,h:3,fill:'#4a3f7c'},
   sym('fence',{x:0,y:510,opacity:.55}),
   sym('girl',{x:760,scale:1.25,tracks:{y:T([K(0,432),K(7,428),K(14,432)]),rot:sway(.5,8)}}),
   {type:'particles',ref:'star',blend:'screen',tints:['#fff6d8','#ffd3e0'],emitter:{count:12,seed:31,area:[600,80,360,300],vel:[[0,0],[0,0]],life:[2.5,4.5],size:[30,80],twinkle:true,alpha:[.4,1]}},
   petals(30,41,{emitter:{count:30,seed:41,area:[-100,-80,1500,60],vel:[[30,80],[70,110]],life:[7,11],size:[22,40],spin:120,gravity:4,sway:{amp:[20,60],freq:[.8,1.8]},alpha:[.8,1]}}),
   sub('Хана чувствует первый ветер…',1.5,3,6.5,8),
   sub('…и улыбается ему',8.5,10,13,14)]},
 {id:'s3',name:'Ветер',start:26,end:38,desc:'Вспышка — и широкий план: шторм из девяноста лепестков, световые штрихи, стая птиц. Камера панорамирует, волосы и юбка бьются на ветру.',
  transition:{type:'dip',color:'#ffffff',duration:.7},
  camera:{tracks:{x:T([K(0,600),K(12,700,'sineInOut')]),zoom:T([K(0,1.08),K(12,1.0)])}},
  layers:[
   {type:'sky',offsets:[0,.5,1],tracks:{stops:T([K(0,['#6a58c8','#c986c0','#ffd9a0']),K(12,['#8a70e0','#e0a0c0','#ffe9c0'])])}},
   sym('rays',{x:980,y:230,scale:1.6,opacity:.7,blend:'screen'}),
   sym('sun',{x:980,y:230,scale:1.5,blend:'screen'}),
   sym('cloud',{y:90,scale:1,tint:'#fff0e0',opacity:.8,tracks:{x:T([K(0,1400,'linear'),K(12,-400,'linear')])}}),
   sym('cloud',{y:175,scale:.7,tint:'#fff0e0',opacity:.65,tracks:{x:T([K(0,900,'linear'),K(10,-400,'linear')])}}),
   sym('city',{x:0,y:50,opacity:.85}),
   sym('fence',{x:0,y:520,opacity:.9}),
   {type:'rect',x:-400,y:650,w:2080,h:270,fill:'#241a3f'},
   {type:'rect',x:-400,y:648,w:2080,h:3,fill:'#4a3f7c'},
   sym('girl',{x:360,y:560,scale:.6,tracks:{rot:T([K(0,0),K(3,-2),K(6,1),K(9,-1.5),K(12,0)])}}),
   sym('branch',{x:1280,y:-10,scale:.9,sx:-1,opacity:.9}),
   {type:'particles',ref:'petal',emitter:{count:90,seed:51,area:[-100,-120,1600,200],vel:[[-260,-140],[80,150]],life:[4,7],size:[14,30],spin:240,gravity:10,sway:{amp:[30,80],freq:[1.5,3]},alpha:[.7,1]}},
   {type:'particles',ref:'streak',blend:'screen',emitter:{count:26,seed:61,area:[1000,40,500,600],vel:[[-1100,-700],[0,0]],life:[.4,.8],size:[60,140],alpha:[.15,.4]}},
   ...[0,1,2,3,4].map(i=>sym('bird',{scale:.5+i*.04,timeShift:i*.17,tracks:{x:T([K(0,1380+i*80,'linear'),K(11,-160,'linear')]),y:T([K(0,150+i*24),K(3,138+i*24),K(6,156+i*24),K(9,142+i*24),K(12,150+i*24)])}})),
   sub('Ветер подхватывает лепестки…',2,3.5,7,8.5),
   sub('…и несёт их над крышей',9,10.5,11.6,12)]},
 {id:'s4',name:'Финал · Титул',start:38,end:48,desc:'Тёплое небо заката, силуэт героини на краю крыши и титул «夜明け». Мягкие лепестки, финальные титры и затемнение.',
  transition:{type:'fade',duration:1.4},
  camera:{tracks:{zoom:T([K(0,1.05),K(10,1.0)])}},
  layers:[
   {type:'sky',offsets:[0,.5,1],tracks:{stops:T([K(0,['#ffd9a0','#ff9e9e','#b06ab3']),K(10,['#2c1f57','#6b3f86','#e0708a'])])}},
   sym('sun',{x:640,y:470,scale:1.9,opacity:.9,blend:'screen'}),
   sym('fence',{x:0,y:490,opacity:.8}),
   {type:'rect',x:-400,y:620,w:2080,h:300,fill:'#1d1535'},
   {type:'rect',x:-400,y:618,w:2080,h:3,fill:'#3a2f5c'},
   sym('girl',{x:900,y:545,scale:.5,silhouette:true,tint:'#2a1638'}),
   petals(22,71,{emitter:{count:22,seed:71,area:[-100,-80,1500,60],vel:[[10,40],[40,70]],life:[10,14],size:[14,24],spin:80,gravity:3,sway:{amp:[20,50],freq:[.6,1.2]},alpha:[.6,.9]}}),
   txt('夜明け',{x:640,size:150,weight:700,font:'"Noto Serif JP","Hiragino Mincho ProN","Yu Mincho",serif',fill:'#fff8f0',shadow:{blur:30,color:'rgba(255,140,160,.8)'},tracks:{y:T([K(1,310),K(3.2,290,'backOut')]),scale:T([K(1,.9),K(3.2,1,'backOut')]),opacity:T([K(1,0),K(2.6,1),K(8.5,1),K(9.8,0)])}}),
   txt('РАССВЕТ НАД КРЫШЕЙ',{x:640,y:392,size:28,weight:800,spacing:10,fill:'#ffe9f1',tracks:{opacity:T([K(2.2,0),K(3.8,1),K(8.5,1),K(9.8,0)])}}),
   txt('векторный мультфильм · формат ANM/1 · 30 кадров/с',{x:640,y:440,size:17,fill:'rgba(255,240,245,.9)',tracks:{opacity:T([K(3.2,0),K(4.6,1),K(8.5,1),K(9.8,0)])}}),
   txt('Canvas 2D + Web Audio · без плагинов и зависимостей',{x:640,y:468,size:14,fill:'rgba(255,240,245,.75)',tracks:{opacity:T([K(4,0),K(5.4,1),K(8.5,1),K(9.8,0)])}}),
   {type:'rect',x:-400,y:-300,w:2080,h:1320,fill:'#0c0918',tracks:{opacity:T([K(9,0),K(10,1)])}}]}
];
return{format:'ANM/1',
 meta:{title:'夜明け — Рассвет над крышей',author:'ANM Studio',fps:30,width:1280,height:720,duration:48,background:'#0e0b26'},
 palette:{night:'#141031',dawn:'#ff9e7d',sakura:'#ff8fb3',sun:'#ffb347',uniform:'#2e2a5e',ribbon:'#ff4d6d',hair:'#6b3d78',skin:'#ffe3d0'},
 symbols,scenes,
 soundtrack:{base:220,scale:[0,2,3,7,8],bpm:72,
  patterns:[[0,null,2,null,4,null,3,null],[0,2,3,null,4,3,2,null],[4,3,2,0,2,3,4,3],[0,null,null,2,null,null,4,null]],
  chords:[[220,261.63,329.63],[261.63,329.63,392],[174.61,220,261.63],[220,261.63,329.63]],
  wind:[.025,.035,.1,.02]}};
}

/* ---------- рантайм: рендер = f(t) ---------- */
const canvas=$('screen'),ctx=canvas.getContext('2d');
const p2d=new WeakMap(),pcache=new WeakMap();
function pathOf(d){let p=p2d.get(d);if(!p){p=new Path2D();
  for(const c of d){switch(c[0]){
    case 'M':p.moveTo(c[1],c[2]);break;case 'L':p.lineTo(c[1],c[2]);break;
    case 'Q':p.quadraticCurveTo(c[1],c[2],c[3],c[4]);break;
    case 'C':p.bezierCurveTo(c[1],c[2],c[3],c[4],c[5],c[6]);break;
    case 'E':p.moveTo(c[1]+c[3],c[2]);p.ellipse(c[1],c[2],c[3],c[4],0,0,Math.PI*2);break;
    case 'Z':p.closePath();break;}}
  p2d.set(d,p);}return p;}
function grad(f){if(typeof f==='string')return f;let g;
  if(f.type==='linear')g=ctx.createLinearGradient(f.from[0],f.from[1],f.to[0],f.to[1]);
  else g=ctx.createRadialGradient(f.c[0],f.c[1],f.r0||0,f.c[0],f.c[1],f.r);
  for(const s of f.stops)g.addColorStop(s[0],s[1]);return g;}
function paint(path,fill,stroke,ov){
  if(fill){ctx.fillStyle=ov||grad(fill);ctx.fill(path);}
  if(stroke){ctx.strokeStyle=ov||stroke.color;ctx.lineWidth=stroke.width||2;ctx.lineCap=stroke.cap||'round';ctx.lineJoin='round';ctx.stroke(path);}}
function drawPart(part,t,ov){
  const px=part.pivot?part.pivot[0]:0,py=part.pivot?part.pivot[1]:0;
  ctx.save();
  ctx.globalAlpha*=P(part,'opacity',t,1);
  ctx.translate(px+P(part,'x',t,0),py+P(part,'y',t,0));
  ctx.rotate(P(part,'rot',t,0)*Math.PI/180);
  ctx.scale(P(part,'sx',t,1),P(part,'sy',t,1));
  ctx.translate(-px,-py);
  if(part.paths)for(const pp of part.paths)paint(pathOf(pp.d),pp.fill,pp.stroke,ov);
  if(part.children)for(const ch of part.children)drawPart(ch,t,ov);
  ctx.restore();}
function drawSymbol(sym,t,ov){for(const part of sym.parts)drawPart(part,t,ov);}
function partsOf(L){let arr=pcache.get(L);if(arr)return arr;
  const e=L.emitter,rnd=mulberry32(e.seed||1);arr=[];
  const refs=L.refs||null;
  for(let i=0;i<e.count;i++){const life=lerp(e.life[0],e.life[1],rnd());
    arr.push({ref:refs?refs[Math.floor(rnd()*refs.length)]:L.ref,
      x:lerp(e.area[0],e.area[0]+e.area[2],rnd()),y:lerp(e.area[1],e.area[1]+e.area[3],rnd()),
      vx:lerp(e.vel[0][0],e.vel[0][1],rnd()),vy:lerp(e.vel[1][0],e.vel[1][1],rnd()),
      life,ph:rnd()*life,size:lerp(e.size[0],e.size[1],rnd()),rot:rnd()*360,
      spin:lerp(-(e.spin||0),e.spin||0,rnd()),
      swA:e.sway?lerp(e.sway.amp[0],e.sway.amp[1],rnd()):0,
      swF:e.sway?lerp(e.sway.freq[0],e.sway.freq[1],rnd()):0,
      tw:e.twinkle?lerp(.5,2,rnd()):0,
      tint:L.tints?L.tints[Math.floor(rnd()*L.tints.length)]:(L.tint||null),
      base:e.alpha?lerp(e.alpha[0],e.alpha[1],rnd()):1});}
  pcache.set(L,arr);return arr;}
function drawParticles(L,t,film){
  const e=L.emitter,g=e.gravity||0;
  for(const p of partsOf(L)){
    const age=(t+p.ph)%p.life,u=age/p.life;
    let a=p.base*Math.min(1,u*6)*Math.min(1,(1-u)*4);
    if(e.twinkle)a*=.55+.45*Math.sin(t*p.tw*3+p.ph*7);
    if(a<=.01)continue;
    ctx.save();ctx.globalAlpha*=a;
    ctx.translate(p.x+p.vx*age+Math.sin(age*p.swF+p.ph)*p.swA,p.y+p.vy*age+.5*g*age*age);
    ctx.rotate((p.rot+p.spin*age)*Math.PI/180);
    const s=p.size/100;ctx.scale(s,s);
    drawSymbol(film.symbols[p.ref],t,p.tint);
    ctx.restore();}}
function drawText(L,t){
  ctx.translate(P(L,'x',t,0),P(L,'y',t,0));
  ctx.rotate(P(L,'rot',t,0)*Math.PI/180);
  const s=P(L,'scale',t,1);ctx.scale(s,s);
  ctx.font=(L.weight||600)+' '+(L.size||28)+'px '+(L.font||'"Manrope",system-ui,sans-serif');
  ctx.textAlign=L.align||'center';ctx.textBaseline='middle';
  if(L.shadow){ctx.shadowColor=L.shadow.color;ctx.shadowBlur=L.shadow.blur;}
  const ls=('letterSpacing' in ctx);
  if(ls&&L.spacing)ctx.letterSpacing=L.spacing+'px';
  ctx.fillStyle=grad(L.fill||'#fff');
  ctx.fillText(L.text,0,0);
  if(ls)ctx.letterSpacing='0px';}
function drawLayer(L,t,film){
  const op=P(L,'opacity',t,1);if(op<=.001)return;
  ctx.save();ctx.globalAlpha*=op;
  if(L.blend)ctx.globalCompositeOperation=L.blend;
  switch(L.type){
    case 'sky':{const stops=P(L,'stops',t,L.stops);
      const g=ctx.createLinearGradient(0,0,0,720);
      const offs=L.offsets||stops.map((_,i)=>i/(stops.length-1));
      stops.forEach((c,i)=>g.addColorStop(offs[i],c));
      ctx.fillStyle=g;ctx.fillRect(-400,-300,2080,1320);break;}
    case 'rect':ctx.fillStyle=grad(L.fill);ctx.fillRect(L.x,L.y,L.w,L.h);break;
    case 'symbol':{const sym=film.symbols[L.ref];if(!sym)break;
      const s=P(L,'scale',t,1);
      ctx.translate(P(L,'x',t,0),P(L,'y',t,0));
      ctx.rotate(P(L,'rot',t,0)*Math.PI/180);
      ctx.scale(s*P(L,'sx',t,1),s*P(L,'sy',t,1));
      drawSymbol(sym,t+(L.timeShift||0),L.silhouette?L.tint:(L.tint||null));break;}
    case 'particles':drawParticles(L,t,film);break;
    case 'text':drawText(L,t);break;}
  ctx.restore();}
function drawScene(sc,t,film){
  ctx.save();
  const cam=sc.camera||{};
  ctx.translate(640,360);
  ctx.scale(P(cam,'zoom',t,1),P(cam,'zoom',t,1));
  ctx.rotate(P(cam,'rot',t,0)*Math.PI/180);
  ctx.translate(-P(cam,'x',t,640),-P(cam,'y',t,360));
  ctx.fillStyle=film.meta.background||'#000';
  ctx.fillRect(-400,-300,2080,1320);
  for(const L of sc.layers)drawLayer(L,t,film);
  ctx.restore();}
/* зерно плёнки */
const nz=document.createElement('canvas');nz.width=nz.height=160;
(function(){const c=nz.getContext('2d'),id=c.createImageData(160,160);
  for(let i=0;i<id.data.length;i+=4){const v=Math.random()*255|0;id.data[i]=id.data[i+1]=id.data[i+2]=v;id.data[i+3]=22;}
  c.putImageData(id,0,0);})();
let grainPat=null;
function postFX(t){
  const vg=ctx.createRadialGradient(640,360,340,640,360,780);
  vg.addColorStop(0,'rgba(10,6,20,0)');vg.addColorStop(1,'rgba(10,6,20,.42)');
  ctx.fillStyle=vg;ctx.fillRect(0,0,1280,720);
  if(!grainPat)grainPat=ctx.createPattern(nz,'repeat');
  ctx.save();ctx.globalAlpha=state.cinema?.5:.3;
  ctx.translate(-((t*60)%160),-((t*37)%160));
  ctx.fillStyle=grainPat;ctx.fillRect(0,0,1440,880);ctx.restore();
  if(state.cinema){ctx.fillStyle='#05030c';ctx.fillRect(0,0,1280,46);ctx.fillRect(0,674,1280,46);}
  ctx.font='600 11px "JetBrains Mono",monospace';ctx.textAlign='right';ctx.textBaseline='middle';
  ctx.fillStyle='rgba(255,255,255,.3)';ctx.fillText('ANM/1',1246,697);}
function sceneIndex(t){const scs=state.film.scenes;let idx=0;
  for(let i=0;i<scs.length;i++)if(t>=scs[i].start)idx=i;return idx;}
function render(t){
  const k=Math.min(window.devicePixelRatio||1,2);
  if(canvas.width!==Math.round(1280*k)){canvas.width=Math.round(1280*k);canvas.height=Math.round(720*k);grainPat=null;}
  ctx.setTransform(k,0,0,k,0,0);
  ctx.clearRect(0,0,1280,720);
  const film=state.film,scs=film.scenes,idx=sceneIndex(t),sc=scs[idx];
  const lt=clamp(t-sc.start,0,sc.end-sc.start),tr=sc.transition;
  if(idx>0&&tr&&lt<tr.duration){
    const prev=scs[idx-1],pt=clamp(t-prev.start,0,prev.end-prev.start),u=lt/tr.duration;
    if(tr.type==='dip'){const c=tr.color||'#000';
      if(u<.5){drawScene(prev,pt,film);ctx.globalAlpha=u*2;ctx.fillStyle=c;ctx.fillRect(0,0,1280,720);ctx.globalAlpha=1;}
      else{drawScene(sc,lt,film);ctx.globalAlpha=(1-u)*2;ctx.fillStyle=c;ctx.fillRect(0,0,1280,720);ctx.globalAlpha=1;}}
    else if(tr.type==='iris'){drawScene(prev,pt,film);
      ctx.save();ctx.beginPath();ctx.arc(tr.cx||640,tr.cy||360,Math.max(.01,EASE.inOut(u)*820),0,7);ctx.clip();
      drawScene(sc,lt,film);ctx.restore();}
    else{drawScene(prev,pt,film);ctx.globalAlpha=EASE.inOut(u);drawScene(sc,lt,film);ctx.globalAlpha=1;}}
  else drawScene(sc,lt,film);
  postFX(t);}

/* ---------- состояние и цикл ---------- */
const state={film:null,t:0,playing:false,speed:1,loop:true,cinema:true,muted:false,started:false,json:''};
let dirty=true,last=performance.now(),lastHud='';
const SEG_COLORS=['#ff5c8a','#ffb347','#7c6cff','#3fd8c7'];
function loop(now){
  const dt=Math.min(.1,(now-last)/1000);last=now;
  if(state.playing){
    state.t+=dt*state.speed;
    const d=state.film.meta.duration;
    if(state.t>=d){
      if(state.loop){state.t%=d;audioReset();}
      else{state.t=d;setPlaying(false);$('endCard').hidden=false;}}
    dirty=true;tickAudio();}
  if(dirty){render(state.t);dirty=false;updateHUD();}
  requestAnimationFrame(loop);}
function updateHUD(){
  const d=state.film.meta.duration,idx=sceneIndex(state.t),sc=state.film.scenes[idx];
  const key=state.t.toFixed(1)+'|'+idx+'|'+state.playing;
  if(key===lastHud)return;lastHud=key;
  $('timeCur').textContent=fmtTime(state.t);
  const pct=(state.t/d*100)+'%';
  $('tlFill').style.width=pct;$('tlHandle').style.left=pct;
  $('sceneLabel').textContent='Сцена '+(idx+1)+'/'+state.film.scenes.length+' · '+sc.name;
  $('icoPlay').hidden=state.playing;$('icoPause').hidden=!state.playing;
  document.querySelectorAll('.chip').forEach((c,i)=>c.classList.toggle('active',i===idx));}
function setPlaying(v){
  state.playing=v;
  if(v){state.started=true;$('poster').classList.add('hide');$('endCard').hidden=true;
    ensureAudio();if(actx)actx.resume();audioReset();}
  else if(actx)actx.suspend();
  dirty=true;lastHud='';}
function seek(t){state.t=clamp(t,0,state.film.meta.duration);$('endCard').hidden=true;audioReset();dirty=true;lastHud='';}

/* ---------- звук: генеративная партитура ---------- */
let actx=null,master=null,windGain=null,nextBeat=0,lastSceneIdx=-1;
const EIGHTH=60/72/2;
function ensureAudio(){
  if(actx)return;
  try{
    actx=new (window.AudioContext||window.webkitAudioContext)();
    master=actx.createGain();master.gain.value=state.muted?0:.9;master.connect(actx.destination);
    const len=2*actx.sampleRate,buf=actx.createBuffer(1,len,actx.sampleRate),ch=buf.getChannelData(0);
    for(let i=0;i<len;i++)ch[i]=Math.random()*2-1;
    const src=actx.createBufferSource();src.buffer=buf;src.loop=true;
    const bp=actx.createBiquadFilter();bp.type='bandpass';bp.frequency.value=480;bp.Q.value=.6;
    windGain=actx.createGain();windGain.gain.value=0;
    src.connect(bp);bp.connect(windGain);windGain.connect(master);src.start();
  }catch(e){actx=null;}}
function pluck(f,when,vol){
  const o=actx.createOscillator();o.type='triangle';o.frequency.value=f;
  const o2=actx.createOscillator();o2.type='sine';o2.frequency.value=f*2;
  const g=actx.createGain(),g2=actx.createGain();g2.gain.value=.25;
  const fl=actx.createBiquadFilter();fl.type='lowpass';fl.frequency.value=2200;
  g.gain.setValueAtTime(0,when);g.gain.linearRampToValueAtTime(vol,when+.008);
  g.gain.exponentialRampToValueAtTime(.0001,when+1.4);
  o.connect(g);o2.connect(g2);g2.connect(g);g.connect(fl);fl.connect(master);
  o.start(when);o2.start(when);o.stop(when+1.5);o2.stop(when+1.5);}
function pad(chord){
  const now=actx.currentTime;
  for(const f of chord){
    const o=actx.createOscillator();o.type='sine';o.frequency.value=f/2;
    const g=actx.createGain();g.gain.setValueAtTime(0,now);
    g.gain.linearRampToValueAtTime(.035,now+.8);g.gain.linearRampToValueAtTime(0,now+4.5);
    o.connect(g);g.connect(master);o.start(now);o.stop(now+4.6);}}
function audioReset(){nextBeat=Math.floor(state.t/EIGHTH);lastSceneIdx=-1;}
function noteFreq(st,n){const s=st.scale;return st.base*Math.pow(2,s[n%s.length]/12+Math.floor(n/s.length));}
function tickAudio(){
  if(!actx||actx.state!=='running')return;
  const st=state.film.soundtrack;if(!st)return;
  const idx=sceneIndex(state.t);
  if(idx!==lastSceneIdx){
    lastSceneIdx=idx;
    if(st.chords&&st.chords[idx])pad(st.chords[idx]);
    pluck(660,actx.currentTime+.02,.07);pluck(990,actx.currentTime+.14,.05);
    if(windGain&&st.wind)windGain.gain.setTargetAtTime(st.wind[idx]||0,actx.currentTime,.6);}
  const pat=st.patterns[idx];if(!pat)return;
  let b=Math.max(nextBeat,Math.floor(state.t/EIGHTH));
  while(b*EIGHTH<state.t+.3){
    const ft=b*EIGHTH;
    if(ft>=state.t-.02){
      const n=pat[b%pat.length];
      if(n!==null&&n!==undefined)pluck(noteFreq(st,n),actx.currentTime+Math.max(0,(ft-state.t)/state.speed),.12);}
    b++;}
  nextBeat=b;}
function setMuted(m){
  state.muted=m;
  if(master)master.gain.setTargetAtTime(m?0:.9,actx.currentTime,.05);
  $('icoSoundOn').hidden=m;$('icoSoundOff').hidden=!m;
  $('soundLabel').textContent=m?'Тихо':'Звук вкл';
  $('btnSound').setAttribute('aria-pressed',String(!m));}

/* ---------- загрузка / валидация / экспорт ---------- */
function validate(d){
  if(!d||typeof d!=='object')return 'файл не является JSON-объектом';
  if(typeof d.format!=='string'||d.format.indexOf('ANM')!==0)return 'нет сигнатуры "format": "ANM/1"';
  const m=d.meta;
  if(!m||!(m.duration>0)||!(m.width>0)||!(m.height>0)||!(m.fps>0))return 'в meta нужны duration, width, height, fps > 0';
  if(!Array.isArray(d.scenes)||!d.scenes.length)return 'нужен непустой массив scenes';
  if(!d.symbols||typeof d.symbols!=='object')return 'нужен объект symbols';
  for(const s of d.scenes){
    if(!(typeof s.start==='number')||!(s.end>s.start)||!Array.isArray(s.layers))return 'сцена «'+(s.name||s.id||'?')+'»: нужны start, end > start и layers[]';
    for(const L of s.layers){
      if(L.type==='symbol'&&!d.symbols[L.ref])return 'не найден символ «'+L.ref+'»';
      if(L.type==='particles'){const refs=L.refs||[L.ref];
        for(const r of refs)if(!d.symbols[r])return 'не найден символ частиц «'+r+'»';}}}
  return null;}
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function highlight(json){
  return esc(json).replace(/("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
    (m,str,colon,bool)=>{
      if(str)return '<span class="'+(colon?'jk':'js')+'">'+str+'</span>'+(colon||'');
      if(bool)return '<span class="jb">'+bool+'</span>';
      return '<span class="jn">'+m+'</span>';});}
function loadFilm(d,silent){
  const err=validate(d);
  if(err){toast('Файл отклонён: '+err,'err');return false;}
  d.scenes=d.scenes.slice().sort((a,b)=>a.start-b.start);
  state.film=d;state.t=0;state.started=false;state.playing=false;
  if(actx)actx.suspend();
  state.json=JSON.stringify(d,null,2);
  const m=d.meta;
  document.title=m.title+' · ANM-плеер';
  $('posterTitle').textContent=m.title.split('—')[0].trim();
  $('posterSub').textContent=(m.title.split('—')[1]||'векторный мультфильм').trim().toUpperCase();
  $('posterMeta').textContent=m.duration+' с · '+d.scenes.length+' сцены · '+m.width+'×'+m.height+' · '+m.fps+' к/с';
  $('poster').classList.remove('hide');$('endCard').hidden=true;
  $('timeDur').textContent=fmtTime(m.duration);
  /* сегменты таймлайна */
  $('tlSegs').innerHTML=d.scenes.map((s,i)=>'<div class="tl-seg" style="width:'+((s.end-s.start)/m.duration*100)+'%;background:'+SEG_COLORS[i%4]+'"></div>').join('');
  /* чипы */
  $('chips').innerHTML='';
  d.scenes.forEach((s,i)=>{
    const b=document.createElement('button');b.className='chip';
    b.innerHTML='<i style="background:'+SEG_COLORS[i%4]+'"></i>'+String(i+1).padStart(2,'0')+' · '+esc(s.name||s.id);
    b.onclick=()=>{seek(s.start+.01);setPlaying(true);};
    $('chips').appendChild(b);});
  /* статистика */
  const layers=d.scenes.reduce((a,s)=>a+s.layers.length,0);
  const kb=(new Blob([state.json]).size/1024).toFixed(1);
  const stats=[['Разрешение',m.width+'×'+m.height],['Частота',m.fps+' к/с'],['Длительность',m.duration+' с'],['Сцены',d.scenes.length],['Символы',Object.keys(d.symbols).length],['Слои',layers],['Вес файла',kb+' КБ']];
  $('stats').innerHTML=stats.map(s=>'<div class="stat"><div class="k">'+s[0]+'</div><div class="v">'+s[1]+'</div></div>').join('');
  /* карточки сцен */
  $('sceneCards').innerHTML='';
  d.scenes.forEach((s,i)=>{
    const c=document.createElement('div');c.className='scene-card';c.style.borderTopColor=SEG_COLORS[i%4];
    c.innerHTML='<div class="num">СЦЕНА '+String(i+1).padStart(2,'0')+' · '+s.layers.length+' слоёв</div><h4>'+esc(s.name||s.id)+'</h4><div class="tc">'+fmtTime(s.start)+' → '+fmtTime(s.end)+'</div><p>'+esc(s.desc||'')+'</p>';
    const b=document.createElement('button');b.className='btn';b.textContent='▶ Смотреть сцену';
    b.onclick=()=>{seek(s.start+.01);setPlaying(true);$('player').scrollIntoView({behavior:'smooth'});};
    c.appendChild(b);$('sceneCards').appendChild(c);});
  /* исходник */
  $('srcSize').textContent='application/x-anm+json · '+kb+' КБ · '+state.json.split('\n').length+' строк';
  $('codeEl').innerHTML=highlight(state.json);
  audioReset();dirty=true;lastHud='';
  if(!silent)toast('Фильм загружен: '+m.title,'ok');
  return true;}
function exportANM(){
  const blob=new Blob([state.json],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download='daybreak.anm';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),2000);
  toast('Исходник .anm сохранён','ok');}
function toast(msg,type){
  const box=$('toasts');
  while(box.children.length>=4)box.firstChild.remove();
  const t=document.createElement('div');t.className='toast '+(type||'');t.textContent=msg;
  box.appendChild(t);setTimeout(()=>t.remove(),3800);}

/* ---------- управление ---------- */
$('poster').addEventListener('click',()=>setPlaying(true));
$('btnPlay').onclick=()=>setPlaying(!state.playing);
$('replayBtn').onclick=()=>{seek(0);setPlaying(true);};
$('endDownload').onclick=exportANM;
$('btnDownload').onclick=exportANM;
$('btnDownload2').onclick=exportANM;
$('btnSound').onclick=()=>setMuted(!state.muted);
$('btnPrev').onclick=()=>{const scs=state.film.scenes,i=sceneIndex(state.t);
  seek(state.t-scs[i].start>1.5?scs[i].start:scs[Math.max(0,i-1)].start);};
$('btnNext').onclick=()=>{const scs=state.film.scenes,i=sceneIndex(state.t);
  seek(i<scs.length-1?scs[i+1].start:state.film.meta.duration);};
$('selSpeed').onchange=e=>{state.speed=parseFloat(e.target.value);};
$('btnLoop').onclick=()=>{state.loop=!state.loop;$('btnLoop').classList.toggle('active',state.loop);$('btnLoop').setAttribute('aria-pressed',String(state.loop));};
$('btnCinema').onclick=()=>{state.cinema=!state.cinema;$('btnCinema').classList.toggle('active',state.cinema);$('btnCinema').setAttribute('aria-pressed',String(state.cinema));dirty=true;};
$('btnShot').onclick=()=>{render(state.t);
  const a=document.createElement('a');a.href=canvas.toDataURL('image/png');
  a.download='anm-frame-'+state.t.toFixed(1)+'s.png';a.click();
  toast('Кадр сохранён в PNG','ok');};
$('btnFS').onclick=()=>{
  if(document.fullscreenElement)document.exitFullscreen();
  else if($('stage').requestFullscreen)$('stage').requestFullscreen();};
$('screenWrap').addEventListener('click',e=>{
  if(e.target.closest('.poster')||e.target.closest('.end-card'))return;
  if(state.started)setPlaying(!state.playing);});
$('screenWrap').addEventListener('dblclick',e=>{
  if(e.target.closest('.poster')||e.target.closest('.end-card'))return;
  $('btnFS').click();});
/* перемотка */
const tl=$('tl');let scrubbing=false,wasPlaying=false;
function tlSeek(e){const r=tl.getBoundingClientRect();
  seek(clamp((e.clientX-r.left)/r.width,0,1)*state.film.meta.duration);}
tl.addEventListener('pointerdown',e=>{tl.setPointerCapture(e.pointerId);scrubbing=true;wasPlaying=state.playing;
  if(state.playing)setPlaying(false);tlSeek(e);});
tl.addEventListener('pointermove',e=>{
  const r=tl.getBoundingClientRect(),u=clamp((e.clientX-r.left)/r.width,0,1);
  const tip=$('tlTip');tip.style.left=(u*100)+'%';tip.textContent=fmtTime(u*state.film.meta.duration);
  if(scrubbing)tlSeek(e);});
tl.addEventListener('pointerup',()=>{scrubbing=false;if(wasPlaying)setPlaying(true);});
/* клавиатура */
document.addEventListener('keydown',e=>{
  if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;
  switch(e.code){
    case 'Space':e.preventDefault();setPlaying(!state.playing);break;
    case 'ArrowLeft':e.preventDefault();seek(state.t-5);break;
    case 'ArrowRight':e.preventDefault();seek(state.t+5);break;
    case 'Home':seek(0);break;case 'End':seek(state.film.meta.duration);break;
    case 'KeyM':setMuted(!state.muted);break;
    case 'KeyL':$('btnLoop').click();break;
    case 'KeyF':$('btnFS').click();break;}});
/* файлы */
$('btnOpen').onclick=()=>$('fileInput').click();
$('fileInput').addEventListener('change',e=>{
  const f=e.target.files[0];e.target.value='';
  if(f)readFilm(f);});
function readFilm(f){
  if(f.size>5*1024*1024){toast('Файл больше 5 МБ — это точно ANM?','err');return;}
  f.text().then(txt=>{let d;try{d=JSON.parse(txt);}catch(err){toast('Не удалось разобрать JSON: '+err.message,'err');return;}
    loadFilm(d,false);}).catch(()=>toast('Не удалось прочитать файл','err'));}
let dragDepth=0;
const sw=$('screenWrap');
sw.addEventListener('dragenter',e=>{e.preventDefault();dragDepth++;sw.classList.add('drag');});
sw.addEventListener('dragover',e=>e.preventDefault());
sw.addEventListener('dragleave',()=>{if(--dragDepth<=0){dragDepth=0;sw.classList.remove('drag');}});
sw.addEventListener('drop',e=>{e.preventDefault();dragDepth=0;sw.classList.remove('drag');
  const f=e.dataTransfer.files[0];if(f)readFilm(f);});
$('btnCopy').onclick=()=>{
  if(navigator.clipboard)navigator.clipboard.writeText(state.json).then(()=>toast('JSON скопирован','ok')).catch(()=>toast('Не удалось скопировать','err'));
  else toast('Буфер обмена недоступен','err');};
/* вкладки и навигация */
function openTab(name){
  document.querySelectorAll('.tabbar button').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.tab===name)));
  ['docs','scenes','source'].forEach(n=>$('tab-'+n).hidden=n!==name);}
document.querySelectorAll('.tabbar button').forEach(b=>b.onclick=()=>openTab(b.dataset.tab));
document.querySelectorAll('nav a[data-goto]').forEach(a=>a.addEventListener('click',()=>openTab(a.dataset.goto)));
/* появление секций */
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
/* старт */
loadFilm(buildFilm(),true);
render(0);
requestAnimationFrame(t=>{last=t;requestAnimationFrame(loop);});
})();
</script>
</body>
</html>






На основе данного кода создать полноценный формат vectorwebvideo, расширить необхадимый функцианал, Написать код для вставки в HTML для проигрывания видео, написать MCP для AI агентов.