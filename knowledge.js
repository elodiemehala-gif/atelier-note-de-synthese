// Repères indispensables pour comprendre un corpus administratif
// Objectif : savoir ce qu'est un document, qui le produit, quelle autorité il a,
// et disposer d'un vocabulaire de plan immédiatement mobilisable.

const PUBLIC_INSTRUMENTS = [
  {
    name:"Loi", family:"Norme contraignante", level:"Très forte autorité juridique",
    who:"Votée par le Parlement, puis promulguée par le Président de la République.",
    effect:"Crée des droits, obligations ou règles générales. Elle s'impose aux actes réglementaires inférieurs.",
    clue:"« loi n°… », « article L.… », « le législateur »",
    nds:"À classer comme cadre juridique ou mesure normative. Ne pas la présenter comme une simple recommandation."
  },
  {
    name:"Ordonnance", family:"Norme contraignante", level:"Forte autorité juridique",
    who:"Prise par le Gouvernement sur habilitation du Parlement, dans le domaine de la loi.",
    effect:"Permet d'agir rapidement dans le domaine législatif. Son statut dépend ensuite notamment de sa ratification.",
    clue:"« ordonnance n°… », « sur le fondement de l'article 38 »",
    nds:"À repérer comme instrument normatif utilisé par le Gouvernement."
  },
  {
    name:"Décret", family:"Norme réglementaire", level:"Autorité juridique contraignante",
    who:"Pris par le Président de la République ou le Premier ministre selon les cas.",
    effect:"Précise l'application d'une loi ou fixe des règles dans le domaine réglementaire.",
    clue:"« décret n°… », « décret en Conseil d'État »",
    nds:"Souvent une mesure de mise en œuvre concrète d'une réforme."
  },
  {
    name:"Arrêté", family:"Norme réglementaire", level:"Autorité juridique contraignante dans son champ",
    who:"Pris notamment par un ministre, un préfet, un maire ou une autre autorité compétente.",
    effect:"Fixe des règles plus précises dans le champ de compétence de son auteur.",
    clue:"« arrêté du… », « arrêté ministériel / préfectoral / municipal »",
    nds:"Regarder surtout QUI signe l'arrêté : cela indique son champ d'application."
  },
  {
    name:"Circulaire / instruction", family:"Pilotage administratif", level:"Autorité surtout interne à l'administration",
    who:"Émise par une autorité administrative, souvent un ministre ou une direction centrale, à destination de ses services.",
    effect:"Explique comment appliquer une politique ou un texte. Elle organise l'action des services ; elle n'a pas, par nature, la même portée qu'une loi ou un décret pour les citoyens.",
    clue:"« circulaire », « instruction aux services », « doctrine administrative »",
    nds:"Très utile pour identifier la manière dont une politique est mise en œuvre concrètement."
  },
  {
    name:"Plan interministériel", family:"Planification / pilotage", level:"Forte portée politique, pas une norme en lui-même",
    who:"Porté par le Gouvernement et plusieurs ministères lorsqu'un problème traverse plusieurs champs d'action publique.",
    effect:"Fixe des objectifs, des axes, des mesures, un calendrier et parfois des responsables ou financements. Il coordonne plusieurs administrations.",
    clue:"« plan 2023-2027 », « axe 1 / axe 2 », « mesures du plan », « interministériel »",
    nds:"Document pivot pour une partie « politiques conduites » : il permet souvent de regrouper de nombreuses mesures sous quelques axes."
  },
  {
    name:"Stratégie nationale", family:"Orientation / planification", level:"Portée politique et stratégique",
    who:"Définie par le Gouvernement ou une autorité publique compétente.",
    effect:"Fixe une direction de moyen ou long terme. Elle peut ensuite être déclinée par des plans, lois, budgets et dispositifs.",
    clue:"« stratégie nationale », « horizon 2030 », « priorités stratégiques »",
    nds:"À utiliser pour caractériser l'orientation générale de l'action publique, pas comme une mesure isolée."
  },
  {
    name:"Feuille de route", family:"Pilotage opérationnel", level:"Portée administrative / politique",
    who:"Adoptée par un ministère, un gouvernement, une collectivité ou un organisme public.",
    effect:"Traduit une stratégie en actions, étapes, échéances et responsabilités plus opérationnelles.",
    clue:"« feuille de route », « calendrier », « jalons », « actions prioritaires »",
    nds:"Très utile pour distinguer l'orientation générale de sa mise en œuvre concrète."
  },
  {
    name:"Programme", family:"Mise en œuvre", level:"Variable selon son fondement juridique et budgétaire",
    who:"Porté par une administration, un opérateur, une collectivité ou l'Union européenne.",
    effect:"Regroupe des actions et moyens autour d'un objectif déterminé, souvent avec un budget et des bénéficiaires identifiés.",
    clue:"« programme national », « bénéficiaires », « enveloppe », « actions financées »",
    nds:"À classer parmi les dispositifs opérationnels, en vérifiant son financement et son public cible."
  },
  {
    name:"Schéma", family:"Planification territoriale / sectorielle", level:"Variable : parfois encadré par la loi",
    who:"Élaboré par une autorité publique compétente : État, région, département, intercommunalité, agence, etc.",
    effect:"Organise une politique dans l'espace ou dans un secteur : offre de soins, aménagement, mobilité, environnement…",
    clue:"« schéma régional / départemental », « orientations », « zonage », « programmation »",
    nds:"Souvent un indice de territorialisation et de planification de l'action publique."
  },
  {
    name:"Index", family:"Mesure / suivi", level:"Aucune autorité juridique par nature ; dépend du texte qui l'institue",
    who:"Construit ou imposé par une autorité publique, une administration ou un organisme d'évaluation.",
    effect:"Agrège plusieurs indicateurs en un score ou une mesure synthétique. Il peut être purement informatif OU rendu obligatoire par la loi ou le règlement.",
    clue:"« score sur 100 », « indicateurs composant l'index », « publication annuelle »",
    nds:"Réflexe essentiel : demander 1) que mesure-t-il ? 2) est-il obligatoire ? 3) entraîne-t-il une sanction ou seulement de la transparence ?"
  },
  {
    name:"Indicateur", family:"Mesure / évaluation", level:"Autorité factuelle, pas normative",
    who:"Produit par une administration, un service statistique, un opérateur ou un organisme d'évaluation.",
    effect:"Mesure un aspect précis d'une situation ou de la performance d'une politique.",
    clue:"« taux », « part », « délai moyen », « nombre de… »",
    nds:"Une preuve, pas une idée : il sert à objectiver un constat."
  },
  {
    name:"Baromètre", family:"Observation", level:"Autorité dépendant de la qualité de l'organisme et de la méthode",
    who:"Produit régulièrement par une institution publique, une association, un institut ou un organisme d'étude.",
    effect:"Suit l'évolution d'opinions, de comportements ou d'indicateurs dans le temps.",
    clue:"« baromètre annuel », « enquête », « évolution depuis… »",
    nds:"Très utile pour un diagnostic ou une tendance ; ne crée aucune obligation."
  },
  {
    name:"Rapport", family:"Expertise / contrôle / évaluation", level:"Non contraignant en lui-même",
    who:"Peut être produit par une inspection, une juridiction financière, un haut conseil, une commission, une administration ou un organisme privé.",
    effect:"Dresse un diagnostic, évalue une politique et formule souvent des recommandations.",
    clue:"« rapport », « mission », « constats », « recommandations »",
    nds:"Le mot « rapport » ne suffit pas : identifier son auteur pour évaluer son poids institutionnel."
  },
  {
    name:"Avis", family:"Expertise / consultation", level:"Généralement non contraignant ; parfois consultation obligatoire",
    who:"Émis par un conseil, une autorité, une commission ou une instance consultative.",
    effect:"Éclaire une décision sans se substituer, en principe, à l'autorité qui décide.",
    clue:"« avis », « saisi par », « recommande », « estime que »",
    nds:"Ne pas écrire qu'un avis « décide ». Il conseille, alerte, approuve ou critique selon les cas."
  },
  {
    name:"Recommandation / préconisation", family:"Orientation", level:"Non contraignante sauf mécanisme particulier",
    who:"Formulée par une inspection, un haut conseil, une autorité, une juridiction de contrôle, etc.",
    effect:"Propose une action à l'autorité compétente. Elle peut être suivie, partiellement suivie ou non suivie.",
    clue:"« recommande de », « préconise », « invite à »",
    nds:"À placer dans « leviers », « perspectives » ou « mesures envisagées », pas parmi les mesures déjà appliquées sauf si le corpus indique leur adoption."
  },
  {
    name:"Référentiel", family:"Normalisation / guide", level:"Variable : indicatif ou obligatoire selon son fondement",
    who:"Élaboré par une administration, une agence, un organisme de normalisation ou un secteur professionnel.",
    effect:"Fixe des critères, standards, bonnes pratiques ou méthodes communes.",
    clue:"« référentiel », « critères », « standards », « bonnes pratiques »",
    nds:"Peut être un levier d'harmonisation. Vérifier s'il guide seulement les pratiques ou s'il conditionne un droit, un financement ou une certification."
  },
  {
    name:"Charte", family:"Engagement / droit souple", level:"Souvent non contraignante juridiquement",
    who:"Adoptée ou signée par des acteurs publics et/ou privés.",
    effect:"Formalise des principes et engagements communs, souvent sans créer les mêmes obligations qu'un contrat ou un règlement.",
    clue:"« charte », « engagements », « signataires », « principes »",
    nds:"À présenter comme outil d'engagement ou de coordination, en évitant de lui attribuer automatiquement une force juridique."
  },
  {
    name:"Convention / contrat", family:"Contractualisation", level:"Engage les parties selon sa nature",
    who:"Conclu entre personnes publiques et/ou partenaires privés, associatifs ou institutionnels.",
    effect:"Formalise des objectifs, responsabilités, financements ou obligations réciproques.",
    clue:"« convention », « contrat », « signataires », « engagements réciproques »",
    nds:"Bon indice d'une action partenariale et d'une gouvernance coordonnée."
  },
  {
    name:"Appel à projets / appel à manifestation d'intérêt", family:"Mobilisation / financement", level:"Procédure de sélection, pas une norme générale",
    who:"Lancé par l'État, une collectivité, une agence, un établissement ou un fonds.",
    effect:"Invite des acteurs à proposer des projets répondant à des objectifs et critères définis ; peut ouvrir l'accès à un financement ou un accompagnement.",
    clue:"« candidats », « critères », « lauréats », « enveloppe », « appel à projets »",
    nds:"À classer comme levier de mobilisation des acteurs et de ciblage des financements."
  },
  {
    name:"Subvention / aide financière", family:"Financement", level:"Décision financière individuelle ou dispositif encadré",
    who:"Accordée par une personne publique ou un organisme habilité.",
    effect:"Soutient financièrement une action, un public, une association, une entreprise ou une collectivité selon des conditions définies.",
    clue:"« aide », « subvention », « enveloppe », « bénéficiaires », « éligibilité »",
    nds:"Toujours repérer : montant, bénéficiaire, condition, durée et financeur."
  },
  {
    name:"Fonds", family:"Financement", level:"Instrument budgétaire / financier",
    who:"Créé et alimenté par l'État, l'Union européenne, une collectivité ou plusieurs partenaires.",
    effect:"Regroupe des crédits destinés à financer un objectif ou une catégorie de projets.",
    clue:"« fonds de… », « doté de X millions », « finance les projets »",
    nds:"Ne pas confondre le fonds (la réserve financière) avec les projets qu'il finance."
  },
  {
    name:"Expérimentation", family:"Innovation / test", level:"Portée limitée dans le temps, le territoire ou le public",
    who:"Autorisée ou conduite par une autorité publique selon un cadre défini.",
    effect:"Teste un dispositif avant éventuelle généralisation, adaptation ou abandon.",
    clue:"« expérimentation », « territoires pilotes », « évaluation avant généralisation »",
    nds:"Très utile dans « mesures engagées » ou « perspectives » : préciser qu'il ne s'agit pas encore nécessairement d'une généralisation."
  },
  {
    name:"Certification / label", family:"Normalisation / incitation", level:"Variable selon le dispositif",
    who:"Délivré par une autorité ou un organisme compétent après vérification de critères.",
    effect:"Atteste qu'un produit, service, organisme ou processus respecte certains standards.",
    clue:"« label », « certifié », « critères », « audit »",
    nds:"Peut servir d'incitation, de contrôle de qualité ou de condition d'accès à un avantage."
  }
];

