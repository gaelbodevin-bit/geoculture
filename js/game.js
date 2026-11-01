var perfectionMode=false;
var noZoomMode=false;
var chillMode=false;
var eventsMode=false;
var fixedLevel=-1;
var BASE_PTS=[0,500,1000,1500,2000,3000];
var DIST_K=Math.log(2)/400; // demi-vie 400km — précision primaire
var CIRC=2*Math.PI*38;
var TIMER=30;

var map,playerMarker,targetMarker,lineLayer;
var roundList=[],curR=0,curL=0,total=0,timeLeft=TIMER,tiv=null;
var playerPos=null,gameActive=false,confirming=false,roundScores=[];

function fmtDist(meters){
  if(meters===null||meters===undefined)return '\u2014';
  if(meters<1000)return meters.toLocaleString(GC_LOCALE)+' m';
  return (meters/1000).toLocaleString(GC_LOCALE,{maximumFractionDigits:1})+' km';
}

function haversine(la1,lo1,la2,lo2){
  const R=6371,r=Math.PI/180;
  const a=Math.sin((la2-la1)*r/2)**2+Math.cos(la1*r)*Math.cos(la2*r)*Math.sin((lo2-lo1)*r/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

function initMap(){
  if(map){map.remove();map=null;}
  if(typeof L==='undefined'){return;}
  var mapDiv=document.getElementById('map');
  var divW=mapDiv?mapDiv.offsetWidth:(window.innerWidth-210);
  var divH=mapDiv?mapDiv.offsetHeight:window.innerHeight;
  var minZ=Math.max(Math.ceil(Math.log2(divW/256)),Math.ceil(Math.log2(divH/170)));
  if(minZ<1) minZ=1;
  map=L.map('map',{center:[20,0],zoom:minZ,zoomControl:!noZoomMode,attributionControl:true,minZoom:minZ,maxZoom:noZoomMode?minZ:18,scrollWheelZoom:!noZoomMode,doubleClickZoom:!noZoomMode,touchZoom:!noZoomMode,boxZoom:!noZoomMode,keyboard:true,dragging:true});
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'(c) Esri'}).addTo(map);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,opacity:1}).addTo(map);
  map.on('click',onMapClick);
  setTimeout(function(){if(!map)return;var wb=L.latLngBounds([[-75,-179],[75,179]]);var z=map.getBoundsZoom(wb);map.setMinZoom(z);if(noZoomMode)map.setMaxZoom(z);map.fitBounds(wb,{animate:false,padding:[0,0]});map.setMaxBounds(L.latLngBounds([[-85,-360],[85,360]]));},200);
}

function adjustMapZoom(){
  if(!map) return;
  var container=map.getContainer();
  var w=container.offsetWidth;
  var h=container.offsetHeight;
  if(w===0||h===0) return;
  // Zoom pour que 256*2^z >= largeur (\u00e9vite r\u00e9p\u00e9tition horizontale)
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
  document.getElementById('placed-info').textContent='';
}

function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=0|Math.random()*(i+1);[b[i],b[j]]=[b[j],b[i]]}return b}

function activeSource(){ return (eventsMode && window.EVENTS && window.EVENTS.length) ? window.EVENTS : ROUNDS; }
function startGame(){
  document.body.classList.remove('menu-mode');
  try{ if(window.gcTrack) window.gcTrack('partie_jouee',{mode: eventsMode?'evenements':(chillMode?'chill':(perfectionMode?'perfection':(noZoomMode?'no_zoom':'normal')))}); }catch(e){}
  var nbRounds=perfectionMode?10:5;
  total=0;roundScores=[];
  roundList=shuffle(activeSource()).slice(0,nbRounds);
  curR=0;
  document.getElementById('hsc').textContent='0';
  document.getElementById('overlay').classList.add('h');
  // S'assurer que la carte est initialis\u00e9e
  if(!map){ try{ initMap(); }catch(e){  } }
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
  document.getElementById('placed-info').textContent=T('placeHint');
  document.getElementById('hrnd').textContent=(idx+1)+'/'+roundList.length;
  updateDots();showHint();startTimer();
  // Masquer le bouton indice suivant en niveau fixe
  var skipb=document.getElementById('skipb');
  if(skipb){
    skipb.style.display=fixedLevel>=0?'none':'block';
    skipb.disabled=fixedLevel>=0||curL>=3;
  }
  _gcSaveState();
}

function showHint(){
  var hintIdx=fixedLevel>=0?fixedLevel:curL;
  const h=roundList[curR].hints[hintIdx];
  const level=5-(fixedLevel>=0?fixedLevel:curL);
  const b=document.getElementById('badge');
  b.textContent=h.l;b.style.background=h.bc;b.style.color=h.tc;
  document.getElementById('qtxt').textContent=h.t;
  // level calcul\u00e9 dans showHint
  const mx=BASE_PTS[level];
  document.getElementById('lvl-max').textContent=mx.toLocaleString(GC_LOCALE)+' pts';
  document.getElementById('lvl-mult').textContent=T('maxScoreHint');
  let remaining=total;
  for(let i=curR;i<roundList.length;i++){
    remaining+=i===curR?mx:BASE_PTS[5];
  }
  document.getElementById('hmax').textContent=remaining.toLocaleString(GC_LOCALE);
}

function updateDots(){
  for(var i=0;i<4;i++){
    var d=document.getElementById('d'+i);
    if(!d) continue; // ignore les dots absents du HTML
    if(fixedLevel>=0) d.className='dot'+(i===fixedLevel?' on':'');
    else d.className='dot'+(i===curL?' on':i<curL?' done':'');
  }
}

function startTimer(){
  if(window._mpMode) return;
  if(chillMode){
    clearInterval(tiv);timeLeft=999;
    var _a=document.getElementById('arc');
    if(_a){_a.style.transition='none';_a.style.strokeDashoffset='0';_a.style.stroke='#3b82f6';}
    var _tn=document.getElementById('tnum');if(_tn){_tn.textContent='∞';_tn.style.color='#3b82f6';}
    return;
  }
  clearInterval(tiv);timeLeft=TIMER;
  var arcEl=document.getElementById('arc');
  if(arcEl){
    arcEl.style.transition='none';
    arcEl.style.strokeDashoffset='0';
    arcEl.style.stroke='#22c55e';
    void arcEl.offsetWidth;
    arcEl.style.transition='stroke-dashoffset .9s linear,stroke .3s';
  }
  var numEl=document.getElementById('tnum');
  if(numEl){numEl.textContent=TIMER;numEl.style.color='#22c55e';}
  tiv=setInterval(function(){
    timeLeft=Math.max(0,timeLeft-.1);
    renderTimer();
    if(timeLeft<=0){clearInterval(tiv);nextLevel();}
  },100);
}

