// Banque « Titres » construite à partir des annales publiques du concours externe IFP.
// Les plans sont des plans de référence reconstitués à partir de la commande et du corpus ;
// ils ne sont pas présentés comme des corrigés officiels.

const ANNALES_PLANS = [
  {
    key:"2018", year:"2018", topic:"Lobbying : France et perspective européenne",
    subject:"Présenter l’évolution de l’activité de lobbying en France avant de la replacer dans une perspective européenne.",
    titles:[
      ["I","Une activité de lobbying en expansion progressivement reconnue et encadrée en France","Le lobbying est de plus en plus important en France",["verbe conjugué","formulation vague","absence d’enjeu d’encadrement"]],
      ["I-A","La professionnalisation croissante d’une activité d’influence longtemps peu formalisée","Comment le lobbying a évolué en France",["formulation interrogative","verbe conjugué","titre trop descriptif"]],
      ["I-B","Un encadrement national renforcé par des exigences de transparence et de déontologie","Les règles pour contrôler les lobbies",["vocabulaire imprécis","registre peu administratif","absence de dynamique"]],
      ["II","Une pratique institutionnalisée à l’échelle européenne mais confrontée à des enjeux persistants de régulation","Le lobbying en Europe",["titre trop court","aucune qualification","absence de tension analytique"]],
      ["II-A","La place structurante des représentants d’intérêts dans le processus décisionnel européen","Les lobbies ont beaucoup de poids dans l’Union européenne",["registre courant","« beaucoup » imprécis","absence de notion institutionnelle"]],
      ["II-B","Des dispositifs de transparence encore inégaux face au poids et à la diversité des représentants d’intérêts","Les problèmes des règles européennes sur les lobbies",["formulation vague","« problèmes » non qualifiés","titre peu synthétique"]]
    ]
  },
  {
    key:"2019", year:"2019", topic:"Mutations du travail et de l’emploi",
    subject:"Présenter les mutations du travail et de l’emploi, notamment au regard des évolutions technologiques, puis les principales problématiques qu’elles soulèvent.",
    titles:[
      ["I","Des mutations profondes du travail et de l’emploi sous l’effet des transformations technologiques","Le travail change à cause des nouvelles technologies",["registre courant","verbe conjugué","relation causale trop simplifiée"]],
      ["I-A","La recomposition des formes d’emploi, des qualifications et des organisations productives","Les nouveaux types de travail et d’emplois",["titre catalogue","vocabulaire imprécis","absence de dynamique"]],
      ["I-B","L’automatisation et les plateformes numériques comme accélérateurs de nouvelles formes de travail","Les robots et les plateformes changent le travail",["verbe conjugué","formulation simpliste","absence de qualification"]],
      ["II","Des transformations porteuses d’opportunités mais génératrices de nouvelles problématiques économiques et sociales","Les avantages et les problèmes de ces changements",["vocabulaire scolaire","titre trop générique","absence de précision"]],
      ["II-A","Des effets contrastés sur l’emploi, les qualifications et les conditions de travail","Les nouvelles technologies détruisent-elles des emplois ?",["titre interrogatif","focalisation excessive","ne couvre pas les conditions de travail"]],
      ["II-B","Des besoins renouvelés de protection, de formation et d’adaptation des régulations","Il faut mieux former et protéger les travailleurs",["titre injonctif","verbe conjugué","registre peu synthétique"]]
    ]
  },
  {
    key:"2020", year:"2020", topic:"Biodiversité et financement",
    subject:"Présenter les enjeux de la biodiversité et sa problématique de financement.",
    titles:[
      ["I","La biodiversité, un enjeu écologique, économique et social dont l’érosion impose une mobilisation accrue","La biodiversité est très importante et elle disparaît",["verbe conjugué","registre courant","« très importante » non qualifié"]],
      ["I-A","Une érosion rapide des écosystèmes aux conséquences multidimensionnelles","La disparition des animaux et des plantes",["réduction excessive du sujet","absence de dynamique","biodiversité limitée aux espèces"]],
      ["I-B","La préservation de la biodiversité comme objectif d’intérêt général aux bénéfices multiples","Pourquoi il faut protéger la biodiversité",["formulation interrogative implicite","registre argumentatif","titre non administratif"]],
      ["II","Un financement encore insuffisant malgré la diversification des instruments mobilisables","Le problème de l’argent pour la biodiversité",["registre familier","vocabulaire imprécis","absence de tension analytique"]],
      ["II-A","Des financements publics prépondérants complétés par des mécanismes économiques diversifiés","Les différents moyens de payer la protection de la biodiversité",["registre courant","titre catalogue","absence de hiérarchie public/privé"]],
      ["II-B","Une implication privée croissante mais freinée par des besoins élevés et des dispositifs encore complexes","Le privé doit donner plus d’argent",["titre injonctif","jugement personnel","absence de diagnostic"]]
    ]
  },
  {
    key:"2021", year:"2021", topic:"Économie collaborative",
    subject:"Présenter les atouts sectoriels de l’économie collaborative puis les points de vigilance liés à la restructuration du paysage économique qu’elle engendre.",
    titles:[
      ["I","L’économie collaborative, un modèle en plein essor aux atouts sectoriels multiples","L’économie collaborative a beaucoup d’avantages",["verbe conjugué","« beaucoup » imprécis","absence de dimension sectorielle"]],
      ["I-A","Une diffusion rapide portée par le numérique et de nouveaux usages de consommation","Le développement d’Airbnb, Uber et des plateformes",["exemples à la place d’une idée","titre catalogue","champ trop étroit"]],
      ["I-B","Des bénéfices économiques, sociaux et environnementaux variables selon les secteurs","Les avantages économiques, sociaux et écologiques",["simple liste","absence de qualification","ne fait pas apparaître les différences sectorielles"]],
      ["II","Une restructuration du paysage économique appelant une vigilance renforcée","Les problèmes causés par l’économie collaborative",["formulation causale trop générale","« problèmes » vague","absence de restructuration"]],
      ["II-A","Des risques de concurrence déséquilibrée, de précarisation et de protection insuffisante","Les plateformes font de la concurrence aux entreprises et exploitent les travailleurs",["jugement excessif","registre polémique","absence d’objectivité"]],
      ["II-B","Des enjeux fiscaux, réglementaires et environnementaux nécessitant un encadrement adapté","Il faut mieux taxer et réglementer les plateformes",["titre injonctif","verbe conjugué","réduction aux seules mesures"]]
    ]
  },
  {
    key:"2022", year:"2022", topic:"Programme « Logement d’abord »",
    subject:"Présenter les leviers utilisés et les résultats obtenus afin d’apprécier si le programme « Logement d’abord » améliore la performance de l’action publique contre le sans-abrisme.",
    titles:[
      ["I","Le programme « Logement d’abord », une transformation ambitieuse de la lutte contre le sans-abrisme","Le programme Logement d’abord veut aider les sans-abri",["verbe conjugué","registre trop simple","absence de changement de modèle"]],
      ["I-A","Le passage de l’hébergement d’urgence à l’accès direct et durable au logement","Le logement plutôt que l’hébergement",["formulation télégraphique","absence de dynamique","enjeu de durabilité absent"]],
      ["I-B","Des leviers diversifiés associant logement adapté, accompagnement et coordination territoriale","Toutes les mesures utilisées par le programme",["titre catalogue","aucune hiérarchisation","mesures non nommées"]],
      ["II","Des résultats réels mais encore insuffisants pour garantir une meilleure performance de l’action publique","Le programme marche mais pas assez",["registre oral","jugement non objectivé","absence de notion de performance"]],
      ["II-A","Des capacités de logement et d’accompagnement renforcées sur les territoires","Les bons résultats du programme",["jugement vague","absence de contenu","titre trop générique"]],
      ["II-B","Une dépendance persistante à l’urgence et des objectifs freinés par des difficultés d’offre et de pilotage","Les limites du Logement d’abord",["titre générique","aucune cause identifiée","absence de qualification"]]
    ]
  },
  {
    key:"2023", year:"2023", topic:"Jeu vidéo et économie française",
    subject:"Présenter la place du jeu vidéo dans l’économie française, les raisons de son succès et les moyens qui contribuent à le renforcer.",
    titles:[
      ["I","Le jeu vidéo, un secteur désormais majeur de l’économie française","Le jeu vidéo prend une grande place dans l’économie française",["verbe conjugué","« grande place » imprécis","titre peu synthétique"]],
      ["I-A","Un marché dynamique porté par une pratique massive et diversifiée","Les Français jouent beaucoup aux jeux vidéo",["registre courant","focalisation sur les joueurs","absence de dimension de marché"]],
      ["I-B","Un écosystème national créatif, qualifié et compétitif","La France a de bons studios et de bonnes écoles",["verbe conjugué","jugement vague","absence de notion d’écosystème"]],
      ["II","Un succès consolidé par des soutiens structurants dans un environnement en mutation rapide","Les moyens pour continuer le succès du jeu vidéo",["formulation vague","absence de tension","« succès » répété sans qualification"]],
      ["II-A","Des dispositifs publics de financement, de formation et de rayonnement favorisant la compétitivité","Les aides de l’État au jeu vidéo",["titre trop étroit","simple thème","formation et rayonnement absents"]],
      ["II-B","Des mutations technologiques et une concurrence internationale appelant la consolidation du secteur","Les nouveaux jeux et la concurrence étrangère",["titre descriptif","vocabulaire imprécis","absence d’enjeu stratégique"]]
    ]
  },
  {
    key:"2024", year:"2024", topic:"Marketing d’influence",
    subject:"Présenter les dérives justifiant un meilleur encadrement du marketing d’influence ainsi que les premières mesures engagées en la matière.",
    titles:[
      ["I","L’essor du marketing d’influence accompagné de dérives justifiant un encadrement renforcé","Les influenceurs font de plus en plus de choses interdites",["registre accusatoire","verbe conjugué","absence de qualification économique"]],
      ["I-A","Une activité économique en forte croissance encore insuffisamment professionnalisée","Le business des influenceurs",["registre familier","titre trop court","absence d’enjeu de professionnalisation"]],
      ["I-B","Des pratiques commerciales trompeuses et des risques accrus pour les consommateurs","Les arnaques des influenceurs",["registre polémique","champ trop étroit","absence de notion de protection des consommateurs"]],
      ["II","Les premières mesures d’encadrement articulant professionnalisation du secteur et protection du public","Les nouvelles règles pour les influenceurs",["titre descriptif","absence de double logique","vocabulaire imprécis"]],
      ["II-A","La clarification du statut, des obligations et des relations contractuelles des influenceurs","Définir ce qu’est un influenceur et lui donner des règles",["verbes conjugués","formulation orale","titre trop opérationnel"]],
      ["II-B","Le renforcement de la transparence, des contrôles et des sanctions applicables aux pratiques illicites","Punir davantage les influenceurs qui trichent",["registre répressif et oral","jugement","réduction aux sanctions"]]
    ]
  },
  {
    key:"2025", year:"2025", topic:"Économie des Jeux olympiques et paralympiques Paris 2024",
    subject:"Souligner l’apport économique de Paris 2024 pour la France mais aussi les risques financiers que l’événement peut représenter.",
    titles:[
      ["I","Paris 2024, un événement sportif porteur de retombées économiques diversifiées pour la France","Les JO ont rapporté beaucoup d’argent à la France",["affirmation trop catégorique","« beaucoup » imprécis","verbe conjugué"]],
      ["I-A","Des effets attendus sur l’activité, l’emploi, le tourisme et les entreprises","Les JO créent des emplois et font venir des touristes",["verbes conjugués","effets présentés comme certains","titre peu administratif"]],
      ["I-B","Un héritage susceptible de renforcer l’attractivité et les infrastructures à plus long terme","Les avantages des installations après les JO",["titre générique","enjeu d’attractivité absent","absence de temporalité analytique"]],
      ["II","Des bénéfices économiques difficiles à mesurer face à des risques financiers significatifs","Mais les JO coûtent aussi très cher",["connecteur de dissertation","registre courant","absence de notion d’incertitude"]],
      ["II-A","Des retombées incertaines et inégalement réparties selon les secteurs et les territoires","On ne sait pas vraiment combien les JO ont rapporté",["emploi de « on »","registre oral","répartition sectorielle absente"]],
      ["II-B","Des dérives budgétaires et des coûts durables nécessitant une maîtrise rigoureuse","Le budget des JO a explosé",["registre journalistique","jugement abrupt","coûts durables absents"]]
    ]
  },
  {
    key:"2026", year:"2026", topic:"Patrimoine immobilier historique de l’État",
    subject:"Présenter les difficultés d’entretien du patrimoine immobilier historique de l’État, les sources de financement permettant de le supporter, puis les avantages que la France tire de ce patrimoine.",
    titles:[
      ["I","L’entretien du patrimoine immobilier historique de l’État, une charge complexe reposant sur des financements diversifiés","Les monuments historiques coûtent très cher à l’État",["jugement réducteur","verbe conjugué","financements absents"]],
      ["I-A","Un parc exceptionnel confronté à des besoins de conservation lourds et durables","Les difficultés pour entretenir les vieux monuments",["registre courant","« vieux monuments » impropre","absence de caractère durable"]],
      ["I-B","Des sources de financement combinant crédits publics, ressources propres et mécénat","Comment payer les travaux du patrimoine",["formulation interrogative","registre courant","absence de hiérarchie des financements"]],
      ["II","Un patrimoine coûteux mais générateur d’avantages culturels, économiques et territoriaux majeurs","Malgré le coût, le patrimoine est très utile à la France",["verbe conjugué","« très utile » vague","titre peu analytique"]],
      ["II-A","Un support de transmission culturelle et de rayonnement national et international","Le patrimoine fait connaître la culture française",["verbe conjugué","formulation simple","transmission et rayonnement insuffisamment distingués"]],
      ["II-B","Un levier d’attractivité touristique, de développement économique et d’ancrage territorial","Le patrimoine attire des touristes et rapporte de l’argent",["registre courant","verbes conjugués","enjeu territorial absent"]]
    ]
  },
  {
    key:"zero", year:"Sujet zéro", topic:"Marché du bien-être en France",
    subject:"Expliquer comment le marché du bien-être, disposant de réels atouts, a résisté à la crise et s’est adapté pour maintenir son niveau d’activité.",
    titles:[
      ["I","Le marché français du bien-être, un secteur disposant d’atouts structurels avant la crise","Le bien-être était déjà un secteur qui marchait très bien",["registre oral","verbe conjugué","absence de qualification des atouts"]],
      ["I-A","Une demande soutenue par la recherche croissante de santé, de détente et de qualité de vie","Les Français veulent de plus en plus prendre soin d’eux",["verbe conjugué","formulation centrée sur une seule idée","registre courant"]],
      ["I-B","Une filière diversifiée bénéficiant de savoir-faire français et de débouchés dynamiques","La France est forte dans les cosmétiques et les spas",["verbe conjugué","jugement vague","absence de notion de filière"]],
      ["II","Une filière résiliente ayant adapté son offre et ses modes de distribution pour maintenir son activité","Le secteur a réussi à survivre au Covid",["registre dramatique","verbe conjugué","adaptations non précisées"]],
      ["II-A","Un choc sanitaire ayant profondément modifié les usages et fragilisé certains segments","Le Covid a fait baisser les ventes de maquillage",["focalisation sur un exemple","verbe conjugué","absence de portée sectorielle"]],
      ["II-B","Une reprise portée par le numérique, le naturel, la diversification de l’offre et de nouvelles habitudes de consommation","Le e-commerce et le bio ont sauvé le marché",["causalité trop forte","verbe conjugué","titre réducteur"]]
    ]
  }
];