const PUBLIC_ACTORS = [
  {name:"Parlement", type:"Pouvoir législatif", weight:"Décide / contrôle", role:"Assemblée nationale + Sénat. Vote la loi, autorise l'impôt, contrôle l'action du Gouvernement et évalue les politiques publiques.", docs:"Lois, rapports parlementaires, commissions d'enquête.", reflex:"Une loi = norme. Un rapport parlementaire = expertise/contrôle, pas une loi."},
  {name:"Gouvernement / Premier ministre", type:"Pouvoir exécutif", weight:"Décide et pilote", role:"Détermine et conduit la politique de la Nation ; coordonne l'action des ministères et dispose du pouvoir réglementaire selon la Constitution.", docs:"Décrets, plans, stratégies, feuilles de route, communications gouvernementales.", reflex:"Un plan gouvernemental a une forte portée politique mais n'est pas, à lui seul, une norme juridique."},
  {name:"Ministère", type:"Administration centrale / politique publique", weight:"Pilote dans son champ", role:"Prépare et met en œuvre la politique gouvernementale dans un secteur : économie, logement, santé, intérieur, etc.", docs:"Arrêtés, circulaires, instructions, plans, guides, statistiques, bilans.", reflex:"Identifier le ministère permet de savoir quel champ de compétence et quel levier d'action sont concernés."},
  {name:"Préfecture / préfet", type:"État territorial", weight:"Représente l'État localement", role:"Le préfet représente l'État dans le territoire, coordonne les services déconcentrés et prend des décisions dans ses compétences.", docs:"Arrêtés préfectoraux, plans territoriaux, décisions, bilans.", reflex:"Source utile pour la mise en œuvre territoriale d'une politique nationale."},
  {name:"Services déconcentrés de l'État", type:"Administration territoriale", weight:"Mettent en œuvre", role:"Déclinent localement les politiques ministérielles sous l'autorité de l'État territorial selon les domaines.", docs:"Instructions, bilans, données locales, plans d'action.", reflex:"À distinguer de l'administration centrale qui conçoit davantage le cadre national."},
  {name:"Collectivités territoriales", type:"Pouvoir public local", weight:"Décident dans leurs compétences", role:"Communes, départements et régions disposent d'assemblées élues et de compétences propres ou partagées.", docs:"Délibérations, règlements, schémas, budgets, plans, aides.", reflex:"Une politique locale n'est pas « inférieure » politiquement : elle intervient dans un autre champ de compétence et à une autre échelle."},
  {name:"ARS", type:"Agence régionale de santé", weight:"Pilote et régule la santé au niveau régional", role:"Établissement public de l'État chargé de mettre en œuvre la politique de santé en région, d'organiser l'offre et d'agir notamment sur la prévention et la veille sanitaire.", docs:"Projet régional de santé, décisions, schémas, bilans, données.", reflex:"Dans un corpus santé, l'ARS est souvent un acteur opérationnel central entre politique nationale et organisation territoriale."},
  {name:"Inspection générale (IGAS, IGF, IGA…)", type:"Inspection / expertise de l'État", weight:"Très forte expertise institutionnelle, mais ne légifère pas", role:"Contrôle, audite, évalue, expertise et formule des recommandations à destination des pouvoirs publics.", docs:"Rapports de mission, audits, évaluations, recommandations.", reflex:"Excellent document pivot pour diagnostic + limites + leviers. Une recommandation d'inspection n'est pas encore une mesure adoptée."},
  {name:"Cour des comptes", type:"Juridiction financière indépendante", weight:"Contrôle et évalue avec un poids institutionnel élevé", role:"Contrôle l'emploi de l'argent public, certifie certains comptes et contribue à l'évaluation des politiques publiques.", docs:"Rapports publics, référés, observations, recommandations ; décisions juridictionnelles dans ses compétences.", reflex:"Ses rapports ont un fort poids d'évaluation, mais une recommandation de rapport n'est pas une loi."},
  {name:"Conseil d'État", type:"Juridiction administrative suprême + conseil du Gouvernement", weight:"Autorité juridique élevée", role:"Juge en dernier ressort de nombreux litiges administratifs et conseille le Gouvernement sur des projets de textes.", docs:"Décisions contentieuses, avis, études.", reflex:"Ne pas confondre une décision juridictionnelle, qui produit des effets juridiques, avec un avis ou une étude consultative."},
  {name:"Haut Conseil à l'Égalité (HCE)", type:"Instance consultative / évaluation", weight:"Expertise et recommandation, pas pouvoir réglementaire", role:"Contribue à l'évaluation des politiques d'égalité, anime le débat public et formule rapports, avis et recommandations aux pouvoirs publics.", docs:"Rapports, avis, recommandations, rapport annuel sur le sexisme.", reflex:"Le HCE peut recommander ou évaluer ; il ne « décide » pas d'une loi ou d'une politique à la place du Gouvernement ou du Parlement."},
  {name:"Haut conseil / conseil national / commission consultative", type:"Instance consultative", weight:"Variable, généralement non décisionnel", role:"Réunit expertise et parties prenantes pour éclairer l'action publique dans un domaine donné.", docs:"Avis, rapports, recommandations, propositions.", reflex:"Toujours vérifier le statut exact : le mot « Haut Conseil » ne signifie pas automatiquement autorité réglementaire."},
  {name:"AAI / API", type:"Autorité indépendante", weight:"Indépendance forte ; pouvoirs variables", role:"Autorités créées pour réguler un secteur ou protéger des droits à distance du Gouvernement. Certaines disposent de pouvoirs de décision ou de sanction.", docs:"Décisions, recommandations, avis, lignes directrices, sanctions selon l'autorité.", reflex:"Ne jamais généraliser : regarder les pouvoirs propres de l'autorité concernée (ex. CNIL)."},
  {name:"Défenseur des droits", type:"Autorité constitutionnelle indépendante", weight:"Forte autorité institutionnelle, non législative", role:"Veille au respect des droits et libertés dans plusieurs domaines et peut enquêter, recommander, présenter des observations et orienter les réclamants.", docs:"Décisions, recommandations, rapports, observations.", reflex:"Très fort pour documenter une atteinte aux droits ou un dysfonctionnement ; ses recommandations ne remplacent pas une loi ou un jugement."},
  {name:"INSEE / service statistique public", type:"Statistique publique", weight:"Très forte autorité factuelle", role:"Produit et diffuse des statistiques publiques selon un principe d'indépendance professionnelle.", docs:"Enquêtes, séries statistiques, études, définitions.", reflex:"Source privilégiée pour les chiffres et tendances. Elle décrit et mesure ; elle ne décide pas de la politique publique."},
  {name:"CESE", type:"Assemblée consultative constitutionnelle", weight:"Avis et expertise, non décisionnel", role:"Représente la société civile organisée et conseille les pouvoirs publics sur les questions économiques, sociales et environnementales.", docs:"Avis, rapports, résolutions.", reflex:"À utiliser comme source de propositions ou d'analyse, pas comme auteur d'une norme."},
  {name:"Agence / opérateur de l'État", type:"Mise en œuvre spécialisée", weight:"Variable selon ses compétences", role:"Met en œuvre une politique publique, gère un dispositif, finance des projets, produit de l'expertise ou assure un service.", docs:"Appels à projets, aides, rapports, référentiels, données, décisions.", reflex:"Toujours demander : l'organisme conseille-t-il, finance-t-il, régule-t-il ou décide-t-il ?"},
  {name:"Observatoire", type:"Connaissance / suivi", weight:"Autorité factuelle variable", role:"Collecte, organise et analyse des données sur un phénomène pour suivre son évolution.", docs:"Baromètres, indicateurs, études, tableaux de bord.", reflex:"Très utile au diagnostic ; un observatoire ne met généralement pas lui-même en œuvre la politique."},
  {name:"Association / ONG", type:"Société civile", weight:"Expertise de terrain, sans autorité publique", role:"Représente des publics, fournit des services, alerte, produit des données ou défend une cause.", docs:"Rapports, enquêtes, tribunes, propositions, retours de terrain.", reflex:"Source précieuse pour les besoins et limites, mais à distinguer d'une source normative ou statistique publique."},
  {name:"Think tank / institut privé", type:"Expertise externe", weight:"Dépend de la méthode et de la réputation", role:"Produit analyses, propositions et données pour nourrir le débat public.", docs:"Notes, études, rapports, sondages.", reflex:"Évaluer la méthode et l'auteur ; ne pas lui attribuer une autorité institutionnelle qu'il n'a pas."}
];

