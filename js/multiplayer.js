// ?? GéoCulture Multijoueur — v3.0
// Fixes: tous jouent simultanément, panel live style Skribbl, marqueurs adversaires sur la map
import { initializeApp, getApps } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getDatabase, ref, set, get, onValue, off, push, update, remove, serverTimestamp as rtServerTimestamp }
  from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';

var firebaseConfig = {
  apiKey: "AIzaSyDm7KMECwQVWvnOnMmSVm8aK7FdP03QWyA",
  authDomain: "geo-culture-73453.firebaseapp.com",
  databaseURL: "https://geo-culture-73453-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "geo-culture-73453",
  storageBucket: "geo-culture-73453.firebasestorage.app",
  messagingSenderId: "701399534769",
  appId: "1:701399534769:web:ea9418505d8d2e9a9ea690"
};

var mpApp;
var _existingApps = getApps();
if(_existingApps.length > 0) {
  mpApp = _existingApps[0];
} else {
  mpApp = initializeApp(firebaseConfig);
}
var rtdb = getDatabase(mpApp, 'https://geo-culture-73453-default-rtdb.europe-west1.firebasedatabase.app');

// ??? État local ???????????????????????????????????????????????????????????????
var mp = {
  roomCode: null,
  playerId: null,
  playerName: null,
  isHost: false,
  roomRef: null,
  listeners: [],
  timerInterval: null
};

var mpCurrentRound = -1;
var mpAnswered = false;
// Markers Leaflet des autres joueurs sur la carte  { playerId: L.marker }
var mpOtherMarkers = {};

// ??? Couleurs par joueur (stable dans la session) ????????????????????????????
var MP_COLORS = ['#3b82f6','#a855f7','#ec4899','#14b8a6','#f59e0b','#06b6d4','#84cc16','#f43f5e'];
var _colorMap = {}; // playerId -> color
function mpColorFor(pid) {
  if(!_colorMap[pid]) {
    var used = Object.values(_colorMap).length;
    _colorMap[pid] = MP_COLORS[used % MP_COLORS.length];
  }
  return _colorMap[pid];
}

// ??? Utilitaires ?????????????????????????????????????????????????????????????
function genCode() {
  var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var code = '';
  for(var i=0;i<6;i++) code += chars[Math.floor(Math.random()*chars.length)];
  return code;
}
function genPlayerId() {
  return 'p_' + Math.random().toString(36).substr(2,9) + '_' + Date.now();
}
function getPlayerName() {
  var user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
  return user ? (user.displayName || user.email.split('@')[0]) : (mp.playerName || 'Joueur');
}
function getPlayerPhoto() {
  var user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
  return user ? (user.photoURL || '') : '';
}
function fmtPts(n) { return (n||0).toLocaleString('fr-FR'); }
function fmtDistShort(km) {
  if(km == null) return '—';
  if(km < 1) return Math.round(km*1000) + 'm';
  return Math.round(km) + 'km';
}

// ??? Créer un salon (Hôte) ???????????????????????????????????????????????????
function mpCreateRoom(options) {
  var code = genCode();
  mp.roomCode = code;
  mp.playerId = genPlayerId();
  mp.isHost = true;
  mp.roomRef = ref(rtdb, 'rooms/' + code);
  _colorMap = {};
  mpColorFor(mp.playerId); // assigner couleur hôte en premier

  var roomData = {
    code: code,
    host: mp.playerId,
    status: 'waiting',
    options: {
      fixedLevel: options.fixedLevel !== undefined ? options.fixedLevel : -1,
      noZoomMode: options.noZoomMode || false,
      perfectionMode: options.perfectionMode || false,
      nbRounds: options.nbRounds || 5,
      timerDuration: 30
    },
    players: {},
    round: 0,
    roundSeeds: null,
    createdAt: Date.now()
  };

  roomData.players[mp.playerId] = {
    name: getPlayerName(),
    photo: getPlayerPhoto(),
    color: mpColorFor(mp.playerId),
    isHost: true,
    score: 0,
    online: true,
    joinedAt: Date.now()
  };

  return set(mp.roomRef, roomData).then(function() {
    setTimeout(function(){ if(mp.roomRef) remove(mp.roomRef); }, 7200000);
    mpListenRoom();
    mpShowLobby();
    return code;
  });
}