const ANNALES_TITLE_EX = ANNALES_PLANS.flatMap(a => a.titles.map(([level,ref,weak,issues]) => ({
  annale:true,
  year:a.year,
  key:a.key,
  topic:a.topic,
  subject:a.subject,
  level,
  weak,
  issues,
  ref
})));

// On conserve les 12 exercices généraux déjà présents et on ajoute les 60 exercices d’annales.
V2_TITLE_BANK.push(...ANNALES_TITLE_EX);
state.titleFilter = state.titleFilter || "Tous";

function annalesTitlePool(){
  if(state.titleFilter === "Tous") return V2_TITLE_BANK;
  if(state.titleFilter === "Généraux") return V2_TITLE_BANK.filter(x=>!x.annale);
  return V2_TITLE_BANK.filter(x=>x.annale && x.key===state.titleFilter);
}

function titleFilterLabel(k){
  if(k==="Tous") return `Tous (${V2_TITLE_BANK.length})`;
  if(k==="Généraux") return `Exercices généraux (${V2_TITLE_BANK.filter(x=>!x.annale).length})`;
  const a=ANNALES_PLANS.find(x=>x.key===k);
  return a ? `${a.year} — ${a.topic}` : k;
}

renderTitles = function(){
  const pool=annalesTitlePool();
  if(state.titleIndex>=pool.length) state.titleIndex=0;
  const ex=pool[state.titleIndex%pool.length];
  const filters=["Tous","Généraux",...ANNALES_PLANS.map(a=>a.key)];
  const context=ex.annale ? `<div class="example" style="margin:10px 0 14px"><b>Annale ${escapeHtml(ex.year)} — ${escapeHtml(ex.topic)} — ${escapeHtml(ex.level)}</b><br><span class="tiny">Commande : ${escapeHtml(ex.subject)}</span></div>` : `<div class="example" style="margin:10px 0 14px"><b>Exercice général</b><br><span class="tiny">Travail de formulation indépendant d’une annale.</span></div>`;
  $("titles").innerHTML=`
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:14px">
      <span class="badge gold">Titre ${state.titleIndex+1} / ${pool.length}</span>
      <select onchange="changeTitleFilter(this.value)">${filters.map(f=>`<option value="${f}" ${f===state.titleFilter?'selected':''}>${escapeHtml(titleFilterLabel(f))}</option>`).join("")}</select>
      <button class="btn ghost" onclick="prevAnnaleTitle()">←</button>
      <button class="btn ghost" onclick="nextAnnaleTitle()">→</button>
      <button class="btn secondary" onclick="randomAnnaleTitle()">Aléatoire</button>
    </div>
    <div class="card">
      ${context}
      <span class="badge gold">Titre à améliorer</span>
      <div class="quote"><b>${escapeHtml(ex.weak)}</b></div>
      <label>Ta reformulation</label>
      <input id="tInput" class="input" placeholder="Titre objectif, précis, qualifiant et sans jugement prématuré">
      <div class="actions"><button class="btn" onclick="checkAnnaleTitle()">Analyser</button><button class="btn ghost" onclick="nextAnnaleTitle()">Suivant</button></div>
      <div id="tFeedback"></div>
    </div>`;
};

