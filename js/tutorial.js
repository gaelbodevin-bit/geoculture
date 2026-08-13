/* ═══════════════════════════════════════════════════════════════════════
   GéoCulture — Tutoriel de premier lancement (capture + surbrillance)
   -----------------------------------------------------------------------
   Présente la VRAIE interface : chaque étape affiche une capture de l'écran
   de jeu et met en surbrillance la zone concernée, avec une explication.

   • S'affiche au 1er lancement (mémorisé via localStorage).
   • Case « Ne plus afficher », navigation clavier/tactile, accessible.
   • Rejouer : window.showTutorial()  |  forcer : window.showTutorial(true)

   INSTALLATION (2 fichiers) :
   1) Place l'image  tuto-interface.png  A LA RACINE du site (a cote d'index.html).
   2) Ajoute avant la fermeture du body, apres game.js, une balise script defer
      pointant vers js/tutorial.js?v=2
   Si tu ranges l'image ailleurs, change IMG_SRC ci-dessous.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var STORAGE_KEY = 'gc_tuto_seen_v2';
  var IMG_SRC = 'tuto-interface.png'; // chemin de la capture (racine du site)

  /* Etapes : spot = zone a surligner en % de l'image {l,t,w,h} (null = vue d'ensemble) */
  var STEPS = [
    {
      title: 'Bienvenue sur GéoCulture !',
      text: "Voici l'écran de jeu. On te décrit un lieu, tu dois le <b>localiser sur la carte</b>. Petit tour du propriétaire en quelques étapes.",
      spot: null
    },
    {
      title: "L'indice à déchiffrer",
      text: "À gauche : un <b>badge de difficulté</b> (ici EXPERT) et l'<b>indice</b> à résoudre. Plus le badge est difficile, plus l'indice est énigmatique… mais plus tu marques de points.",
      spot: { l: 0, t: 8.67, w: 25.9, h: 22.2 }
    },
    {
      title: "Besoin d'aide ? Change de niveau",
      text: "« <b>Indice suivant</b> » dévoile un indice plus facile : Expert → Difficile → Moyen → Facile. Pratique si tu sèches… mais le <b>score maximum baisse</b> à chaque fois.",
      spot: { l: 1.4, t: 84.33, w: 23.1, h: 6.17 }
    },
    {
      title: 'Ta progression',
      text: "Ces points indiquent à quel <b>niveau d'indice</b> tu en es (4 paliers, d'Expert à Facile).",
      spot: { l: 6, t: 66, w: 14, h: 7 }
    },
    {
      title: 'Le chrono',
      text: "Chaque manche est <b>chronométrée</b>. Le « score max restant » diminue avec le temps : réfléchis, mais ne traîne pas trop.",
      spot: { l: 0, t: 30.86, w: 25.9, h: 42.33 }
    },
    {
      title: 'Navigue et place ton point',
      text: "<b>Zoome</b> (molette ou +/−), déplace-toi, puis <b>clique sur la carte</b> à l'endroit que tu penses juste. Tu peux corriger ton marqueur tant que tu n'as pas validé.",
      spot: { l: 26, t: 8.67, w: 74, h: 91.33 }
    },
    {
      title: 'Vise juste : tout est dans la précision',
      text: "Quand tu es sûr, clique <b>Valider</b>. Ton score dépend de la <b>distance</b> entre ton point et le vrai lieu : plus tu es <b>précis</b>, plus tu gagnes.",
      spot: { l: 1.4, t: 91.83, w: 23.1, h: 5.83 }
    },
    {
      title: 'Score et manches',
      text: "En haut : la <b>manche</b> en cours, ton <b>score total</b> et le <b>maximum encore atteignable</b> sur cette manche.",
      spot: { l: 32.1, t: 1.67, w: 24.4, h: 5.17 }
    },
    {
      title: 'Des modes pour tous les goûts',
      text: "Depuis le <b>Menu</b> : <b>Classique</b>, <b>No-Zoom</b> (carte figée, pour les pros), <b>Perfection</b> (où seule la précision compte, vise le sans-faute), <b>Événements</b> historiques et <b>Multijoueur</b>. À toi de jouer !",
      spot: { l: 70.13, t: 2.17, w: 5.22, h: 4.17 }
    }
  ];

  var CSS = '' +
  '#gc-tuto-ov{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;' +
    'background:rgba(4,7,14,.78);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);opacity:0;transition:opacity .25s ease}' +
  '#gc-tuto-ov.gc-show{opacity:1}' +
  '#gc-tuto{width:min(94vw,620px);max-height:94vh;overflow:auto;background:#0d1120;border:1px solid #1e2d45;border-radius:18px;' +
    'box-shadow:0 24px 70px rgba(0,0,0,.6);font-family:"Baloo 2","DM Sans",sans-serif;color:#e8eaf2;' +
    'transform:translateY(12px) scale(.985);transition:transform .25s ease}' +
  '#gc-tuto-ov.gc-show #gc-tuto{transform:none}' +
  '#gc-shot{position:relative;margin:14px 14px 0;border-radius:12px;overflow:hidden;border:1px solid #1e2d45;background:#0b1120;aspect-ratio:1000/600}' +
  '#gc-shot img{display:block;width:100%;height:auto}' +
  '#gc-mask{position:absolute;inset:0;pointer-events:none;background:rgba(6,9,16,.35);transition:opacity .3s}' +
  '#gc-mask.hasspot{background:transparent}' +
  '#gc-spot{position:absolute;border-radius:8px;border:2px solid #f97316;box-shadow:0 0 0 9999px rgba(6,9,16,.62),0 0 18px rgba(249,115,22,.5);' +
    'transition:all .35s cubic-bezier(.4,0,.2,1);opacity:0}' +
  '#gc-spot.on{opacity:1}' +
  '#gc-tuto-body{padding:16px 22px 6px}' +
  '#gc-tuto-title{font-size:20px;font-weight:800;margin:0 0 7px}' +
  '#gc-tuto-text{font-size:14.5px;line-height:1.5;color:#b9c2d6;margin:0;min-height:60px}' +
  '#gc-tuto-text b{color:#f97316;font-weight:700}' +
  '#gc-tuto-dots{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;padding:12px 0 4px}' +
  '#gc-tuto-dots .d{width:8px;height:8px;border-radius:50%;background:#2d3f5e;transition:all .25s}' +
  '#gc-tuto-dots .d.on{background:#f97316;width:20px;border-radius:4px}' +
  '#gc-tuto-foot{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:6px 22px 16px}' +
  '#gc-tuto-skip{background:none;border:none;color:#6b7280;font-family:inherit;font-size:13px;cursor:pointer;padding:6px}' +
  '#gc-tuto-skip:hover{color:#94a3b8}' +
  '#gc-tuto-nav{display:flex;gap:10px}' +
  '.gc-btn{font-family:inherit;font-weight:700;font-size:14px;border-radius:10px;padding:10px 18px;cursor:pointer;border:1px solid transparent;transition:filter .15s,background .15s}' +
  '.gc-btn-prev{background:#1a2238;color:#e8eaf2;border-color:#2d3f5e}.gc-btn-prev:hover{background:#22304d}' +
  '.gc-btn-next{background:#f97316;color:#0b1120}.gc-btn-next:hover{filter:brightness(1.08)}' +
  '#gc-tuto-again{display:flex;align-items:center;gap:8px;padding:0 22px 16px;color:#6b7280;font-size:12.5px;cursor:pointer;user-select:none}' +
  '#gc-tuto-again input{width:15px;height:15px;accent-color:#f97316;cursor:pointer}' +
  '@media (max-width:480px){#gc-tuto-title{font-size:18px}#gc-tuto-text{font-size:13.5px}}' +
  '@media (prefers-reduced-motion:reduce){#gc-mask,#gc-spot{transition:none}}';

  var idx = 0, ov = null, dontShow = true;

  function build() {
    var style = document.createElement('style');
    style.id = 'gc-tuto-style'; style.textContent = CSS;
    document.head.appendChild(style);

    ov = document.createElement('div');
    ov.id = 'gc-tuto-ov';
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    ov.setAttribute('aria-label', 'Tutoriel GéoCulture');
    ov.innerHTML =
      '<div id="gc-tuto">' +
        '<div id="gc-shot">' +
          '<img src="' + IMG_SRC + '" alt="Aperçu de l\'interface de GéoCulture">' +
          '<div id="gc-mask"><div id="gc-spot"></div></div>' +
        '</div>' +
        '<div id="gc-tuto-body">' +
          '<h2 id="gc-tuto-title"></h2>' +
          '<p id="gc-tuto-text"></p>' +
          '<div id="gc-tuto-dots"></div>' +
        '</div>' +
        '<div id="gc-tuto-foot">' +
          '<button id="gc-tuto-skip" type="button">Passer</button>' +
          '<div id="gc-tuto-nav">' +
            '<button class="gc-btn gc-btn-prev" id="gc-tuto-prev" type="button">Précédent</button>' +
            '<button class="gc-btn gc-btn-next" id="gc-tuto-next" type="button">Suivant</button>' +
          '</div>' +
        '</div>' +
        '<label id="gc-tuto-again"><input type="checkbox" id="gc-tuto-chk" checked> Ne plus afficher au démarrage</label>' +
      '</div>';
    document.body.appendChild(ov);

    var dots = ov.querySelector('#gc-tuto-dots');
    for (var i = 0; i < STEPS.length; i++) { var d = document.createElement('span'); d.className = 'd'; dots.appendChild(d); }

    ov.querySelector('#gc-tuto-next').addEventListener('click', next);
    ov.querySelector('#gc-tuto-prev').addEventListener('click', prev);
    ov.querySelector('#gc-tuto-skip').addEventListener('click', close);
    ov.querySelector('#gc-tuto-chk').addEventListener('change', function (e) { dontShow = e.target.checked; });
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    document.addEventListener('keydown', onKey);

    var x0 = null;
    ov.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    ov.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (dx < -40) next(); else if (dx > 40) prev();
      x0 = null;
    }, { passive: true });
  }

  function render() {
    var s = STEPS[idx];
    ov.querySelector('#gc-tuto-title').innerHTML = s.title;
    ov.querySelector('#gc-tuto-text').innerHTML = s.text;
    var spot = ov.querySelector('#gc-spot');
    var mask = ov.querySelector('#gc-mask');
    if (s.spot) {
      spot.style.left = s.spot.l + '%';
      spot.style.top = s.spot.t + '%';
      spot.style.width = s.spot.w + '%';
      spot.style.height = s.spot.h + '%';
      spot.classList.add('on');
      mask.classList.add('hasspot');
    } else {
      spot.classList.remove('on');
      mask.classList.remove('hasspot');
    }
    var dots = ov.querySelectorAll('#gc-tuto-dots .d');
    for (var i = 0; i < dots.length; i++) dots[i].classList.toggle('on', i === idx);
    ov.querySelector('#gc-tuto-prev').style.visibility = idx === 0 ? 'hidden' : 'visible';
    ov.querySelector('#gc-tuto-next').textContent = (idx === STEPS.length - 1) ? 'Commencer !' : 'Suivant';
  }

  function next() { if (idx < STEPS.length - 1) { idx++; render(); } else close(); }
  function prev() { if (idx > 0) { idx--; render(); } }

  function onKey(e) {
    if (!ov || !ov.classList.contains('gc-show')) return;
    if (e.key === 'ArrowRight' || e.key === 'Enter') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    else if (e.key === 'Escape') { e.preventDefault(); close(); }
  }

  function open() {
    idx = 0;
    if (!ov) build();
    render();
    void ov.offsetWidth;
    ov.classList.add('gc-show');
    ov.querySelector('#gc-tuto-next').focus();
  }

  function close() {
    if (!ov) return;
    ov.classList.remove('gc-show');
    try { if (dontShow) localStorage.setItem(STORAGE_KEY, '1'); } catch (e) {}
    setTimeout(function () { if (ov) ov.style.display = 'none'; }, 260);
  }

  function seen() { try { return localStorage.getItem(STORAGE_KEY) === '1'; } catch (e) { return false; } }

  window.showTutorial = function (force) {
    if (ov) ov.style.display = '';
    dontShow = true;
    if (force === true) { try { localStorage.removeItem(STORAGE_KEY); } catch (e) {} }
    open();
  };

  function auto() { if (seen()) return; setTimeout(open, 600); }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', auto);
  else auto();
})();