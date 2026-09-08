const NAV = [
  ["dashboard","Tableau de bord","Vue d’ensemble"],
  ["extract","Extraire","Thème → idée → preuve → place"],
  ["draft","Brouillon","Brouillon minimaliste à trous"],
  ["plan","Plan","Construire un plan à partir du brouillon"],
  ["titles","Titres","Titres objectifs et précis"],
  ["vocab","Vocabulaire","Lexique actif de synthèse"],
  ["syntax","Syntaxe","Fautes fréquentes de concours"],
  ["simulation","Simulation","Chronomètre + budget de mots"],
  ["progression","Progression","Suivi local des entraînements"]
];

const state = {
  page:"dashboard",
  ds:Object.keys(DATASETS)[0],
  extractIndex:0,
  clozeIndex:0,
  titleIndex:0,
  vocabIndex:0,
  syntaxIndex:0,
  remaining:4*3600,
  timer:null
};

let stats = JSON.parse(localStorage.getItem("ndsStats") || "null") || {
  attempts:0, correct:0, extract:0, draft:0, plan:0, titles:0, vocab:0, syntax:0
};

const $ = id => document.getElementById(id);
const norm = s => (s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9%]+/g," ").trim();
const countWords = t => (t.trim().match(/\S+/g)||[]).length;