// ??? Rejoindre un salon ???????????????????????????????????????????????????????
function mpJoinRoom(code, playerName) {
  code = code.toUpperCase().trim();
  mp.roomCode = code;
  mp.playerId = genPlayerId();
  mp.playerName = playerName;
  mp.isHost = false;
  mp.roomRef = ref(rtdb, 'rooms/' + code);

  return get(mp.roomRef).then(function(snap) {
    if(!snap.exists()) throw new Error('Salon introuvable');
    var room = snap.val();
    if(room.status !== 'waiting') throw new Error('Partie déjà commencée');
    var playerCount = Object.keys(room.players || {}).length;
    if(playerCount >= 8) throw new Error('Salon complet (8/8)');

    // Reconstruire la colorMap depuis les joueurs existants pour éviter collisions
    _colorMap = {};
    Object.entries(room.players || {}).forEach(function(e) {
      if(e[1].color) _colorMap[e[0]] = e[1].color;
    });

    var playerRef = ref(rtdb, 'rooms/' + code + '/players/' + mp.playerId);
    return set(playerRef, {
      name: getPlayerName() || playerName || 'Joueur',
      photo: getPlayerPhoto(),
      color: mpColorFor(mp.playerId),
      isHost: false,
      score: 0,
      online: true,
      joinedAt: Date.now()
    });
  }).then(function() {
    mpListenRoom();
    mpShowLobby();
  });
}

// ??? Écouter le salon ?????????????????????????????????????????????????????????
function mpListenRoom() {
  if(!mp.roomRef) return;
  var listener = onValue(mp.roomRef, function(snap) {
    if(!snap.exists()) { mpCleanup(); return; }
    var room = snap.val();
    mpHandleRoomChange(room);
  });
  mp.listeners.push({ref: mp.roomRef, fn: listener});
}

function mpHandleRoomChange(room) {
  // Mettre à jour le panel live pendant le jeu
  if(room.status === 'playing' || room.status === 'roundEnd') {
    mpUpdateLivePanel(room);
    mpUpdateOtherMarkersOnMap(room);
  }

  switch(room.status) {
    case 'waiting':   mpUpdateLobby(room); break;
    case 'countdown': mpShowCountdown(room); break;
    case 'playing':   mpStartRound(room); break;
    case 'roundEnd':  mpShowRoundResults(room); break;
    case 'finished':  mpShowFinalResults(room); break;
  }
}

// ??? Lobby ????????????????????????????????????????????????????????????????????
function mpShowLobby() {
  var ov = document.getElementById('overlay');
  ov.classList.remove('h');
  mpUpdateLobby(null);
}

function mpUpdateLobby(room) {
  var ov = document.getElementById('overlay');
  if(!room) {
    ov.innerHTML = '<div class="otitle" style="font-size:36px">GEO<br>CULTURE</div><div style="color:#94a3b8;font-size:14px;margin-top:8px">Chargement du salon...</div>';
    return;
  }

  var players = room.players || {};
  var playerList = Object.entries(players);
  var isHost = mp.isHost;
  var canStart = isHost && playerList.length >= 2;
  var opts = room.options || {};

  var h = [];
  h.push('<div style="text-align:center;margin-bottom:12px">');
  h.push('<div class="otitle" style="font-size:32px;margin-bottom:4px">MULTIJOUEUR</div>');
  h.push('<div style="font-size:13px;color:#94a3b8">Code du salon : <span style="font-family:monospace;font-size:20px;font-weight:700;color:#f97316;letter-spacing:4px;background:#1a2238;padding:4px 12px;border-radius:6px">'+room.code+'</span></div>');
  h.push('<div style="font-size:11px;color:#6b7280;margin-top:4px">Partage ce code avec tes amis</div>');
  h.push('</div>');

  // Infos partie
  var lvlNames = ['Tout niveaux','Expert','Difficile','Moyen','Facile'];
  var lvlLabel = lvlNames[(opts.fixedLevel>=0?opts.fixedLevel+1:0)] || 'Tout niveaux';
  h.push('<div style="display:flex;gap:8px;justify-content:center;margin-bottom:12px;flex-wrap:wrap">');
  h.push('<span style="background:#1a2238;border:1px solid #2d3f5e;border-radius:6px;padding:4px 10px;font-size:12px;color:#94a3b8">'+lvlLabel+'</span>');
  h.push('<span style="background:#1a2238;border:1px solid #2d3f5e;border-radius:6px;padding:4px 10px;font-size:12px;color:#94a3b8">'+(opts.noZoomMode?'No-Zoom':opts.perfectionMode?'Perfection':'Normal')+'</span>');
  h.push('<span style="background:#1a2238;border:1px solid #2d3f5e;border-radius:6px;padding:4px 10px;font-size:12px;color:#94a3b8">'+(opts.nbRounds||5)+' manches</span>');
  h.push('</div>');

  // Liste joueurs
  h.push('<div style="width:100%;max-width:400px;margin-bottom:12px">');
  h.push('<div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Joueurs ('+playerList.length+'/8)</div>');
  playerList.forEach(function(entry) {
    var pid = entry[0], p = entry[1];
    var isMe = pid === mp.playerId;
    var col = p.color || mpColorFor(pid);
    h.push('<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:'+(isMe?'#1a2238':'#0d1120')+';border:1px solid '+(isMe?col:'#1e2d45')+';border-radius:8px;margin-bottom:4px">');
    h.push('<div style="width:10px;height:10px;border-radius:50%;background:'+col+';flex-shrink:0"></div>');
    if(p.photo) {
      h.push('<img src="'+p.photo+'" style="width:28px;height:28px;border-radius:50%;object-fit:cover">');
    } else {
      h.push('<div style="width:28px;height:28px;border-radius:50%;background:#1e2d45;display:flex;align-items:center;justify-content:center;font-size:12px;color:#94a3b8">'+p.name[0].toUpperCase()+'</div>');
    }
    h.push('<span style="flex:1;font-size:13px;color:'+(isMe?col:'#e2e8f0')+';font-weight:'+(isMe?'700':'400')+'">'+p.name+(isMe?' (moi)':'')+'</span>');
    if(p.isHost) h.push('<span style="font-size:10px;color:#f97316;background:#3d1a05;padding:2px 6px;border-radius:4px">Hôte</span>');
    h.push('</div>');
  });
  h.push('</div>');

  // Boutons
  h.push('<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">');
  if(isHost) {
    h.push('<button onclick="mpLaunchGame()" '+(canStart?'':'disabled')+' style="padding:10px 28px;font-size:14px;font-weight:700;border-radius:9px;border:none;cursor:'+(canStart?'pointer':'not-allowed')+';background:'+(canStart?'#f97316':'#374151')+';color:#fff">');
    h.push(canStart ? '? Lancer la partie' : 'En attente (min. 2 joueurs)');
    h.push('</button>');
  } else {
    h.push('<div style="color:#94a3b8;font-size:13px;padding:10px">En attente que l\'hôte lance la partie...</div>');
  }
  h.push('<button onclick="mpLeaveRoom()" style="padding:10px 20px;font-size:13px;border-radius:9px;border:1px solid #2d3f5e;background:transparent;color:#94a3b8;cursor:pointer">Quitter</button>');
  h.push('</div>');

  ov.innerHTML = h.join('');
}