const PLAN_WORDS = [
  {word:"Transversal", use:"Un phénomène traverse plusieurs publics, secteurs ou politiques.", ex:"Une problématique transversale touchant des publics aux profils variés.", avoid:"Ne signifie pas « présent partout » ; il signifie qu'il coupe plusieurs catégories ou champs."},
  {word:"Multidimensionnel", use:"Un phénomène possède plusieurs dimensions distinctes : économique, sociale, sanitaire, territoriale…", ex:"Des inégalités multidimensionnelles, à la fois économiques, sanitaires et politiques.", avoid:"À éviter si tu veux seulement dire que plusieurs publics sont touchés."},
  {word:"Multifactoriel", use:"Une situation résulte de plusieurs causes ou facteurs qui se combinent.", ex:"Un décrochage multifactoriel lié aux revenus, à l'offre et aux contraintes territoriales.", avoid:"Il qualifie les causes, pas simplement les manifestations."},
  {word:"Structurel", use:"Le problème tient à l'organisation profonde et durable du système.", ex:"Des inégalités structurelles qui résistent aux mesures ponctuelles.", avoid:"À opposer à conjoncturel."},
  {word:"Conjoncturel", use:"Le phénomène dépend principalement d'un contexte temporaire ou d'une période donnée.", ex:"Une tension conjoncturelle liée à un pic saisonnier.", avoid:"Ne pas l'utiliser pour une difficulté durable."},
  {word:"Systémique", use:"Le problème affecte l'ensemble d'un système et les interactions entre ses composantes.", ex:"Un risque systémique de rupture de la filière.", avoid:"Plus fort que « important » : il faut une logique de système."},
  {word:"Sectoriel", use:"Concerne un secteur déterminé de l'action publique.", ex:"Des réponses sectorielles insuffisamment coordonnées.", avoid:"Ne pas confondre avec transversal."},
  {word:"Intersectoriel", use:"Implique plusieurs secteurs qui doivent agir ensemble.", ex:"Une coordination intersectorielle entre santé, logement et action sociale.", avoid:"Utile quand l'enjeu est précisément l'articulation entre secteurs."},
  {word:"Territorialisé", use:"Une politique est adaptée ou déclinée selon les réalités territoriales.", ex:"Une mise en œuvre territorialisée afin de tenir compte des besoins locaux.", avoid:"Ne signifie pas seulement « local » : il y a une adaptation au territoire."},
  {word:"Différencié", use:"La réponse varie selon les publics, territoires ou situations.", ex:"Un accompagnement différencié selon le degré de vulnérabilité.", avoid:"Très utile pour éviter le faux universalisme d'une mesure unique."},
  {word:"Hétérogène", use:"Les situations sont très différentes entre elles.", ex:"Des situations territoriales particulièrement hétérogènes.", avoid:"Décrit une diversité, sans dire nécessairement qu'elle est injuste."},
  {word:"Asymétrique", use:"Deux groupes ou acteurs sont placés dans une relation déséquilibrée.", ex:"Une répartition asymétrique des responsabilités.", avoid:"À utiliser quand le déséquilibre est le cœur du constat."},
  {word:"Cumulatif", use:"Plusieurs désavantages ou effets s'ajoutent les uns aux autres.", ex:"Des vulnérabilités cumulatives qui accroissent le non-recours.", avoid:"Plus précis que « plusieurs difficultés »."},
  {word:"Persistant", use:"Le phénomène se maintient malgré le temps ou les actions conduites.", ex:"Des écarts persistants malgré le renforcement du cadre juridique.", avoid:"Excellent pour construire la tension constat / action publique."},
  {word:"Récurrent", use:"Le phénomène revient régulièrement.", ex:"Des tensions récurrentes lors des périodes estivales.", avoid:"Différent de « permanent »."},
  {word:"Tendanciel", use:"Correspond à une évolution de fond observable dans le temps.", ex:"Une baisse tendancielle des effectifs spécialisés.", avoid:"N'implique pas que chaque année va dans le même sens."},
  {word:"Contrasté", use:"Le bilan combine progrès et difficultés, ou varie fortement selon les catégories.", ex:"Un bilan contrasté, marqué par des progrès juridiques et des écarts persistants.", avoid:"Très utile pour éviter les titres trop conclusifs du type « échec » ou « succès »."},
  {word:"Ambivalent", use:"Une mesure produit simultanément des effets positifs et négatifs ou contradictoires.", ex:"Une dématérialisation aux effets ambivalents sur l'accès aux droits.", avoid:"À employer quand les deux effets sont réellement présents."},
  {word:"Fragmenté", use:"L'action, l'offre ou la gouvernance est dispersée entre plusieurs acteurs sans cohérence suffisante.", ex:"Une gouvernance fragmentée malgré la multiplication des dispositifs.", avoid:"Très utile pour les limites de coordination."},
  {word:"Cloisonné", use:"Les acteurs ou services fonctionnent en silos avec peu d'échanges.", ex:"Une organisation encore cloisonnée entre les différents champs d'intervention.", avoid:"Plus organisationnel que « fragmenté »."},
  {word:"Intégré", use:"Les différentes composantes sont articulées dans un ensemble cohérent.", ex:"Vers une prise en charge intégrée des parcours.", avoid:"Bon antonyme de fragmenté/cloisonné."},
  {word:"Coordonné", use:"Les acteurs organisent leurs interventions de manière cohérente.", ex:"Un pilotage coordonné entre l'État et les collectivités.", avoid:"Ne pas confondre avec « centralisé »."},
  {word:"Gradué", use:"La réponse est organisée par niveaux selon l'intensité du besoin ou du recours.", ex:"Une offre graduée allant de la prévention aux soins spécialisés.", avoid:"Très utile en santé, social et sécurité."},
  {word:"Préventif", use:"L'action cherche à empêcher l'apparition ou l'aggravation d'un problème.", ex:"Un renforcement de l'approche préventive en amont de la prise en charge.", avoid:"À distinguer de curatif/réparateur."},
  {word:"Correctif", use:"L'action vise à corriger un écart ou une défaillance déjà constatée.", ex:"Des mécanismes correctifs en cas d'écart de rémunération.", avoid:"Utile pour distinguer prévention et réparation."},
  {word:"Incitatif", use:"L'action cherche à modifier les comportements sans imposer directement.", ex:"Des instruments incitatifs pour favoriser la rénovation énergétique.", avoid:"Exemples : aides, bonus, labels, information."},
  {word:"Coercitif", use:"L'action repose sur une obligation, un contrôle ou une sanction.", ex:"Un renforcement des mécanismes coercitifs en cas de non-respect des obligations.", avoid:"Terme fort mais très précis pour réglementation + sanction."},
  {word:"Redistributif", use:"L'action modifie la répartition des ressources entre catégories.", ex:"Un dispositif redistributif ciblé sur les ménages modestes.", avoid:"Surtout fiscalité, prestations, aides."},
  {word:"Universaliste", use:"La mesure vise l'ensemble d'une population sans ciblage selon la situation.", ex:"Une logique universaliste complétée par des aides ciblées.", avoid:"À distinguer de « universel » au sens courant."},
  {word:"Ciblé", use:"La mesure vise un public, un territoire ou un problème précisément identifié.", ex:"Un soutien ciblé sur les publics les plus exposés.", avoid:"Très utile pour caractériser le périmètre d'une action."},
  {word:"Progressif", use:"La mise en œuvre se fait par étapes ou augmente graduellement.", ex:"Un déploiement progressif avant généralisation.", avoid:"N'implique pas forcément une amélioration ; décrit le rythme."},
  {word:"Inégal", use:"La mise en œuvre ou les résultats varient fortement selon les cas.", ex:"Une mise en œuvre encore inégale selon les territoires.", avoid:"Excellent pour une limite sans jugement excessif."},
  {word:"Partiel", use:"L'action ne couvre qu'une partie du problème ou du public.", ex:"Une réponse encore partielle face à l'ampleur des besoins.", avoid:"Plus neutre que « insuffisant »."},
  {word:"Inabouti", use:"Le dispositif n'est pas encore pleinement achevé ou cohérent.", ex:"Un cadre de coordination encore inabouti.", avoid:"Utile pour une politique en construction."},
  {word:"Émergent", use:"Le phénomène ou l'outil apparaît récemment et n'est pas encore stabilisé.", ex:"Des dispositifs émergents de participation numérique.", avoid:"Ne veut pas dire marginal."},
  {word:"Prégnant", use:"Le phénomène occupe une place forte et demeure particulièrement présent.", ex:"Des contraintes budgétaires toujours prégnantes.", avoid:"Mot soutenu : l'utiliser seulement quand la forte présence est établie."},
  {word:"Résiduel", use:"Le phénomène subsiste mais dans une proportion devenue faible.", ex:"Des écarts devenus résiduels sur certains indicateurs.", avoid:"Ne pas l'utiliser si le problème reste quantitativement important."},
  {word:"Croissant", use:"Le phénomène augmente dans le temps.", ex:"Des besoins croissants d'accompagnement.", avoid:"Toujours l'appuyer par une évolution du corpus si possible."},
  {word:"Déclinant", use:"Le phénomène diminue progressivement.", ex:"Une ressource démographique déclinante.", avoid:"Plus dynamique que « faible »."},
  {word:"Polarisé", use:"Les situations, opinions ou résultats se concentrent autour de pôles opposés.", ex:"Un débat public de plus en plus polarisé.", avoid:"Ne signifie pas simplement « conflictuel »."},
  {word:"Multiniveau", use:"Plusieurs niveaux de décision ou d'administration interviennent simultanément.", ex:"Une gouvernance multiniveau associant État, région et intercommunalités.", avoid:"Très utile pour les politiques européennes et territoriales."}
];