function changeTitleFilter(v){state.titleFilter=v;state.titleIndex=0;renderTitles();}
function nextAnnaleTitle(){const p=annalesTitlePool();state.titleIndex=(state.titleIndex+1)%p.length;renderTitles();}
function prevAnnaleTitle(){const p=annalesTitlePool();state.titleIndex=(state.titleIndex-1+p.length)%p.length;renderTitles();}
function randomAnnaleTitle(){const p=annalesTitlePool();state.titleIndex=Math.floor(Math.random()*p.length);renderTitles();}

function checkAnnaleTitle(){
  const pool=annalesTitlePool(),ex=pool[state.titleIndex%pool.length],u=$("tInput").value;
  const banned=["pas suffisamment","ne sont pas","compliqu","ne marchent pas","pallier aux","ça","il faut","beaucoup d’argent","très important"];
  const ok=u.trim().split(/\s+/).length>=5 && !banned.some(x=>norm(u).includes(norm(x)));
  markAttempt("titles",ok);
  let planHtml="";
  if(ex.annale){
    const a=ANNALES_PLANS.find(x=>x.key===ex.key);
    planHtml=`<details style="margin-top:12px"><summary><b>Voir le plan de référence complet de l’annale ${escapeHtml(a.year)}</b></summary><div style="margin-top:10px">${a.titles.map(([l,r])=>`<div class="stage"><b>${escapeHtml(l)}</b><span style="flex:1;margin-left:12px">${escapeHtml(r)}</span></div>`).join("")}</div><p class="tiny">Ce plan est un plan de référence reconstitué à partir de la commande et du corpus, pas un corrigé officiel.</p></details>`;
  }
  $("tFeedback").innerHTML=`<div class="feedback ${ok?'good':'warn'}"><b>À surveiller :</b> ${ex.issues.join(' ; ')}.<br><b>Référence :</b> ${escapeHtml(ex.ref)}<br><span class="tiny">Ta version peut être différente si elle reste objective, précise, qualifiante et fidèle au dossier.</span>${planHtml}</div>`;
}