// ??? Lancer la partie (Hôte seulement) ???????????????????????????????????????
function mpLaunchGame() {
  if(!mp.isHost || !mp.roomRef) return;

  var seeds = [];
  var indices = [];
  for(var i=0;i<(typeof ROUNDS!=='undefined'?ROUNDS.length:493);i++) indices.push(i);
  var seed = Date.now();
  function seededRand(max) { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return Math.abs(seed) % max; }
  for(var j=indices.length-1;j>0;j--) {
    var k = seededRand(j+1);
    var tmp = indices[j]; indices[j] = indices[k]; indices[k] = tmp;
  }

  get(mp.roomRef).then(function(snap) {
    var opts = snap.val().options || {};
    seeds = indices.slice(0, opts.nbRounds || 5);
    update(mp.roomRef, {
      status: 'countdown',
      roundSeeds: seeds,
      countdownStart: Date.now(),
      round: 0
    });
  });
}

// ??? Compte à rebours ?????????????????????????????????????????????????????????
// FIX PRINCIPAL : le passage à 'playing' était conditionné par mp.isHost
// ? maintenant CHAQUE client gère son propre passage via timeout synchronisé
var _countdownDone = false;
function mpShowCountdown(room) {
  var ov = document.getElementById('overlay');
  var elapsed = Date.now() - (room.countdownStart || Date.now());
  var remaining = Math.max(0, 3000 - elapsed);
  var sec = Math.ceil(remaining / 1000);

  ov.innerHTML = '<div class="otitle" style="font-size:80px;color:#f97316">'+(sec||'?')+'</div><div style="font-size:16px;color:#94a3b8;margin-top:8px">La partie commence !</div>';
  ov.classList.remove('h');

  if(!_countdownDone && remaining <= 0) {
    _countdownDone = true;
    // Seul l'hôte écrit dans Firebase, mais TOUS les clients démarrent localement
    if(mp.isHost) {
      update(mp.roomRef, { status: 'playing', roundStart: Date.now() });
    }
    // Les non-hôtes seront déclenchés par mpHandleRoomChange quand status passe à 'playing'
  } else if(remaining > 0) {
    _countdownDone = false;
    setTimeout(function(){ mpShowCountdown(room); }, 200);
  }
}

// ??? Panel Live (style Skribbl) ???????????????????????????????????????????????
// Fenêtre flottante sur la carte qui montre les joueurs + si validé
function mpCreateLivePanel() {
  var existing = document.getElementById('mp-live-panel');
  if(existing) existing.remove();

  var panel = document.createElement('div');
  panel.id = 'mp-live-panel';
  panel.style.cssText = [
    'position:fixed',
    'top:12px',
    'right:12px',
    'z-index:9000',
    'background:rgba(13,17,32,0.92)',
    'backdrop-filter:blur(8px)',
    '-webkit-backdrop-filter:blur(8px)',
    'border:1px solid #1e2d45',
    'border-radius:12px',
    'padding:10px 12px',
    'min-width:170px',
    'max-width:220px',
    'box-shadow:0 4px 24px rgba(0,0,0,0.5)',
    'font-family:system-ui,sans-serif',
    'pointer-events:none'
  ].join(';');
  document.body.appendChild(panel);
  return panel;
}