function saveStats(){ localStorage.setItem("ndsStats", JSON.stringify(stats)); }
function markAttempt(module, ok){ stats.attempts++; stats[module]=(stats[module]||0)+1; if(ok) stats.correct++; saveStats(); }
function poolByDs(pool){ return pool.filter(x=>x.ds===state.ds); }
function tokenScore(user, expected){
  const a = new Set(norm(user).split(" ").filter(x=>x.length>2));
  const b = new Set(norm(expected).split(" ").filter(x=>x.length>2));
  if(!b.size) return 0;
  let hit=0; b.forEach(x=>{if(a.has(x)) hit++});
  return hit/b.size;
}
function keywordScore(user, words){
  const u=norm(user); if(!u) return 0;
  let n=0; words.forEach(w=>{if(u.includes(norm(w)))n++});
  return n/words.length;
}
function escapeHtml(s){ return (s||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }

function init(){
  $("nav").innerHTML = NAV.map(([id,label])=>`<button data-page="${id}">${label}</button>`).join("");
  $("nav").addEventListener("click", e=>{ const b=e.target.closest("button[data-page]"); if(b) go(b.dataset.page); });
  $("datasetSelect").innerHTML = Object.entries(DATASETS).map(([k,v])=>`<option value="${k}">${v.short}</option>`).join("");
  $("datasetSelect").value=state.ds;
  $("datasetSelect").addEventListener("change", e=>{state.ds=e.target.value; state.extractIndex=0; state.clozeIndex=0; renderAll();});
  go("dashboard");
}

function go(page){
  state.page=page;
  document.querySelectorAll(".section").forEach(s=>s.classList.toggle("active",s.id===page));
  document.querySelectorAll("#nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  const item=NAV.find(x=>x[0]===page);
  $("pageTitle").textContent=item[1];
  $("pageSubtitle").textContent=item[2];
  renderPage(page);
}
function renderAll(){ renderDashboard(); renderPage(state.page); }
function renderPage(page){
  ({dashboard:renderDashboard,extract:renderExtract,draft:renderDraft,plan:renderPlan,titles:renderTitles,vocab:renderVocab,syntax:renderSyntax,simulation:renderSimulation,progression:renderProgression}[page]||(()=>{}))();
}

function renderDashboard(){
  const ds=DATASETS[state.ds];
  const pct=stats.attempts?Math.round(stats.correct/stats.attempts*100):0;
  $("dashboard").innerHTML=`
    <div class="grid cols3">
      <div class="card"><div class="tiny">Dossier actif</div><div class="kpi" style="font-size:20px">${ds.short}</div><p class="muted">${ds.source}</p></div>
      <div class="card"><div class="tiny">Tentatives</div><div class="kpi">${stats.attempts}</div><p class="muted">Tous modules confondus</p></div>
      <div class="card"><div class="tiny">Réussite estimée</div><div class="kpi">${pct}%</div><p class="muted">Indicateur d’entraînement, pas une note de concours</p></div>
    </div>
    <div class="grid cols2" style="margin-top:16px">
      <div class="card"><h2>Énoncé de travail</h2><div class="quote">${ds.subject}</div></div>
      <div class="card"><h2>Priorités</h2><p>1. Formuler l’idée avant de choisir les chiffres.</p><p>2. Réduire l’effet catalogue.</p><p>3. Construire le plan à partir des fonctions du sujet.</p><p>4. Automatiser le vocabulaire administratif et la syntaxe.</p></div>
    </div>`;
}

function renderExtract(){
  const pool=poolByDs(EXTRACT); if(!pool.length){$("extract").innerHTML='<div class="card">Aucun exercice pour ce dossier.</div>';return;}
  const ex=pool[state.extractIndex%pool.length];
  $("extract").innerHTML=`<div class="grid cols2">
    <div class="card"><span class="badge">Extrait</span><div class="quote">${ex.excerpt}</div><div class="source">${ex.source}</div></div>
    <div class="card"><h2>Transforme l’extrait</h2>
      ${[["theme","Thème"],["idea","Idée"],["proof","Preuve forte"],["doc","Document"],["place","Place dans le plan"]].map(([id,l])=>`<label>${l}</label><input id="e_${id}" class="input">`).join("")}
      <div class="actions"><button class="btn" onclick="checkExtract()">Corriger</button><button class="btn ghost" onclick="nextExtract()">Suivant</button></div><div id="eFeedback"></div>
    </div></div>`;
}
function checkExtract(){
  const pool=poolByDs(EXTRACT), ex=pool[state.extractIndex%pool.length];
  const fields=["theme","idea","proof","doc","place"];
  const scores=fields.map(f=>tokenScore($("e_"+f).value,ex.ans[f]));
  const avg=scores.reduce((a,b)=>a+b,0)/scores.length, ok=avg>=.35;
  markAttempt("extract",ok);
  $("eFeedback").innerHTML=`<div class="feedback ${ok?'good':'warn'}"><b>Référence :</b><br>${fields.map(f=>`<b>${f}</b> : ${ex.ans[f]}`).join('<br>')}<hr>Score indicatif : ${Math.round(avg*100)} %</div>`;
}
function nextExtract(){const p=poolByDs(EXTRACT);state.extractIndex=(state.extractIndex+1)%p.length;renderExtract();}

function renderDraft(){
  const pool=poolByDs(CLOZE); if(!pool.length){$("draft").innerHTML='<div class="card">Aucun exercice pour ce dossier.</div>';return;}
  const ex=pool[state.clozeIndex%pool.length];
  const pieces=ex.pattern.split("______");
  let html=''; pieces.forEach((p,i)=>{html+=`<span>${p}</span>`; if(i<ex.slots.length) html+=`<input class="input" id="cl${i}" style="display:inline-block;width:220px;margin:4px">`;});
  $("draft").innerHTML=`<div class="card"><h2>Brouillon minimaliste</h2><p class="muted">Complète uniquement ce qui serait utile sur ton brouillon.</p><div class="quote">${html}</div><div class="actions"><button class="btn" onclick="checkDraft()">Corriger</button><button class="btn ghost" onclick="nextDraft()">Suivant</button></div><div id="dFeedback"></div></div>`;
}
function checkDraft(){
  const pool=poolByDs(CLOZE), ex=pool[state.clozeIndex%pool.length];
  const scores=ex.slots.map((s,i)=>tokenScore($("cl"+i).value,s));
  const avg=scores.reduce((a,b)=>a+b,0)/scores.length,ok=avg>=.35; markAttempt("draft",ok);
  let j=0; const ref=ex.pattern.replace(/______/g,()=>`<strong>${ex.slots[j++]}</strong>`);
  $("dFeedback").innerHTML=`<div class="feedback ${ok?'good':'warn'}"><b>Ligne de référence :</b><br>${ref}</div>`;
}
function nextDraft(){const p=poolByDs(CLOZE);state.clozeIndex=(state.clozeIndex+1)%p.length;renderDraft();}

function renderPlan(){
  const ds=DATASETS[state.ds];
  $("plan").innerHTML=`<div class="grid cols2">
    <div class="card"><h2>Énoncé</h2><div class="quote">${ds.subject}</div><h3>Brouillon fourni</h3><div class="chips">${ds.draftBullets.map(x=>`<div class="chip">${x}</div>`).join("")}</div><p class="tiny">Croise le plan-type de la prof avec les termes exacts de l’énoncé.</p></div>
    <div class="card"><h2>Ton plan</h2><div class="plan-grid">${["I","A","B","II","A","B"].map((l,i)=>`<div class="lab">${l}</div><input class="input" id="p${i}" placeholder="Titre ${l}">`).join("")}</div><div class="actions"><button class="btn" onclick="checkPlan()">Évaluer mon plan</button><button class="btn secondary" onclick="showRefPlan()">Voir le plan de référence</button></div><div id="pFeedback"></div></div>
    </div><div id="refPlan" class="card hidden" style="margin-top:16px"></div>`;
}
function checkPlan(){
  const ds=DATASETS[state.ds]; let scores=[];
  for(let i=0;i<6;i++) scores.push(keywordScore($("p"+i).value,ds.planKeywords[i]));
  const avg=scores.reduce((a,b)=>a+b,0)/6;
  const coverage=[1,2,4,5].filter(i=>scores[i]>.2).length;
  const ok=avg>.25&&coverage>=3; markAttempt("plan",ok);
  $("pFeedback").innerHTML=`<div class="feedback ${ok?'good':'warn'}"><b>Score structurel : ${Math.round(avg*100)} %</b><br>Couverture des sous-parties : ${coverage}/4.<br>${ok?'Ton plan couvre les fonctions essentielles. Compare maintenant les intitulés.':'Vérifie la couverture du sujet et la distinction entre constat, action, mesures et limites.'}</div>`;
}
function showRefPlan(){
  const ds=DATASETS[state.ds]; $("refPlan").classList.remove("hidden");
  $("refPlan").innerHTML=`<h2>Plan de référence</h2><div class="plan-grid">${["I","A","B","II","A","B"].map((l,i)=>`<div class="lab">${l}</div><div class="split-note"><b>${ds.refPlan[i]}</b></div>`).join("")}</div><p class="tiny" style="margin-top:10px">Un autre plan peut être valable s’il couvre entièrement l’énoncé, respecte une progression logique et reste équilibré.</p>`;
}

function renderTitles(){
  const ex=TITLE_EX[state.titleIndex%TITLE_EX.length];
  $("titles").innerHTML=`<div class="card"><span class="badge gold">Titre à améliorer</span><div class="quote"><b>${ex.weak}</b></div><label>Ta reformulation</label><input id="tInput" class="input" placeholder="Titre objectif, précis, sans jugement prématuré"><div class="actions"><button class="btn" onclick="checkTitle()">Analyser</button><button class="btn ghost" onclick="nextTitle()">Suivant</button></div><div id="tFeedback"></div></div>`;
}
function checkTitle(){
  const ex=TITLE_EX[state.titleIndex%TITLE_EX.length], u=$("tInput").value;
  const banned=["pas suffisamment","ne sont pas","compliqu","ne marchent pas","pallier aux"];
  const ok=u.trim().split(/\s+/).length>=6 && !banned.some(x=>norm(u).includes(norm(x)));
  markAttempt("titles",ok);
  $("tFeedback").innerHTML=`<div class="feedback ${ok?'good':'warn'}"><b>À éviter :</b> ${ex.issues.join(' ; ')}.<br><b>Référence :</b> ${ex.ref}<br><span class="tiny">Ta version peut être différente si elle reste objective, précise et fidèle.</span></div>`;
}
function nextTitle(){state.titleIndex=(state.titleIndex+1)%TITLE_EX.length;renderTitles();}

function renderVocab(){
  const ex=VOCAB[state.vocabIndex%VOCAB.length];
  $("vocab").innerHTML=`<div class="grid cols2"><div class="card"><div class="term">${ex.term}</div><p>${ex.def}</p><div class="example"><b>Exercice :</b> ${ex.prompt}</div></div><div class="card"><h2>Production active</h2><textarea id="vInput"></textarea><div class="actions"><button class="btn" onclick="checkVocab()">Corriger</button><button class="btn ghost" onclick="nextVocab()">Mot suivant</button></div><div id="vFeedback"></div></div></div>`;
}
function checkVocab(){const ex=VOCAB[state.vocabIndex%VOCAB.length];const s=tokenScore($("vInput").value,ex.answer),ok=s>.25;markAttempt("vocab",ok);$("vFeedback").innerHTML=`<div class="feedback ${ok?'good':'warn'}"><b>Référence :</b> ${ex.answer}</div>`;}
function nextVocab(){state.vocabIndex=(state.vocabIndex+1)%VOCAB.length;renderVocab();}

function renderSyntax(){
  const ex=SYNTAX[state.syntaxIndex%SYNTAX.length];
  let choices=[ex.good,ex.bad]; if(state.syntaxIndex%2) choices.reverse();
  $("syntax").innerHTML=`<div class="card"><h2>Choisis la formulation correcte</h2>${choices.map(x=>`<button class="option" onclick="chooseSyntax(this,${x===ex.good})">${x}</button>`).join("")}<div id="sFeedback"></div><div class="actions"><button class="btn ghost" onclick="nextSyntax()">Phrase suivante</button></div></div>`;
}
function chooseSyntax(el,good){
  document.querySelectorAll('#syntax .option').forEach(b=>b.disabled=true); el.classList.add(good?'correct':'wrong');
  const ex=SYNTAX[state.syntaxIndex%SYNTAX.length]; markAttempt("syntax",good);
  $("sFeedback").innerHTML=`<div class="feedback ${good?'good':'warn'}"><b>${good?'Correct':'À corriger'}</b><br>${ex.why}<br><b>Forme recommandée :</b> ${ex.good}</div>`;
}
function nextSyntax(){state.syntaxIndex=(state.syntaxIndex+1)%SYNTAX.length;renderSyntax();}

function fmtTime(s){const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sec=s%60;return [h,m,sec].map(x=>String(x).padStart(2,'0')).join(':');}
function renderSimulation(){
  const ds=DATASETS[state.ds], text=localStorage.getItem('ndsSimText_'+state.ds)||'', n=countWords(text);
  $("simulation").innerHTML=`<div class="grid cols2"><div class="card"><h2>Simulation - ${ds.short}</h2><div class="quote">${ds.subject}</div><div class="timer" id="timerDisplay">${fmtTime(state.remaining)}</div><div class="actions"><button class="btn" onclick="startTimer()">Démarrer</button><button class="btn secondary" onclick="pauseTimer()">Pause</button><button class="btn ghost" onclick="resetTimer()">Réinitialiser</button></div><hr><h3>Repères de temps</h3>${[["Analyse du sujet",3],["Sommaire / ordre de lecture",12],["Prise de notes",30],["Plan",45],["Rédaction NDS",60],["Exercice 2",90]].map(x=>`<div class="stage"><span>${x[0]}</span><span class="time">${x[1]} min</span></div>`).join('')}</div><div class="card"><h2>Zone de travail</h2><textarea id="simText" style="min-height:360px" oninput="simUpdate()">${escapeHtml(text)}</textarea><div class="budget">Mots : <strong id="wordCount">${n}</strong> / cible NDS ≈ 900</div><div class="progress" style="margin-top:8px"><span id="wordBar" style="width:${Math.min(100,n/9)}%"></span></div><div class="feedback warn" id="wordAlert" style="display:${n>900?'block':'none'}">Tu dépasses la cible de 900 mots correspondant à environ 4 pages manuscrites dans ton calibrage.</div></div></div>`;
}
function startTimer(){if(state.timer)return;state.timer=setInterval(()=>{if(state.remaining>0){state.remaining--;if($("timerDisplay"))$("timerDisplay").textContent=fmtTime(state.remaining)}else pauseTimer()},1000);}
function pauseTimer(){if(state.timer){clearInterval(state.timer);state.timer=null;}}
function resetTimer(){pauseTimer();state.remaining=4*3600;renderSimulation();}
function simUpdate(){const t=$("simText").value;localStorage.setItem('ndsSimText_'+state.ds,t);const n=countWords(t);$("wordCount").textContent=n;$("wordBar").style.width=Math.min(100,n/9)+'%';$("wordAlert").style.display=n>900?'block':'none';}

function renderProgression(){
  const pct=stats.attempts?Math.round(stats.correct/stats.attempts*100):0;
  $("progression").innerHTML=`<div class="grid cols3"><div class="card"><div class="tiny">Tentatives</div><div class="kpi">${stats.attempts}</div></div><div class="card"><div class="tiny">Réussites estimées</div><div class="kpi">${stats.correct}</div></div><div class="card"><div class="tiny">Taux global</div><div class="kpi">${pct}%</div></div></div><div class="card" style="margin-top:16px"><h2>Activité par module</h2>${[["Extraire","extract"],["Brouillon","draft"],["Plan","plan"],["Titres","titles"],["Vocabulaire","vocab"],["Syntaxe","syntax"]].map(([l,k])=>`<div class="stage"><b>${l}</b><span class="score-pill">${stats[k]||0}</span></div>`).join('')}<div class="actions"><button class="btn ghost" onclick="resetStats()">Effacer la progression</button></div></div>`;
}
function resetStats(){if(confirm('Effacer toute la progression ?')){stats={attempts:0,correct:0,extract:0,draft:0,plan:0,titles:0,vocab:0,syntax:0};saveStats();renderProgression();}}

init();