const REPERE_TABS = [
  ["instruments","Documents & mesures"],
  ["acteurs","Acteurs & autorité"],
  ["planwords","Mots de plan"],
  ["quiz","Quiz"]
];

state.repereTab = state.repereTab || "instruments";
state.repereQuery = state.repereQuery || "";
state.repereQuiz = state.repereQuiz || 0;

// Ajout de l'onglet sans toucher aux modules existants.
if(!NAV.some(x=>x[0]==="reperes")){
  const pos = Math.max(0, NAV.findIndex(x=>x[0]==="vocab"));
  NAV.splice(pos,0,["reperes","Repères","Documents, acteurs et mots de plan"]);
}

// La section est créée dynamiquement pour éviter de dupliquer la structure HTML.
if(!document.getElementById("reperes")){
  const s=document.createElement("section");
  s.className="section"; s.id="reperes";
  const vocab=document.getElementById("vocab");
  vocab.parentNode.insertBefore(s,vocab);
}

// L'ancien listener du menu reste attaché au conteneur #nav ; il suffit de reconstruire ses boutons.
$("nav").innerHTML = NAV.map(([id,label])=>`<button data-page="${id}">${label}</button>`).join("");

const _renderPageBeforeReperes = renderPage;
renderPage = function(page){
  if(page==="reperes") return renderReperes();
  return _renderPageBeforeReperes(page);
};

