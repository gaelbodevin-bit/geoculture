// Classement du jour

function saveDailyScore(level, total, pct) {
  if(!currentUser) return;
  var dateStr = typeof getDailyDateFR==='function' ? getDailyDateFR() : new Date().toISOString().slice(0,10);
  addDoc(collection(fbDb, 'daily_scores'), {
    uid: currentUser.uid,
    displayName: currentUser.displayName || 'Joueur',
    photoURL: currentUser.photoURL || '',
    total: total, pct: pct, level: level, date: dateStr,
    createdAt: serverTimestamp()
  }).catch(function(e){ console.error('saveDailyScore error:', e); });
}

function loadDailyLeaderboard(level, callback) {
  var dateStr = typeof getDailyDateFR==='function' ? getDailyDateFR() : new Date().toISOString().slice(0,10);
  var q = query(collection(fbDb, 'daily_scores'), where('date', '==', dateStr), where('level', '==', level), limit(100));
  getDocs(q).then(function(snap) {
    var entries = [];
    snap.forEach(function(doc) { entries.push(doc.data()); });
    entries.sort(function(a,b){ return (b.total||0)-(a.total||0); });
    callback(entries.slice(0,20));
  }).catch(function(e) { console.error('Daily LB error:', e); callback([]); });
}

function showDailyLB() {
  var ov = document.getElementById('overlay');
  window._prevOverlayHTML = ov.innerHTML;
  window._prevOverlayHidden = ov.classList.contains('h');
  var LVLS = [
    {i:0, label:'Expert', color:'#ef4444'},
    {i:1, label:'Difficile', color:'#f97316'},
    {i:2, label:'Moyen', color:'#eab308'},
    {i:3, label:'Facile', color:'#22c55e'}
  ];

  function render(level, entries) {
    var dateStr = typeof getDailyDateFR==='function' ? getDailyDateFR() : '';
    var h = [];
    h.push('<div class="otitle" style="font-size:26px">CLASSEMENT DU JOUR</div>');
    h.push('<div style="font-size:11px;color:#6b7280;margin-bottom:8px">' + dateStr + '</div>');
    h.push('<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-bottom:10px">');
    LVLS.forEach(function(lv) {
      var active = lv.i === level;
      h.push('<button onclick="window._showDailyLbLevel(' + lv.i + ')" style="padding:5px 12px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;border:2px solid ' + lv.color + ';background:' + (active?lv.color:'transparent') + ';color:' + (active?'#fff':lv.color) + '">' + lv.label + '</button>');
    });
    h.push('</div>');
    if(entries.length === 0) {
      h.push('<div class="osub" style="margin:16px 0">Aucune partie pour ce niveau aujourd&#39;hui.</div>');
    } else {
      h.push('<div class="ocard" style="max-height:340px;overflow-y:auto;width:100%;max-width:460px;padding:8px 0">');
      entries.forEach(function(g, i) {
        var medals = ['&#129351;','&#129352;','&#129353;'];
        var medal = medals[i] || (i+1)+'.';
        var barColor = g.pct>=80?'#22c55e':g.pct>=50?'#fbbf24':'#f97316';
        var isMe = currentUser && g.uid === currentUser.uid;
        h.push('<div style="display:flex;align-items:center;gap:10px;padding:8px 14px;border-bottom:1px solid #1e2d45' + (isMe?';background:#1a2238;border-radius:8px':'') + '">');
        h.push('<span style="font-size:16px;min-width:28px;text-align:center">' + medal + '</span>');
        if(g.photoURL) h.push('<img src="' + g.photoURL + '" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0">');
        else h.push('<div style="width:28px;height:28px;border-radius:50%;background:#1e2d45;flex-shrink:0"></div>');
        h.push('<span style="flex:1;font-size:13px;color:' + (isMe?'#f97316':'#e2e8f0') + ';font-weight:' + (isMe?'700':'400') + ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + (g.displayName||'Joueur') + '</span>');
        h.push('<div style="text-align:right">');
        h.push('<div style="font-size:15px;font-weight:700;color:' + barColor + '">' + (g.total||0).toLocaleString('fr-FR') + ' pts</div>');
        h.push('<div style="font-size:11px;color:#6b7280">' + (g.pct||0) + '%</div></div></div>');
      });
      h.push('</div>');
    }
    h.push('<button class="btn bg" onclick="closeHistory()" style="width:auto;padding:10px 20px;margin-top:8px">&#8592; Retour</button>');
    ov.innerHTML = h.join('');
    ov.classList.remove('h');
  }

  window._showDailyLbLevel = function(level) {
    ov.innerHTML = '<div class="otitle" style="font-size:26px">Chargement...</div>';
    ov.classList.remove('h');
    loadDailyLeaderboard(level, function(entries){ render(level, entries); });
  };
  window._showDailyLbLevel(0);
}

window.showDailyLB = showDailyLB;
window.saveDailyScore = saveDailyScore;