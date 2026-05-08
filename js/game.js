var noZoomMode=false;
var fixedLevel=-1;
var BASE_PTS=[0,500,1000,1500,2000,3000];
var MAX_DIST=2000;
var CIRC=2*Math.PI*38;
var T=30;

var map,playerMarker,targetMarker,lineLayer;
var roundList=[],curR=0,curL=0,total=0,timeLeft=T,tiv=null;
var playerPos=null,gameActive=false,confirming=false,roundScores=[];

function fmtDist(meters){
  if(meters===null||meters===undefined)return '\u2014';
  if(meters<1000)return meters.toLocaleString('fr-FR')+' m';
  return (meters/1000).toLocaleString('fr-FR',{maximumFractionDigits:1})+' km';
}

function haversine(la1,lo1,la2,lo2){
  const R=6371,r=Math.PI/180;
  const a=Math.sin((la2-la1)*r/2)**2+Math.cos(la1*r)*Math.cos(la2*r)*Math.sin((lo2-lo1)*r/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

function initMap(){
  if(map){map.remove();map=null;}
  if(typeof L==='undefined'){console.error('Leaflet not loaded');return;}
  map=L.map('map',{
    center:[20,10],zoom:2,
    zoomControl:!noZoomMode,attributionControl:true,
    minZoom:1,maxZoom:noZoomMode?2:18,
    maxBounds:[[-85,-180],[85,180]],maxBoundsViscosity:1.0,
    scrollWheelZoom:!noZoomMode,doubleClickZoom:!noZoomMode,
    touchZoom:!noZoomMode,boxZoom:!noZoomMode,
    keyboard:!noZoomMode,dragging:!noZoomMode
  });
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'(c) Esri'}).addTo(map);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,opacity:1}).addTo(map);
  map.on('click',onMapClick);
  adjustMapZoom();
  window.addEventListener('resize', adjustMapZoom);
}

function adjustMapZoom(){
  if(!map) return;
  var container=map.getContainer();
  var w=container.offsetWidth;
  var h=container.offsetHeight;
  if(w===0||h===0) return;
  // Zoom pour que 256*2^z >= largeur (évite répétition horizontale)
  var minZ=Math.ceil(Math.log2(w/256));
  if(minZ<1) minZ=1;
  map.setMinZoom(minZ);
  if(noZoomMode){
    map.setMaxZoom(minZ);
  }
  if(map.getZoom()<minZ){
    map.setZoom(minZ,{animate:false});
  }
}
function makePin(color){
  return L.divIcon({className:'',
    html:`<div style="width:18px;height:18px;background:${color};border:2.5px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 10px rgba(0,0,0,.5)"></div>`,
    iconSize:[18,18],iconAnchor:[9,18]});
}

function onMapClick(e){
  if(!gameActive||confirming)return;
  playerPos={lat:e.latlng.lat,lng:e.latlng.lng};
  if(playerMarker)playerMarker.remove();
  playerMarker=L.marker([playerPos.lat,playerPos.lng],{icon:makePin('#f97316')}).addTo(map);
  document.getElementById('confb').disabled=false;
  document.getElementById('placed-info').textContent=`\u1f4cd ${playerPos.lat.toFixed(3)}, ${playerPos.lng.toFixed(3)}`;
}

function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=0|Math.random()*(i+1);[b[i],b[j]]=[b[j],b[i]]}return b}

function startGame(){
  total=0;roundScores=[];
  roundList=shuffle(ROUNDS).slice(0,5);
  curR=0;
  document.getElementById('hsc').textContent='0';
  document.getElementById('overlay').classList.add('h');
  // S'assurer que la carte est initialis\u00e9e
  if(!map){ try{ initMap(); }catch(e){ console.warn('Map init failed:',e); } }
  startRound(0);
}

function startRound(idx){
  curR=idx;curL=0;playerPos=null;confirming=false;gameActive=true;
  if(playerMarker){playerMarker.remove();playerMarker=null;}
  if(targetMarker){targetMarker.remove();targetMarker=null;}
  if(lineLayer){lineLayer.remove();lineLayer=null;}
  map.setView([20,10],map.getMinZoom(),{animate:false});
  document.getElementById('confb').disabled=true;
  document.getElementById('explore-tip').style.display='none';
  document.getElementById('back-btn').style.display='none';
  document.getElementById('placed-info').textContent='Cliquez sur la carte pour placer votre r\u00e9ponse';
  document.getElementById('hrnd').textContent=`${idx+1}/5`;
  updateDots();showHint();startTimer();
  // Masquer le bouton indice suivant en niveau fixe
  var skipb=document.getElementById('skipb');
  if(skipb) skipb.style.display=fixedLevel>=0?'none':'block';
}