function setRepereTab(t){state.repereTab=t;state.repereQuery="";renderReperes();}
function setRepereQuery(v){state.repereQuery=v;renderRepereContent();}

function repereTop(){
  return `<div class="card" style="margin-bottom:16px">
    <h2>Ce qu'il faut savoir avant de lire un corpus</h2>
    <p>Deux questions différentes doivent devenir automatiques : <b>« qu'est-ce que ce document ? »</b> et <b>« qui parle ? »</b>.</p>
    <div class="feedback warn"><b>Réflexe essentiel :</b> ne confonds pas <b>autorité juridique</b>, <b>autorité institutionnelle</b> et <b>autorité factuelle</b>. Une loi oblige ; un rapport de la Cour des comptes évalue ; l'INSEE mesure ; une association documente le terrain. Ces sources peuvent toutes être utiles, mais pas pour dire la même chose.</div>
  </div>`;
}

function renderReperes(){
  $("datasetSelect").style.display="none";
  $("reperes").innerHTML=`${repereTop()}
    <div class="actions" style="margin-bottom:14px">${REPERE_TABS.map(([id,l])=>`<button class="btn ${state.repereTab===id?'':'ghost'}" onclick="setRepereTab('${id}')">${l}</button>`).join("")}</div>
    <div id="repereContent"></div>`;
  renderRepereContent();
}

