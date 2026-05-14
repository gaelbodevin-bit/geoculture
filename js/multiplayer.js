// ?? GéoCulture Multijoueur ??????????????????????????????????????????????????
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

// Réutiliser l'app Firebase existante
var mpApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
var rtdb = getDatabase(mpApp);

// État local multijoueur
var mp = {
  roomCode: null,
  playerId: null,
  playerName: null,
  isHost: false,
  roomRef: null,
  listeners: [],
  roundSeeds: null,
  timerInterval: null
};

// ?? Utilitaires ??????????????????????????????????????????????????????????????

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

// ?? Créer un salon (Hôte) ?????????????????????????????????????????????????????

function mpCreateRoom(options) {
  var code = genCode();
  mp.roomCode = code;
  mp.playerId = genPlayerId();
  mp.isHost = true;
  mp.roomRef = ref(rtdb, 'rooms/' + code);

  var roomData = {
    code: code,
    host: mp.playerId,
    status: 'waiting', // waiting | countdown | playing | roundEnd | finished
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

  // Ajouter l'hôte
  roomData.players[mp.playerId] = {
    name: getPlayerName(),
    photo: getPlayerPhoto(),
    isHost: true,
    score: 0,
    ready: false,
    online: true,
    joinedAt: Date.now()
  };

  return set(mp.roomRef, roomData).then(function() {
    // Auto-supprimer après 2h
    setTimeout(function(){
      if(mp.roomRef) remove(mp.roomRef);
    }, 7200000);
    mpListenRoom();
    mpShowLobby();
    return code;
  });
}

// ?? Rejoindre un salon (Invité) ???????????????????????????????????????????????

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

    var playerRef = ref(rtdb, 'rooms/' + code + '/players/' + mp.playerId);
    return set(playerRef, {
      name: getPlayerName() || playerName || 'Joueur',
      photo: getPlayerPhoto(),
      isHost: false,
      score: 0,
      ready: false,
      online: true,
      joinedAt: Date.now()
    });
  }).then(function() {
    mpListenRoom();
    mpShowLobby();
  });
}

// ?? Écouter les changements du salon ?????????????????????????????????????????

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
  switch(room.status) {
    case 'waiting':
      mpUpdateLobby(room);
      break;
    case 'countdown':
      mpShowCountdown(room);
      break;
    case 'playing':
      mpStartRound(room);
      break;
    case 'roundEnd':
      mpShowRoundResults(room);
      break;
    case 'finished':
      mpShowFinalResults(room);
      break;
  }
}

