const DATASETS = {
  egalite: {
    title: "CB1 - Égalité femmes-hommes",
    short: "Égalité F/H",
    source: "Corpus ISP 2026/2027 - cas déjà travaillé",
    subject: "À l’aide des seuls documents joints, vous réaliserez une note de synthèse sur les inégalités entre les femmes et les hommes, en faisant le bilan de ces inégalités, en présentant les politiques conduites et les mesures engagées ou envisagées, et enfin en identifiant les limites des politiques actuelles.",
    draftBullets: [
      "Violences / santé → 96 femmes tuées contre 23 hommes ; hospitalisations des jeunes femmes en forte hausse → D2-D3",
      "Travail / revenus → -14,9 % à temps de travail identique ; temps partiel environ ×3 ; plafond de verre → D2-D5",
      "Pouvoir / formation → 36 % de députées en 2024 ; sous-représentation en informatique → D2",
      "Politiques → plan interministériel 2023-2027 : violences / santé / égalité pro-éco / culture de l’égalité → D1",
      "Mesures → nouvel Index 2027 : 7 indicateurs ; écarts >5 % à corriger ou justifier ; sanctions → D6",
      "Limites → Index actuel : bonnes notes malgré écarts persistants ; calcul opaque ; marge de tolérance → D5-D6",
      "Limites structurelles → charge domestique, métiers précaires, sexisme / polarisation → D3-D5"
    ],
    refPlan: [
      "La persistance d’inégalités multidimensionnelles malgré une action publique structurée",
      "Des inégalités encore marquées dans les différentes sphères de la vie sociale",
      "Des politiques publiques déployées sur plusieurs champs de l’égalité",
      "Le renforcement des dispositifs confronté aux limites persistantes de l’action publique",
      "Des mesures engagées ou envisagées pour approfondir l’égalité réelle",
      "Une efficacité encore limitée par des inégalités structurelles et les insuffisances des dispositifs existants"
    ],
    planKeywords: [
      ["inégal", "action publique", "structur"],
      ["bilan", "violence", "travail", "santé"],
      ["politique", "plan", "index", "déploy"],
      ["renforcement", "limite", "dispositif"],
      ["mesure", "engag", "envisag", "réforme"],
      ["limite", "structure", "effic", "persistance"]
    ]
  },
  pediatrie: {
    title: "IGAS - Pilotage de la pédiatrie dans les Alpes-Maritimes",
    short: "Pédiatrie 06",
    source: "IGAS, Pilotage de la pédiatrie dans les Alpes-Maritimes, février 2026",
    subject: "À partir du dossier, vous présenterez l’organisation de la filière pédiatrique dans les Alpes-Maritimes, ses principales fragilités et les risques qui en résultent, puis les leviers de structuration et de pilotage recommandés.",
    draftBullets: [
      "Offre → territoire dense et polycentrique ; ressources somatiques élevées ; multiples acteurs publics et privés",
      "Lisibilité → pas de filière territoriale formalisée ; coopérations surtout bilatérales / ponctuelles",
      "Urgences → principal point de pression ; passages évitables faute d’alternatives visibles",
      "Santé mentale → 2,9 pédopsychiatres / 100 000 ; baisse de 12 % en 5 ans ; risque de rupture majeur",
      "Concentration → près de 90 % des soins critiques / urgences spécialisées / chirurgie de recours sur CHU + Lenval",
      "Prévention → PMI / santé scolaire insuffisamment intégrées à la régulation",
      "Leviers → schéma départemental opposable ; instance ARS ; soins non programmés ; compétences rares ; équité littoral-arrière-pays"
    ],
    refPlan: [
      "Une offre pédiatrique dense mais une filière territoriale encore insuffisamment structurée",
      "Des ressources importantes et une organisation polycentrique couvrant l’essentiel des besoins",
      "Une coordination fragile qui expose les urgences, les filières critiques et la santé mentale à des risques de rupture",
      "Une structuration territoriale à rendre lisible, graduée et opposable sous le pilotage de l’ARS",
      "Des parcours à sécuriser par la gradation des recours, la prévention et le renforcement des filières critiques",
      "Une gouvernance de filière renforcée par la contractualisation, les indicateurs et le pilotage des risques"
    ],
    planKeywords: [
      ["offre", "dense", "filière", "structur"],
      ["ressource", "polycentrique", "besoin"],
      ["coordination", "urgence", "critique", "santé mentale"],
      ["structuration", "gradation", "opposable", "ARS"],
      ["parcours", "prévention", "critique", "recours"],
      ["gouvernance", "contract", "indicateur", "risque"]
    ]
  },
  climat: {
    title: "HCC - Politiques climatiques dans les territoires",
    short: "Climat & territoires",
    source: "Haut Conseil pour le climat, rapport thématique 2026",
    subject: "À partir du dossier, vous dresserez un bilan de la territorialisation des politiques climatiques, en présentant leur organisation, les moyens mobilisés et les principales difficultés de mise en œuvre, puis les conditions permettant d’en renforcer l’efficacité.",
    draftBullets: [
      "Organisation → gouvernance multi-niveaux : État + collectivités + acteurs locaux ; politiques sectorielles aux échelles différentes",
      "Planification → SRADDET / PCAET / COP régionales ; montée en puissance depuis les années 2000",
      "Financement → près de 8 Md€ d’investissements favorables à la décarbonation en 2023 mais 5,3 Md€ de dépenses défavorables",
      "Moyens → besoins d’investissement très supérieurs : +130 % bloc communal, +240 % départements, +80 % régions",
      "Ingénierie → offre dispersée et complexe ; petites collectivités moins armées",
      "Évaluation → données nombreuses mais hétérogènes ; ex-post rare",
      "Réussite → coordination verticale/horizontale ; financement prévisible ; expertise ; indicateurs actionnables ; transition juste"
    ],
    refPlan: [
      "Une territorialisation croissante de l’action climatique confrontée à une gouvernance complexe et à de fortes disparités",
      "Une action désormais largement planifiée et portée par des acteurs multiples à différentes échelles",
      "Des moyens financiers et d’ingénierie encore inégalement adaptés aux besoins et aux réalités territoriales",
      "Une efficacité à consolider par une meilleure cohérence, des moyens pérennes et une évaluation renforcée",
      "Une coordination et un accompagnement à renforcer pour aligner objectifs, financements et capacités locales",
      "Des outils de suivi et d’évaluation à rendre plus harmonisés, comparables et utiles au pilotage"
    ],
    planKeywords: [
      ["territorial", "climat", "gouvernance", "dispar"],
      ["planif", "acteur", "échelle", "collectiv"],
      ["financ", "ingénierie", "besoin", "inégal"],
      ["effic", "cohérence", "moyen", "évaluation"],
      ["coordination", "financ", "capacité", "objectif"],
      ["suivi", "évaluation", "indicateur", "pilotage"]
    ]
  }
};