function renderRepereContent(){
  const el=$("repereContent"); if(!el)return;
  if(state.repereTab==="instruments") return renderInstrumentCards(el);
  if(state.repereTab==="acteurs") return renderActorCards(el);
  if(state.repereTab==="planwords") return renderPlanWordCards(el);
  return renderRepereQuiz(el);
}

function filterQ(s){return !state.repereQuery || norm(s).includes(norm(state.repereQuery));}

function renderInstrumentCards(el){
  const arr=PUBLIC_INSTRUMENTS.filter(x=>filterQ([x.name,x.family,x.who,x.effect,x.clue,x.nds].join(" ")));
  el.innerHTML=`<div class="card"><h2>Documents et instruments d'action publique</h2><p class="muted">Pour chacun : qui le produit, quelle autorité il a, ce qu'il implique et comment l'utiliser dans une NDS.</p><input class="input" placeholder="Chercher : index, plan, loi, rapport…" value="${escapeHtml(state.repereQuery)}" oninput="setRepereQuery(this.value)"></div>
  <div class="grid cols2" style="margin-top:16px">${arr.map(x=>`<div class="card"><div class="term">${escapeHtml(x.name)}</div><div class="chips"><span class="chip">${escapeHtml(x.family)}</span><span class="chip">${escapeHtml(x.level)}</span></div><p><b>Qui ?</b> ${escapeHtml(x.who)}</p><p><b>Ce que cela implique :</b> ${escapeHtml(x.effect)}</p><p><b>Comment le reconnaître :</b> ${escapeHtml(x.clue)}</p><div class="feedback good"><b>Réflexe NDS :</b> ${escapeHtml(x.nds)}</div></div>`).join("")}</div>`;
}