// ?? Lobby ?????????????????????????????????????????????????????????????????????

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

  var lvlNames = ['Tout niveaux','Expert','Difficile','Moyen','Facile'];
  var lvlLabel = lvlNames[(opts.fixedLevel>=0?opts.fixedLevel+1:0)] || 'Tout niveaux';
  var modeLabel = opts.perfectionMode ? 'Perfection' : opts.noZoomMode ? 'No-Zoom' : 'Normal';

  var h = [];
  h.push('<div style="text-align:center;margin-bottom:12px">');
  h.push('<div class="otitle" style="font-size:32px;margin-bottom:4px">MULTIJOUEUR</div>');
  h.push('<div style="font-size:13px;color:#94a3b8">Code du salon : <span style="font-family:monospace;font-size:20px;font-weight:700;color:#f97316;letter-spacing:4px;background:#1a2238;padding:4px 12px;border-radius:6px">'+room.code+'</span></div>');
  h.push('<div style="font-size:11px;color:#6b7280;margin-top:4px">Partage ce code avec tes amis</div>');
  h.push('</div>');

  // Infos partie
  h.push('<div style="display:flex;gap:8px;justify-content:center;margin-bottom:12px;flex-wrap:wrap">');
  h.push('<span style="background:#1a2238;border:1px solid #2d3f5e;border-radius:6px;padding:4px 10px;font-size:12px;color:#94a3b8">'+lvlLabel+'</span>');
  h.push('<span style="background:#1a2238;border:1px solid #2d3f5e;border-radius:6px;padding:4px 10px;font-size:12px;color:#94a3b8">'+(opts.noZoomMode?'No-Zoom':'Normal')+'</span>');
  h.push('<span style="background:#1a2238;border:1px solid #2d3f5e;border-radius:6px;padding:4px 10px;font-size:12px;color:#94a3b8">'+(opts.nbRounds||5)+' manches</span>');
  h.push('</div>');

  // Liste des joueurs
  h.push('<div style="width:100%;max-width:400px;margin-bottom:12px">');
  h.push('<div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Joueurs ('+playerList.length+'/8)</div>');
  playerList.forEach(function(entry) {
    var pid = entry[0], p = entry[1];
    var isMe = pid === mp.playerId;
    var isH = p.isHost;
    h.push('<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:'+(isMe?'#1a2238':'#0d1120')+';border:1px solid '+(isMe?'#f97316':'#1e2d45')+';border-radius:8px;margin-bottom:4px">');
    if(p.photo) {
      h.push('<img src="'+p.photo+'" style="width:28px;height:28px;border-radius:50%;object-fit:cover">');
    } else {
      h.push('<div style="width:28px;height:28px;border-radius:50%;background:#1e2d45;display:flex;align-items:center;justify-content:center;font-size:12px;color:#94a3b8">'+p.name[0].toUpperCase()+'</div>');
    }
    h.push('<span style="flex:1;font-size:13px;color:'+(isMe?'#f97316':'#e2e8f0')+';font-weight:'+(isMe?'700':'400')+'">'+p.name+(isMe?' (moi)':'')+'</span>');
    if(isH) h.push('<span style="font-size:10px;color:#f97316;background:#3d1a05;padding:2px 6px;border-radius:4px">Hôte</span>');
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
    h.push('<div style="color:#94a3b8;font-size:13px;padding:10px">En attente que l'hôte lance la partie...</div>');
  }
  h.push('<button onclick="mpLeaveRoom()" style="padding:10px 20px;font-size:13px;border-radius:9px;border:1px solid #2d3f5e;background:transparent;color:#94a3b8;cursor:pointer">Quitter</button>');
  h.push('</div>');

  ov.innerHTML = h.join('');
}

// ?? Lancer la partie (Hôte seulement) ????????????????????????????????????????

function mpLaunchGame() {
  if(!mp.isHost || !mp.roomRef) return;

  // Générer les seeds des rounds (indices dans ROUNDS)
  var seeds = [];
  var indices = [];
  for(var i=0;i<(typeof ROUNDS!=='undefined'?ROUNDS.length:493);i++) indices.push(i);
  // Fisher-Yates shuffle déterministe
  var seed = Date.now();
  function seededRand(max) { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return Math.abs(seed) % max; }
  for(var j=indices.length-1;j>0;j--) {
    var k = seededRand(j+1);
    var tmp = indices[j]; indices[j] = indices[k]; indices[k] = tmp;
  }
  var opts = {};
  get(mp.roomRef).then(function(snap){ opts = snap.val().options || {}; });
  seeds = indices.slice(0, 10);

  update(mp.roomRef, {
    status: 'countdown',
    roundSeeds: seeds,
    countdownStart: Date.now(),
    round: 0
  });
}

// ?? Compte à rebours ??????????????????????????????????????????????????????????

function mpShowCountdown(room) {
  var ov = document.getElementById('overlay');
  var elapsed = Date.now() - (room.countdownStart || Date.now());
  var remaining = Math.max(0, 3000 - elapsed);
  var sec = Math.ceil(remaining / 1000);

  ov.innerHTML = '<div class="otitle" style="font-size:80px;color:#f97316">'+sec+'</div><div style="font-size:16px;color:#94a3b8;margin-top:8px">La partie commence !</div>';
  ov.classList.remove('h');

  if(remaining > 0) {
    setTimeout(function(){ mpShowCountdown(room); }, 500);
  } else if(mp.isHost) {
    // L'hôte passe au statut playing
    setTimeout(function(){
      update(mp.roomRef, { status: 'playing', roundStart: Date.now() });
    }, 500);
  }
}

// ?? Jouer un round ????????????????????????????????????????????????????????????

var mpCurrentRound = -1;
var mpAnswered = false;

function mpStartRound(room) {
  var rIdx = room.round || 0;
  if(rIdx === mpCurrentRound) return; // Déjà affiché
  mpCurrentRound = rIdx;
  mpAnswered = false;

  var seeds = room.roundSeeds || [];
  var placeIdx = seeds[rIdx] || 0;
  var place = (typeof ROUNDS !== 'undefined') ? ROUNDS[placeIdx] : null;
  if(!place) return;

  var opts = room.options || {};

  // Configurer le jeu comme en solo
  typeof clearInterval !== 'undefined' && clearInterval(tiv);
  roundList = [place];
  curR = 0;
  curL = 0;
  playerPos = null;
  confirming = false;
  gameActive = true;
  fixedLevel = opts.fixedLevel !== undefined ? opts.fixedLevel : -1;
  noZoomMode = opts.noZoomMode || false;
  perfectionMode = opts.perfectionMode || false;
  total = room.players[mp.playerId] ? (room.players[mp.playerId].score || 0) : 0;

  // Fermer overlay
  document.getElementById('overlay').classList.add('h');
  document.body.classList.remove('menu-mode');

  // Afficher le header multijoueur
  var nbTotal = opts.nbRounds || 5;
  document.getElementById('hrnd').textContent = (rIdx+1)+'/'+nbTotal;

  // Réinitialiser carte
  if(map) { map.setView([20,0], map.getMinZoom(), {animate:false}); }
  if(playerMarker){playerMarker.remove();playerMarker=null;}
  if(targetMarker){targetMarker.remove();targetMarker=null;}
  if(lineLayer){lineLayer.remove();lineLayer=null;}
  document.getElementById('confb').disabled = true;

  // Bouton skipb
  var skipb = document.getElementById('skipb');
  if(skipb) skipb.style.display = fixedLevel >= 0 ? 'none' : 'block';

  // Dots
  updateDots();

  // Afficher l'indice
  showHint();

  // Timer synchronisé avec le serveur
  var roundStart = room.roundStart || Date.now();
  mpStartSyncTimer(roundStart, opts.timerDuration || 30, rIdx, room);
}

function mpStartSyncTimer(roundStart, duration, rIdx, room) {
  clearInterval(mp.timerInterval);
  var CIRC_VAL = 2*Math.PI*38;
  var T_VAL = duration;

  function tick() {
    var elapsed = (Date.now() - roundStart) / 1000;
    var remaining = Math.max(0, T_VAL - elapsed);
    timeLeft = remaining;

    // Render timer
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
        // Soumettre un raté
        mpSubmitAnswer(null, null, 0, rIdx);
      }
    }
  }
  mp.timerInterval = setInterval(tick, 100);
  tick();
}