function showHint(){
  var hintIdx=fixedLevel>=0?fixedLevel:curL;
  const h=roundList[curR].hints[hintIdx];
  const level=5-(fixedLevel>=0?fixedLevel:curL);
  const b=document.getElementById('badge');
  b.textContent=h.l;b.style.background=h.bc;b.style.color=h.tc;
  document.getElementById('qtxt').textContent=h.t;
  // level calcul\u00e9 dans showHint
  const mx=Math.round(BASE_PTS[level]*1.5);
  const timeToMax=Math.round(T*0.67);
  document.getElementById('lvl-max').textContent=mx.toLocaleString('fr-FR')+' pts';
  document.getElementById('lvl-mult').textContent='Score max si r\u00e9ponse < '+timeToMax+'s et < 1 km';
  let remaining=total;
  for(let i=curR;i<roundList.length;i++){
    remaining+=i===curR?mx:Math.round(BASE_PTS[5]*1.5);
  }
  document.getElementById('hmax').textContent=remaining.toLocaleString('fr-FR');
}

function updateDots(){
  for(var i=0;i<5;i++){
    var d=document.getElementById('d'+i);
    if(fixedLevel>=0) d.className='dot'+(i===fixedLevel?' on':'');
    else d.className='dot'+(i===curL?' on':i<curL?' done':'');
  }
}

function startTimer(){
  clearInterval(tiv);timeLeft=T;
  var arcEl=document.getElementById('arc');
  if(arcEl){
    arcEl.style.transition='none';
    arcEl.style.strokeDashoffset='0';
    arcEl.style.stroke='#22c55e';
    void arcEl.offsetWidth;
    arcEl.style.transition='stroke-dashoffset .9s linear,stroke .3s';
  }
  var numEl=document.getElementById('tnum');
  if(numEl){numEl.textContent=T;numEl.style.color='#22c55e';}
  tiv=setInterval(function(){
    timeLeft=Math.max(0,timeLeft-.1);
    renderTimer();
    if(timeLeft<=0){clearInterval(tiv);nextLevel();}
  },100);
}

function renderTimer(){
  const pct=timeLeft/T;
  const offset=CIRC*(1-pct);
  const arc=document.getElementById('arc');
  if(timeLeft<=0) arc.style.transition='none';
  arc.style.strokeDashoffset=offset;
  const col=timeLeft>19?'#22c55e':timeLeft>9?'#fbbf24':'#ef4444';
  arc.style.stroke=col;
  const n=document.getElementById('tnum');
  n.textContent=Math.ceil(timeLeft);
  n.style.color=col;
}

var FLASH_COLORS=['#ef4444','#f97316','#eab308','#22c55e','#3b82f6'];
var FLASH_LABELS=['Expert','Difficile','Moyen','Facile','Tr\u00e8s facile'];

function triggerFlash(level){
  const el=document.getElementById('level-flash');
  const badge=document.getElementById('flash-badge');
  const sub=document.getElementById('flash-sub');
  const col=FLASH_COLORS[level]||'#ef4444';
  const lbl=FLASH_LABELS[level]||'';
  el.style.background=col+'22';
  badge.textContent=lbl;
  badge.style.color=col;
  sub.textContent='Indice suivant !';
  el.classList.remove('fire');
  void el.offsetWidth;
  el.classList.add('fire');
  const sb=document.getElementById('sidebar');
  sb.style.setProperty('--flash-col',col);
  sb.classList.remove('flash-border');
  void sb.offsetWidth;
  sb.classList.add('flash-border');
}

function nextLevel(){
  if(!gameActive)return;
  if(fixedLevel>=0){clearInterval(tiv);gameActive=false;confirming=true;resolveRound();}
  else if(curL<4){curL++;triggerFlash(curL);updateDots();showHint();startTimer();}
  else{clearInterval(tiv);gameActive=false;confirming=true;resolveRound();}
}

function confirmGuess(){
  if(!gameActive||confirming)return;
  clearInterval(tiv);gameActive=false;confirming=true;resolveRound();
}