function renderActorCards(el){
  const arr=PUBLIC_ACTORS.filter(x=>filterQ([x.name,x.type,x.weight,x.role,x.docs,x.reflex].join(" ")));
  el.innerHTML=`<div class="card"><h2>Acteurs : qui décide, qui conseille, qui mesure ?</h2><p class="muted">Le but n'est pas d'apprendre un organigramme par cœur, mais de reconnaître la fonction de l'auteur d'un document.</p><input class="input" placeholder="Chercher : HCE, IGAS, ministère, INSEE…" value="${escapeHtml(state.repereQuery)}" oninput="setRepereQuery(this.value)"></div>
  <div class="card" style="margin-top:16px"><h3>Hiérarchie de lecture — pas une hiérarchie de « valeur » absolue</h3><div class="stage"><b>1. Décider / normer</b><span>Loi, règlement, décision compétente</span></div><div class="stage"><b>2. Piloter / mettre en œuvre</b><span>Gouvernement, ministères, préfets, agences, collectivités</span></div><div class="stage"><b>3. Contrôler / évaluer</b><span>Cour des comptes, inspections, autorités, hauts conseils</span></div><div class="stage"><b>4. Mesurer / documenter</b><span>INSEE, services statistiques, observatoires</span></div><div class="stage"><b>5. Représenter / alerter</b><span>Associations, syndicats, think tanks, acteurs de terrain</span></div></div>
  <div class="grid cols2" style="margin-top:16px">${arr.map(x=>`<div class="card"><div class="term">${escapeHtml(x.name)}</div><div class="chips"><span class="chip">${escapeHtml(x.type)}</span><span class="chip">${escapeHtml(x.weight)}</span></div><p>${escapeHtml(x.role)}</p><p><b>Documents typiques :</b> ${escapeHtml(x.docs)}</p><div class="feedback good"><b>Réflexe NDS :</b> ${escapeHtml(x.reflex)}</div></div>`).join("")}</div>`;
}

function renderPlanWordCards(el){
  const arr=PLAN_WORDS.filter(x=>filterQ([x.word,x.use,x.ex,x.avoid].join(" ")));
  el.innerHTML=`<div class="card"><h2>Mots qui construisent un plan</h2><p class="muted">Ce ne sont pas des mots « élégants » à placer pour faire savant : chacun permet de qualifier précisément le phénomène, l'action ou la limite.</p><input class="input" placeholder="Chercher : transversal, multifactoriel, structurel…" value="${escapeHtml(state.repereQuery)}" oninput="setRepereQuery(this.value)"></div>
  <div class="grid cols2" style="margin-top:16px">${arr.map(x=>`<div class="card"><div class="term">${escapeHtml(x.word)}</div><p><b>Quand l'utiliser :</b> ${escapeHtml(x.use)}</p><div class="example"><b>Dans un titre :</b> ${escapeHtml(x.ex)}</div><p class="tiny"><b>Attention :</b> ${escapeHtml(x.avoid)}</p></div>`).join("")}</div>`;
}