// ?? Soumettre une réponse ?????????????????????????????????????????????????????

function mpSubmitAnswer(pos, dist, pts, rIdx) {
  if(!mp.roomRef || !mp.playerId) return;
  var answerRef = ref(rtdb, 'rooms/' + mp.roomCode + '/answers/' + rIdx + '/' + mp.playerId);
  var newScore = (mp.isHost ? 0 : 0); // calculé après

  set(answerRef, {
    pts: pts || 0,
    dist: dist,
    pos: pos ? {lat: pos.lat, lng: pos.lng} : null,
    submittedAt: Date.now()
  }).then(function() {
    // Mettre à jour le score du joueur
    var scoreRef = ref(rtdb, 'rooms/' + mp.roomCode + '/players/' + mp.playerId + '/score');
    get(scoreRef).then(function(snap) {
      var current = snap.val() || 0;
      set(scoreRef, current + (pts || 0));
    });

    // Si hôte: surveiller quand tous ont répondu
    if(mp.isHost) mpCheckAllAnswered(rIdx);
  });
}

// ?? Hôte vérifie si tous ont répondu ?????????????????????????????????????????

function mpCheckAllAnswered(rIdx) {
  var answersRef = ref(rtdb, 'rooms/' + mp.roomCode + '/answers/' + rIdx);
  var playersRef = ref(rtdb, 'rooms/' + mp.roomCode + '/players');

  // Attendre max 35s puis forcer le passage
  var timeout = setTimeout(function() {
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
  }, 1000);
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
      }, 5000); // 5s pour voir les résultats
    });
  });
}

// ?? Résultats d'un round ??????????????????????????????????????????????????????

function mpShowRoundResults(room) {
  clearInterval(mp.timerInterval);
  var rIdx = room.currentRoundResults || 0;
  var seeds = room.roundSeeds || [];
  var placeIdx = seeds[rIdx] || 0;
  var place = typeof ROUNDS !== 'undefined' ? ROUNDS[placeIdx] : {name:'?'};
  var answers = (room.answers || {})[rIdx] || {};
  var players = room.players || {};

  // Trier par score de ce round
  var results = Object.entries(players).map(function(e) {
    var pid = e[0], p = e[1];
    var ans = answers[pid] || {};
    return {pid:pid, name:p.name, photo:p.photo, score:p.score||0, pts:ans.pts||0, dist:ans.dist};
  }).sort(function(a,b){return b.pts - a.pts;});

  var ov = document.getElementById('overlay');
  var h = [];
  h.push('<div style="font-size:13px;color:#f97316;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px">Manche '+(rIdx+1)+'</div>');
  h.push('<div style="font-size:18px;font-weight:700;color:#e2e8f0;margin-bottom:12px">'+place.name.split('—')[0].trim()+'</div>');

  results.forEach(function(r, i) {
    var isMe = r.pid === mp.playerId;
    var distStr = r.dist != null ? (r.dist < 1 ? Math.round(r.dist*1000)+'m' : Math.round(r.dist)+'km') : 'Raté';
    var medal = i===0?'??':i===1?'??':i===2?'??':(i+1)+'.';
    h.push('<div style="display:flex;align-items:center;gap:10px;padding:8px 14px;background:'+(isMe?'#1a2238':'transparent')+';border-radius:8px;margin-bottom:3px">');
    h.push('<span style="font-size:16px;min-width:28px">'+medal+'</span>');
    h.push('<span style="flex:1;font-size:13px;color:'+(isMe?'#f97316':'#e2e8f0')+'">'+r.name+'</span>');
    h.push('<span style="font-size:12px;color:#6b7280;margin-right:8px">'+distStr+'</span>');
    h.push('<span style="font-size:14px;font-weight:700;color:#f97316">+'+r.pts+' pts</span>');
    h.push('</div>');
  });

  h.push('<div style="font-size:12px;color:#6b7280;margin-top:8px">Prochaine manche dans 5s...</div>');
  ov.innerHTML = h.join('');
  ov.classList.remove('h');
}

