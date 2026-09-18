// GéoCulture Multijoueur — version lisible et maintenable
// Logique conservée, structure clarifiée pour faciliter la lecture par un humain.
import { initializeApp, getApps } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getDatabase, ref, set, get, onValue, off, update, remove }
  from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';
import { getAuth, signInAnonymously, onAuthStateChanged }
  from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDm7KMECwQVWvnOnMmSVm8aK7FdP03QWyA',
  authDomain: 'geo-culture-73453.firebaseapp.com',
  databaseURL: 'https://geo-culture-73453-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'geo-culture-73453',
  storageBucket: 'geo-culture-73453.firebasestorage.app',
  messagingSenderId: '701399534769',
  appId: '1:701399534769:web:ea9418505d8d2e9a9ea690'
};

const mpApp = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);
const rtdb = getDatabase(mpApp, 'https://geo-culture-73453-default-rtdb.europe-west1.firebasedatabase.app');
const mpAuth = getAuth(mpApp);

// ------------------------------------------------------------
// État local du salon
// ------------------------------------------------------------
const mp = {
  roomCode: null,
  playerId: null,
  playerName: null,
  isHost: false,
  roomRef: null,
  listeners: [],
  timerInterval: null,
};

const mpCurrentRound = { value: -1 };
const mpAnswered = { value: false };
const mpRoundActive = { value: false };
const mpOtherMarkers = {};
const mpPolylines = [];

const MP_COLORS = ['#3b82f6', '#a855f7', '#ec4899', '#14b8a6', '#f59e0b', '#06b6d4', '#84cc16', '#f43f5e'];
const colorMap = {};

function mpColorFor(playerId) {
  if (!colorMap[playerId]) {
    colorMap[playerId] = MP_COLORS[Object.keys(colorMap).length % MP_COLORS.length];
  }
  return colorMap[playerId];
}

// ------------------------------------------------------------
// Utilitaires
// ------------------------------------------------------------
function genCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function getPlayerName() {
  const user = (typeof getCurrentUser === 'function' ? getCurrentUser() : null) || mpAuth.currentUser;
  if (user && !user.isAnonymous) {
    return user.displayName || (user.email ? user.email.split('@')[0] : '') || mp.playerName || 'Joueur';
  }
  return mp.playerName || 'Joueur';
}

function getPlayerPhoto() {
  const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
  return user ? (user.photoURL || '') : '';
}

function fmtPts(value) {
  return (value || 0).toLocaleString('fr-FR');
}

function fmtDst(km) {
  if (km == null) return '—';
  return km < 1 ? Math.round(km * 1000) + 'm' : Math.round(km) + 'km';
}