const REPERE_QUIZ = [
  {q:"Un document fixe quatre axes d'action pour 2027 et mobilise plusieurs ministères. De quoi s'agit-il le plus probablement ?",choices:["Un baromètre","Un plan interministériel","Un avis","Un arrêté municipal"],a:1,why:"Le plan interministériel coordonne plusieurs ministères autour d'axes, mesures et échéances."},
  {q:"Un index obtient une note de 94/100. Que dois-tu vérifier avant d'en déduire qu'il est juridiquement contraignant ?",choices:["La couleur du rapport","Le texte qui institue l'index et les obligations/sanctions associées","Le nombre de pages","S'il est cité par une association"],a:1,why:"Un index est un instrument de mesure ; sa force juridique dépend du cadre qui le rend obligatoire ou non."},
  {q:"Le HCE formule cinq recommandations. Quelle formulation est correcte ?",choices:["Le HCE impose cinq nouvelles règles","Le HCE préconise cinq mesures","Le HCE promulgue cinq mesures","Le HCE vote cinq lois"],a:1,why:"Le HCE évalue et recommande ; il n'exerce pas le pouvoir législatif ou réglementaire."},
  {q:"Un rapport de l'IGAS propose une réforme. Où classer cette proposition si le corpus ne dit pas qu'elle a été adoptée ?",choices:["Mesure déjà mise en œuvre","Recommandation / levier envisagé","Loi en vigueur","Sanction administrative"],a:1,why:"Une recommandation d'inspection reste une proposition tant que son adoption n'est pas établie."},
  {q:"L'INSEE publie un taux de pauvreté. Quelle est sa fonction principale dans ta copie ?",choices:["Créer une obligation","Objectiver un constat","Décider d'un financement","Imposer une sanction"],a:1,why:"L'INSEE fournit une forte autorité factuelle : il mesure et décrit."},
  {q:"Un problème concerne les dimensions économique, sanitaire et politique. Quel adjectif est le plus précis ?",choices:["Transversal","Multidimensionnel","Conjoncturel","Résiduel"],a:1,why:"Multidimensionnel = plusieurs dimensions distinctes du même phénomène."},
  {q:"Un problème touche étudiantes, femmes incarcérées, femmes sans domicile et salariées. Quel adjectif est le plus utile ?",choices:["Transversal","Résiduel","Conjoncturel","Sectoriel"],a:0,why:"Transversal = traverse plusieurs catégories de publics ou plusieurs champs."},
  {q:"Une difficulté résulte à la fois du coût, du manque d'offre, de l'éloignement géographique et du non-recours. Quel adjectif ?",choices:["Multifactoriel","Universaliste","Résiduel","Gradué"],a:0,why:"Multifactoriel qualifie un phénomène qui résulte de plusieurs facteurs combinés."},
  {q:"Des coopérations existent mais restent bilatérales et sans gouvernance commune. Quel mot qualifie le mieux l'organisation ?",choices:["Intégrée","Fragmentée","Universaliste","Résiduelle"],a:1,why:"Fragmentée décrit une action dispersée entre plusieurs acteurs sans cohérence suffisante."},
  {q:"Une mesure s'applique d'abord à dix territoires pilotes avant évaluation. Quel instrument ?",choices:["Expérimentation","Loi organique","Baromètre","Avis"],a:0,why:"L'expérimentation teste un dispositif dans un périmètre limité avant éventuelle généralisation."},
  {q:"Une autorité fixe des critères que les entreprises doivent respecter sous peine de sanction. Quelle logique domine ?",choices:["Incitative","Coercitive","Observatoire","Symbolique"],a:1,why:"Obligation + contrôle/sanction = instrument coercitif."},
  {q:"Une aide financière vise uniquement les ménages les plus modestes. Quel adjectif décrit le mieux la mesure ?",choices:["Ciblée","Systémique","Conjoncturelle","Fragmentée"],a:0,why:"La mesure est ciblée sur une catégorie précisément identifiée."}
];

function renderRepereQuiz(el){
  const ex=REPERE_QUIZ[state.repereQuiz%REPERE_QUIZ.length];
  el.innerHTML=`<div class="card"><span class="badge gold">Quiz ${state.repereQuiz+1}/${REPERE_QUIZ.length}</span><h2 style="margin-top:12px">${escapeHtml(ex.q)}</h2>${ex.choices.map((c,i)=>`<button class="option" onclick="answerRepereQuiz(this,${i})">${escapeHtml(c)}</button>`).join("")}<div id="repereQuizFeedback"></div><div class="actions"><button class="btn ghost" onclick="nextRepereQuiz()">Question suivante</button></div></div>`;
}
function answerRepereQuiz(el,i){
  const ex=REPERE_QUIZ[state.repereQuiz%REPERE_QUIZ.length],ok=i===ex.a;
  document.querySelectorAll("#repereContent .option").forEach(b=>b.disabled=true);
  el.classList.add(ok?"correct":"wrong");
  markAttempt("reperes",ok);
  $("repereQuizFeedback").innerHTML=`<div class="feedback ${ok?'good':'warn'}"><b>${ok?'Correct':'À corriger'}</b><br>${escapeHtml(ex.why)}<br><b>Réponse :</b> ${escapeHtml(ex.choices[ex.a])}</div>`;
}
function nextRepereQuiz(){state.repereQuiz=(state.repereQuiz+1)%REPERE_QUIZ.length;renderRepereContent();}