// ?? Résultats finaux ??????????????????????????????????????????????????????????

function mpShowFinalResults(room) {
  clearInterval(mp.timerInterval);
  var players = room.players || {};
  var results = Object.entries(players).map(function(e) {
    return {pid:e[0], name:e[1].name, photo:e[1].photo, score:e[1].score||0};
  }).sort(function(a,b){return b.score-a.score;});

  var ov = document.getElementById('overlay');
  var h = [];
  h.push('<div class="otitle" style="font-size:28px;margin-bottom:12px">Fin de partie !</div>');
  results.forEach(function(r,i){
    var isMe = r.pid === mp.playerId;
    var medal = i===0?'??':i===1?'??':i===2?'??':(i+1)+'.';
    h.push('<div style="display:flex;align-items:center;gap:12px;padding:10px 16px;background:'+(isMe?'#1a2238':'transparent')+';border-radius:9px;margin-bottom:4px;border:'+(isMe?'1px solid #f97316':'1px solid transparent')+'">');
    h.push('<span style="font-size:20px">'+medal+'</span>');
    if(r.photo) h.push('<img src="'+r.photo+'" style="width:32px;height:32px;border-radius:50%;object-fit:cover">');
    h.push('<span style="flex:1;font-size:14px;font-weight:'+(isMe?'700':'400')+';color:'+(isMe?'#f97316':'#e2e8f0')+'">'+r.name+'</span>');
    h.push('<span style="font-family:monospace;font-size:18px;font-weight:700;color:#f97316">'+r.score.toLocaleString('fr-FR')+' pts</span>');
    h.push('</div>');
  });
  h.push('<div style="display:flex;gap:8px;margin-top:12px;justify-content:center">');
  h.push('<button onclick="mpLeaveRoom()" style="padding:10px 24px;font-size:14px;border-radius:9px;border:none;background:#f97316;color:#fff;cursor:pointer;font-weight:700">Retour au menu</button>');
  h.push('</div>');
  ov.innerHTML = h.join('');
  ov.classList.remove('h');
}

// ?? Quitter le salon ??????????????????????????????????????????????????????????

function mpLeaveRoom() {
  clearInterval(mp.timerInterval);
  mp.listeners.forEach(function(l){ try{off(l.ref, 'value', l.fn);}catch(e){} });
  mp.listeners = [];

  if(mp.roomRef && mp.playerId) {
    var playerRef = ref(rtdb, 'rooms/' + mp.roomCode + '/players/' + mp.playerId);
    remove(playerRef).then(function() {
      // Si hôte, supprimer le salon
      if(mp.isHost) remove(mp.roomRef);
    }).catch(function(){});
  }

  mp.roomCode = null;
  mp.playerId = null;
  mp.isHost = false;
  mp.roomRef = null;
  mpCurrentRound = -1;

  if(typeof showMenu === 'function') showMenu();
}

// ?? Nettoyage ?????????????????????????????????????????????????????????????????

function mpCleanup() {
  clearInterval(mp.timerInterval);
  mp.listeners.forEach(function(l){ try{off(l.ref);}catch(e){} });
  mp.listeners = [];
  if(typeof showMenu === 'function') showMenu();
}

// ?? Exposer globalement ???????????????????????????????????????????????????????

window.mpCreateRoom = mpCreateRoom;
window.mpJoinRoom = mpJoinRoom;
window.mpLaunchGame = mpLaunchGame;
window.mpLeaveRoom = mpLeaveRoom;
window.mpSubmitAnswer = mpSubmitAnswer;
window.mpCheckAllAnswered = mpCheckAllAnswered;