const EXTRACT = [
  {ds:"egalite", excerpt:"En 2022, les femmes gagnent en moyenne 14,9 % de moins que les hommes à temps de travail identique.", source:"D2 - Chiffres clés 2024", ans:{theme:"travail / rémunération", idea:"les écarts salariaux persistent", proof:"14,9 % de moins à temps de travail identique", doc:"D2", place:"I-A / bilan des inégalités"}},
  {ds:"egalite", excerpt:"Dès 2027, un nouvel index remplacera entièrement le dispositif actuel et s’appuiera sur sept indicateurs plus précis.", source:"D6 - Réforme de l’Index", ans:{theme:"égalité professionnelle", idea:"le dispositif de mesure doit être renforcé", proof:"sept indicateurs plus précis", doc:"D6", place:"II-A / mesures envisagées"}},
  {ds:"pediatrie", excerpt:"Le département compte 96,2 pédiatres pour 100 000 enfants de moins de 15 ans mais seulement 2,9 pédopsychiatres pour 100 000.", source:"IGAS - p.14", ans:{theme:"démographie médicale", idea:"la pédopsychiatrie constitue une fragilité majeure malgré une offre pédiatrique dense", proof:"2,9 pédopsychiatres pour 100 000", doc:"IGAS p.14", place:"I-B / fragilités et risques"}},
  {ds:"pediatrie", excerpt:"La mission recommande la création d’une instance départementale de pilotage placée sous l’autorité du directeur général de l’ARS.", source:"IGAS - synthèse", ans:{theme:"gouvernance", idea:"la filière doit être pilotée à l’échelle départementale", proof:"instance départementale sous l’autorité de l’ARS", doc:"IGAS", place:"II-B / gouvernance et pilotage"}},
  {ds:"climat", excerpt:"Les investissements annuels des collectivités en faveur de la décarbonation sont évalués à près de 8 Md€ en 2023, tandis que 5,3 Md€ de dépenses défavorables au climat ont été identifiées.", source:"HCC 2026", ans:{theme:"financement", idea:"l’effort d’investissement reste contradictoire", proof:"8 Md€ favorables contre 5,3 Md€ défavorables", doc:"HCC 2026", place:"I-B / moyens"}},
  {ds:"climat", excerpt:"L’évaluation ex post des résultats de l’action climatique territoriale demeure un point faible.", source:"HCC 2026", ans:{theme:"suivi et évaluation", idea:"l’efficacité réelle reste difficile à mesurer", proof:"les évaluations ex post restent rares", doc:"HCC 2026", place:"II-B / suivi et évaluation"}}
];

const CLOZE = [
  {ds:"egalite", pattern:"TRAVAIL → ______ → ______ → D2 → ______", slots:["écarts salariaux persistants","-14,9 % à temps de travail identique","I-A / bilan"]},
  {ds:"egalite", pattern:"INDEX → ______ → ______ → D6 → ______", slots:["renforcement du dispositif","7 indicateurs","II-A / mesures envisagées"]},
  {ds:"pediatrie", pattern:"SANTÉ MENTALE → ______ → ______ → IGAS → ______", slots:["fragilité majeure","2,9 pédopsychiatres / 100 000","I-B / risques"]},
  {ds:"pediatrie", pattern:"PILOTAGE → ______ → ______ → IGAS → ______", slots:["gouvernance territoriale à formaliser","instance départementale sous l’autorité de l’ARS","II-B"]},
  {ds:"climat", pattern:"FINANCEMENT → ______ → ______ → HCC 2026 → ______", slots:["moyens insuffisants au regard des besoins","+130 % / +240 % / +80 % nécessaires","I-B"]},
  {ds:"climat", pattern:"ÉVALUATION → ______ → ______ → HCC 2026 → ______", slots:["efficacité difficile à mesurer","évaluations ex post rares","II-B"]}
];

