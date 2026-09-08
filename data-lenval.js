DATASETS.lenval = {
  title: "IGAS - Gouvernance de la Fondation Lenval",
  short: "Fondation Lenval",
  source: "IGAS, Contrôle de la gouvernance de la Fondation Lenval, 2025-2026",
  subject: "À partir du dossier, vous analyserez la crise de gouvernance de la Fondation Lenval, ses effets sur le fonctionnement interne et la coopération avec le CHU de Nice, puis vous présenterez les leviers permettant une sortie de crise durable.",
  draftBullets: [
    "Gouvernance → communication descendante ; faible transparence ; polarisation interne ; directoire fragilisé",
    "Climat social → anxiété forte ; arrêts maladie ; perte durable de confiance",
    "Coopération CHU → divergences stratégiques ; projet médical partagé inabouti",
    "Qualité / sécurité → coordination insuffisante ; pilotage des risques fragile",
    "Finances → information stratégique insuffisante ; hausse des charges",
    "Mesures immédiates → management de transition ; dialogue ; prévention RPS ; sécurité des soins",
    "Transformation durable → clarifier les responsabilités ; revoir la gouvernance ; stabiliser la direction ; stratégie intégrée"
  ],
  refPlan: [
    "Une crise de gouvernance profonde aux effets organisationnels, humains et partenariaux",
    "Des instances et pratiques managériales fragilisées par une perte durable de confiance",
    "Une coopération avec le CHU dégradée qui accroît les vulnérabilités de fonctionnement et de qualité des soins",
    "Une sortie de crise reposant sur la refondation du pilotage et de la coopération",
    "Des mesures immédiates pour rétablir le dialogue, sécuriser les risques et stabiliser la direction",
    "Une transformation durable de la gouvernance, du partenariat et de la stratégie institutionnelle"
  ],
  planKeywords: [
    ["crise","gouvernance","effet","parten"],
    ["instance","management","confiance","dialogue"],
    ["CHU","coopération","qualité","risque"],
    ["sortie","crise","pilotage","coopération"],
    ["transition","dialogue","risque","direction"],
    ["gouvernance","partenariat","stratégie","durable"]
  ]
};

EXTRACT.push(
  {ds:"lenval", excerpt:"La crise de gouvernance se traduit par un affaiblissement des instances, une polarisation interne et une perte durable de confiance.", source:"IGAS - synthèse", ans:{theme:"gouvernance", idea:"la gouvernance interne est profondément fragilisée", proof:"affaiblissement des instances et perte de confiance", doc:"IGAS", place:"I-A / diagnostic"}},
  {ds:"lenval", excerpt:"La sortie de crise suppose de rétablir le dialogue, de sécuriser les risques et de stabiliser la direction.", source:"IGAS - recommandations", ans:{theme:"sortie de crise", idea:"des mesures immédiates de stabilisation sont nécessaires", proof:"dialogue + sécurisation des risques + direction stabilisée", doc:"IGAS", place:"II-A / mesures immédiates"}}
);

CLOZE.push(
  {ds:"lenval", pattern:"GOUVERNANCE → ______ → ______ → IGAS → ______", slots:["affaiblissement des instances","perte de confiance et polarisation interne","I-A / diagnostic"]},
  {ds:"lenval", pattern:"SORTIE DE CRISE → ______ → ______ → IGAS → ______", slots:["stabilisation immédiate","dialogue + sécurisation des risques + direction stabilisée","II-A"]}
);
