/* ═══════════════════════════════════════════════════════════════════════
   GéoCulture — Bouton « Signaler un problème » (autonome)
   -----------------------------------------------------------------------
   Ajoute un petit bouton discret, toujours visible, qui ouvre une fenêtre
   de signalement. À l'envoi : envoie le signalement à une Cloud Function
   qui l'enregistre dans Firestore (100% interne, pas d'appli mail).

   INSTALLATION : ajoute avant la fermeture du body (après game.js) une
   balise script defer pointant vers  js/report.js?v=1

   RÉGLAGES : renseigne REPORT_TO ci-dessous (ton adresse).
   Option serveur : si tu déploies plus tard une Cloud Function qui envoie
   l'e-mail, mets son URL dans REPORT_ENDPOINT ; sinon laisse vide (= mailto).
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var REPORT_ENDPOINT = 'https://us-central1-geo-culture-73453.cloudfunctions.net/reportProblem'; // Cloud Function interne
  var REPORT_TO = '';                          // ← (facultatif) adresse affichée en secours si l'envoi échoue

  var CATEGORIES = [
    'Bug technique',
    'Erreur sur un lieu ou un indice',
    'Problème de paiement',
    'Suggestion',
    'Autre'
  ];

  var CSS = '' +
  '#gc-rep-btn{position:fixed;right:14px;bottom:14px;z-index:9000;display:flex;align-items:center;gap:7px;' +
    'padding:8px 12px;border-radius:20px;border:1px solid #2d3f5e;background:rgba(17,24,39,.82);color:#94a3b8;' +
    'font-family:"Baloo 2","DM Sans",sans-serif;font-size:12.5px;font-weight:600;cursor:pointer;' +
    'box-shadow:0 4px 14px rgba(0,0,0,.35);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);' +
    'opacity:.72;transition:opacity .15s,background .15s,color .15s,transform .15s}' +
  '#gc-rep-btn:hover{opacity:1;color:#e8eaf2;background:rgba(26,34,56,.95);transform:translateY(-1px)}' +
  '#gc-rep-btn svg{width:15px;height:15px;flex-shrink:0}' +
  '@media (max-width:600px){#gc-rep-btn span{display:none}#gc-rep-btn{padding:9px;border-radius:50%}}' +

  '#gc-rep-ov{position:fixed;inset:0;z-index:99998;display:flex;align-items:center;justify-content:center;padding:16px;' +
    'background:rgba(4,7,14,.72);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);opacity:0;transition:opacity .2s}' +
  '#gc-rep-ov.on{opacity:1}' +
  '#gc-rep{width:min(94vw,440px);max-height:92vh;overflow:auto;background:#0d1120;border:1px solid #1e2d45;border-radius:16px;' +
    'box-shadow:0 24px 70px rgba(0,0,0,.6);font-family:"Baloo 2","DM Sans",sans-serif;color:#e8eaf2;' +
    'transform:translateY(10px) scale(.985);transition:transform .2s}' +
  '#gc-rep-ov.on #gc-rep{transform:none}' +
  '#gc-rep-hd{display:flex;align-items:center;justify-content:space-between;padding:16px 18px 4px}' +
  '#gc-rep-hd h2{margin:0;font-size:18px;font-weight:800}' +
  '#gc-rep-x{background:none;border:none;color:#6b7280;font-size:22px;line-height:1;cursor:pointer;padding:2px 6px}' +
  '#gc-rep-x:hover{color:#e8eaf2}' +
  '#gc-rep-bd{padding:6px 18px 4px}' +
  '#gc-rep-bd p.intro{margin:0 0 12px;font-size:13px;color:#94a3b8;line-height:1.5}' +
  '#gc-rep label{display:block;font-size:12px;color:#94a3b8;margin:10px 0 5px;font-weight:600}' +
  '#gc-rep select,#gc-rep textarea,#gc-rep input{width:100%;background:#111827;color:#e8eaf2;border:1px solid #2d3f5e;' +
    'border-radius:9px;padding:9px 11px;font-family:inherit;font-size:13.5px;outline:none}' +
  '#gc-rep select:focus,#gc-rep textarea:focus,#gc-rep input:focus{border-color:#f97316}' +
  '#gc-rep textarea{resize:vertical;min-height:96px}' +
  '#gc-rep-err{color:#ef4444;font-size:12px;min-height:14px;margin:6px 0 0}' +
  '#gc-rep-ft{display:flex;gap:10px;justify-content:flex-end;padding:12px 18px 18px}' +
  '.gc-rb{font-family:inherit;font-weight:700;font-size:13.5px;border-radius:10px;padding:10px 16px;cursor:pointer;border:1px solid transparent}' +
  '.gc-rb-x{background:#1a2238;color:#e8eaf2;border-color:#2d3f5e}.gc-rb-x:hover{background:#22304d}' +
  '.gc-rb-ok{background:#f97316;color:#0b1120}.gc-rb-ok:hover{filter:brightness(1.08)}' +
  '#gc-rep-done{padding:22px 18px;text-align:center}' +
  '#gc-rep-done .ic{font-size:34px}' +
  '#gc-rep-done p{margin:8px 0 0;font-size:14px;color:#b9c2d6;line-height:1.5}';

  var ov = null;

  function ctx() {
    var lines = [];
    lines.push('— — — (infos techniques, ne pas effacer) — — —');
    try { lines.push('Page : ' + location.href); } catch (e) {}
    lines.push('Date : ' + new Date().toLocaleString('fr-FR'));
    try { lines.push('Navigateur : ' + navigator.userAgent); } catch (e) {}
    lines.push('Écran : ' + (window.innerWidth || '?') + '×' + (window.innerHeight || '?'));
    try {
      if (typeof window.getCurrentUser === 'function') {
        var u = window.getCurrentUser();
        lines.push('Connecté : ' + (u ? ('oui (' + (u.uid || '') + ')') : 'non'));
      }
    } catch (e) {}
    return lines.join('\n');
  }

  function build() {
    var st = document.createElement('style'); st.id = 'gc-rep-style'; st.textContent = CSS;
    document.head.appendChild(st);

    var btn = document.createElement('button');
    btn.id = 'gc-rep-btn'; btn.type = 'button';
    btn.setAttribute('aria-label', 'Signaler un problème');
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>' +
      '<line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' +
      '<span>Signaler un problème</span>';
    btn.addEventListener('click', open);
    document.body.appendChild(btn);
  }

  function open() {
    if (!ov) {
      ov = document.createElement('div');
      ov.id = 'gc-rep-ov';
      ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true');
      var opts = '';
      for (var i = 0; i < CATEGORIES.length; i++) opts += '<option>' + CATEGORIES[i] + '</option>';
      ov.innerHTML =
        '<div id="gc-rep">' +
          '<div id="gc-rep-hd"><h2>Signaler un problème</h2><button id="gc-rep-x" type="button" aria-label="Fermer">×</button></div>' +
          '<div id="gc-rep-bd">' +
            '<p class="intro">Un bug, un lieu mal placé, une idée ? Décris-le, on regarde ça au plus vite. Merci !</p>' +
            '<label for="gc-rep-cat">Type de problème</label>' +
            '<select id="gc-rep-cat">' + opts + '</select>' +
            '<label for="gc-rep-msg">Description</label>' +
            '<textarea id="gc-rep-msg" placeholder="Que s\'est-il passé ? Sur quel lieu / quel mode ?"></textarea>' +
            '<label for="gc-rep-mail">Ton e-mail (facultatif, pour te répondre)</label>' +
            '<input id="gc-rep-mail" type="email" placeholder="toi@exemple.com">' +
            '<p id="gc-rep-err"></p>' +
          '</div>' +
          '<div id="gc-rep-ft">' +
            '<button class="gc-rb gc-rb-x" id="gc-rep-cancel" type="button">Annuler</button>' +
            '<button class="gc-rb gc-rb-ok" id="gc-rep-send" type="button">Envoyer</button>' +
          '</div>' +
        '</div>';
      document.body.appendChild(ov);
      ov.querySelector('#gc-rep-x').addEventListener('click', close);
      ov.querySelector('#gc-rep-cancel').addEventListener('click', close);
      ov.querySelector('#gc-rep-send').addEventListener('click', send);
      ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
      document.addEventListener('keydown', function (e) {
        if (ov && ov.classList.contains('on') && e.key === 'Escape') close();
      });
    } else {
      ov.style.display = '';
    }
    void ov.offsetWidth;
    ov.classList.add('on');
    setTimeout(function () { var m = ov.querySelector('#gc-rep-msg'); if (m) m.focus(); }, 60);
  }

  function close() {
    if (!ov) return;
    ov.classList.remove('on');
    setTimeout(function () { if (ov) ov.style.display = 'none'; }, 200);
  }

  function send() {
    var cat = ov.querySelector('#gc-rep-cat').value;
    var msg = ov.querySelector('#gc-rep-msg').value.trim();
    var mail = ov.querySelector('#gc-rep-mail').value.trim();
    var err = ov.querySelector('#gc-rep-err');
    if (msg.length < 5) { err.textContent = 'Merci de décrire le problème (au moins quelques mots).'; return; }
    err.textContent = '';

    var sendBtn = ov.querySelector('#gc-rep-send');
    sendBtn.disabled = true; sendBtn.textContent = 'Envoi…';

    fetch(REPORT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category: cat, message: msg, email: mail, context: ctx() })
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function () {
      done();
    }).catch(function () {
      sendBtn.disabled = false; sendBtn.textContent = 'Envoyer';
      err.textContent = 'Envoi impossible pour le moment, réessaie dans un instant.'
        + (REPORT_TO ? (' Ou écris-nous à ' + REPORT_TO + '.') : '');
    });
  }

  function done() {
    var card = ov.querySelector('#gc-rep');
    card.innerHTML =
      '<div id="gc-rep-done">' +
        '<div class="ic">✅</div>' +
        '<p>Merci ! Ton signalement a bien été envoyé.<br>On regarde ça au plus vite.</p>' +
        '<div style="margin-top:16px"><button class="gc-rb gc-rb-ok" id="gc-rep-close2" type="button">Fermer</button></div>' +
      '</div>';
    card.querySelector('#gc-rep-close2').addEventListener('click', function () {
      close();
      setTimeout(function () { if (ov) { ov.remove(); ov = null; } }, 220);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
