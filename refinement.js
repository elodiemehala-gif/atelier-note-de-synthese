// Ajustement pédagogique : Extraire et Brouillon sont indépendants du plan.
// Leur chaîne devient : thème → idée → preuve forte → document.

const v2ExtractNav = NAV.find(x=>x[0]==="extract");
if(v2ExtractNav) v2ExtractNav[2] = "Thème → idée → preuve forte → document";
const v2DraftNav = NAV.find(x=>x[0]==="draft");
if(v2DraftNav) v2DraftNav[2] = "Brouillon minimaliste à partir d’un extrait";

// Le brouillon minimaliste ne contient plus de case « Place ».
v2Parts = function(ex){
  return [
    ["Thème", ex.ans.theme],
    ["Idée", ex.ans.idea],
    ["Preuve forte", ex.ans.proof],
    ["Document", ex.ans.doc]
  ];
};

v2Mask = function(){
  return new Set(v2Shuffle(4,state.v2DraftIndex+state.v2DraftSeed*17).slice(0,state.v2DraftHoles));
};

if(state.v2DraftHoles > 4) state.v2DraftHoles = 3;

renderExtract = function(){
  const ex=v2Current(state.extractIndex);
  $("extract").innerHTML=`
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">
      <span class="badge">Extrait ${state.extractIndex+1} / ${V2_EXCERPTS.length}</span>
      <button class="btn ghost" onclick="v2PrevExtract()">← Précédent</button>
      <button class="btn ghost" onclick="nextExtract()">Suivant →</button>
      <button class="btn secondary" onclick="v2RandomExtract()">Aléatoire</button>
    </div>
    <div class="grid cols2">
      <div class="card">
        <div class="tiny">Mini-commande</div>
        <div class="example">${escapeHtml(ex.command)}</div>
        <div class="quote" style="font-size:15px;line-height:1.7">${escapeHtml(ex.excerpt)}</div>
        <div class="source">${escapeHtml(ex.source)}</div>
        <div class="feedback warn"><b>Repères :</b> de quoi parle le passage ? Que dit-il exactement ? Quel fait, chiffre ou mécanisme le prouve ? De quel document vient-il ?</div>
      </div>
      <div class="card">
        <h2>Transforme l’extrait</h2>
        ${[
          ["theme","Thème","santé mentale / financement / gouvernance"],
          ["idea","Idée","une phrase courte qui dit ce que le document affirme"],
          ["proof","Preuve forte","chiffre, fait, mécanisme ou mesure"],
          ["doc","Document","référence courte à retrouver au brouillon"]
        ].map(([id,l,ph])=>`<label>${l}</label><input id="e_${id}" class="input" placeholder="${ph}">`).join("")}
        <div class="actions"><button class="btn" onclick="checkExtract()">Corriger</button></div>
        <div id="eFeedback"></div>
      </div>
    </div>`;
};

checkExtract = function(){
  const ex=v2Current(state.extractIndex);
  const fields=["theme","idea","proof","doc"];
  const labels={theme:"Thème",idea:"Idée",proof:"Preuve forte",doc:"Document"};
  const scores=fields.map(f=>tokenScore($("e_"+f).value,ex.ans[f]));
  const avg=scores.reduce((a,b)=>a+b,0)/scores.length;
  const ok=avg>=.34;
  markAttempt("extract",ok);
  $("eFeedback").innerHTML=`<div class="feedback ${ok?'good':'warn'}"><b>Référence possible</b><br>${fields.map(f=>`<b>${labels[f]} :</b> ${escapeHtml(ex.ans[f])}`).join("<br>")}<hr><span class="tiny">Une autre formulation peut être correcte si elle remplit la même fonction.</span></div>`;
};

renderDraft = function(){
  const ex=v2Current(state.v2DraftIndex),parts=v2Parts(ex),mask=v2Mask();
  $("draft").innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:14px">
      <span class="badge">Extrait ${state.v2DraftIndex+1} / ${V2_EXCERPTS.length}</span>
      <span class="tiny">Nombre de trous</span>
      <select style="min-width:75px" onchange="v2ChangeHoles(this.value)">
        ${[1,2,3,4].map(n=>`<option value="${n}" ${n===state.v2DraftHoles?'selected':''}>${n}</option>`).join("")}
      </select>
      <button class="btn ghost" onclick="v2NewMask()">Autres trous</button>
      <button class="btn ghost" onclick="v2PrevDraft()">←</button>
      <button class="btn ghost" onclick="v2NextDraft()">→</button>
      <button class="btn secondary" onclick="v2RandomDraft()">Aléatoire</button>
    </div>
    <div class="grid cols2">
      <div class="card">
        <div class="tiny">Mini-commande</div>
        <div class="example">${escapeHtml(ex.command)}</div>
        <h2>Extrait à condenser</h2>
        <div class="quote" style="font-size:15px;line-height:1.7">${escapeHtml(ex.excerpt)}</div>
        <div class="source">${escapeHtml(ex.source)}</div>
        <div class="feedback warn"><b>Objectif :</b> transformer le passage en une ligne de brouillon très courte : thème → idée → preuve forte → document.</div>
      </div>
      <div class="card">
        <h2>Brouillon minimaliste à trous</h2>
        <p class="muted">Avec 4 trous, tu reconstruis toute la ligne sans aide.</p>
        <div style="display:grid;gap:10px">
          ${parts.map((p,i)=>`<div><span class="tiny"><b>${p[0]}</b></span>${mask.has(i)?`<input class="input" id="v2d_${i}" placeholder="${p[0]}">`:`<div class="split-note"><b>${escapeHtml(p[1])}</b></div>`}${i<3?'<div style="text-align:center;color:#264f7a;font-weight:900">↓</div>':''}</div>`).join("")}
        </div>
        <div class="actions"><button class="btn" onclick="v2CheckDraft()">Corriger</button><button class="btn ghost" onclick="v2NewMask()">Autres trous</button></div>
        <div id="v2dFeedback"></div>
      </div>
    </div>`;
};

// Tableau de bord : clarifier que le plan est travaillé séparément.
const oldRenderDashboard = renderDashboard;
renderDashboard = function(){
  oldRenderDashboard();
  const cards = $("dashboard").querySelectorAll(".card");
  if(cards.length){
    const priority = [...cards].find(c=>c.textContent.includes("Priorités"));
    if(priority){
      priority.innerHTML=`<h2>Priorités</h2><p><b>Extraire :</b> thème → idée → preuve forte → document.</p><p><b>Brouillon :</b> condenser un extrait sans réfléchir encore à sa place dans le plan.</p><p><b>Plan :</b> exercice séparé à partir d’un brouillon déjà constitué.</p><p><b>Rédaction :</b> automatiser titres, vocabulaire et syntaxe.</p>`;
    }
  }
};