function esc(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function safeChar(value) {
  return esc(String(value == null ? '?' : value).charAt(0).toUpperCase());
}

function safePhotoUrl(url) {
  const value = String(url == null ? '' : url);
  return /^https:\/\/[[\w.~:/?#@!$&*+,;=%()\[\]-]+$/.test(value) ? value : '';
}

function mpEnsureAuth() {
  return new Promise((resolve, reject) => {
    if (mpAuth.currentUser) {
      resolve(mpAuth.currentUser);
      return;
    }

    let done = false;
    const unsub = onAuthStateChanged(mpAuth, (user) => {
      if (done) return;
      if (user) {
        done = true;
        try { unsub(); } catch (error) {}
        resolve(user);
      }
    });

    setTimeout(() => {
      if (done) return;
      done = true;
      try { unsub(); } catch (error) {}

      if (mpAuth.currentUser) {
        resolve(mpAuth.currentUser);
        return;
      }

      signInAnonymously(mpAuth)
        .then((credential) => resolve(credential.user))
        .catch(reject);
    }, 1200);
  });
}

// ------------------------------------------------------------
// Création / join / écoute du salon
// ------------------------------------------------------------
function mpCreateRoom(options) {
  return mpEnsureAuth().then((authenticatedUser) => {
    const roomCode = genCode();
    mp.roomCode = roomCode;
    mp.playerId = authenticatedUser.uid;
    mp.isHost = true;
    mp.roomRef = ref(rtdb, 'rooms/' + roomCode);

    Object.keys(colorMap).forEach((key) => delete colorMap[key]);
    const myColor = mpColorFor(mp.playerId);

    const roomData = {
      code: roomCode,
      host: mp.playerId,
      status: 'waiting',
      options: {
        fixedLevel: options.fixedLevel !== undefined ? options.fixedLevel : -1,
        noZoomMode: options.noZoomMode || false,
        perfectionMode: options.perfectionMode || false,
        chillMode: options.chillMode || false,
        eventsMode: options.eventsMode || false,
        nbRounds: options.nbRounds || 5,
        timerDuration: 30,
      },
      players: {},
      round: 0,
      roundSeeds: null,
      createdAt: Date.now(),
    };

    roomData.players[mp.playerId] = {
      name: getPlayerName(),
      photo: getPlayerPhoto(),
      color: myColor,
      isHost: true,
      score: 0,
      online: true,
      joinedAt: Date.now(),
    };

    return set(mp.roomRef, roomData).then(() => {
      setTimeout(() => {
        if (mp.roomRef) remove(mp.roomRef);
      }, 7200000);

      mpListenRoom();
      mpShowLobby();
      return roomCode;
    });
  });
}

function mpJoinRoom(code, playerName) {
  const roomCode = code.toUpperCase().trim();
  mp.playerName = playerName;

  return mpEnsureAuth().then((authenticatedUser) => {
    mp.roomCode = roomCode;
    mp.playerId = authenticatedUser.uid;
    mp.isHost = false;
    mp.roomRef = ref(rtdb, 'rooms/' + roomCode);

    return get(mp.roomRef).then((snap) => {
      if (!snap.exists()) throw new Error('Salon introuvable');

      const room = snap.val();
      if (room.status !== 'waiting') throw new Error('Partie déjà commencée');
      if (Object.keys(room.players || {}).length >= 8) throw new Error('Salon complet (8/8)');

      Object.keys(colorMap).forEach((key) => delete colorMap[key]);
      Object.entries(room.players || {}).forEach(([pid, player]) => {
        if (player.color) colorMap[pid] = player.color;
      });

      const myColor = mpColorFor(mp.playerId);
      return set(ref(rtdb, 'rooms/' + roomCode + '/players/' + mp.playerId), {
        name: getPlayerName() || playerName || 'Joueur',
        photo: getPlayerPhoto(),
        color: myColor,
        isHost: false,
        score: 0,
        online: true,
        joinedAt: Date.now(),
      });
    }).then(() => {
      mpListenRoom();
      mpShowLobby();
    });
  });
}

function mpListenRoom() {
  if (!mp.roomRef) return;

  const callback = (snap) => {
    if (!snap.exists()) {
      mpCleanup();
      return;
    }
    mpHandleRoomChange(snap.val());
  };

  const listener = { ref: mp.roomRef, fn: callback };
  mp.listeners.push(listener);
  onValue(mp.roomRef, callback);
}

function mpCleanup() {
  mp.listeners.forEach((listener) => {
    try { off(listener.ref, 'value', listener.fn); } catch (error) {}
  });
  mp.listeners = [];
}

// ------------------------------------------------------------
// Routeur principal
// ------------------------------------------------------------
function mpHandleRoomChange(room) {
  if (mpRoundActive.value) {
    mpUpdateLivePanel(room);
    mpUpdateOtherMarkers(room);
  }

  switch (room.status) {
    case 'waiting':
      mpUpdateLobby(room);
      break;
    case 'countdown':
      mpHandleCountdown(room);
      break;
    case 'playing':
      mpHandlePlaying(room);
      break;
    case 'roundEnd':
      mpHandleRoundEnd(room);
      break;
    case 'finished':
      mpShowFinalResults(room);
      break;
    case 'disbanded':
      mpOnDisbanded(room);
      break;
    default:
      break;
  }
}

// ------------------------------------------------------------
// Lobby
// ------------------------------------------------------------
function mpShowLobby() {
  const overlay = document.getElementById('overlay');
  if (overlay) overlay.classList.remove('h');
  mpUpdateLobby(null);
}

function mpUpdateLobby(room) {
  if (mpRoundActive.value) return;

  const overlay = document.getElementById('overlay');
  if (!room) {
    overlay.innerHTML = '<div class="otitle">GEO<br>CULTURE</div><div style="color:#94a3b8;font-size:14px;margin-top:8px">Connexion au salon...</div>';
    return;
  }

  const players = room.players || {};
  const playerEntries = Object.entries(players);
  const opts = room.options || {};
  const canStart = mp.isHost && playerEntries.length >= 2;
  const levelNames = ['Tout niveaux', 'Expert', 'Difficile', 'Moyen', 'Facile'];
  const levelLabel = levelNames[opts.fixedLevel >= 0 ? opts.fixedLevel + 1 : 0] || 'Tout niveaux';

  const html = [];
  html.push('<div style="text-align:center;margin-bottom:12px">');
  html.push('<div class="otitle" style="font-size:32px;margin-bottom:4px">MULTIJOUEUR</div>');
  html.push('<div style="font-size:13px;color:#94a3b8">Salon : <span style="font-family:monospace;font-size:20px;font-weight:700;color:#f97316;letter-spacing:4px;background:#1a2238;padding:4px 12px;border-radius:6px">' + room.code + '</span></div>');
  html.push('<div style="font-size:11px;color:#6b7280;margin-top:4px">Partage ce code avec tes amis</div>');
  html.push('</div>');

  html.push('<div style="display:flex;gap:8px;justify-content:center;margin-bottom:12px;flex-wrap:wrap">');
  html.push('<span style="background:#1a2238;border:1px solid #2d3f5e;border-radius:6px;padding:4px 10px;font-size:12px;color:#94a3b8">' + levelLabel + '</span>');
  const modeLabel = opts.eventsMode ? 'Événements' : opts.noZoomMode ? 'No-Zoom' : opts.perfectionMode ? 'Perfection' : opts.chillMode ? 'Chill' : 'Normal';
  html.push('<span style="background:#1a2238;border:1px solid #2d3f5e;border-radius:6px;padding:4px 10px;font-size:12px;color:#94a3b8">' + modeLabel + '</span>');
  html.push('<span style="background:#1a2238;border:1px solid #2d3f5e;border-radius:6px;padding:4px 10px;font-size:12px;color:#94a3b8">' + (opts.nbRounds || 5) + ' manches</span>');
  html.push('</div>');

  html.push('<div style="width:100%;max-width:400px;margin-bottom:12px">');
  html.push('<div style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Joueurs (' + playerEntries.length + '/8)</div>');
  playerEntries.forEach(([pid, player]) => {
    const isMe = pid === mp.playerId;
    const color = player.color || mpColorFor(pid);

    html.push('<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:' + (isMe ? '#1a2238' : '#0d1120') + ';border:1px solid ' + (isMe ? color : '#1e2d45') + ';border-radius:8px;margin-bottom:4px">');
    html.push('<div style="width:10px;height:10px;border-radius:50%;background:' + color + ';flex-shrink:0"></div>');
    if (player.photo) {
      html.push('<img src="' + safePhotoUrl(player.photo) + '" style="width:28px;height:28px;border-radius:50%;object-fit:cover">');
    } else {
      html.push('<div style="width:28px;height:28px;border-radius:50%;background:#1e2d45;display:flex;align-items:center;justify-content:center;font-size:12px;color:#94a3b8">' + safeChar(player.name) + '</div>');
    }
    html.push('<span style="flex:1;font-size:13px;color:' + (isMe ? color : '#e2e8f0') + ';font-weight:' + (isMe ? '700' : '400') + '">' + esc(player.name) + (isMe ? ' (moi)' : '') + '</span>');
    if (player.isHost) {
      html.push('<span style="font-size:10px;color:#f97316;background:#3d1a05;padding:2px 6px;border-radius:4px">Hôte</span>');
    }
    html.push('</div>');
  });
  html.push('</div>');

  html.push('<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">');
  if (mp.isHost) {
    html.push('<button onclick="mpLaunchGame()" ' + (canStart ? '' : 'disabled') + ' style="padding:10px 28px;font-size:14px;font-weight:700;border-radius:9px;border:none;cursor:' + (canStart ? 'pointer' : 'not-allowed') + ';background:' + (canStart ? '#f97316' : '#374151') + ';color:#fff">' + (canStart ? '▶ Lancer la partie' : 'En attente (min. 2 joueurs)') + '</button>');
  } else {
    html.push('<div style="color:#94a3b8;font-size:13px;padding:10px">En attente que l\'hôte lance...</div>');
  }
  html.push('<button onclick="mpLeaveRoom()" style="padding:10px 20px;font-size:13px;border-radius:9px;border:1px solid #2d3f5e;background:transparent;color:#94a3b8;cursor:pointer">Quitter</button>');
  html.push('</div>');

  overlay.innerHTML = html.join('');
}

// ------------------------------------------------------------
// Lancement de la partie
// ------------------------------------------------------------
function mpLaunchGame() {
  if (!mp.isHost || !mp.roomRef) return;

  get(mp.roomRef).then((snap) => {
    const roomOptions = snap.val().options || {};
    const nbRounds = roomOptions.nbRounds || 5;
    const availablePlaces = roomOptions.eventsMode && window.EVENTS && window.EVENTS.length
      ? window.EVENTS
      : ROUNDS;
    const indices = Array.from({ length: availablePlaces.length }, (_, index) => index);
    let seed = Date.now();

    function randomInt(max) {
      seed = (seed * 1664525 + 1013904223) & 0xffffffff;
      return Math.abs(seed) % max;
    }

    for (let index = indices.length - 1; index > 0; index--) {
      const swapIndex = randomInt(index + 1);
      [indices[index], indices[swapIndex]] = [indices[swapIndex], indices[index]];
    }

    update(mp.roomRef, {
      status: 'countdown',
      roundSeeds: indices.slice(0, nbRounds),
      countdownStart: Date.now(),
      round: 0,
    });
  });
}

// ------------------------------------------------------------
// Countdown / synchronisation des tours
// ------------------------------------------------------------
let countdownTimer = null;
let countdownDone = false;

function mpHandleCountdown(room) {
  if (countdownDone) return;

  clearTimeout(countdownTimer);

  const overlay = document.getElementById('overlay');
  const elapsed = Date.now() - (room.countdownStart || Date.now());
  const remaining = Math.max(0, 3000 - elapsed);
  const second = Math.ceil(remaining / 1000);

  overlay.innerHTML = '<div class="otitle" style="font-size:90px;color:#f97316;line-height:1">' + (second || '?') + '</div><div style="font-size:16px;color:#94a3b8;margin-top:8px">La partie commence !</div>';
  overlay.classList.remove('h');

  if (remaining > 0) {
    countdownTimer = setTimeout(() => mpHandleCountdown(room), Math.min(remaining, 300));
  } else if (mp.isHost) {
    const syncedStart = Date.now() + 2500;
    update(mp.roomRef, { status: 'playing', roundStart: syncedStart });
  }
}

function mpHandlePlaying(room) {
  const roundIndex = room.round || 0;
  const roomOptions = room.options || {};
  const playerAnswer = ((room.answers || {})[roundIndex] || {})[mp.playerId];
  const playerStatus = playerAnswer && playerAnswer.status;
  const playerHintLevel = playerAnswer && playerAnswer.hintLevel !== undefined
    ? playerAnswer.hintLevel
    : (roomOptions.fixedLevel >= 0 ? roomOptions.fixedLevel : 0);

  countdownDone = true;
  clearTimeout(countdownTimer);

  if (roundIndex === mpCurrentRound.value && mpRoundActive.value) {
    if (playerStatus === 'submitted' || playerStatus === 'exhausted' || playerStatus === 'eliminated') {
      clearInterval(mp.timerInterval);
      gameActive = false;
      confirming = true;
      mpAnswered.value = true;
      return;
    }

    if (playerHintLevel !== curL) {
      curL = playerHintLevel;
      mpAnswered.value = false;
      gameActive = true;
      confirming = false;
      updateDots();
      showHint();
      mpStartSyncTimer(
        playerAnswer && playerAnswer.hintStartAt ? playerAnswer.hintStartAt : room.roundStart,
        (room.options || {}).timerDuration || 30,
        roundIndex
      );
    }
    return;
  }

  mpCurrentRound.value = roundIndex;
  mpAnswered.value = false;
  mpRoundActive.value = true;
  mpClearOtherMarkers();

  const currentPlayer = (room.players || {})[mp.playerId] || {};
  if (currentPlayer.eliminated) {
    clearInterval(mp.timerInterval);
    gameActive = false;
    confirming = true;
    mpAnswered.value = true;
    mpRoundActive.value = false;
    return;
  }

  const seeds = room.roundSeeds || [];
  if (!seeds || seeds.length <= roundIndex || seeds[roundIndex] === undefined) {
    setTimeout(() => {
      get(ref(rtdb, 'rooms/' + mp.roomCode)).then((snapshot) => {
        if (snapshot.exists()) mpHandlePlaying(snapshot.val());
      }).catch(() => {});
    }, 500);
    return;
  }

  const placeSource = roomOptions.eventsMode && window.EVENTS && window.EVENTS.length
    ? window.EVENTS
    : ROUNDS;
  const place = placeSource[seeds[roundIndex]];
  if (!place) return;

  const opts = roomOptions;

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
  chillMode = opts.chillMode || false;
  eventsMode = opts.eventsMode || false;
  total = (room.players[mp.playerId] || {}).score || 0;

  const overlay = document.getElementById('overlay');
  overlay.classList.add('h');
  document.body.classList.remove('menu-mode');
  document.getElementById('hrnd').textContent = (roundIndex + 1) + '/' + (opts.nbRounds || 5);
  document.getElementById('hsc').textContent = fmtPts(total);
  document.getElementById('confb').disabled = true;

  const skipButton = document.getElementById('skipb');
  if (skipButton) skipButton.style.display = fixedLevel >= 0 ? 'none' : 'block';

  if (noZoomMode && typeof initMap === 'function') {
    if (map) map.remove();
    map = null;
    initMap();
  }
  if (map) map.setView([20, 0], map.getMinZoom(), { animate: false });
  if (playerMarker) { playerMarker.remove(); playerMarker = null; }
  if (targetMarker) { targetMarker.remove(); targetMarker = null; }
  if (lineLayer) { lineLayer.remove(); lineLayer = null; }

  if (playerStatus === 'submitted' || playerStatus === 'exhausted') {
    gameActive = false;
    confirming = true;
    mpAnswered.value = true;
  } else {
    curL = playerHintLevel;
    updateDots();
  }
  showHint();

  mpEnsureLivePanel();
  const livePanel = document.getElementById('mp-live-panel');
  if (livePanel) livePanel.style.display = 'block';
  mpRenderLivePanel(room);

  const roundStart = playerAnswer && playerAnswer.hintStartAt
    ? playerAnswer.hintStartAt
    : room.roundStart;
  if (!roundStart || roundStart <= 0) return;

  if (gameActive) mpStartSyncTimer(roundStart, opts.timerDuration || 30, roundIndex);
}

function mpStartSyncTimer(roundStart, duration, roundIndex) {
  clearInterval(mp.timerInterval);
  const circumference = 2 * Math.PI * 38;

  if (chillMode) {
    timeLeft = 999;
    const arcElement = document.getElementById('arc');
    if (arcElement) {
      arcElement.style.transition = 'none';
      arcElement.style.strokeDashoffset = '0';
      arcElement.style.stroke = '#3b82f6';
    }
    const timeValue = document.getElementById('tnum');
    if (timeValue) {
      timeValue.textContent = '?';
      timeValue.style.color = '#3b82f6';
    }
    return;
  }

  const arcElement = document.getElementById('arc');
  if (arcElement) arcElement.style.transition = 'none';

  function tick() {
    const now = Date.now();
    const elapsed = (now - roundStart) / 1000;
    let remaining;

    if (elapsed < 0) {
      remaining = duration;
    } else {
      remaining = Math.max(0, duration - elapsed);
    }

    timeLeft = remaining;

    const arc = document.getElementById('arc');
    if (arc) {
      const pct = remaining / duration;
      arc.style.strokeDashoffset = circumference * (1 - pct);
      const color = remaining > 19 ? '#22c55e' : remaining > 9 ? '#fbbf24' : '#ef4444';
      arc.style.stroke = color;

      const timeValue = document.getElementById('tnum');
      if (timeValue) {
        timeValue.textContent = elapsed < 0 ? duration : Math.ceil(remaining);
        timeValue.style.color = color;
      }
    }

    if (elapsed >= 0 && remaining <= 0) {
      clearInterval(mp.timerInterval);
      if (!mpAnswered.value && !chillMode) mpHandlePlayerTimeout(roundIndex);
    }
  }

  mp.timerInterval = setInterval(tick, 100);
  tick();
}

// ------------------------------------------------------------
// Réponses des joueurs et validation de la manche
// ------------------------------------------------------------
function mpSubmitAnswer(position, distance, points, roundIndex) {
  if (!mp.roomCode || !mp.playerId) return;

  const answerRef = ref(rtdb, 'rooms/' + mp.roomCode + '/answers/' + roundIndex + '/' + mp.playerId);
  const isEliminated = perfectionMode && !eventsMode && (distance === null || distance > 50);
  const answerData = {
    status: isEliminated ? 'eliminated' : 'submitted',
    hintLevel: fixedLevel >= 0 ? fixedLevel : curL,
    pts: isEliminated ? 0 : (points || 0),
    dist: distance,
    pos: position ? { lat: position.lat, lng: position.lng } : null,
    submittedAt: Date.now(),
  };

  set(answerRef, answerData).then(() => {
    if (isEliminated) {
      return update(ref(rtdb, 'rooms/' + mp.roomCode + '/players/' + mp.playerId), {
        eliminated: true,
      });
    }
  }).then(() => {
    if (mp.isHost) mpWatchAllAnswered(roundIndex);
  });
}

function mpHandlePlayerTimeout(roundIndex) {
  const answerRef = ref(rtdb, 'rooms/' + mp.roomCode + '/answers/' + roundIndex + '/' + mp.playerId);
  get(answerRef).then((snapshot) => {
    const answer = snapshot.val() || {};
    if (answer.status === 'submitted' || answer.status === 'exhausted' || answer.status === 'eliminated') return;

    const hintLevel = answer.hintLevel !== undefined
      ? answer.hintLevel
      : (fixedLevel >= 0 ? fixedLevel : curL);
    const maxHintLevel = fixedLevel >= 0 ? fixedLevel : 3;

    if (hintLevel < maxHintLevel) {
      update(answerRef, {
        status: 'active',
        hintLevel: hintLevel + 1,
        hintStartAt: Date.now(),
      });
      return;
    }

    update(answerRef, {
      status: 'exhausted',
      hintLevel,
      pts: 0,
      dist: null,
      pos: null,
      submittedAt: Date.now(),
      timeout: true,
    });
  });
}

function mpWatchAllAnswered(roundIndex) {
  if (mp._watchInterval) clearInterval(mp._watchInterval);

  const answersRef = ref(rtdb, 'rooms/' + mp.roomCode + '/answers/' + roundIndex);
  const playersRef = ref(rtdb, 'rooms/' + mp.roomCode + '/players');
  const roomRef = ref(rtdb, 'rooms/' + mp.roomCode);
  let advanced = false;

  function doAdvance() {
    if (advanced) return;
    advanced = true;
    clearInterval(mp._watchInterval);
    mp._watchInterval = null;
    mpAdvance(roundIndex);
  }

  mp._watchInterval = setInterval(() => {
    Promise.all([get(answersRef), get(playersRef), get(roomRef)]).then(([answersSnap, playersSnap, roomSnap]) => {
      const answers = answersSnap.val() || {};
      const players = playersSnap.val() || {};
      const room = roomSnap.val() || {};

      const allAnswered = Object.keys(players).length > 0 &&
        Object.keys(players).every((pid) => {
          const answer = answers[pid];
          if (players[pid] && players[pid].eliminated) return true;
          return answer && (answer.status === 'submitted' || answer.status === 'exhausted' || answer.status === 'eliminated');
        });

      if (allAnswered) {
        doAdvance();
        return;
      }

      if ((room.options || {}).chillMode) return;

      const roundDuration = (room.options || {}).timerDuration || 30;
      const updates = {};
      Object.keys(players).forEach((playerId) => {
        const playerAnswer = answers[playerId] || {
          status: 'active',
          hintLevel: (room.options || {}).fixedLevel >= 0 ? (room.options || {}).fixedLevel : 0,
          hintStartAt: room.roundStart || Date.now(),
        };
        if (playerAnswer.status !== 'active') return;

        const elapsedSeconds = (Date.now() - (playerAnswer.hintStartAt || room.roundStart || Date.now())) / 1000;
        if (elapsedSeconds < roundDuration + 1.5) return;

        const hintLevel = playerAnswer.hintLevel !== undefined ? playerAnswer.hintLevel : 0;
        const maxHintLevel = (room.options || {}).fixedLevel >= 0 ? (room.options || {}).fixedLevel : 3;
        if (hintLevel < maxHintLevel) {
          updates['answers/' + roundIndex + '/' + playerId] = {
            ...playerAnswer,
            status: 'active',
            hintLevel: hintLevel + 1,
            hintStartAt: Date.now(),
          };
        } else {
          updates['answers/' + roundIndex + '/' + playerId] = {
            ...playerAnswer,
            status: 'exhausted',
            hintLevel,
            pts: 0,
            dist: null,
            pos: null,
            submittedAt: Date.now(),
            timeout: true,
          };
        }
      });

      if (Object.keys(updates).length > 0) update(roomRef, updates).then(() => {
        if (mp.isHost) mpWatchAllAnswered(roundIndex);
      });
    }).catch(() => {});
  }, 400);
}

function mpAdvance(roundIndex) {
  get(mp.roomRef).then((snap) => {
    const room = snap.val();
    const opts = room.options || {};
    const nextRound = roundIndex + 1;
    const players = room.players || {};
    const updates = { status: 'roundEnd', currentRoundResults: roundIndex };

    Object.keys(players).forEach((pid) => {
      let total = 0;
      for (let round = 0; round <= roundIndex; round++) {
        const answer = ((room.answers || {})[round] || {})[pid];
        if (answer && answer.pts) total += answer.pts;
      }
      updates['players/' + pid + '/score'] = total;
    });

    updates.nextRound = nextRound;
    updates.totalRounds = opts.nbRounds || 5;
    update(mp.roomRef, updates);
  });
}

function mpLaunchNextRound() {
  if (!mp.isHost || !mp.roomRef) return;

  const button = document.getElementById('mp-next-btn');
  if (button) {
    button.disabled = true;
    button.textContent = 'Chargement...';
  }

  get(mp.roomRef).then((snap) => {
    const room = snap.val();
    const opts = room.options || {};
    const next = room.nextRound !== undefined ? room.nextRound : 0;

    update(mp.roomRef, next >= (room.totalRounds || opts.nbRounds || 5)
      ? { status: 'finished' }
      : { status: 'playing', round: next, roundStart: Date.now() + 2500 });
  });
}

// ------------------------------------------------------------
// Résultats d'une manche
// ------------------------------------------------------------
function mpHandleRoundEnd(room) {
  clearInterval(mp.timerInterval);
  mpRoundActive.value = false;
  gameActive = false;
  mpCurrentRound.value = -1;

  const roundIndex = room.currentRoundResults !== undefined ? room.currentRoundResults : (room.round || 0);
  const seeds = room.roundSeeds || [];
  const resultPlaceSource = (room.options || {}).eventsMode && window.EVENTS && window.EVENTS.length
    ? window.EVENTS
    : ROUNDS;
  const place = resultPlaceSource[seeds[roundIndex] || 0] || { name: '?', lat: 0, lng: 0 };
  const answers = (room.answers || {})[roundIndex] || {};
  const players = room.players || {};

  const allPresent = Object.keys(players).every((playerId) => {
    if (players[playerId] && players[playerId].eliminated) return true;
    return answers[playerId] !== undefined;
  });
  if (!allPresent) {
    setTimeout(() => {
      get(ref(rtdb, 'rooms/' + mp.roomCode)).then((snapshot) => {
        if (snapshot.exists()) mpHandleRoundEnd(snapshot.val());
      }).catch(() => {});
    }, 1000);
    return;
  }

  const livePanel = document.getElementById('mp-live-panel');
  if (livePanel) livePanel.style.display = 'none';

  if (window.map && place.lat) {
    if (targetMarker) { targetMarker.remove(); targetMarker = null; }
    if (lineLayer) { lineLayer.remove(); lineLayer = null; }

    const placeName = place.name ? place.name.split('—')[0].trim() : '?';
    targetMarker = L.marker([place.lat, place.lng], { icon: makePin('#22c55e') })
      .bindPopup('<div style="font-family:system-ui;font-size:13px"><b style="color:#15803d">✓ ' + placeName + '</b></div>', { maxWidth: 220 })
      .addTo(map).openPopup();

    const bounds = [[place.lat, place.lng]];
    Object.entries(answers).forEach(([pid, answer]) => {
      if (!answer.pos || answer.pos.lat == null) return;

      const player = players[pid];
      const color = (player && player.color) || mpColorFor(pid);
      const isMe = pid === mp.playerId;
      const icon = isMe ? makePin(color) : L.divIcon({
        className: '',
        html: '<div style="width:22px;height:22px;background:' + color + ';border:2.5px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 8px rgba(0,0,0,.4);position:relative">'
          + '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(45deg);font-size:9px;color:#fff;font-weight:700">' + ((player && player.name) ? safeChar(player.name) : '?') + '</div></div>',
        iconSize: [22, 22],
        iconAnchor: [11, 22],
      });

      const popup = '<div style="font-family:system-ui;font-size:12px">'
        + '<b style="color:' + color + '">' + esc(player ? player.name : '?') + (isMe ? ' (moi)' : '') + '</b><br>'
        + fmtDst(answer.dist) + '<br>'
        + '<b style="color:#f97316">+' + fmtPts(answer.pts) + ' pts</b></div>';

      const marker = L.marker([answer.pos.lat, answer.pos.lng], { icon }).bindPopup(popup).addTo(map);
      const pointA = [answer.pos.lat, answer.pos.lng];
      const pointB = [place.lat, place.lng];
      let deltaLng = pointB[1] - pointA[1];
      if (deltaLng > 180) pointA[1] += 360;
      else if (deltaLng < -180) pointA[1] -= 360;

      const polyline = L.polyline([pointA, pointB], { color, weight: 2.5, dashArray: '6 4', opacity: 0.8, noClip: true }).addTo(map);
      mpPolylines.push(polyline);
      mpOtherMarkers[pid] = marker;
      bounds.push([answer.pos.lat, answer.pos.lng]);
    });

    mp._lastBounds = bounds;
    setTimeout(() => {
      try { map.invalidateSize(); } catch (error) {}
      try {
        if (bounds.length > 1) {
          map.fitBounds(L.latLngBounds(bounds), { padding: [80, 80], maxZoom: 7, animate: true, duration: 0.8 });
        } else if (bounds.length === 1) {
          map.setView(bounds[0], 5, { animate: true });
        }
      } catch (error) {}
    }, 200);
  }

  const nextRound = roundIndex + 1;
  const myAnswer = answers[mp.playerId] || {};
  const myPoints = myAnswer.pts || 0;
  const myDistance = myAnswer.dist;
  const placeName = place.name ? place.name.split('—')[0].trim() : '?';
  const placeDesc = place.desc || '';
  const myPlayer = players[mp.playerId] || {};
  const myScore = myPlayer.score || 0;
  const safeLevel = chillMode ? 5 : (fixedLevel >= 0 ? 5 - fixedLevel : 5 - (curL || 0));
  const maxPoints = typeof BASE_PTS !== 'undefined' ? BASE_PTS[Math.max(0, Math.min(5, safeLevel))] : 3000;
  const percentRound = maxPoints > 0 ? Math.round(myPoints / maxPoints * 100) : 0;
  const barColor = percentRound >= 80 ? '#22c55e' : percentRound >= 50 ? '#fbbf24' : '#f97316';

  const results = Object.entries(players).map(([pid, player]) => {
    const answer = answers[pid] || {};
    return {
      pid,
      name: player.name,
      photo: player.photo,
      color: player.color || mpColorFor(pid),
      score: player.score || 0,
      pts: answer.pts || 0,
      dist: answer.dist,
    };
  }).sort((a, b) => b.pts - a.pts);

  const imgId = 'mpwimg' + Date.now();
  const medals = ['🥇', '🥈', '🥉'];
  const html = [];

  html.push('<div id="' + imgId + '" style="width:100%;max-width:500px;min-height:120px;background:#111827;border-radius:12px;overflow:hidden;position:relative;flex-shrink:0"></div>');
  html.push('<div style="font-size:11px;color:#f97316;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-top:2px">Manche ' + (roundIndex + 1) + '/' + (room.options || {}).nbRounds + '</div>');
  html.push('<div style="font-size:20px;font-weight:700;color:#e2e8f0;text-align:center;max-width:380px">' + placeName + '</div>');

  if (placeDesc) {
    html.push('<div style="font-size:13px;color:#e2e8f0;text-align:center;max-width:440px;line-height:1.65;margin-top:-2px;background:rgba(17,24,39,0.6);border-radius:8px;padding:8px 14px">' + placeDesc + '</div>');
  }

  html.push('<div style="width:100%;max-width:340px;background:#111827;border-radius:12px;padding:12px 16px;display:flex;flex-direction:column;gap:6px">');
  html.push('<div style="display:flex;justify-content:space-between;align-items:center">');
  html.push('<span style="font-size:24px;font-weight:700;color:' + barColor + '">+' + fmtPts(myPoints) + ' pts</span>');
  html.push('<span style="font-size:12px;color:#6b7280">' + (myDistance != null ? fmtDst(myDistance) : 'Raté') + '</span>');
  html.push('</div>');
  html.push('<div style="height:7px;background:#1e2d45;border-radius:4px;overflow:hidden"><div style="width:' + percentRound + '%;height:100%;background:' + barColor + ';border-radius:4px"></div></div>');
  html.push('<div style="font-size:11px;color:#6b7280">' + fmtPts(myPoints) + ' / ' + fmtPts(maxPoints) + ' pts max • Total : <b style="color:#f97316">' + fmtPts(myScore) + ' pts</b></div>');
  html.push('</div>');

  html.push('<div style="width:100%;max-width:380px;display:flex;flex-direction:column;gap:3px">');
  results.forEach((result, index) => {
    const isMe = result.pid === mp.playerId;
    const medal = index < 3 ? medals[index] : (index + 1) + '.';
    html.push('<div style="display:flex;align-items:center;gap:8px;padding:7px 12px;background:' + (isMe ? '#1a2238' : '#0d1120') + ';border-radius:8px;border:1px solid ' + (isMe ? result.color : '#1e2d45') + '">');
    html.push('<span style="font-size:14px;min-width:24px;text-align:center">' + medal + '</span>');
    if (result.photo) {
      html.push('<img src="' + safePhotoUrl(result.photo) + '" style="width:22px;height:22px;border-radius:50%;border:2px solid ' + result.color + ';object-fit:cover;flex-shrink:0">');
    } else {
      html.push('<div style="width:22px;height:22px;border-radius:50%;background:' + result.color + '33;border:2px solid ' + result.color + ';display:flex;align-items:center;justify-content:center;font-size:9px;color:' + result.color + ';font-weight:700;flex-shrink:0">' + safeChar(result.name) + '</div>');
    }
    html.push('<span style="flex:1;font-size:12px;font-weight:' + (isMe ? '700' : '400') + ';color:' + (isMe ? result.color : '#e2e8f0') + ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + esc(result.name) + '</span>');
    html.push('<span style="font-size:11px;color:#6b7280;margin-right:6px;flex-shrink:0">' + fmtDst(result.dist) + '</span>');
    html.push('<span style="font-size:13px;font-weight:700;color:#f97316;flex-shrink:0">+' + fmtPts(result.pts) + '</span>');
    html.push('<span style="font-size:10px;color:#4b5563;margin-left:4px;flex-shrink:0">' + fmtPts(result.score) + '</span>');
    html.push('</div>');
  });
  html.push('</div>');

  html.push('<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:4px">');
  html.push('<button onclick="window.mpEnterExplore&&window.mpEnterExplore()" style="padding:10px 20px;border-radius:9px;border:1px solid #2d3f5e;cursor:pointer;background:rgba(30,45,69,.9);color:#e2e8f0;font-size:13px;font-weight:600">Explorer la carte</button>');

  if (nextRound < (room.options || {}).nbRounds) {
    if (mp.isHost) {
      html.push('<button id="mp-next-btn" onclick="window.mpLaunchNextRound&&window.mpLaunchNextRound()" style="padding:12px 32px;border-radius:10px;border:none;background:#f97316;color:#fff;font-size:15px;font-weight:700;cursor:pointer;transition:opacity .2s" onmouseover="this.style.opacity=\'0.85\'" onmouseout="this.style.opacity=\'1\'">Manche suivante ▶</button>');
    } else {
      html.push('<div style="font-size:13px;color:#94a3b8;padding:8px 16px;background:#0d1120;border-radius:8px;border:1px solid #1e2d45">En attente que l\'hôte lance la manche suivante...</div>');
    }
  } else {
    if (mp.isHost) {
      html.push('<button id="mp-next-btn" onclick="window.mpLaunchNextRound&&window.mpLaunchNextRound()" style="padding:12px 32px;border-radius:10px;border:none;background:#22c55e;color:#fff;font-size:15px;font-weight:700;cursor:pointer">🏆 Voir le bilan final</button>');
    } else {
      html.push('<div style="font-size:13px;color:#94a3b8;padding:8px 16px;background:#0d1120;border-radius:8px;border:1px solid #1e2d45">En attente du bilan final…</div>');
    }
  }
  html.push('</div>');

  const overlay = document.getElementById('overlay');
  setTimeout(() => {
    overlay.innerHTML = html.join('');
    overlay.classList.remove('h');

    (function (elementId, round, query) {
      const element = document.getElementById(elementId);
      if (!element) return;

      function tryWikipedia(language) {
        fetch('https://' + language + '.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(query))
          .then((response) => response.json())
          .then((data) => {
            const currentElement = document.getElementById(elementId);
            if (!currentElement) return;
            const imageSource = (data.originalimage && data.originalimage.source) || (data.thumbnail && data.thumbnail.source);
            if (imageSource) {
              currentElement.style.height = 'auto';
              currentElement.innerHTML = '<img src="' + imageSource + '" style="width:100%;height:auto;max-height:55vh;object-fit:contain;border-radius:12px;display:block;background:#111827" alt="">';
            } else if (language === 'fr') {
              tryWikipedia('en');
            } else {
              currentElement.style.display = 'none';
            }
          })
          .catch(() => {
            const currentElement = document.getElementById(elementId);
            if (currentElement) currentElement.style.display = 'none';
          });
      }

      if (round && round.photo) {
        const image = new Image();
        image.onload = function () {
          const currentElement = document.getElementById(elementId);
          if (!currentElement) return;
          currentElement.style.height = 'auto';
          currentElement.innerHTML = '<img src="' + round.photo + '" style="width:100%;height:auto;max-height:55vh;object-fit:contain;border-radius:12px;display:block;background:#111827" alt="">';
        };
        image.onerror = function () {
          const currentElement = document.getElementById(elementId);
          if (currentElement) currentElement.style.display = 'none';
        };
        image.src = round.photo;
      } else {
        const currentElement = document.getElementById(elementId);
        if (currentElement) currentElement.style.display = 'none';
      }
    })(imgId, place, placeName);
  }, 10000);
}

function mpShowFinalResults(room) {
  clearInterval(mp.timerInterval);
  mpRoundActive.value = false;
  mpRemoveLivePanel();
  mpClearOtherMarkers();

  const players = room.players || {};
  const answers = room.answers || {};
  const opts = room.options || {};
  const totalRounds = opts.nbRounds || 5;
  const seeds = room.roundSeeds || [];
  const medals = ['🥇', '🥈', '🥉'];

  const results = Object.entries(players).map(([pid, player]) => {
    let totalPts = 0;
    let totalDist = 0;
    let distCount = 0;
    let bestDist = Infinity;
    let worstDist = 0;
    let totalTime = 0;
    let timeCount = 0;

    for (let round = 0; round < totalRounds; round++) {
      const answer = (answers[round] || {})[pid] || {};
      if (answer.pts) totalPts += answer.pts;
      if (answer.dist != null) {
        totalDist += answer.dist;
        distCount++;
        if (answer.dist < bestDist) bestDist = answer.dist;
        if (answer.dist > worstDist) worstDist = answer.dist;
      }
      if (answer.time != null) {
        totalTime += answer.time;
        timeCount++;
      }
    }

    return {
      pid,
      name: player.name,
      photo: player.photo,
      color: player.color || mpColorFor(pid),
      score: player.score || totalPts,
      avgDist: distCount > 0 ? totalDist / distCount : null,
      bestDist: bestDist === Infinity ? null : bestDist,
      worstDist: worstDist || null,
      avgTime: timeCount > 0 ? totalTime / timeCount : null,
    };
  }).sort((a, b) => b.score - a.score);

  function avatar(playerData, size = 32) {
    if (playerData.photo) {
      return '<img src="' + safePhotoUrl(playerData.photo) + '" style="width:' + size + 'px;height:' + size + 'px;border-radius:50%;border:2px solid ' + playerData.color + ';object-fit:cover;flex-shrink:0">';
    }
    return '<div style="width:' + size + 'px;height:' + size + 'px;border-radius:50%;background:' + playerData.color + '33;border:2px solid ' + playerData.color + ';display:flex;align-items:center;justify-content:center;font-size:' + (size * 0.4) + 'px;color:' + playerData.color + ';font-weight:700;flex-shrink:0">' + safeChar(playerData.name) + '</div>';
  }

  const html = [];
  html.push('<div class="otitle" style="font-size:36px">🏆 Fin de partie !</div>');

  html.push('<div style="width:100%;max-width:440px">');
  html.push('<div style="font-size:10px;color:#4b5563;text-transform:uppercase;letter-spacing:1px;padding:0 12px 6px">Classement final</div>');
  results.forEach((result, index) => {
    const isMe = result.pid === mp.playerId;
    const medal = index < 3 ? medals[index] : (index + 1) + '.';
    html.push('<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;background:' + (isMe ? '#1a2238' : '#0d1120') + ';border-radius:9px;margin-bottom:4px;border:1px solid ' + (isMe ? result.color : '#1e2d45') + '">');
    html.push('<span style="font-size:18px;min-width:28px;text-align:center">' + medal + '</span>');
    html.push(avatar(result, 28));
    html.push('<span style="flex:1;font-size:13px;font-weight:' + (isMe ? '700' : '500') + ';color:' + (isMe ? result.color : '#e2e8f0') + ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + esc(result.name) + (isMe ? ' (moi)' : '') + '</span>');
    if (result.avgDist != null) html.push('<span style="font-size:11px;color:#6b7280;flex-shrink:0;margin-right:6px">~' + fmtDst(result.avgDist) + '</span>');
    html.push('<span style="font-size:17px;font-weight:700;color:#f97316;flex-shrink:0">' + fmtPts(result.score) + ' pts</span>');
    html.push('</div>');
  });
  html.push('</div>');

  html.push('<div style="width:100%;max-width:440px;background:#0d1120;border-radius:12px;padding:12px 16px;border:1px solid #1e2d45">');
  html.push('<div style="font-size:10px;color:#4b5563;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Détail par manche</div>');
  html.push('<div style="display:flex;font-size:10px;color:#4b5563;text-transform:uppercase;letter-spacing:.5px;padding-bottom:6px;border-bottom:1px solid #1e2d45;margin-bottom:4px">');
  html.push('<span style="flex:1">Lieu</span>');
  results.forEach((result) => {
    html.push('<span style="min-width:60px;text-align:right;color:' + result.color + '">' + esc(result.name.split(' ')[0]) + '</span>');
  });
  html.push('</div>');

  for (let roundIndex = 0; roundIndex < totalRounds; roundIndex++) {
    const resultPlaceSource = (opts.eventsMode && window.EVENTS && window.EVENTS.length)
      ? window.EVENTS
      : ROUNDS;
    const place = resultPlaceSource[seeds[roundIndex] || 0] || { name: '?' };
    const placeName = place.name ? place.name.split('—')[0].trim().slice(0, 22) : '?';
    html.push('<div style="display:flex;align-items:center;padding:5px 0;border-bottom:1px solid #1e2d4533">');
    html.push('<span style="flex:1;font-size:11px;color:#94a3b8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + placeName + '</span>');
    results.forEach((result) => {
      const points = ((answers[roundIndex] || {})[result.pid] || {}).pts || 0;
      const color = points > 0 ? (points >= 1500 ? '#22c55e' : points >= 700 ? '#fbbf24' : '#f97316') : '#4b5563';
      html.push('<span style="min-width:60px;text-align:right;font-size:11px;font-weight:600;color:' + color + '">' + fmtPts(points) + '</span>');
    });
    html.push('</div>');
  }

  html.push('<div style="display:flex;align-items:center;padding:8px 0 2px;margin-top:2px;border-top:1px solid #1e2d45">');
  html.push('<span style="flex:1;font-size:11px;font-weight:700;color:#e2e8f0;text-transform:uppercase;letter-spacing:.5px">Total</span>');
  results.forEach((result) => {
    html.push('<span style="min-width:60px;text-align:right;font-size:13px;font-weight:700;color:#f97316">' + fmtPts(result.score) + '</span>');
  });
  html.push('</div>');
  html.push('</div>');

  const awards = [];
  const mostAccurate = results.filter((result) => result.avgDist != null).sort((a, b) => (a.avgDist || 999) - (b.avgDist || 999))[0];
  if (mostAccurate) awards.push({ emoji: '🎯', title: 'Le plus précis', desc: '~' + fmtDst(mostAccurate.avgDist) + ' en moyenne', player: mostAccurate });

  const fastest = results.filter((result) => result.avgTime != null).sort((a, b) => (a.avgTime || 999) - (b.avgTime || 999))[0];
  if (fastest) awards.push({ emoji: '⚡', title: 'Le plus réactif', desc: 'Temps de réponse le plus court', player: fastest });

  const longestShot = results.filter((result) => result.worstDist != null).sort((a, b) => b.worstDist - a.worstDist)[0];
  if (longestShot) awards.push({ emoji: '🚀', title: 'Tir le plus loin', desc: fmtDst(longestShot.worstDist) + ' de la cible', player: longestShot });

  let bestRound = null;
  let bestRoundPoints = 0;
  results.forEach((result) => {
    for (let roundIndex = 0; roundIndex < totalRounds; roundIndex++) {
      const points = ((answers[roundIndex] || {})[result.pid] || {}).pts || 0;
      if (points > bestRoundPoints) {
        bestRoundPoints = points;
        bestRound = { player: result, pts: points };
      }
    }
  });
  if (bestRound) awards.push({ emoji: '⭐', title: 'Meilleure manche', desc: '+' + fmtPts(bestRound.pts) + ' pts', player: bestRound.player });
  if (results.length > 0) awards.push({ emoji: '👑', title: 'Champion', desc: fmtPts(results[0].score) + ' pts au total', player: results[0] });

  if (awards.length > 0) {
    html.push('<div style="width:100%;max-width:440px">');
    html.push('<div style="font-size:10px;color:#4b5563;text-transform:uppercase;letter-spacing:1px;padding:0 0 6px">Succès</div>');
    html.push('<div style="display:flex;flex-wrap:wrap;gap:8px">');
    awards.forEach((award) => {
      const isMe = award.player.pid === mp.playerId;
      html.push('<div style="flex:1;min-width:180px;background:#0d1120;border:1px solid ' + (isMe ? award.player.color : '#1e2d45') + ';border-radius:10px;padding:10px 12px;display:flex;align-items:center;gap:10px">');
      html.push('<span style="font-size:22px">' + award.emoji + '</span>');
      html.push('<div style="flex:1;min-width:0">');
      html.push('<div style="font-size:10px;color:#f97316;font-weight:700;text-transform:uppercase;letter-spacing:.5px">' + award.title + '</div>');
      html.push('<div style="font-size:12px;color:#e2e8f0;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + esc(award.player.name) + '</div>');
      html.push('<div style="font-size:10px;color:#6b7280">' + award.desc + '</div>');
      html.push('</div>');
      html.push(avatar(award.player, 22));
      html.push('</div>');
    });
    html.push('</div>');
    html.push('</div>');
  }

  html.push('<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:8px">');
  html.push('<button onclick="mpLeaveRoom()" style="padding:12px 28px;font-size:14px;border-radius:10px;border:1px solid #2d3f5e;background:transparent;color:#e2e8f0;cursor:pointer;font-weight:600">⌂ Menu</button>');
  html.push('<button onclick="window.mpEnterExplore&&window.mpEnterExplore()" style="padding:10px 20px;border-radius:9px;border:1px solid #2d3f5e;cursor:pointer;background:rgba(30,45,69,.9);color:#e2e8f0;font-size:13px;font-weight:600">Explorer la carte</button>');
  html.push('</div>');

  const overlay = document.getElementById('overlay');
  overlay.innerHTML = html.join('');
  overlay.classList.remove('h');
}

// ------------------------------------------------------------
// Panel live / marqueurs temps réel
// ------------------------------------------------------------
function mpEnsureLivePanel() {
  if (document.getElementById('mp-live-panel')) return;

  const panel = document.createElement('div');
  panel.id = 'mp-live-panel';
  panel.style.cssText = 'position:fixed;top:64px;right:12px;z-index:9000;background:rgba(13,17,32,0.93);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid #1e2d45;border-radius:12px;padding:10px 12px;min-width:170px;max-width:220px;box-shadow:0 4px 24px rgba(0,0,0,.5);font-family:system-ui,sans-serif;pointer-events:none;transition:opacity .2s';
  document.body.appendChild(panel);
}

function mpUpdateLivePanel(room) {
  const panel = document.getElementById('mp-live-panel');
  if (!panel) return;

  const overlay = document.getElementById('overlay');
  if (!overlay || !overlay.classList.contains('h')) {
    panel.style.display = 'none';
    return;
  }

  panel.style.display = 'block';
  mpRenderLivePanel(room);
}

function mpRenderLivePanel(room) {
  const panel = document.getElementById('mp-live-panel');
  if (!panel) return;

  const roundIndex = room.round || 0;
  const answers = (room.answers || {})[roundIndex] || {};
  const players = room.players || {};
  const opts = room.options || {};
  const sortedPlayers = Object.entries(players).sort((a, b) => (b[1].score || 0) - (a[1].score || 0));

  const html = [];
  html.push('<div style="font-size:10px;color:#f97316;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:7px">Manche ' + (roundIndex + 1) + '/' + (opts.nbRounds || 5) + '</div>');

  sortedPlayers.forEach(([pid, player]) => {
    const isMe = pid === mp.playerId;
    const color = player.color || mpColorFor(pid);
    const answer = answers[pid];
    const done = answer && (answer.status === 'submitted' || answer.status === 'exhausted' || answer.status === 'eliminated');
    const hintLevel = answer && answer.hintLevel !== undefined ? answer.hintLevel : 0;

    html.push('<div style="display:flex;align-items:center;gap:7px;padding:5px 0;border-bottom:1px solid #1e2d4555">');
    if (player.photo) {
      html.push('<img src="' + safePhotoUrl(player.photo) + '" style="width:22px;height:22px;border-radius:50%;border:2px solid ' + color + ';flex-shrink:0;object-fit:cover">');
    } else {
      html.push('<div style="width:22px;height:22px;border-radius:50%;background:' + color + '33;border:2px solid ' + color + ';display:flex;align-items:center;justify-content:center;font-size:10px;color:' + color + ';font-weight:700;flex-shrink:0">' + safeChar(player.name) + '</div>');
    }
    html.push('<span style="flex:1;font-size:12px;color:' + (isMe ? color : '#e2e8f0') + ';font-weight:' + (isMe ? '700' : '400') + ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + esc(player.name) + '</span>');
    html.push(done
      ? (answer.status === 'eliminated'
        ? '<span style="font-size:10px;color:#ef4444;font-weight:700;flex-shrink:0">Éliminé</span>'
        : '<span style="font-size:11px;color:#22c55e;font-weight:700;flex-shrink:0">+' + fmtPts(answer.pts || 0) + '</span>')
      : '<span style="font-size:10px;color:#fbbf24;flex-shrink:0">Indice ' + (hintLevel + 1) + '</span>');
    html.push('</div>');
    html.push('<div style="font-size:10px;color:#4b5563;padding-left:29px;padding-bottom:2px">' + fmtPts(player.score || 0) + ' pts</div>');
  });

  panel.innerHTML = html.join('');
}

function mpRemoveLivePanel() {
  const panel = document.getElementById('mp-live-panel');
  if (panel) panel.remove();
}

function mpUpdateOtherMarkers(room) {
  if (!window.map) return;

  const roundIndex = room.round || 0;
  const answers = (room.answers || {})[roundIndex] || {};
  const players = room.players || {};

  Object.keys(mpOtherMarkers).forEach((pid) => {
    if (!answers[pid] || !answers[pid].pos) {
      mpOtherMarkers[pid].remove();
      delete mpOtherMarkers[pid];
    }
  });

  Object.entries(answers).forEach(([pid, answer]) => {
    if (pid === mp.playerId || !answer.pos || answer.pos.lat == null) return;

    const player = players[pid];
    if (!player) return;

    const color = player.color || mpColorFor(pid);
    const icon = L.divIcon({
      className: '',
      html: '<div style="width:20px;height:20px;background:' + color + ';border:2.5px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 8px rgba(0,0,0,.4);position:relative"><div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(45deg);font-size:8px;color:#fff;font-weight:700">' + safeChar(player.name) + '</div></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 20],
    });

    const popup = '<div style="font-family:system-ui;font-size:12px"><b style="color:' + color + '">' + esc(player.name) + '</b><br>' + fmtDst(answer.dist) + '<br><b style="color:#f97316">+' + fmtPts(answer.pts) + '</b></div>';

    if (mpOtherMarkers[pid]) {
      mpOtherMarkers[pid].setLatLng([answer.pos.lat, answer.pos.lng]).setPopupContent(popup);
    } else {
      mpOtherMarkers[pid] = L.marker([answer.pos.lat, answer.pos.lng], { icon }).bindPopup(popup).addTo(map);
    }
  });
}

function mpClearOtherMarkers() {
  Object.values(mpOtherMarkers).forEach((marker) => {
    try { marker.remove(); } catch (error) {}
  });

  Object.keys(mpOtherMarkers).forEach((key) => delete mpOtherMarkers[key]);
  mpPolylines.forEach((polyline) => {
    try { polyline.remove(); } catch (error) {}
  });
  mpPolylines.length = 0;
}

// ------------------------------------------------------------
// Hook sur la validation de réponse du jeu principal
// ------------------------------------------------------------
window.mpOnConfirm = function () {
  if (!window._mpMode || !mp.roomCode) return;
  if (mpAnswered.value) return;

  mpAnswered.value = true;
  gameActive = false;
  clearInterval(tiv);

  const currentRound = roundList[curR];
  const level = 5 - (fixedLevel >= 0 ? fixedLevel : curL);
  let pts = 0;
  let dist = null;

  if (playerPos && currentRound) {
    dist = haversine(playerPos.lat, playerPos.lng, currentRound.lat, currentRound.lng);
    const effectiveLevel = chillMode ? 5 : level;
    const distanceCoefficient = chillMode ? 1.0 : 0.9;
    const effectiveDistance = eventsMode && currentRound.radius
      ? Math.max(0, dist - currentRound.radius / 1000)
      : dist;
    const timeBonus = chillMode ? 0 : BASE_PTS[effectiveLevel] * 0.1 * (timeLeft / 30) * (dist < 2000 ? 1 : 0);
    pts = Math.round(BASE_PTS[effectiveLevel] * distanceCoefficient * Math.exp(-DIST_K * effectiveDistance) + timeBonus);
  }

  if (playerPos && window.map) {
    if (playerMarker) playerMarker.remove();
    const myColor = colorMap[mp.playerId] ? colorMap[mp.playerId] : '#f97316';
    playerMarker = L.marker([playerPos.lat, playerPos.lng], { icon: makePin(myColor) }).addTo(map);
  }

  const confirmButton = document.getElementById('confb');
  if (confirmButton) confirmButton.disabled = true;

  if (typeof showToast === 'function') {
    showToast(dist != null ? fmtDst(dist) + ' ? +' + pts + ' pts — En attente des autres...' : 'Raté — En attente des autres...');
  }

  mpSubmitAnswer(playerPos, dist, pts, mpCurrentRound.value);
};

// ------------------------------------------------------------
// Quitter / disband / explorer
// ------------------------------------------------------------
function mpLeaveRoom() {
  clearInterval(mp.timerInterval);
  clearTimeout(countdownTimer);
  countdownDone = false;
  mpRemoveLivePanel();
  mpClearOtherMarkers();

  if (mp.roomRef && mp.playerId) {
    update(mp.roomRef, { status: 'disbanded', disbandedBy: mp.playerId, disbandedAt: Date.now() }).catch(() => {});
  }

  mpCleanup();
  const roomRefToRemove = mp.roomRef;
  if (roomRefToRemove) {
    setTimeout(() => {
      remove(roomRefToRemove).catch(() => {});
    }, 1000);
  }

  mp.roomCode = mp.playerId = mp.roomRef = null;
  mp.isHost = false;
  mpCurrentRound.value = -1;
  mpAnswered.value = false;
  mpRoundActive.value = false;
  window._mpMode = false;

  if (typeof showMenu === 'function') showMenu();
}

function mpOnDisbanded(room) {
  if (mp.playerId && room.disbandedBy === mp.playerId) return;

  clearInterval(mp.timerInterval);
  clearTimeout(countdownTimer);
  countdownDone = false;
  mpRemoveLivePanel();
  mpClearOtherMarkers();
  mpCleanup();

  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.innerHTML = '<div class="otitle" style="font-size:28px">Partie terminée</div>' + '<div style="font-size:14px;color:#94a3b8;margin-top:8px">Un joueur a quitté la partie.</div>';
    overlay.classList.remove('h');
  }

  mp.roomCode = mp.playerId = mp.roomRef = null;
  mp.isHost = false;
  mpCurrentRound.value = -1;
  mpAnswered.value = false;
  mpRoundActive.value = false;
  window._mpMode = false;

  setTimeout(() => {
    if (typeof showMenu === 'function') showMenu();
  }, 2000);
}

function mpEnterExplore() {
  const overlay = document.getElementById('overlay');
  if (overlay) overlay.classList.add('h');

  const backButton = document.getElementById('back-btn');
  if (backButton) backButton.style.display = 'block';

  setTimeout(() => {
    try { map.invalidateSize(); } catch (error) {}
    if (mp._lastBounds && mp._lastBounds.length > 1) {
      try { map.fitBounds(L.latLngBounds(mp._lastBounds), { padding: [80, 80], maxZoom: 6 }); } catch (error) {}
    } else if (mp._lastBounds && mp._lastBounds.length === 1) {
      try { map.setView(mp._lastBounds[0], 5); } catch (error) {}
    }
  }, 150);
}

window.mpEnterExplore = mpEnterExplore;
window.mpCreateRoom = mpCreateRoom;
window.mpJoinRoom = mpJoinRoom;
window.mpLaunchGame = mpLaunchGame;
window.mpLeaveRoom = mpLeaveRoom;
window.mpSubmitAnswer = mpSubmitAnswer;
window.mpCheckAllAnswered = mpWatchAllAnswered;
window.mpLaunchNextRound = mpLaunchNextRound;
window.mpOnConfirm = window.mpOnConfirm || function () {};