function resolveRound(){
  const r=roundList[curR];
  const level=5-(fixedLevel>=0?fixedLevel:curL);
  let pts=0,dist=null;
  if(playerPos){
    dist=haversine(playerPos.lat,playerPos.lng,r.lat,r.lng);
    const precScore=BASE_PTS[level]*Math.max(0,1-dist/MAX_DIST);
    const timeBonus=precScore*(timeLeft/T)*0.5;
    pts=Math.round(precScore+timeBonus);
  }
  total+=pts;
  roundScores.push({name:r.name,pts,distM:dist!=null?Math.round(dist*1000):null,maxPts:Math.round(BASE_PTS[level]*1.5),level});
  document.getElementById('hsc').textContent=total.toLocaleString('fr-FR');
  const popupStyle='font-family:system-ui,sans-serif;font-size:13px;line-height:1.5;min-width:140px';
  targetMarker=L.marker([r.lat,r.lng],{icon:makePin('#22c55e')})
    .bindPopup(`<div style="${popupStyle}"><b style="color:#15803d">\u2713 ${r.name}</b>${dist?`<br><span style="color:#666">Distance : ${fmtDist(Math.round(dist*1000))}</span>`:'<br><span style="color:#666">Pas de tentative</span>'}</div>`,{maxWidth:220}).addTo(map);
  if(playerPos){
    if(playerMarker) playerMarker.bindPopup(`<div style="${popupStyle}"><b style="color:#ea580c">\u1f4cd Votre r\u00e9ponse</b><br><span style="color:#666">Distance : ${fmtDist(Math.round(dist*1000))}</span><br><span style="color:#f97316;font-weight:700">+${pts} pts</span></div>`,{maxWidth:200});
    lineLayer=L.polyline([[playerPos.lat,playerPos.lng],[r.lat,r.lng]],{color:'#f97316',weight:2.5,dashArray:'8 5',opacity:.8}).addTo(map);
    map.fitBounds(L.latLngBounds([[playerPos.lat,playerPos.lng],[r.lat,r.lng]]),{padding:[60,60]});
  } else {
    map.setView([r.lat,r.lng],12);targetMarker.openPopup();
  }
  document.getElementById('placed-info').textContent=dist!=null?`\u1f3af ${fmtDist(Math.round(dist*1000))} \u2014 +${pts.toLocaleString('fr-FR')} pts`:`\u274c Rat\u00e9 \u2014 ${r.name}`;
  showToast(dist!=null?`${r.name} \u00b7 ${fmtDist(Math.round(dist*1000))} \u00b7 +${pts} pts`:`Rat\u00e9 ! C'\u00e9tait : ${r.name}`);
  setTimeout(()=>{
    showInter(pts,dist,r.name);
  },3000);
}