const TITLE_EX = [
  {weak:"Les actions des politiques publiques ne sont pas suffisamment efficaces pour pallier aux inégalités", issues:["jugement prématuré","pallier à est incorrect","formulation lourde"], ref:"Le renforcement des dispositifs confronté aux limites persistantes de l’action publique"},
  {weak:"Les solutions pour améliorer la pédiatrie", issues:["trop générique","registre peu administratif","pilotage territorial absent"], ref:"Une structuration territoriale à rendre lisible, graduée et opposable sous le pilotage de l’ARS"},
  {weak:"Les politiques climatiques sont compliquées", issues:["registre oral","jugement vague","aucun enjeu précis"], ref:"Une territorialisation croissante de l’action climatique confrontée à une gouvernance complexe et à de fortes disparités"},
  {weak:"Des coopérations qui ne marchent pas", issues:["registre oral","verbe conjugué","absence de précision"], ref:"Des coopérations nombreuses mais insuffisamment gouvernées et formalisées"}
];

const VOCAB = [
  {term:"Persistance", def:"Maintien dans le temps d’un phénomène qui ne disparaît pas.", prompt:"Remplace : « il y a encore des écarts de salaire »", answer:"Les écarts salariaux persistent."},
  {term:"Disparité", def:"Écart ou différence importante entre groupes, territoires ou situations.", prompt:"Reformule : « les situations sont très différentes selon les territoires »", answer:"De fortes disparités territoriales demeurent."},
  {term:"Sous-représentation", def:"Présence d’un groupe dans une proportion inférieure à ce que l’on pourrait attendre.", prompt:"Reformule : « il y a peu de femmes dans les fonctions de direction »", answer:"Les femmes demeurent sous-représentées dans les fonctions de direction."},
  {term:"Déploiement", def:"Mise en place progressive et concrète d’un dispositif ou d’une politique.", prompt:"Reformule : « l’État met petit à petit le dispositif en place »", answer:"L’État poursuit le déploiement du dispositif."},
  {term:"Effectivité", def:"Caractère réellement appliqué et produisant des effets.", prompt:"Utilise ce mot pour dire qu’une politique existe mais doit produire des résultats réels.", answer:"L’enjeu porte désormais sur l’effectivité de la politique mise en œuvre."},
  {term:"Pilotage", def:"Organisation du suivi, de la décision et de la coordination d’une politique.", prompt:"Reformule : « il faut mieux organiser et suivre la filière »", answer:"Le pilotage de la filière doit être renforcé."},
  {term:"Gradation", def:"Organisation de l’offre selon plusieurs niveaux de recours ou de spécialisation.", prompt:"Applique ce mot à la pédiatrie territoriale.", answer:"La gradation des recours pédiatriques doit être explicitée et rendue opposable."},
  {term:"Ingénierie", def:"Compétences techniques, juridiques, financières et organisationnelles nécessaires au montage des projets.", prompt:"Applique ce terme aux petites collectivités.", answer:"Le déficit d’ingénierie peut limiter la capacité des petites collectivités à mener leurs projets."}
];

const SYNTAX = [
  {bad:"Ces mesures permettent de pouvoir réduire les écarts.", good:"Ces mesures permettent de réduire les écarts.", why:"Redondance : « permettre » suffit."},
  {bad:"Les dispositifs permettent de pallier aux difficultés.", good:"Les dispositifs permettent de pallier les difficultés.", why:"« Pallier » est transitif direct : pas de « à »."},
  {bad:"Malgré que les écarts persistent, les résultats progressent.", good:"Bien que les écarts persistent, les résultats progressent.", why:"Employer « bien que » + subjonctif dans une copie formelle."},
  {bad:"Ainsi des solutions portant sur l’éducation et la mixité.", good:"Le rapport préconise notamment des mesures portant sur l’éducation et la mixité.", why:"La première version est une phrase nominale sans verbe."},
  {bad:"Cette étude appuie sur les conséquences de la crise.", good:"Cette étude met en évidence les conséquences de la crise.", why:"« Appuyer sur » ne convient pas ici."},
  {bad:"Les deux indicateurs supplémentaires sont le suivant.", good:"Les deux indicateurs supplémentaires sont les suivants.", why:"Accord au pluriel."},
  {bad:"Les politiques publiques, ont été renforcées.", good:"Les politiques publiques ont été renforcées.", why:"Pas de virgule entre le sujet et le verbe."},
  {bad:"Les coopérations sont nombreuses, par contre elles sont peu formalisées.", good:"Les coopérations sont nombreuses ; elles demeurent toutefois peu formalisées.", why:"« Toutefois » est plus adapté au registre administratif."}
];