function renderTimer(){
  const pct=timeLeft/TIMER;
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
var FLASH_LABELS=[T('lvlExpert'),T('lvlHard'),T('lvlMedium'),T('lvlEasy'),T('lvlVeryEasy')];

function triggerFlash(level){
  const el=document.getElementById('level-flash');
  const badge=document.getElementById('flash-badge');
  const sub=document.getElementById('flash-sub');
  const col=FLASH_COLORS[level]||'#ef4444';
  const lbl=FLASH_LABELS[level]||'';
  el.style.background=col+'22';
  badge.textContent=lbl;
  badge.style.color=col;
  sub.textContent=T('nextHintFlash');
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
  // En multijoueur, l'indice 4 est le dernier : le bouton ne doit pas valider la manche.
  if(window._mpMode&&fixedLevel<0&&curL>=3)return;
  if(fixedLevel>=0){
    if(window._mpMode && window.mpOnConfirm){ window.mpOnConfirm(); return; }
    clearInterval(tiv);gameActive=false;confirming=true;resolveRound();
  }
  else if(curL<3){
    if(window._mpMode && window.mpOnNextHint){ window.mpOnNextHint(); return; }
    curL++;triggerFlash(curL);updateDots();showHint();startTimer();
  }
  else{
    if(window._mpMode && window.mpOnConfirm){ window.mpOnConfirm(); return; }
    clearInterval(tiv);gameActive=false;confirming=true;resolveRound();
  }
}

function confirmGuess(){
  if(!gameActive||confirming)return;
  if(window._mpMode && window.mpOnConfirm){ window.mpOnConfirm(); return; }
  clearInterval(tiv);gameActive=false;confirming=true;resolveRound();
}

function resolveRound(){
  const r=roundList[curR];
  const level=5-(fixedLevel>=0?fixedLevel:curL);
  let pts=0,dist=null;
  if(playerPos){
    dist=haversine(playerPos.lat,playerPos.lng,r.lat,r.lng);
    const effLevel=chillMode?5:level;
    const distCoef=chillMode?1.0:0.90;
    // Mode Événements : tolérance = rayon de l'événement (m). Dans le rayon => distance effective 0 => score plein.
    var effDist=(eventsMode && r.radius) ? Math.max(0, dist - r.radius/1000) : dist;
    const distScore=BASE_PTS[effLevel]*distCoef*Math.exp(-DIST_K*effDist);
    // Bonus temps : 10% max, annulé si distance > 2000km (évite de récompenser la rapidité sans précision)
    const timeScore=chillMode?0:BASE_PTS[effLevel]*0.10*(timeLeft/TIMER)*(dist<2000?1:0);
    pts=Math.round(distScore+timeScore);
  }
  total+=pts;
  roundScores.push({name:r.name,pts,distM:dist!=null?Math.round(dist*1000):null,maxPts:BASE_PTS[level],level});
  document.getElementById('hsc').textContent=total.toLocaleString(GC_LOCALE);
  const popupStyle='font-family:\'Baloo 2\',sans-serif;font-size:13px;line-height:1.5;min-width:140px';
  targetMarker=L.marker([r.lat,r.lng],{icon:makePin('#22c55e')})
    .bindPopup(`<div style="${popupStyle}"><b style="color:#15803d">\u2713 ${r.name}</b>${dist?`<br><span style="color:#666">${T('distance')} : ${fmtDist(Math.round(dist*1000))}</span>`:'<br><span style="color:#666">'+T('noAttempt')+'</span>'}</div>`,{maxWidth:220}).addTo(map);
  if(playerPos){
    if(playerMarker) playerMarker.bindPopup(`<div style="${popupStyle}"><b style="color:#ea580c">\uD83D\uDCCD ${T('yourAnswer')}</b><br><span style="color:#666">${T('distance')} : ${fmtDist(Math.round(dist*1000))}</span><br><span style="color:#f97316;font-weight:700">+${pts} pts</span></div>`,{maxWidth:200});
    lineLayer=(function(){
    var p1=[playerPos.lat,playerPos.lng], p2=[r.lat,r.lng];
    var dLng=p2[1]-p1[1];
    if(dLng>180) p1[1]+=360; else if(dLng<-180) p1[1]-=360;
    return L.polyline([p1,p2],{color:'#f97316',weight:2.5,dashArray:'8 5',opacity:.8,noClip:true});
  })().addTo(map);
    map.fitBounds(L.latLngBounds([[playerPos.lat,playerPos.lng],[r.lat,r.lng]]),{padding:[60,60]});
  } else {
    map.setView([r.lat,r.lng],12);targetMarker.openPopup();
  }
  document.getElementById('placed-info').textContent=dist!=null?`\uD83D\uDCCD ${fmtDist(Math.round(dist*1000))} \u2014 +${pts.toLocaleString(GC_LOCALE)} pts`:`\u274c ${T('missedName',{name:r.name})}`;
  showToast(dist!=null?`${r.name} \u00b7 ${fmtDist(Math.round(dist*1000))} \u00b7 +${pts} pts`:T('missedToast',{name:r.name}));
  setTimeout(function(){
    var elim=perfectionMode&&!eventsMode&&(dist===null||dist>50);
    showInter(pts,dist,r.name,elim);
  },3000);
}


function showInter(pts,dist,name,eliminated){
  const lastScore=roundScores[roundScores.length-1];
  const mx=lastScore?lastScore.maxPts:3000;
  const pctRound=mx>0?Math.round(pts/mx*100):0;
  const barColor=pctRound>=80?'#22c55e':pctRound>=50?'#fbbf24':'#f97316';
  const ov=document.getElementById('overlay');
  const placeDesc = roundList[curR].desc || '';
  const imgId = 'wimg' + Date.now();
  const wq = encodeURIComponent(roundList[curR].name.split('\u2014')[0].trim().replace(/\s*\u2014.*/,'').trim());
  var _nextBtn;
  if(eliminated){_nextBtn='<div style="color:#ef4444;font-size:15px;font-weight:700;margin:8px 0">'+T('eliminated')+'</div><button class="btn ba" onclick="showEnd()" style="width:auto;padding:12px 32px;font-size:14px">'+T('viewSummary')+'</button>';}
  else if(curR+1<roundList.length){_nextBtn='<button class="btn ba" onclick="nextRound()" style="width:auto;padding:12px 32px;font-size:14px">'+T('nextRound')+'</button>';}
  else{_nextBtn='<button class="btn ba" onclick="showEnd()" style="width:auto;padding:12px 32px;font-size:14px">'+T('viewSummary')+'</button>';}
  ov.innerHTML=`
    <div id="${imgId}" class="gc-result-image" style="width:100%;max-width:500px;min-height:120px;background:#111827;border-radius:12px;overflow:visible;position:relative;flex-shrink:0;margin-bottom:clamp(8px,2vh,18px)"></div>
    <div class="otitle" style="font-size:38px">+${pts.toLocaleString(GC_LOCALE)}</div>
    <div class="osub" style="color:#e2e8f0;font-size:13px;line-height:1.65;margin-top:-2px;max-width:420px;text-align:center;font-style:normal;background:rgba(17,24,39,0.6);border-radius:8px;padding:8px 14px">${placeDesc}</div>
    <div style="display:flex;align-items:center;gap:10px;width:100%;max-width:320px">
      <div style="flex:1;height:8px;background:#1e2d45;border-radius:4px;overflow:hidden">
        <div style="width:${pctRound}%;height:100%;background:${barColor};border-radius:4px;transition:width .6s ease"></div>
      </div>
      <span style="font-size:13px;font-weight:600;color:${barColor};white-space:nowrap">${pts.toLocaleString(GC_LOCALE)} / ${mx.toLocaleString(GC_LOCALE)} pts</span>
    </div>
    <div class="osub" style="color:#f1f5f9;font-size:15px;font-weight:600;margin-top:-4px">${name}</div>
    <div class="osub" style="margin-top:-6px">${dist!=null?T('fromTarget',{d:fmtDist(Math.round(dist*1000))}):T('noPointPlaced')}</div>
    <div style="color:#6b7280;font-size:13px">${T('total')} : <b style="color:#f97316">${total.toLocaleString(GC_LOCALE)} pts</b></div>
    <div style="display:flex;gap:10px;margin-top:6px;flex-wrap:wrap;justify-content:center">
      <button class="btn bg" onclick="showMenu()" style="width:auto;padding:12px 22px;font-size:14px">${T('backMenu')}</button>
      <button id="explore-btn" onclick="enterExploreMode()" style="font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;padding:10px 20px;border-radius:9px;border:1px solid #2d3f5e;cursor:pointer;background:rgba(30,45,69,.9);color:#e2e8f0">${T('exploreMap')}</button>
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
  // Photo : utiliser la photo locale si disponible, sinon Wikipedia
  (function(id, round){
    var el = document.getElementById(id);
    if(!el) return;
    // Priorité 1 : champ photo du round (fichier local ou URL)
    if(round.photo){
      var img = new Image();
      img.onload = function(){
        el.style.height='auto'; el.innerHTML = '<img src="'+round.photo+'" onclick="openImageZoom(this.src)" style="width:100%;max-width:100%;height:auto;max-height:55vh;max-height:55dvh;object-fit:contain;border-radius:12px;display:block;background:#111827;cursor:zoom-in" alt="">';
      };
      img.onerror = function(){
        tryWiki(GC_LANG);
      };
      img.src = round.photo;
      return;
    }
    // Priorité 2 : Wikipedia
    function tryWiki(lang){
      var q = encodeURIComponent(round.name.replace(/\s*\u2014.*/,'').trim());
      fetch('https://'+lang+'.wikipedia.org/api/rest_v1/page/summary/'+q)
        .then(function(r){return r.json();})
        .then(function(d){
          var el2=document.getElementById(id);
          if(!el2) return;
          var wsrc=(d.originalimage&&d.originalimage.source)||(d.thumbnail&&d.thumbnail.source);
          if(wsrc){
            el2.style.height='auto'; el2.innerHTML='<img src="'+wsrc+'" onclick="openImageZoom(this.src)" style="width:100%;max-width:100%;height:auto;max-height:55vh;max-height:55dvh;object-fit:contain;border-radius:12px;display:block;background:#111827;cursor:zoom-in" alt="">';
          } else if(lang!=='en'){tryWiki('en');}
          else{el2.style.display='none';}
        }).catch(function(){var el2=document.getElementById(id);if(el2)el2.style.display='none';});
    }
    tryWiki(GC_LANG);
  })(imgId, roundList[curR]);

}

function openImageZoom(src){
  var existing=document.getElementById('gc-image-zoom');
  if(existing) existing.remove();
  var modal=document.createElement('div');
  modal.id='gc-image-zoom';
  modal.style.cssText='position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.92);display:flex;align-items:center;justify-content:center;overflow:auto;padding:18px;cursor:zoom-in;touch-action:pan-x pan-y;';
  var image=document.createElement('img');
  image.src=src;
  image.alt='';
  image.style.cssText='display:block;width:auto;max-width:100%;max-height:100%;height:auto;object-fit:contain;cursor:zoom-in;transition:width .2s ease;';
  var close=document.createElement('button');
  close.type='button';
  close.setAttribute('aria-label',T('close'));
  close.textContent='×';
  close.style.cssText='position:fixed;top:12px;right:16px;z-index:1;width:40px;height:40px;border:0;border-radius:50%;background:rgba(0,0,0,.6);color:#fff;font-size:30px;line-height:1;cursor:pointer;';
  function closeZoom(){modal.remove();}
  function toggleZoom(e){
    if(e) e.stopPropagation();
    var zoomed=image.dataset.zoomed==='1';
    image.dataset.zoomed=zoomed?'0':'1';
    image.style.width=zoomed?'auto':'200%';
    image.style.maxWidth=zoomed?'100%':'none';
    image.style.maxHeight=zoomed?'100%':'none';
    image.style.cursor=zoomed?'zoom-in':'zoom-out';
  }
  close.addEventListener('click',closeZoom);
  modal.addEventListener('click',function(e){if(e.target===modal) closeZoom();});
  image.addEventListener('click',toggleZoom);
  modal.appendChild(image);
  modal.appendChild(close);
  document.body.appendChild(modal);
}
window.openImageZoom=openImageZoom;

// ════════════════════════════════════════════════════════════════
// PARTAGE DE SCORE (modes solo + défi du jour — pas multi ni chill)
// ════════════════════════════════════════════════════════════════
function buildShareText(format) {
  var url = 'https://www.geo-culture.io/';
  // Emojis generes depuis leurs code points -> jamais corrompus par un mauvais encodage de fichier
  var E = {
    green:  String.fromCodePoint(0x1F49A), // coeur vert
    yellow: String.fromCodePoint(0x1F49B), // coeur jaune
    red:    String.fromCodePoint(0x2764, 0xFE0F), // coeur rouge
    target: String.fromCodePoint(0x1F4CD), // epingle
    dash:   '\u2014'                       // tiret long
  };
  var isDaily = !!window._dailyMode || !!window._wasDailyMode;
  var header;
  if(isDaily) {
    var launch = new Date('2026-06-01T00:00:00Z');
    var today  = new Date(getDailyDateFR()+'T00:00:00Z');
    var dayNum = Math.floor((today-launch)/86400000)+1;
    header = 'GeoCulture '+E.dash+' '+T('shareDaily',{n:dayNum});
  } else {
    header = 'GeoCulture';
  }

  if(format === 'emoji') {
    var squares = roundScores.map(function(s){
      var ratio = s.maxPts>0 ? s.pts/s.maxPts : 0;
      if(ratio >= 0.80) return E.green;
      if(ratio >= 0.40) return E.yellow;
      return E.red;
    }).join('');
    var totalMax = roundScores.reduce(function(a,s){return a+(s.maxPts||0);},0);
    var pct = totalMax>0 ? Math.round(total/totalMax*100) : 0;
    return header+'\n'+squares+'\n'+E.target+' '+total.toLocaleString(GC_LOCALE)+' pts ('+pct+'%)\n'+url;
  } else {
    return header+'\n'+T('shareBrag',{pts:total.toLocaleString(GC_LOCALE)})+' '+url;
  }
}

function shareScore() {
  var text = buildShareText('emoji');
  var url  = 'https://www.geo-culture.io/';
  // Mobile : partage natif direct
  if(navigator.share) {
    navigator.share({ title:'GeoCulture', text:text }).catch(function(){});
    return;
  }
  // Desktop : panneau de partage réseaux (style YouTube)
  _shareShowPanel(text, url);
}

function _shareShowPanel(text, url) {
  var existing = document.getElementById('share-modal');
  if(existing) existing.remove();

  var encText = encodeURIComponent(text);
  var encURL  = encodeURIComponent(url);
  // Texte sans l'URL pour les réseaux qui ajoutent le lien séparément
  var textNoUrl = encodeURIComponent(text.replace(url, '').trim());

  // Liens de partage par réseau
  var nets = [
    { name:'X',        color:'#000000', icon:'\uD835\uDD4F',
      link:'https://twitter.com/intent/tweet?text='+textNoUrl+'&url='+encURL },
    { name:'WhatsApp', color:'#25D366', icon:'\uD83D\uDCAC',
      link:'https://wa.me/?text='+encText },
    { name:'Telegram', color:'#0088cc', icon:'\u2708\uFE0F',
      link:'https://t.me/share/url?url='+encURL+'&text='+textNoUrl },
    { name:'Reddit',   color:'#FF4500', icon:'\uD83D\uDC7D',
      link:'https://www.reddit.com/submit?url='+encURL+'&title='+textNoUrl },
    { name:'Facebook', color:'#1877F2', icon:'f',
      link:'https://www.facebook.com/sharer/sharer.php?u='+encURL }
  ];

  var btns = nets.map(function(n){
    return '<a href="'+n.link+'" target="_blank" rel="noopener" '
      + 'style="display:flex;flex-direction:column;align-items:center;gap:6px;text-decoration:none;flex:1;min-width:60px">'
      + '<div style="width:48px;height:48px;border-radius:50%;background:'+n.color+';display:flex;align-items:center;justify-content:center;font-size:22px;color:#fff;font-weight:700;transition:transform .15s" '
      + 'onmouseover="this.style.transform=\'scale(1.1)\'" onmouseout="this.style.transform=\'scale(1)\'">'+n.icon+'</div>'
      + '<span style="font-size:11px;color:#94a3b8">'+n.name+'</span></a>';
  }).join('');

  var m = document.createElement('div');
  m.id = 'share-modal';
  m.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(7,9,15,.82);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:20px';
  m.innerHTML = '<div style="background:#0d1120;border:1px solid #2d3f5e;border-radius:16px;padding:24px;max-width:420px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.5)">'
    + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">'
    + '<div style="font-size:17px;font-weight:700;color:#e2e8f0">'+T('shareTitle')+'</div>'
    + '<button id="share-x" style="background:none;border:none;color:#6b7280;font-size:22px;cursor:pointer;line-height:1;padding:0">&times;</button>'
    + '</div>'
    + '<div style="display:flex;gap:10px;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap">'+btns+'</div>'
    + '<div style="display:flex;gap:8px;align-items:center;background:#111827;border:1px solid #2d3f5e;border-radius:9px;padding:6px 6px 6px 12px">'
    + '<input id="share-link" readonly value="'+url+'" style="flex:1;background:none;border:none;color:#94a3b8;font-size:13px;outline:none;font-family:\'Baloo 2\',sans-serif">'
    + '<button id="share-copy" style="padding:8px 18px;border-radius:7px;border:none;background:#22c55e;color:#fff;font-weight:700;cursor:pointer;font-size:13px;white-space:nowrap">'+T('copy')+'</button>'
    + '</div>'
    + '<div style="font-size:11px;color:#4b5563;margin-top:12px;text-align:center">'+T('copyHint')+'</div>'
    + '</div>';
  document.body.appendChild(m);

  // Bouton Copier → copie le TEXTE COMPLET (avec emojis), pas juste l'URL
  document.getElementById('share-copy').onclick = function(){
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(function(){
        _shareToast(T('scoreCopied'));
      }).catch(function(){ _shareLegacyCopy(text); });
    } else { _shareLegacyCopy(text); }
  };
  document.getElementById('share-x').onclick = function(){ m.remove(); };
  m.onclick = function(e){ if(e.target===m) m.remove(); };
}

function _shareLegacyCopy(text){
  var ta=document.createElement('textarea');
  ta.value=text; ta.style.position='fixed'; ta.style.opacity='0';
  document.body.appendChild(ta); ta.select();
  try{ document.execCommand('copy'); _shareToast(T('scoreCopied')); }catch(e){}
  document.body.removeChild(ta);
}

function _shareToast(msg) {
  var t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('s');
  setTimeout(function(){ t.classList.remove('s'); }, 2200);
}
window.shareScore = shareScore;

function showEnd(){ _gcClearState();
  if(!window._dailyMode) window._wasDailyMode=false;
  const totalMax=roundScores.reduce((a,s)=>a+(s.maxPts||0),0);
  const pct=totalMax>0?Math.round(total/totalMax*100):0;
  const rows=roundScores.map(s=>{
    const distTxt=s.distM!=null?fmtDist(s.distM):T('missed');
    const ptsColor=s.pts>=s.maxPts*0.8?'#22c55e':s.pts>=s.maxPts*0.4?'#fbbf24':'#f97316';
    return `<div class="orow">
      <span style="font-size:11px;max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1">${s.name}</span>
      <span style="color:#6b7280;font-size:11px;margin:0 6px;flex-shrink:0">${distTxt}</span>
      <span style="font-size:11px;color:#4b5563;flex-shrink:0">${s.pts.toLocaleString(GC_LOCALE)}/${s.maxPts.toLocaleString(GC_LOCALE)}</span>
    </div>`;
  }).join('');
  const rank=pct>=90?T('rank1'):pct>=70?T('rank2'):pct>=50?T('rank3'):pct>=30?T('rank4'):T('rank5');
  const ov=document.getElementById('overlay');
  ov.innerHTML=`<div class="otitle" style="font-size:38px">${T('finished')}</div>
    <div class="osub" style="color:#f97316;font-weight:700;font-size:15px">${rank} \u2014 ${pct}%</div>
    <div class="ocard">
      <div style="display:flex;justify-content:space-between;font-size:10px;color:#4b5563;text-transform:uppercase;letter-spacing:.5px;padding-bottom:6px;border-bottom:1px solid #1e2d45;margin-bottom:4px">
        <span>${T('colPlace')}</span><span>${T('distance')}</span><span>${T('colScore')}</span>
      </div>
      ${rows}
      <div class="otot">
        <span>${T('total')}</span>
        <span style="font-size:12px;color:#6b7280;margin-right:auto;padding-left:12px">${total.toLocaleString(GC_LOCALE)} / ${totalMax.toLocaleString(GC_LOCALE)} pts</span>
        <span class="p">${pct}%</span>
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:6px;flex-wrap:wrap;justify-content:center">
      <button class="btn bg" onclick="showMenu()" style="width:auto;padding:12px 22px;font-size:14px">${T('backMenu')}</button>
      <button id="explore-btn" onclick="enterExploreMode()" style="font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;padding:10px 20px;border-radius:9px;border:1px solid #2d3f5e;cursor:pointer;background:rgba(30,45,69,.9);color:#e2e8f0">${T('exploreMap')}</button>
      <button class="btn ba" onclick="startGame()" style="width:auto;padding:12px 32px;font-size:14px">${T('playAgain')}</button>
    </div>
    ${(!chillMode && !window._mpMode) ? `
    <div style="display:flex;margin-top:4px;justify-content:center">
      <button id="share-btn" onclick="window.shareScore&&window.shareScore()" title="${T('shareTitle')}" style="padding:11px 28px;border-radius:9px;border:none;cursor:pointer;background:#22c55e;color:#fff;font-size:14px;font-weight:700;font-family:'DM Sans',sans-serif;display:flex;align-items:center;gap:8px">\uD83D\uDCE4 ${T('shareMyScore')}</button>
    </div>` : ''}
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
  // Info-bulle : aperçu du texte qui sera partagé
  if(!chillMode && !window._mpMode){
    setTimeout(function(){
      var sb=document.getElementById('share-btn');
      if(sb && typeof buildShareText==='function'){
        try{ sb.title=buildShareText('emoji'); }catch(e){}
      }
    }, 100);
  }
  if(typeof window.saveGame==='function'){var _t=roundScores.reduce(function(a,s){return a+(s.maxPts||0);},0);var _p=_t>0?Math.round(total/_t*100):0;var _n=['tout-niveaux','expert','difficile','moyen','facile'];var _m=(eventsMode?'events-':'')+(noZoomMode?'nozoom-':'')+(perfectionMode?'perfection-':'')+(chillMode?'chill-':'')+(_n[fixedLevel+1]||'tout-niveaux');setTimeout(function(){try{window.saveGame(roundScores,total,_p,_m);}catch(e){}},500);}
  // Sauvegarder dans le classement du jour si mode daily
  if(window._dailyMode && typeof window.saveDailyScore==='function'){
    var _dt=roundScores.reduce(function(a,s){return a+(s.maxPts||0);},0);
    var _dp=_dt>0?Math.round(total/_dt*100):0;
    var _dlvl=window._dailyLevel!==undefined?window._dailyLevel:fixedLevel;
    // Marquer comme joué (localStorage) et envoyer au classement Firestore
    if(typeof markDailyPlayed==='function') markDailyPlayed(_dlvl, total);
    window.saveDailyScore(_dlvl, total, _dp);
    window._wasDailyMode = true; window._dailyMode = false; // empêcher double soumission
  }
}

function showMenu(){
  // En mode MP, quitter la partie (mpLeaveRoom gère le retour au menu)
  if(window._mpMode && typeof window.mpLeaveRoom==='function'){
    window.mpLeaveRoom(); return;
  }
  clearInterval(tiv);
  var _gcWasActive=gameActive;
  gameActive=false;
  if(_gcWasActive) _gcClearState();
  document.body.classList.add('menu-mode');
  var ov=document.getElementById('overlay');
  var user=typeof getCurrentUser==='function'?getCurrentUser():null;
  var h=[];

  // Titre
  h.push('<div class="otitle gc-mtitle" style="font-size:58px;line-height:1.05;margin-bottom:28px">G\u00e9o<span>Culture</span></div>');
  h.push(GC_langSwitcher());

  // Zone auth
  if(user){
    h.push('<div style="display:flex;align-items:center;gap:10px;background:#0d1120;border:0.5px solid #1e2d45;border-radius:10px;padding:8px 16px;margin-bottom:24px">');
    h.push('<img src="'+String(user.photoURL||'').replace(/["'<>]/g,'')+'" style="width:28px;height:28px;border-radius:50%;object-fit:cover;border:2px solid #f97316">');
    h.push('<span style="font-size:13px;color:#e2e8f0">'+String(user.displayName||user.email||'').replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</span>');
    h.push('<button onclick="window.fbSignOut&&window.fbSignOut()" style="font-size:11px;color:#6b7280;background:transparent;border:none;cursor:pointer;text-decoration:underline;margin-left:8px">'+T('disconnect')+'</button>');
    h.push('<button onclick="window.showHistory&&window.showHistory()" style="font-size:11px;color:#6b7280;background:transparent;border:none;cursor:pointer;text-decoration:underline">'+T('history')+'</button>');
    h.push('</div>');
  } else {
    h.push('<button onclick="window.fbSignIn&&window.fbSignIn()" style="font-size:12px;font-weight:500;padding:7px 18px;border-radius:8px;border:1px solid #4285f4;background:transparent;color:#4285f4;cursor:pointer;margin-bottom:26px">'+T('loginBtn')+'</button>');
  }

  // Grille 2 colonnes égales
  h.push('<div class="gc-menu-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:26px;width:100%;max-width:920px">');

  // Colonne gauche: comment jouer
  h.push('<div class="gc-howto'+(window.innerWidth<=820?' collapsed':'')+'" style="background:#0d1120;border:0.5px solid #1e2d45;border-radius:14px;padding:26px 28px;display:flex;flex-direction:column;gap:16px">');
  h.push('<div class="gc-howto-h" onclick="this.parentNode.classList.toggle(\'collapsed\')" style="font-size:13px;font-weight:700;color:#f97316;letter-spacing:1.8px;text-transform:uppercase;display:flex;align-items:center;justify-content:space-between;cursor:pointer">'+T('howToPlay')+'<span class="gc-howto-chev">\u25B8</span></div>');
  h.push('<div class="gc-howto-body" style="display:flex;flex-direction:column;gap:16px">');
  h.push('<div style="font-size:13.5px;color:#94a3b8;line-height:1.6;padding:2px 0 8px 0;border-bottom:1px solid #1e2d4566;margin-bottom:4px">'+T('menuTagline')+'</div>');
  var rules=[
    {t:'Normal', d:T('ruleNormal')},
    {t:'No-Zoom', d:T('ruleNozoom')},
    {t:'Perfection', d:T('rulePerfection')},
    {t:'Chill', d:T('ruleChill')},
    {t:T('modeEvents'), d:T('ruleEvents')},
    {t:T('dailyChallenge'), d:T('ruleDaily')}
  ];
  rules.forEach(function(r,i){
    h.push('<div style="display:flex;gap:14px;align-items:flex-start">');
    h.push('<div style="width:30px;height:30px;border-radius:50%;background:#1a2238;display:flex;align-items:center;justify-content:center;font-size:13px;color:#f97316;font-weight:700;flex-shrink:0">'+(i+1)+'</div>');
    h.push('<div><span style="font-size:15px;color:#e2e8f0;font-weight:700">'+r.t+'</span><br><span style="font-size:13px;color:#94a3b8;line-height:1.6">'+r.d+'</span></div>');
    h.push('</div>');
  });
  h.push('<a href="#a-propos" onclick="var s=document.getElementById(\'seo-content\');if(s){s.classList.add(\'open\');}return false;" style="display:block;margin-top:6px;padding-top:12px;border-top:1px solid #1e2d4566;color:#60a5fa;font-size:13.5px;text-decoration:none;font-weight:600">'+T('learnMore')+'</a>');
  h.push('</div>');
  h.push('</div>');

  // Colonne droite: modes de jeu
  h.push('<div style="background:#0d1120;border:0.5px solid #1e2d45;border-radius:14px;padding:26px 28px;display:flex;flex-direction:column;gap:16px">');
  h.push('<div style="font-size:13px;font-weight:700;color:#94a3b8;letter-spacing:1.8px;text-transform:uppercase">'+T('gameMode')+'</div>');
  var isPrem = typeof window.isPremiumUser==='function'?window.isPremiumUser():(window.isPremium===true);
  var lock = isPrem ? '' : ' 🔒';

  // Styles de base — plus grands, plus visuels
  var _bs = 'font-family:\'Baloo 2\',sans-serif;font-size:13px;font-weight:700;cursor:pointer;text-align:center;border-radius:10px;padding:14px 6px;transition:all .2s;border:1.5px solid;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;line-height:1.2;';

  h.push('<div class="gc-mode-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;flex:1">');

  // Normal — orange
  h.push('<button onclick="selectGameMode(\'normal\')" style="'+_bs+'background:transparent;color:#f97316;border-color:#f97316" '
    +'onmouseover="this.style.background=\'#f97316\';this.style.color=\'#fff\';this.style.transform=\'translateY(-2px)\'" '
    +'onmouseout="this.style.background=\'transparent\';this.style.color=\'#f97316\';this.style.transform=\'\'">'
    +'<span style="font-size:18px">🌍</span><span>Normal</span>'
    +'</button>');

  // No-Zoom — cyan (différent de normal)
  h.push('<button onclick="selectGameMode(\'nozoom\')" style="'+_bs+'background:transparent;color:#22d3ee;border-color:#06b6d4" '
    +'onmouseover="this.style.background=\'#06b6d4\';this.style.color=\'#fff\';this.style.transform=\'translateY(-2px)\'" '
    +'onmouseout="this.style.background=\'transparent\';this.style.color=\'#22d3ee\';this.style.transform=\'\'">'
    +'<span style="font-size:18px">🗺️</span><span>No-Zoom'+lock+'</span>'
    +'</button>');

  // Perfection — violet
  h.push('<button onclick="selectGameMode(\'perfection\')" style="'+_bs+'background:transparent;color:#a78bfa;border-color:#7c3aed" '
    +'onmouseover="this.style.background=\'#7c3aed\';this.style.color=\'#fff\';this.style.transform=\'translateY(-2px)\'" '
    +'onmouseout="this.style.background=\'transparent\';this.style.color=\'#a78bfa\';this.style.transform=\'\'">'
    +'<span style="font-size:18px">🎯</span><span>Perfection'+lock+'</span>'
    +'</button>');

  // Chill — bleu
  h.push('<button onclick="selectGameMode(\'chill\')" style="'+_bs+'background:transparent;color:#60a5fa;border-color:#3b82f6" '
    +'onmouseover="this.style.background=\'#3b82f6\';this.style.color=\'#fff\';this.style.transform=\'translateY(-2px)\'" '
    +'onmouseout="this.style.background=\'transparent\';this.style.color=\'#60a5fa\';this.style.transform=\'\'">'
    +'<span style="font-size:18px">\u2615</span><span>Chill'+lock+'</span>'
    +'</button>');

  // Événements — ambre historique (Premium, pleine largeur)
  h.push('<button onclick="selectGameMode(\'events\')" style="'+_bs+'grid-column:span 2;background:transparent;color:#f59e0b;border-color:#b45309" '
    +'onmouseover="this.style.background=\'#b45309\';this.style.color=\'#fff\';this.style.transform=\'translateY(-2px)\'" '
    +'onmouseout="this.style.background=\'transparent\';this.style.color=\'#f59e0b\';this.style.transform=\'\'">'
    +'<span style="font-size:18px">\u2694\ufe0f</span><span>'+T('modeEvents')+lock+'</span>'
    +'</button>');

  // Défi du jour — jaune (pleine largeur)
  h.push('<button onclick="showDailyMenu()" style="'+_bs+'grid-column:span 2;background:transparent;color:#fbbf24;border-color:#fbbf24" '
    +'onmouseover="this.style.background=\'#fbbf24\';this.style.color=\'#000\';this.style.transform=\'translateY(-2px)\'" '
    +'onmouseout="this.style.background=\'transparent\';this.style.color=\'#fbbf24\';this.style.transform=\'\'">'
    +'<span style="font-size:18px">📅</span><span>'+T('dailyChallenge')+'</span>'
    +'</button>');

  // Multijoueur — vert (pleine largeur)
  h.push('<button onclick="openMultiplayer()" style="'+_bs+'grid-column:span 2;background:transparent;color:#22c55e;border-color:#22c55e" '
    +'onmouseover="this.style.background=\'#22c55e\';this.style.color=\'#fff\';this.style.transform=\'translateY(-2px)\'" '
    +'onmouseout="this.style.background=\'transparent\';this.style.color=\'#22c55e\';this.style.transform=\'\'">'
    +'<span style="font-size:18px">👥</span><span>'+T('multiplayer')+lock+'</span>'
    +'</button>');

  h.push('</div>');
  h.push('</div>');

  h.push('</div>'); // fin grille

  // Lien classement
  h.push('<div style="display:flex;align-items:center;gap:16px;margin-top:8px;justify-content:center">');
  h.push('<a onclick="window.showLeaderboard&&window.showLeaderboard()" style="font-size:16px;color:#f97316;cursor:pointer;font-weight:700;text-decoration:underline;text-underline-offset:5px;margin-top:6px;display:inline-block">'+T('leaderboard')+'</a>');
  h.push('</div>');

  ov.innerHTML=h.join('');
  ov.classList.remove('h');
  window._menuNZ=false;
  window._menuPerf=false;
  window._menuEvents=false;
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
    try{map.invalidateSize();}catch(e){}
    map.fitBounds(bounds,{padding: window.innerWidth<600?[30,40]:[80,80]});
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

// === Reprise de partie au rafraichissement (localStorage) ===
var _GC_SAVE_KEY='gc_game_v1';
function _gcSaveState(){
  try{
    if(window._mpMode||window._dailyMode) return;
    if(!gameActive||!roundList||!roundList.length||curR>=roundList.length) return;
    var st={v:1,ts:Date.now(),perfectionMode:perfectionMode,noZoomMode:noZoomMode,chillMode:chillMode,eventsMode:eventsMode,fixedLevel:fixedLevel,roundList:roundList,curR:curR,total:total,roundScores:roundScores};
    localStorage.setItem(_GC_SAVE_KEY,JSON.stringify(st));
  }catch(e){}
}
function _gcClearState(){ try{ localStorage.removeItem(_GC_SAVE_KEY); }catch(e){} }
function _gcTryRestore(){
  try{
    var raw=localStorage.getItem(_GC_SAVE_KEY);
    if(!raw) return false;
    var st=JSON.parse(raw);
    if(!st||st.v!==1||!st.roundList||!st.roundList.length) return false;
    if(typeof st.curR!=='number'||st.curR<0||st.curR>=st.roundList.length){ _gcClearState(); return false; }
    perfectionMode=!!st.perfectionMode; noZoomMode=!!st.noZoomMode; chillMode=!!st.chillMode; eventsMode=!!st.eventsMode;
    fixedLevel=(typeof st.fixedLevel==='number')?st.fixedLevel:-1;
    roundList=st.roundList; total=st.total||0; roundScores=st.roundScores||[]; curR=st.curR;
    document.body.classList.remove('menu-mode');
    var _h=document.getElementById('hsc'); if(_h) _h.textContent=String(total);
    document.getElementById('overlay').classList.add('h');
    if(map){ try{ map.remove(); }catch(e){} map=null; }
    try{ initMap(); }catch(e){}
    startRound(curR);
    return true;
  }catch(e){ _gcClearState(); return false; }
}

document.addEventListener('DOMContentLoaded',function(){
  document.body.classList.add('menu-mode');
  setTimeout(function(){ if(!_gcTryRestore()){ try{initMap();}catch(e){} showMenu(); } },200);
  document.getElementById('confb').onclick=confirmGuess;
  document.getElementById('skipb').onclick=function(){if(!gameActive)return;clearInterval(tiv);nextLevel();};
  var nozb=document.getElementById('nozb');
  if(nozb) nozb.onclick=function(){noZoomMode=true;if(map){map.remove();map=null;}initMap();startGame();};
});
function getDailyDateFR(){var now=new Date();var m=now.getUTCMonth()+1;var off=m>=4&&m<=10?120:60;var t=new Date(now.getTime()+off*60000);return t.getUTCFullYear()+'-'+String(t.getUTCMonth()+1).padStart(2,'0')+'-'+String(t.getUTCDate()).padStart(2,'0');}
function getDailySeed(d){var h=0;for(var i=0;i<d.length;i++){h=((h<<5)-h)+d.charCodeAt(i);h|=0;}return Math.abs(h);}
function getDailyRounds(seed,level){var s=seed+level*9999;var res=[];var seen={};for(var i=0;i<500&&res.length<5;i++){s=(s*1664525+1013904223)&0x7fffffff;var idx=Math.abs(s)%ROUNDS.length;if(!seen[idx]){seen[idx]=true;res.push(ROUNDS[idx]);}}return res;}
function getDailyKey(l){return 'daily_'+getDailyDateFR()+'_lvl'+l;}
function hasDailyBeenPlayed(l){return localStorage.getItem(getDailyKey(l))==='done';}
function markDailyPlayed(l,score){localStorage.setItem(getDailyKey(l),'done');localStorage.setItem(getDailyKey(l)+'_score',String(score));}
function getDailyScore(l){return parseInt(localStorage.getItem(getDailyKey(l)+'_score'))||0;}
function showDailyMenu(){var ov=document.getElementById('overlay');var ds=getDailyDateFR();var lvls=[{i:0,label:T('lvlExpert'),color:'#ef4444'},{i:1,label:T('lvlHard'),color:'#f97316'},{i:2,label:T('lvlMedium'),color:'#eab308'},{i:3,label:T('lvlEasy'),color:'#22c55e'}];var h=[];h.push('<div class="otitle" style="font-size:28px">'+T('dailyTitle')+'</div>');h.push('<div style="font-size:13px;color:#cbd5e1;font-weight:500;margin-bottom:14px">'+ds+' \u00b7 '+T('dailySubtitle')+'</div>');h.push('<div style="display:flex;flex-direction:column;gap:8px;width:100%;max-width:420px">');lvls.forEach(function(lv){var played=hasDailyBeenPlayed(lv.i);var score=played?getDailyScore(lv.i):null;h.push('<div style="display:flex;align-items:center;gap:10px;background:'+lv.color+'18;border:1.5px solid '+lv.color+';border-radius:10px;padding:12px 16px">');h.push('<span style="font-size:13px;font-weight:700;color:'+lv.color+';flex:1">'+lv.label+'</span>');if(played){h.push('<span style="font-size:12px;color:#94a3b8;font-weight:500">'+score.toLocaleString(GC_LOCALE)+' pts</span>');h.push('<span style="font-size:12px;color:#22c55e;margin-left:8px;font-weight:700">'+T('dailyPlayed')+'</span>');}else{h.push('<button onclick="startDailyChallenge('+lv.i+')" style="padding:7px 16px;border-radius:7px;border:none;background:'+lv.color+';color:#fff;font-size:12px;font-weight:700;cursor:pointer">'+T('dailyPlay')+'</button>');}h.push('</div>');});h.push('</div>');h.push('<div style="display:flex;gap:10px;margin-top:14px">');h.push('<button onclick="showDailyLeaderboard()" style="padding:9px 18px;border-radius:9px;border:1px solid #fbbf24;background:transparent;color:#fbbf24;font-size:12px;font-weight:600;cursor:pointer">'+T('dailyLB')+'</button>');h.push('<button onclick="showMenu()" style="padding:9px 18px;border-radius:9px;border:1px solid #334155;background:transparent;color:#94a3b8;font-size:12px;font-weight:600;cursor:pointer">'+T('back')+'</button>');h.push('</div>');ov.innerHTML=h.join('');ov.classList.remove('h');}
function startDailyChallenge(level){if(hasDailyBeenPlayed(level)){if(typeof showToast==='function')showToast(T('alreadyPlayed'));return;}fixedLevel=level;noZoomMode=false;perfectionMode=false;window._dailyMode=true;window._dailyLevel=level;total=0;roundScores=[];roundList=getDailyRounds(getDailySeed(getDailyDateFR()),level);curR=0;document.body.classList.remove('menu-mode');document.getElementById('overlay').classList.add('h');document.getElementById('hsc').textContent='0';if(!map){try{initMap();}catch(e){}}startRound(0);}
function showDailyLeaderboard(){if(typeof window.showDailyLB==='function'){window.showDailyLB();}else if(typeof showToast==='function'){showToast(T('lbUnavailable'));}}
function mpShowJoinMenu(){
  var ov=document.getElementById('overlay');
  var user=typeof getCurrentUser==='function'?getCurrentUser():null;
  var h=[];

  h.push('<div class="otitle" style="font-size:36px;margin-bottom:20px">'+T('mpTitle')+'</div>');
  h.push('<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;width:100%;max-width:700px">');

  // ── Colonne CRÉER ──
  h.push('<div style="background:#0d1120;border:1px solid #1e2d45;border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:14px">');
  h.push('<div style="font-size:11px;font-weight:700;color:#22c55e;letter-spacing:2px;text-transform:uppercase">'+T('mpCreateGame')+'</div>');

  var _mb='width:100%;padding:10px 4px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;transition:all .15s;text-align:center;';
  h.push('<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">');
  h.push('<button id="mp-mode-normal" onclick="window.mpSetMode&&window.mpSetMode(\'normal\')" style="'+_mb+'border:1.5px solid #f97316;background:transparent;color:#f97316" onmouseover="this.style.background=\'#f97316\';this.style.color=\'#fff\'" onmouseout="if(window._mpGameMode!==\'normal\'){this.style.background=\'transparent\';this.style.color=\'#f97316\'}">Normal</button>');
  h.push('<button id="mp-mode-nozoom" onclick="window.mpSetMode&&window.mpSetMode(\'nozoom\')" style="'+_mb+'border:1.5px solid #22d3ee;background:transparent;color:#22d3ee" onmouseover="this.style.background=\'#22d3ee\';this.style.color=\'#000\'" onmouseout="if(window._mpGameMode!==\'nozoom\'){this.style.background=\'transparent\';this.style.color=\'#22d3ee\'}">No-Zoom</button>');
  h.push('<button id="mp-mode-perf"  onclick="window.mpSetMode&&window.mpSetMode(\'perfection\')" style="'+_mb+'border:1.5px solid #7c3aed;background:transparent;color:#a78bfa" onmouseover="this.style.background=\'#7c3aed\';this.style.color=\'#fff\'" onmouseout="if(window._mpGameMode!==\'perfection\'){this.style.background=\'transparent\';this.style.color=\'#a78bfa\'}">Perfection</button>');
  h.push('<button id="mp-mode-chill" onclick="window.mpSetMode&&window.mpSetMode(\'chill\')"  style="'+_mb+'border:1.5px solid #3b82f6;background:transparent;color:#60a5fa" onmouseover="this.style.background=\'#3b82f6\';this.style.color=\'#fff\'" onmouseout="if(window._mpGameMode!==\'chill\'){this.style.background=\'transparent\';this.style.color=\'#60a5fa\'}">Chill</button>');
  h.push('<button id="mp-mode-events" onclick="window.mpSetMode&&window.mpSetMode(\'events\')" style="'+_mb+'border:1.5px solid #f59e0b;background:transparent;color:#fbbf24" onmouseover="this.style.background=\'#f59e0b\';this.style.color=\'#fff\'" onmouseout="if(window._mpGameMode!==\'events\'){this.style.background=\'transparent\';this.style.color=\'#fbbf24\'}">'+T('modeEvents')+'</button>');
  h.push('</div>');

  h.push('<div><div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px">'+T('mpLevel')+'</div>');
  h.push('<select id="mp-level" style="width:100%;background:#111827;border:1px solid #2d3f5e;border-radius:8px;padding:10px 12px;color:#e2e8f0;font-size:13px;cursor:pointer"><option value="-1">'+T('lvlAll')+'</option><option value="0">'+T('lvlExpert')+'</option><option value="1">'+T('lvlHard')+'</option><option value="2">'+T('lvlMedium')+'</option><option value="3">'+T('lvlEasy')+'</option></select></div>');

  h.push('<div><div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px">'+T('mpRounds')+'</div>');
  h.push('<select id="mp-rounds" style="width:100%;background:#111827;border:1px solid #2d3f5e;border-radius:8px;padding:10px 12px;color:#e2e8f0;font-size:13px;cursor:pointer"><option value="5">'+T('mpRounds5')+'</option><option value="10">'+T('mpRounds10')+'</option></select></div>');

  if(!user){
    h.push('<div><div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px">'+T('mpPseudo')+'</div>');
    h.push('<input id="mp-name-create" placeholder="'+T('mpPseudoPh')+'" style="width:100%;background:#111827;border:1px solid #2d3f5e;border-radius:8px;padding:10px 12px;color:#e2e8f0;font-size:13px"></div>');
  }
  h.push('<button onclick="window.mpDoCreate&&window.mpDoCreate()" style="width:100%;padding:13px;border-radius:10px;border:none;background:#22c55e;color:#fff;font-weight:700;font-size:14px;cursor:pointer;margin-top:4px" onmouseover="this.style.opacity=\'0.85\'" onmouseout="this.style.opacity=\'1\'">'+T('mpCreateBtn')+'</button>');
  h.push('</div>');

  // ── Colonne REJOINDRE ──
  h.push('<div style="background:#0d1120;border:1px solid #1e2d45;border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:14px">');
  h.push('<div style="font-size:11px;font-weight:700;color:#f97316;letter-spacing:2px;text-transform:uppercase">'+T('mpJoinGame')+'</div>');
  h.push('<div style="flex:1;display:flex;flex-direction:column;gap:6px">');
  h.push('<div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px">'+T('mpRoomCode')+'</div>');
  h.push('<input id="mp-code" placeholder="XXXXXX" maxlength="6" style="width:100%;background:#111827;border:2px solid #2d3f5e;border-radius:10px;padding:18px 12px;color:#f97316;font-size:28px;font-weight:700;letter-spacing:10px;text-align:center;text-transform:uppercase" onfocus="this.style.borderColor=\'#f97316\'" onblur="this.style.borderColor=\'#2d3f5e\'">');
  h.push('</div>');
  if(!user){
    h.push('<div><div style="font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px">'+T('mpPseudo')+'</div>');
    h.push('<input id="mp-name-join" placeholder="'+T('mpPseudoPh')+'" style="width:100%;background:#111827;border:1px solid #2d3f5e;border-radius:8px;padding:10px 12px;color:#e2e8f0;font-size:13px"></div>');
  }
  h.push('<div style="flex:1"></div>');
  h.push('<button onclick="window.mpDoJoin&&window.mpDoJoin()" style="width:100%;padding:13px;border-radius:10px;border:none;background:#f97316;color:#fff;font-weight:700;font-size:14px;cursor:pointer;margin-top:4px" onmouseover="this.style.opacity=\'0.85\'" onmouseout="this.style.opacity=\'1\'">'+T('mpJoin')+'</button>');
  h.push('</div>');

  h.push('</div>');
  h.push('<button onclick="showMenu()" style="margin-top:16px;padding:9px 28px;border-radius:9px;border:1px solid #334155;background:transparent;color:#64748b;font-size:12px;font-weight:600;cursor:pointer" onmouseover="this.style.color=\'#e2e8f0\'" onmouseout="this.style.color=\'#64748b\'">'+T('back')+'</button>');

  ov.innerHTML=h.join('');
  ov.classList.remove('h');
  window._mpGameMode='normal';
  if(typeof mpSetMode==='function') mpSetMode('normal');
}
function mpSetMode(m){window._mpGameMode=m;['normal','nozoom','perfection','chill','events'].forEach(function(k){var el=document.getElementById('mp-mode-'+(k==='perfection'?'perf':k));if(!el)return;var a=k===m;var col=k==='perfection'?'#7c3aed':k==='chill'?'#3b82f6':k==='events'?'#f59e0b':'#f97316';var tc=k==='perfection'?'#a78bfa':k==='chill'?'#60a5fa':k==='events'?'#fbbf24':'#f97316';el.style.background=a?col:'transparent';el.style.color=a?'#fff':tc;el.style.borderColor=col;});}
function mpDoCreate(){var lvl=parseInt(document.getElementById('mp-level').value);var gm=window._mpGameMode||'normal';var nz=gm==='nozoom';var perf=gm==='perfection';var chill=gm==='chill';var events=gm==='events';var nb=parseInt(document.getElementById('mp-rounds').value);if(perf&&nb<10)nb=10;window._mpMode=true;var fn=window.mpCreateRoom||(typeof mpCreateRoom==='function'?mpCreateRoom:null);if(fn){fn({fixedLevel:lvl,noZoomMode:nz,perfectionMode:perf,chillMode:chill,eventsMode:events,nbRounds:nb}).then(function(code){if(typeof showToast==='function')showToast(T('mpSalon')+code);}).catch(function(e){if(typeof showToast==='function')showToast(T('mpError')+e.message);window._mpMode=false;});}else{if(typeof showToast==='function')showToast(T('mpModuleNotLoaded'));}}
function mpDoJoin(){var code=(document.getElementById('mp-code').value||'').toUpperCase().trim();if(code.length<4){if(typeof showToast==='function')showToast(T('mpCodeInvalid'));return;}window._mpMode=true;var fn=window.mpJoinRoom||(typeof mpJoinRoom==='function'?mpJoinRoom:null);if(fn){fn(code,T('player')).catch(function(e){if(typeof showToast==='function')showToast(T('mpError')+e.message);window._mpMode=false;});}else{if(typeof showToast==='function')showToast(T('mpModuleNotLoaded'));}}
function selectGameMode(mode) {
  var isPrem = typeof window.isPremiumUser==='function'?window.isPremiumUser():(window.isPremium===true);
  var _premMode=(mode==='nozoom'||mode==='perfection'||mode==='chill'||mode==='events');
  function _plabel(m){return m==='nozoom'?'No-Zoom':m==='chill'?'Chill':m==='events'?T('modeEvents'):'Perfection';}
  if(_premMode && !isPrem) {
    if(typeof window.showPremiumOverlay==='function') {
      window.showPremiumOverlay(_plabel(mode));
    } else {
      setTimeout(function(){
        if(typeof window.showPremiumOverlay==='function') window.showPremiumOverlay(_plabel(mode));
      }, 500);
    }
    return;
  }
  window._menuNZ = mode==='nozoom';
  window._menuPerf = mode==='perfection';
  window._menuChill = mode==='chill';
  window._menuEvents = mode==='events';
  // Afficher le sous-menu de difficult&#233;
  showDifficultyMenu(mode);
}

function showDifficultyMenu(mode) {
  var ov = document.getElementById('overlay');
  var modeLabel = mode==='nozoom'?'No-Zoom':mode==='perfection'?'Perfection':mode==='chill'?'Chill':mode==='events'?T('modeEvents'):'Normal';
  var modeColor = mode==='perfection'?'#a78bfa':mode==='chill'?'#3b82f6':mode==='events'?'#f59e0b':'#f97316';
  var h = [];
  h.push('<div class="otitle" style="font-size:32px;color:'+modeColor+'">' + modeLabel.toUpperCase() + '</div>');
  h.push('<div style="font-size:13px;color:#cbd5e1;margin-bottom:18px;font-weight:500">'+T('chooseLevel')+'</div>');
  h.push('<div style="display:flex;flex-direction:column;gap:8px;width:100%;max-width:420px">');

  // Tout niveaux
  h.push('<button onclick="launchGame(-1)" style="padding:12px 18px;border-radius:10px;border:1.5px solid #f97316;background:rgba(249,115,22,0.08);color:#f97316;font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:space-between">');
  h.push('<span>'+T('lvlAll')+'</span><span style="font-size:12px;color:#94a3b8;font-weight:500">4 '+T('hintsPerPlace')+'</span>');
  h.push('</button>');

  var lvls=[
    {l:T('lvlExpert'), c:'#ef4444', i:0, d:T('hints1')},
    {l:T('lvlHard'),   c:'#3b82f6', i:1, d:T('hintsN',{n:2})},
    {l:T('lvlMedium'), c:'#eab308', i:2, d:T('hintsN',{n:3})},
    {l:T('lvlEasy'),   c:'#22c55e', i:3, d:T('hintsN',{n:4})}
  ];
  lvls.forEach(function(lv){
    h.push('<button data-lvl="'+lv.i+'" onclick="launchGame(parseInt(this.dataset.lvl))" style="padding:12px 18px;border-radius:10px;border:1.5px solid '+lv.c+';background:'+lv.c+'18;color:'+lv.c+';font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:space-between">');
    h.push('<span>'+lv.l+'</span>');
    h.push('</button>');
  });

  h.push('</div>');
  h.push('<button onclick="showMenu()" style="margin-top:14px;padding:9px 22px;border-radius:9px;border:1px solid #334155;background:transparent;color:#94a3b8;font-size:12px;font-weight:600;cursor:pointer">'+T('back')+'</button>');
  ov.innerHTML = h.join('');
  ov.classList.remove('h');
}

function launchGame(level) {
  window._dailyMode=false;
  fixedLevel = level;
  noZoomMode = window._menuNZ || false;
  perfectionMode = window._menuPerf || false;
  chillMode = window._menuChill || false;
  eventsMode = window._menuEvents || false;
  if(map){ map.remove(); map=null; }
  document.getElementById('overlay').classList.add('h');
  document.getElementById('hsc').textContent='0';
  if(!map){ try{ initMap(); }catch(e){} }
  startGame();
}

function openMultiplayer() {
  var isPrem = typeof window.isPremiumUser==='function'?window.isPremiumUser():(window.isPremium===true);
  if(!isPrem) {
    if(typeof window.showPremiumOverlay==='function') window.showPremiumOverlay(T('multiplayer'));
    else setTimeout(function(){ if(typeof window.showPremiumOverlay==='function') window.showPremiumOverlay(T('multiplayer')); },500);
    return;
  }
  if(typeof window.mpShowJoinMenu==='function') window.mpShowJoinMenu();
}

/* === Responsive : recadrage de la carte au redimensionnement / rotation === */
(function(){
  var _gcRT;
  function _gcResizeMap(){
    try{ if(typeof map!=='undefined' && map){ map.invalidateSize(); if(typeof adjustMapZoom==='function') adjustMapZoom(); } }catch(e){}
  }
  window.addEventListener('resize', function(){ clearTimeout(_gcRT); _gcRT=setTimeout(_gcResizeMap,200); });
  window.addEventListener('orientationchange', function(){ setTimeout(_gcResizeMap,350); });
})();