function showInter(pts,dist,name){
  const lastScore=roundScores[roundScores.length-1];
  const mx=lastScore?lastScore.maxPts:4500;
  const pctRound=mx>0?Math.round(pts/mx*100):0;
  const barColor=pctRound>=80?'#22c55e':pctRound>=50?'#fbbf24':'#f97316';
  const ov=document.getElementById('overlay');
  const placeDesc = roundList[curR].desc || '';
  const imgId = 'wimg' + Date.now();
  const wq = encodeURIComponent(roundList[curR].name.split('\u2014')[0].trim().replace(/\s*\u2014.*/,'').trim());
  var _nextBtn=curR+1<roundList.length?'<button class="btn ba" onclick="nextRound()" style="width:auto;padding:12px 32px;font-size:14px">Manche suivante</button>':'<button class="btn ba" onclick="showEnd()" style="width:auto;padding:12px 32px;font-size:14px">Voir le bilan &#8594;</button>';
  ov.innerHTML=`
    <div id="${imgId}" style="width:100%;max-width:380px;height:150px;background:#111827;border-radius:10px;margin-bottom:-4px;overflow:hidden;display:flex;align-items:center;justify-content:center"><span style="color:#374151;font-size:11px">\u1f4f8</span></div>
    <div class="otitle" style="font-size:38px">+${pts.toLocaleString('fr-FR')}</div>
    <div class="osub" style="color:#94a3b8;font-size:12px;line-height:1.55;margin-top:-4px;max-width:360px;text-align:center;font-style:normal">${placeDesc}</div>
    <div style="display:flex;align-items:center;gap:10px;width:100%;max-width:320px">
      <div style="flex:1;height:8px;background:#1e2d45;border-radius:4px;overflow:hidden">
        <div style="width:${pctRound}%;height:100%;background:${barColor};border-radius:4px;transition:width .6s ease"></div>
      </div>
      <span style="font-size:13px;font-weight:600;color:${barColor};white-space:nowrap">${pts.toLocaleString('fr-FR')} / ${mx.toLocaleString('fr-FR')} pts</span>
    </div>
    <div class="osub" style="color:#f1f5f9;font-size:15px;font-weight:600;margin-top:-4px">${name}</div>
    <div class="osub" style="margin-top:-6px">${dist!=null?fmtDist(Math.round(dist*1000))+' de la cible':'Aucun point plac\u00e9'}</div>
    <div style="color:#6b7280;font-size:13px">Total : <b style="color:#f97316">${total.toLocaleString('fr-FR')} pts</b></div>
    <div style="display:flex;gap:10px;margin-top:6px;flex-wrap:wrap;justify-content:center">
      <button class="btn bg" onclick="showMenu()" style="width:auto;padding:12px 22px;font-size:14px">\u2302 Menu</button>
      <button id="explore-btn" onclick="enterExploreMode()" style="font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;padding:10px 20px;border-radius:9px;border:1px solid #2d3f5e;cursor:pointer;background:rgba(30,45,69,.9);color:#e2e8f0">\u1f50d Explorer la carte</button>
      ${_nextBtn}
    </div>
    <div id="ad-inter">
      <!-- PUB RECTANGLE 300x250 (d\u00e9commenter apr\u00e8s approbation AdSense)
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXX"
           data-ad-format="auto"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
      -->
    </div>`;
  ov.classList.remove('h');
  // Fetch Wikipedia image
  (function(id,q){
    function tryWiki(lang){
      fetch('https://'+lang+'.wikipedia.org/api/rest_v1/page/summary/'+encodeURIComponent(q))
        .then(function(r){return r.json();})
        .then(function(d){
          var el=document.getElementById(id);
          if(!el)return;
          if(d.thumbnail&&d.thumbnail.source){
            el.innerHTML='<img src="'+d.thumbnail.source+'" style="width:100%;height:100%;object-fit:cover;border-radius:10px" alt="">';
          } else if(lang==='fr'){tryWiki('en');}
          else{el.style.display='none';}
        }).catch(function(){var el=document.getElementById(id);if(el)el.style.display='none';});
    }
    tryWiki('fr');
  })(imgId, roundList[curR].name.replace(/\s*\u2014.*/,'').trim());

}

function showEnd(){
  const totalMax=roundScores.reduce((a,s)=>a+(s.maxPts||0),0);
  const pct=totalMax>0?Math.round(total/totalMax*100):0;
  const rows=roundScores.map(s=>{
    const distTxt=s.distM!=null?fmtDist(s.distM):'rat\u00e9';
    const ptsColor=s.pts>=s.maxPts*0.8?'#22c55e':s.pts>=s.maxPts*0.4?'#fbbf24':'#f97316';
    return `<div class="orow">
      <span style="font-size:11px;max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1">${s.name}</span>
      <span style="color:#6b7280;font-size:11px;margin:0 6px;flex-shrink:0">${distTxt}</span>
      <span style="font-size:11px;color:#4b5563;flex-shrink:0">${s.pts.toLocaleString('fr-FR')}/${s.maxPts.toLocaleString('fr-FR')}</span>
    </div>`;
  }).join('');
  const rank=pct>=90?'G\u00e9ographe l\u00e9gendaire':pct>=70?'Expert international':pct>=50?'Bon explorateur':pct>=30?'En progression':'D\u00e9butant courageux';
  const ov=document.getElementById('overlay');
  ov.innerHTML=`<div class="otitle" style="font-size:38px">Termin\u00e9 !</div>
    <div class="osub" style="color:#f97316;font-weight:700;font-size:15px">${rank} \u2014 ${pct}%</div>
    <div class="ocard">
      <div style="display:flex;justify-content:space-between;font-size:10px;color:#4b5563;text-transform:uppercase;letter-spacing:.5px;padding-bottom:6px;border-bottom:1px solid #1e2d45;margin-bottom:4px">
        <span>Lieu</span><span>Distance</span><span>Score / Max</span>
      </div>
      ${rows}
      <div class="otot">
        <span>Total</span>
        <span style="font-size:12px;color:#6b7280;margin-right:auto;padding-left:12px">${total.toLocaleString('fr-FR')} / ${totalMax.toLocaleString('fr-FR')} pts</span>
        <span class="p">${pct}%</span>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:6px;flex-wrap:wrap;justify-content:center">
      <button class="btn bg" onclick="showMenu()" style="width:auto;padding:12px 22px;font-size:14px">\u2302 Menu</button>
      <button id="explore-btn" onclick="enterExploreMode()" style="font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;padding:10px 20px;border-radius:9px;border:1px solid #2d3f5e;cursor:pointer;background:rgba(30,45,69,.9);color:#e2e8f0">\u1f50d Explorer la carte</button>
      <button class="btn ba" onclick="startGame()" style="width:auto;padding:12px 32px;font-size:14px">\u21ba Rejouer</button>
    </div>
    <div id="ad-inter">
      <!-- PUB RECTANGLE 300x250 (d\u00e9commenter apr\u00e8s approbation AdSense)
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXX"
           data-ad-format="auto"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
      -->
    </div>`;
  ov.classList.remove('h');
}