function mpUpdateLivePanel(room) {
  // Ne montrer le panel que pendant le jeu (overlay caché)
  var ov = document.getElementById('overlay');
  if(!ov || !ov.classList.contains('h')) {
    var p = document.getElementById('mp-live-panel');
    if(p) p.style.display = 'none';
    return;
  }

  var panel = document.getElementById('mp-live-panel') || mpCreateLivePanel();
  panel.style.display = 'block';

  var rIdx = room.round || 0;
  var answers = (room.answers || {})[rIdx] || {};
  var players = room.players || {};
  var opts = room.options || {};
  var nbTotal = opts.nbRounds || 5;

  var sorted = Object.entries(players).sort(function(a,b){ return (b[1].score||0)-(a[1].score||0); });

  var html = [];
  html.push('<div style="font-size:10px;color:#f97316;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:7px">Manche '+(rIdx+1)+'/'+nbTotal+'</div>');

  sorted.forEach(function(entry) {
    var pid = entry[0], p = entry[1];
    var isMe = pid === mp.playerId;
    var col = p.color || mpColorFor(pid);
    var ans = answers[pid];
    var hasAnswered = ans !== undefined;
    var pts = hasAnswered ? (ans.pts || 0) : null;

    html.push('<div style="display:flex;align-items:center;gap:7px;padding:5px 0;border-bottom:1px solid #1e2d4544">');
    // Avatar / couleur
    if(p.photo) {
      html.push('<img src="'+p.photo+'" style="width:22px;height:22px;border-radius:50%;border:2px solid '+col+';flex-shrink:0;object-fit:cover">');
    } else {
      html.push('<div style="width:22px;height:22px;border-radius:50%;background:'+col+'33;border:2px solid '+col+';display:flex;align-items:center;justify-content:center;font-size:10px;color:'+col+';flex-shrink:0;font-weight:700">'+p.name[0].toUpperCase()+'</div>');
    }
    // Nom
    html.push('<span style="flex:1;font-size:12px;color:'+(isMe?col:'#e2e8f0')+';font-weight:'+(isMe?'700':'400')+';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+p.name+'</span>');
    // Statut : check si répondu, score total
    if(hasAnswered) {
      // Afficher le score gagné ce round en vert
      html.push('<span style="font-size:11px;color:#22c55e;font-weight:700;flex-shrink:0">+'+fmtPts(pts)+'</span>');
    } else {
      // Indicateur de frappe / en cours (3 points animés via CSS ou simple spinner)
      html.push('<span style="font-size:14px;color:#6b7280;flex-shrink:0">?</span>');
    }
    html.push('</div>');

    // Score total juste en dessous
    html.push('<div style="font-size:10px;color:#6b7280;padding-left:29px;padding-bottom:2px">'+fmtPts(p.score||0)+' pts total</div>');
  });

  panel.innerHTML = html.join('');
}

function mpRemoveLivePanel() {
  var p = document.getElementById('mp-live-panel');
  if(p) p.remove();
}

// ??? Marqueurs des autres joueurs sur la carte ????????????????????????????????
function mpUpdateOtherMarkersOnMap(room) {
  if(!window.map) return; // Leaflet pas prêt

  var rIdx = room.round || 0;
  var answers = (room.answers || {})[rIdx] || {};
  var players = room.players || {};

  // Nettoyer anciens markers qui ne sont plus valides
  Object.keys(mpOtherMarkers).forEach(function(pid) {
    if(!players[pid] || !answers[pid] || !answers[pid].pos) {
      if(mpOtherMarkers[pid]) { mpOtherMarkers[pid].remove(); delete mpOtherMarkers[pid]; }
    }
  });

  // Ajouter/mettre à jour les markers des autres joueurs qui ont répondu
  Object.entries(answers).forEach(function(entry) {
    var pid = entry[0], ans = entry[1];
    if(pid === mp.playerId) return; // pas le nôtre
    if(!ans.pos || ans.pos.lat == null) return;

    var p = players[pid];
    if(!p) return;
    var col = p.color || mpColorFor(pid);

    var iconHtml = '<div style="'
      + 'width:20px;height:20px;'
      + 'background:'+col+';'
      + 'border:2.5px solid #fff;'
      + 'border-radius:50% 50% 50% 0;'
      + 'transform:rotate(-45deg);'
      + 'box-shadow:0 2px 10px rgba(0,0,0,.5);'
      + 'position:relative'
      + '">'
      + '<div style="'
      + 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(45deg);'
      + 'font-size:8px;color:#fff;font-weight:700;line-height:1'
      + '">'+p.name[0].toUpperCase()+'</div>'
      + '</div>';

    var icon = L.divIcon({ className:'', html:iconHtml, iconSize:[20,20], iconAnchor:[10,20] });
    var popupContent = '<div style="font-family:system-ui,sans-serif;font-size:12px;line-height:1.5">'
      + '<b style="color:'+col+'">'+p.name+'</b><br>'
      + (ans.dist != null ? '<span style="color:#666">'+fmtDistShort(ans.dist)+'</span><br>' : '<span style="color:#666">Raté</span><br>')
      + '<span style="color:#f97316;font-weight:700">+'+fmtPts(ans.pts)+' pts</span>'
      + '</div>';

    if(mpOtherMarkers[pid]) {
      mpOtherMarkers[pid].setLatLng([ans.pos.lat, ans.pos.lng]);
      mpOtherMarkers[pid].setPopupContent(popupContent);
    } else {
      mpOtherMarkers[pid] = L.marker([ans.pos.lat, ans.pos.lng], {icon:icon})
        .bindPopup(popupContent)
        .addTo(window.map);
    }
  });
}

function mpClearOtherMarkers() {
  Object.values(mpOtherMarkers).forEach(function(m){ try{ m.remove(); }catch(e){} });
  mpOtherMarkers = {};
}

// ??? Jouer un round ???????????????????????????????????????????????????????????
function mpStartRound(room) {
  var rIdx = room.round || 0;
  if(rIdx === mpCurrentRound) {
    // Même round déjà en cours ? juste mise à jour du panel
    return;
  }
  mpCurrentRound = rIdx;
  mpAnswered = false;
  mpClearOtherMarkers();

  var seeds = room.roundSeeds || [];
  var placeIdx = seeds[rIdx] || 0;
  var place = (typeof ROUNDS !== 'undefined') ? ROUNDS[placeIdx] : null;
  if(!place) return;

  var opts = room.options || {};

  // Configurer le jeu comme en solo
  clearInterval(tiv);
  roundList = [place];
  curR = 0;
  curL = 0;
  playerPos = null;
  confirming = false;
  gameActive = true;
  fixedLevel = opts.fixedLevel !== undefined ? opts.fixedLevel : -1;
  noZoomMode = opts.noZoomMode || false;
  perfectionMode = opts.perfectionMode || false;
  total = (room.players[mp.playerId] ? (room.players[mp.playerId].score || 0) : 0);

  // Fermer overlay
  document.getElementById('overlay').classList.add('h');
  document.body.classList.remove('menu-mode');

  // Header manche
  var nbTotal = opts.nbRounds || 5;
  document.getElementById('hrnd').textContent = (rIdx+1)+'/'+nbTotal;

  // Réinitialiser carte
  if(map) { map.setView([20,0], map.getMinZoom(), {animate:false}); }
  if(playerMarker){playerMarker.remove();playerMarker=null;}
  if(targetMarker){targetMarker.remove();targetMarker=null;}
  if(lineLayer){lineLayer.remove();lineLayer=null;}
  document.getElementById('confb').disabled = true;

  var skipb = document.getElementById('skipb');
  if(skipb) skipb.style.display = fixedLevel >= 0 ? 'none' : 'block';

  updateDots();
  showHint();

  // Créer le panel live
  mpCreateLivePanel();
  mpUpdateLivePanel(room);

  // Timer synchronisé avec le serveur
  var roundStart = room.roundStart || Date.now();
  mpStartSyncTimer(roundStart, opts.timerDuration || 30, rIdx);
}

// ??? Timer synchronisé ????????????????????????????????????????????????????????
function mpStartSyncTimer(roundStart, duration, rIdx) {
  clearInterval(mp.timerInterval);
  var CIRC_VAL = 2 * Math.PI * 38;
  var T_VAL = duration;

  function tick() {
    var elapsed = (Date.now() - roundStart) / 1000;
    var remaining = Math.max(0, T_VAL - elapsed);
    timeLeft = remaining;

    var arc = document.getElementById('arc');
    var pct = remaining / T_VAL;
    if(arc) {
      if(remaining <= 0) arc.style.transition = 'none';
      arc.style.strokeDashoffset = CIRC_VAL * (1 - pct);
      var col = remaining > 19 ? '#22c55e' : remaining > 9 ? '#fbbf24' : '#ef4444';
      arc.style.stroke = col;
    }
    var numEl = document.getElementById('tnum');
    if(numEl) {
      numEl.textContent = Math.ceil(remaining);
      if(arc) numEl.style.color = arc.style.stroke;
    }

    if(remaining <= 0) {
      clearInterval(mp.timerInterval);
      if(gameActive && !mpAnswered) {
        mpAnswered = true;
        gameActive = false;
        mpSubmitAnswer(null, null, 0, rIdx);
      }
    }
  }
  mp.timerInterval = setInterval(tick, 100);
  tick();
}

// ??? Soumettre une réponse ????????????????????????????????????????????????????
function mpSubmitAnswer(pos, dist, pts, rIdx) {
  if(!mp.roomRef || !mp.playerId) return;
  if(mpAnswered && pts === undefined) return; // éviter double submit

  var answerRef = ref(rtdb, 'rooms/' + mp.roomCode + '/answers/' + rIdx + '/' + mp.playerId);

  var payload = {
    pts: pts || 0,
    dist: dist,
    pos: pos ? {lat: pos.lat, lng: pos.lng} : null,
    submittedAt: Date.now()
  };

  set(answerRef, payload).then(function() {
    // Mettre à jour le score cumulé du joueur
    var scoreRef = ref(rtdb, 'rooms/' + mp.roomCode + '/players/' + mp.playerId + '/score');
    get(scoreRef).then(function(snap) {
      var current = snap.val() || 0;
      set(scoreRef, current + (pts || 0));
    });

    // L'hôte surveille si tout le monde a répondu
    if(mp.isHost) mpCheckAllAnswered(rIdx);
  });
}

// ??? Hôte vérifie si tous ont répondu ????????????????????????????????????????
function mpCheckAllAnswered(rIdx) {
  var answersRef = ref(rtdb, 'rooms/' + mp.roomCode + '/answers/' + rIdx);
  var playersRef = ref(rtdb, 'rooms/' + mp.roomCode + '/players');

  // Timeout de sécurité : forcer passage au bout de timerDuration + 5s
  var timeout = setTimeout(function() {
    clearInterval(checkInterval);
    mpHostAdvance(rIdx);
  }, 35000);

  var checkInterval = setInterval(function() {
    Promise.all([get(answersRef), get(playersRef)]).then(function(snaps) {
      var answers = snaps[0].val() || {};
      var players = snaps[1].val() || {};
      var pids = Object.keys(players);
      var answered = pids.every(function(pid) { return answers[pid] !== undefined; });
      if(answered) {
        clearInterval(checkInterval);
        clearTimeout(timeout);
        mpHostAdvance(rIdx);
      }
    });
  }, 800);
}

function mpHostAdvance(rIdx) {
  get(mp.roomRef).then(function(snap) {
    var room = snap.val();
    var opts = room.options || {};
    var nbRounds = opts.nbRounds || 5;
    var nextRound = rIdx + 1;

    update(mp.roomRef, {
      status: 'roundEnd',
      currentRoundResults: rIdx
    }).then(function() {
      setTimeout(function() {
        if(nextRound >= nbRounds) {
          update(mp.roomRef, { status: 'finished' });
        } else {
          update(mp.roomRef, {
            status: 'playing',
            round: nextRound,
            roundStart: Date.now()
          });
        }
      }, 6000); // 6s pour voir les résultats
    });
  });
}

// ??? Résultats d'un round ?????????????????????????????????????????????????????
function mpShowRoundResults(room) {
  clearInterval(mp.timerInterval);
  gameActive = false;

  var rIdx = room.currentRoundResults !== undefined ? room.currentRoundResults : (room.round || 0);
  var seeds = room.roundSeeds || [];
  var placeIdx = seeds[rIdx] || 0;
  var place = typeof ROUNDS !== 'undefined' ? ROUNDS[placeIdx] : {name:'?'};
  var answers = (room.answers || {})[rIdx] || {};
  var players = room.players || {};

  // Afficher le lieu cible sur la carte + lignes de tous les joueurs
  mpClearOtherMarkers();
  if(window.map && place.lat) {
    // Marker cible
    if(targetMarker){targetMarker.remove();targetMarker=null;}
    var popupStyle = 'font-family:system-ui,sans-serif;font-size:13px;line-height:1.5;min-width:140px';
    targetMarker = L.marker([place.lat, place.lng], {icon:makePin('#22c55e')})
      .bindPopup('<div style="'+popupStyle+'"><b style="color:#15803d">? '+place.name.split('—')[0].trim()+'</b></div>', {maxWidth:220})
      .addTo(map);
    targetMarker.openPopup();

    // Lignes + markers de tous les joueurs
    var bounds = [[place.lat, place.lng]];
    Object.entries(answers).forEach(function(entry) {
      var pid = entry[0], ans = entry[1];
      if(!ans.pos || ans.pos.lat == null) return;
      var p = players[pid];
      var col = (p && p.color) ? p.color : mpColorFor(pid);
      var isMe = pid === mp.playerId;

      var iconHtml = '<div style="width:20px;height:20px;background:'+col+';border:2.5px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 10px rgba(0,0,0,.5);position:relative">'
        + '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(45deg);font-size:8px;color:#fff;font-weight:700;line-height:1">'+((p&&p.name)?p.name[0].toUpperCase():'?')+'</div>'
        + '</div>';
      var pIcon = L.divIcon({ className:'', html:iconHtml, iconSize:[20,20], iconAnchor:[10,20] });
      var m = L.marker([ans.pos.lat, ans.pos.lng], {icon: isMe ? makePin(col) : pIcon})
        .bindPopup('<div style="font-family:system-ui,sans-serif;font-size:12px"><b style="color:'+col+'">'+(p?p.name:'?')+(isMe?' (moi)':'')+'</b><br>'
          +(ans.dist!=null?fmtDistShort(ans.dist):'Raté')
          +'<br><span style="color:#f97316;font-weight:700">+'+fmtPts(ans.pts)+' pts</span></div>')
        .addTo(map);
      mpOtherMarkers[pid] = m;

      // Ligne pointillée
      L.polyline([[ans.pos.lat, ans.pos.lng],[place.lat, place.lng]], {
        color: col, weight: 2, dashArray: '6 4', opacity: 0.7
      }).addTo(map);

      bounds.push([ans.pos.lat, ans.pos.lng]);
    });

    // Fit bounds pour voir tout le monde
    if(bounds.length > 1) {
      try { map.fitBounds(L.latLngBounds(bounds), {padding:[60,60]}); } catch(e){}
    }
  }

  // Trier par score de ce round
  var results = Object.entries(players).map(function(e) {
    var pid = e[0], p = e[1];
    var ans = answers[pid] || {};
    return {pid:pid, name:p.name, photo:p.photo, color:p.color||mpColorFor(pid), score:p.score||0, pts:ans.pts||0, dist:ans.dist};
  }).sort(function(a,b){return b.pts - a.pts;});

  var ov = document.getElementById('overlay');
  var h = [];
  h.push('<div style="font-size:13px;color:#f97316;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px">Manche '+(rIdx+1)+'</div>');
  h.push('<div style="font-size:18px;font-weight:700;color:#e2e8f0;margin-bottom:12px">'+place.name.split('—')[0].trim()+'</div>');

  results.forEach(function(r, i) {
    var isMe = r.pid === mp.playerId;
    var distStr = fmtDistShort(r.dist);
    var medal = i===0?'??':i===1?'??':i===2?'??':(i+1)+'.';
    h.push('<div style="display:flex;align-items:center;gap:10px;padding:8px 14px;background:'+(isMe?'#1a2238':'transparent')+';border-radius:8px;margin-bottom:3px;border:'+(isMe?'1px solid '+r.color:'1px solid transparent')+'">');
    h.push('<span style="font-size:16px;min-width:28px">'+medal+'</span>');
    if(r.photo) h.push('<img src="'+r.photo+'" style="width:24px;height:24px;border-radius:50%;border:2px solid '+r.color+';object-fit:cover">');
    else h.push('<div style="width:24px;height:24px;border-radius:50%;background:'+r.color+'33;border:2px solid '+r.color+';display:flex;align-items:center;justify-content:center;font-size:10px;color:'+r.color+';font-weight:700">'+r.name[0].toUpperCase()+'</div>');
    h.push('<span style="flex:1;font-size:13px;color:'+(isMe?r.color:'#e2e8f0')+';font-weight:'+(isMe?'700':'400')+'">'+r.name+(isMe?' (moi)':'')+'</span>');
    h.push('<span style="font-size:11px;color:#6b7280;margin-right:6px">'+distStr+'</span>');
    h.push('<span style="font-size:14px;font-weight:700;color:#f97316">+'+fmtPts(r.pts)+'</span>');
    h.push('</div>');
    // Score total
    h.push('<div style="font-size:10px;color:#4b5563;padding-left:58px;margin-bottom:2px">Total : '+fmtPts(r.score)+' pts</div>');
  });

  h.push('<div style="font-size:12px;color:#6b7280;margin-top:8px">Prochaine manche dans 6s...</div>');
  ov.innerHTML = h.join('');
  ov.classList.remove('h');

  // Cacher le panel live pendant roundEnd
  var panel = document.getElementById('mp-live-panel');
  if(panel) panel.style.display = 'none';
}

// ??? Résultats finaux ?????????????????????????????????????????????????????????
function mpShowFinalResults(room) {
  clearInterval(mp.timerInterval);
  mpRemoveLivePanel();
  mpClearOtherMarkers();

  var players = room.players || {};
  var results = Object.entries(players).map(function(e) {
    return {pid:e[0], name:e[1].name, photo:e[1].photo, color:e[1].color||mpColorFor(e[0]), score:e[1].score||0};
  }).sort(function(a,b){return b.score-a.score;});

  var ov = document.getElementById('overlay');
  var h = [];
  h.push('<div class="otitle" style="font-size:28px;margin-bottom:12px">?? Fin de partie !</div>');
  results.forEach(function(r,i){
    var isMe = r.pid === mp.playerId;
    var medal = i===0?'??':i===1?'??':i===2?'??':(i+1)+'.';
    h.push('<div style="display:flex;align-items:center;gap:12px;padding:10px 16px;background:'+(isMe?'#1a2238':'transparent')+';border-radius:9px;margin-bottom:4px;border:'+(isMe?'1px solid '+r.color:'1px solid transparent')+'">');
    h.push('<span style="font-size:20px">'+medal+'</span>');
    if(r.photo) h.push('<img src="'+r.photo+'" style="width:32px;height:32px;border-radius:50%;border:2px solid '+r.color+';object-fit:cover">');
    else h.push('<div style="width:32px;height:32px;border-radius:50%;background:'+r.color+'33;border:2px solid '+r.color+';display:flex;align-items:center;justify-content:center;font-size:13px;color:'+r.color+';font-weight:700">'+r.name[0].toUpperCase()+'</div>');
    h.push('<span style="flex:1;font-size:14px;font-weight:'+(isMe?'700':'400')+';color:'+(isMe?r.color:'#e2e8f0')+'">'+r.name+(isMe?' (moi)':'')+'</span>');
    h.push('<span style="font-family:monospace;font-size:18px;font-weight:700;color:#f97316">'+fmtPts(r.score)+' pts</span>');
    h.push('</div>');
  });
  h.push('<div style="display:flex;gap:8px;margin-top:12px;justify-content:center">');
  h.push('<button onclick="mpLeaveRoom()" style="padding:10px 24px;font-size:14px;border-radius:9px;border:none;background:#f97316;color:#fff;cursor:pointer;font-weight:700">Retour au menu</button>');
  h.push('</div>');
  ov.innerHTML = h.join('');
  ov.classList.remove('h');
}

// ??? Quitter le salon ?????????????????????????????????????????????????????????
function mpLeaveRoom() {
  clearInterval(mp.timerInterval);
  mpRemoveLivePanel();
  mpClearOtherMarkers();
  _countdownDone = false;

  mp.listeners.forEach(function(l){ try{off(l.ref, 'value', l.fn);}catch(e){} });
  mp.listeners = [];

  if(mp.roomRef && mp.playerId) {
    var playerRef = ref(rtdb, 'rooms/' + mp.roomCode + '/players/' + mp.playerId);
    remove(playerRef).then(function() {
      if(mp.isHost) remove(mp.roomRef);
    }).catch(function(){});
  }

  mp.roomCode = null;
  mp.playerId = null;
  mp.isHost = false;
  mp.roomRef = null;
  mpCurrentRound = -1;
  mpAnswered = false;

  if(typeof showMenu === 'function') showMenu();
}

// ??? Nettoyage ????????????????????????????????????????????????????????????????
function mpCleanup() {
  clearInterval(mp.timerInterval);
  mpRemoveLivePanel();
  mpClearOtherMarkers();
  mp.listeners.forEach(function(l){ try{off(l.ref);}catch(e){} });
  mp.listeners = [];
  _countdownDone = false;
  if(typeof showMenu === 'function') showMenu();
}

// ??? Hook dans confirmGuess de game.js ???????????????????????????????????????
// On surcharge resolveRound pour intercepter la confirmation en mode MP
// game.js appellera resolveRound() ? on y accroche notre mpSubmitAnswer
var _origResolveRound = null;
function mpHookGameEngine() {
  if(typeof resolveRound === 'undefined') {
    setTimeout(mpHookGameEngine, 200);
    return;
  }
  if(_origResolveRound) return; // déjà hookée
  _origResolveRound = resolveRound;

  window.resolveRound = function() {
    // Appel original
    _origResolveRound.apply(this, arguments);

    // Si mode MP, soumettre la réponse à Firebase
    if(window._mpMode && mp.roomCode && !mpAnswered) {
      mpAnswered = true;
      var rIdx = mpCurrentRound >= 0 ? mpCurrentRound : 0;
      var r = roundList[curR];
      var level = 5 - (fixedLevel >= 0 ? fixedLevel : curL);
      var pts = 0, dist = null;
      if(playerPos && r) {
        dist = haversine(playerPos.lat, playerPos.lng, r.lat, r.lng);
        var distScore = BASE_PTS[level] * 0.8 * Math.exp(-DIST_K * dist);
        var timeScore = BASE_PTS[level] * 0.2 * (timeLeft / 30);
        pts = Math.round(distScore + timeScore);
      }
      mpSubmitAnswer(playerPos, dist, pts, rIdx);
    }
  };
}

// Démarrer le hook dès que possible
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mpHookGameEngine);
} else {
  setTimeout(mpHookGameEngine, 300);
}

// ??? Export global ????????????????????????????????????????????????????????????
window.mpCreateRoom      = mpCreateRoom;
window.mpJoinRoom        = mpJoinRoom;
window.mpLaunchGame      = mpLaunchGame;
window.mpLeaveRoom       = mpLeaveRoom;
window.mpSubmitAnswer    = mpSubmitAnswer;
window.mpCheckAllAnswered = mpCheckAllAnswered;