function showMenu(){
  clearInterval(tiv);
  gameActive=false;
  var ov=document.getElementById('overlay');
  var user=typeof getCurrentUser==='function'?getCurrentUser():null;
  var h=[];

  // Titre
  h.push('<div class="otitle" style="font-size:44px;letter-spacing:6px;line-height:1">GEO<br>CULTURE</div>');
  h.push('<div style="font-size:11px;color:#374151;letter-spacing:3px;margin-top:4px;margin-bottom:8px">v2.6</div>');

  // Zone auth
  if(user){
    h.push('<div style="display:flex;align-items:center;gap:10px;background:#0d1120;border:0.5px solid #1e2d45;border-radius:10px;padding:8px 16px;margin-bottom:4px">');
    h.push('<img src="'+(user.photoURL||'')+'" style="width:28px;height:28px;border-radius:50%;object-fit:cover;border:2px solid #f97316">');
    h.push('<span style="font-size:13px;color:#e2e8f0">'+(user.displayName||user.email)+'</span>');
    h.push('<button onclick="if(typeof fbSignOut!==\'undefined\')fbSignOut()" style="font-size:11px;color:#6b7280;background:transparent;border:none;cursor:pointer;text-decoration:underline;margin-left:8px">Déconnexion</button>');
    h.push('<button onclick="if(typeof showHistory!==\'undefined\')showHistory()" style="font-size:11px;color:#6b7280;background:transparent;border:none;cursor:pointer;text-decoration:underline">Historique</button>');
    h.push('</div>');
  } else {
    h.push('<button onclick="if(typeof fbSignIn!==\'undefined\')fbSignIn()" style="font-size:13px;font-weight:500;padding:8px 20px;border-radius:8px;border:1px solid #4285f4;background:transparent;color:#4285f4;cursor:pointer;margin-bottom:8px">Se connecter avec Google</button>');
  }

  // Grille 2 colonnes
  h.push('<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;width:100%;max-width:540px">');

  // Colonne gauche: comment jouer
  h.push('<div style="background:#0d1120;border:0.5px solid #1e2d45;border-radius:12px;padding:14px 16px;display:flex;flex-direction:column;gap:10px">');
  h.push('<div style="font-size:11px;font-weight:500;color:#f97316;letter-spacing:1px;text-transform:uppercase">Comment jouer</div>');
  var rules=[
    'Un lieu à deviner sur la carte',
    'Plus tu réponds tôt, plus tu scores',
    '5 manches par partie'
  ];
  rules.forEach(function(r,i){
    h.push('<div style="display:flex;gap:10px;align-items:flex-start">');
    h.push('<div style="width:22px;height:22px;border-radius:50%;background:#1a2238;display:flex;align-items:center;justify-content:center;font-size:11px;color:#f97316;font-weight:500;flex-shrink:0">'+(i+1)+'</div>');
    h.push('<span style="font-size:12px;color:#94a3b8;line-height:1.5">'+r+'</span>');
    h.push('</div>');
  });
  h.push('</div>');

  // Colonne droite: mode + difficulté
  h.push('<div style="display:flex;flex-direction:column;gap:10px">');

  // Toggle mode
  h.push('<div style="background:#0d1120;border:0.5px solid #1e2d45;border-radius:10px;padding:10px 12px">');
  h.push('<div style="font-size:11px;color:#6b7280;margin-bottom:8px;letter-spacing:.5px">Mode de jeu</div>');
  h.push('<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">');
  h.push('<button id="btn-normal" onclick="window._menuNZ=false;document.getElementById(\'btn-normal\').style.background=\'#f97316\';document.getElementById(\'btn-normal\').style.color=\'#fff\';document.getElementById(\'btn-nozoom\').style.background=\'transparent\';document.getElementById(\'btn-nozoom\').style.color=\'#f97316\';" style="background:#f97316;color:#fff;border:1px solid #f97316;border-radius:7px;padding:7px;font-size:12px;font-weight:500;cursor:pointer">Normal</button>');
  h.push('<button id="btn-nozoom" onclick="window._menuNZ=true;document.getElementById(\'btn-nozoom\').style.background=\'#f97316\';document.getElementById(\'btn-nozoom\').style.color=\'#fff\';document.getElementById(\'btn-normal\').style.background=\'transparent\';document.getElementById(\'btn-normal\').style.color=\'#f97316\';" style="background:transparent;color:#f97316;border:1px solid #f97316;border-radius:7px;padding:7px;font-size:12px;cursor:pointer">No-Zoom</button>');
  h.push('</div></div>');

  // Difficulté
  h.push('<div style="background:#0d1120;border:0.5px solid #1e2d45;border-radius:10px;padding:10px 12px">');
  h.push('<div style="font-size:11px;color:#6b7280;margin-bottom:8px;letter-spacing:.5px">Difficulté</div>');
  h.push('<div style="display:flex;flex-direction:column;gap:5px">');
  // Tout niveaux
  h.push('<button onclick="fixedLevel=-1;noZoomMode=window._menuNZ||false;if(map){map.remove();map=null;}initMap();startGame();" style="background:#f97316;color:#fff;border:none;border-radius:7px;padding:8px 12px;font-size:13px;font-weight:500;cursor:pointer;display:flex;justify-content:space-between;align-items:center;width:100%"><span>Tout niveaux</span><span style="font-size:10px;opacity:.8">5 indices par lieu</span></button>');
  // Grille 2x2
  h.push('<div style="display:grid;grid-template-columns:1fr 1fr;gap:5px">');
  var lvls=[{l:'Expert',c:'#ef4444',i:0},{l:'Difficile',c:'#f97316',i:1},{l:'Moyen',c:'#eab308',i:2},{l:'Facile',c:'#22c55e',i:3}];
  lvls.forEach(function(lv){
    h.push('<button onclick="fixedLevel='+lv.i+';noZoomMode=window._menuNZ||false;if(map){map.remove();map=null;}initMap();startGame();" style="border:1px solid '+lv.c+';color:'+lv.c+';background:transparent;border-radius:7px;padding:7px;font-size:12px;cursor:pointer">'+lv.l+'</button>');
  });
  h.push('</div>');
    h.push('</div></div>');

  h.push('</div>'); // fin colonne droite
  h.push('</div>'); // fin grille

  ov.innerHTML=h.join('');
  ov.classList.remove('h');
  window._menuNZ=false;
}
function nextRound(){document.getElementById('overlay').classList.add('h');startRound(curR+1);}

var toastT;
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('s');
  clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('s'),3500);
}

var inExploreMode=false;

function enterExploreMode(){
  inExploreMode=true;
  document.getElementById('explore-tip').style.display='block';
  document.getElementById('back-btn').style.display='block';
  document.getElementById('overlay').classList.add('h');
  // Add popups to all markers
  if(targetMarker) targetMarker.openPopup();
  // Fit bounds to show everything
  const r=roundList[curR];
  if(playerPos && playerMarker){
    const bounds=L.latLngBounds([[playerPos.lat,playerPos.lng],[r.lat,r.lng]]);
    map.fitBounds(bounds,{padding:[80,80]});
  } else {
    map.setView([r.lat,r.lng],12);
  }
}

function exitExploreMode(){
  inExploreMode=false;
  document.getElementById('explore-tip').style.display='none';
  document.getElementById('back-btn').style.display='none';
  // Re-show the result overlay
  if(curR+1<roundList.length){
    const s=roundScores[roundScores.length-1];
    showInter(s.pts,s.dist,roundList[curR].name);
  } else {
    showEnd();
  }
}

document.addEventListener('DOMContentLoaded',function(){
  setTimeout(function(){try{initMap();}catch(e){}showMenu();},200);
  document.getElementById('confb').onclick=confirmGuess;
  document.getElementById('skipb').onclick=function(){if(!gameActive)return;clearInterval(tiv);nextLevel();};
  var nozb=document.getElementById('nozb');
  if(nozb) nozb.onclick=function(){noZoomMode=true;if(map){map.remove();map=null;}initMap();startGame();};
});