// V4 — Repères avancés, syntaxe enrichie et suivi automatique des erreurs

// 1) Mots de plan : 41 -> 70
const V4_PLAN_WORDS = [
["Interinstitutionnel","Plusieurs institutions distinctes doivent coordonner leur action.","Une coopération interinstitutionnelle encore incomplète.","À utiliser quand les acteurs appartiennent réellement à des institutions différentes."],
["Interministériel","Plusieurs ministères sont mobilisés autour d'une politique commune.","Une réponse interministérielle face à un enjeu transversal.","Ne pas l'utiliser pour une simple coopération entre services d'un même ministère."],
["Partenarial","L'action repose sur une coopération formalisée de plusieurs acteurs.","Un pilotage partenarial associant État, collectivités et associations.","Suppose davantage qu'une juxtaposition d'acteurs."],
["Concerté","La décision ou l'action est élaborée après échange avec les parties concernées.","Une stratégie concertée avec les acteurs du territoire.","Concertation ne signifie pas codécision."],
["Participatif","Les usagers ou parties prenantes prennent part à l'élaboration ou au suivi.","Une démarche participative associant les usagers.","Ne pas confondre participation et simple information."],
["Inclusif","Le dispositif cherche à ne pas exclure les publics les plus éloignés.","Un accès plus inclusif aux services publics.","À appuyer par des mécanismes concrets d'accès ou d'adaptation."],
["Accessible","Le service peut effectivement être atteint, compris ou utilisé.","Une offre plus accessible géographiquement et financièrement.","Préciser si possible la dimension de l'accessibilité."],
["Équitable","La répartition tient compte des différences de besoins ou de situations.","Une allocation plus équitable des moyens entre territoires.","Équitable n'est pas synonyme de strictement égal."],
["Proportionné","La réponse est adaptée à l'intensité du risque ou du manquement.","Des contrôles proportionnés au niveau de risque.","Très utile pour sanctions, contrôle et régulation."],
["Subsidiaire","L'échelon supérieur n'intervient qu'en appui si l'échelon proche ne peut agir efficacement.","Une intervention subsidiaire de l'État.","Ne signifie pas secondaire."],
["Expérimental","Le dispositif est testé avant une éventuelle généralisation.","Un dispositif expérimental déployé dans des territoires pilotes.","Ne pas le présenter comme généralisé."],
["Pérenne","Le dispositif ou le financement est conçu pour durer.","La recherche d'un financement pérenne.","À distinguer de ponctuel ou temporaire."],
["Soutenable","L'action peut être maintenue durablement avec les ressources disponibles.","Une organisation dont la soutenabilité financière reste à consolider.","Peut être financier, humain ou organisationnel."],
["Efficient","L'action recherche le meilleur rapport entre moyens et résultats.","Un pilotage plus efficient des ressources publiques.","Ne pas confondre avec efficace."],
["Effectif","La règle ou la mesure est réellement appliquée et produit des effets.","Une égalité juridique dont l'effectivité demeure incomplète.","À distinguer de formel ou seulement prévu par les textes."],
["Opérationnel","Le dispositif est suffisamment concret pour être mis en œuvre.","Un cadre stratégique encore insuffisamment décliné en outils opérationnels.","Très utile pour opposer stratégie et mise en œuvre."],
["Normatif","L'instrument fixe ou organise des règles ou standards.","Un cadre normatif progressivement renforcé.","Ne signifie pas nécessairement législatif."],
["Réglementaire","L'action repose sur des règles prises par l'exécutif compétent.","Un encadrement réglementaire renforcé.","À distinguer du cadre législatif."],
["Prescriptif","Le document indique précisément ce qui doit être fait.","Un référentiel plus prescriptif afin d'harmoniser les pratiques.","Plus fort qu'orientatif."],
["Évaluatif","Le dispositif sert à mesurer les résultats ou la performance.","Un cadre évaluatif encore incomplet.","Ne pas confondre avec contrôle de conformité."],
["Prospectif","L'analyse porte sur les évolutions futures et les scénarios possibles.","Une approche prospective des besoins à horizon 2030.","À distinguer du diagnostic présent."],
["Réactif","Le système répond rapidement lorsqu'un problème survient.","Un dispositif réactif en situation de crise.","N'implique pas anticipation."],
["Proactif","Le pilotage anticipe les difficultés avant leur aggravation.","Vers un pilotage plus proactif des risques.","À employer s'il existe une logique d'anticipation."],
["Résilient","Le système peut absorber un choc et maintenir son fonctionnement.","Une organisation plus résiliente face aux tensions.","Ne pas en faire un synonyme vague de solide."],
["Capacitaire","Concerne les capacités disponibles : places, effectifs, lits, équipements.","Un renforcement capacitaire de l'offre.","Très utile en santé, logement, justice et accueil."],
["Compensatoire","La mesure vise à compenser un désavantage ou un coût déjà subi.","Des aides compensatoires pour les publics exposés.","À distinguer de préventif."],
["Sélectif","Le dispositif ne bénéficie qu'aux projets ou publics répondant à des critères précis.","Un financement sélectif attribué sur appel à projets.","À distinguer de ciblé : sélectif insiste sur le choix."],
["Harmonisé","Des méthodes auparavant différentes sont rapprochées.","Des indicateurs harmonisés pour permettre les comparaisons.","Ne signifie pas nécessairement uniformisé."],
["Opposable","Une règle ou un engagement peut juridiquement être invoqué selon son cadre.","Des engagements formalisés dans un cadre opposable.","Terme juridique fort : l'utiliser seulement si le corpus le permet."]
].map(([word,use,ex,avoid])=>({word,use,ex,avoid}));
PLAN_WORDS.push(...V4_PLAN_WORDS);

// 2) Repères avancés : analyser complètement un document
const REPERE_CASES_ADV = [
["Un rapport du HCE constate une hausse du sexisme et recommande de renforcer l'éducation à l'égalité.","Rapport / recommandation","Instance consultative","Non contraignante","Évaluer et préconiser","Constat + levier envisagé"],
["Un décret impose aux entreprises de publier un score annuel et prévoit une sanction en cas de non-publication.","Décret + index","Pouvoir exécutif","Contraignante","Réglementer et mesurer","Mesure normative engagée"],
["L'INSEE publie une étude montrant que le taux de pauvreté atteint 16,4 %.","Étude statistique","Statistique publique","Factuelle forte","Mesurer / objectiver","Preuve du diagnostic"],
["La Cour des comptes estime qu'un dispositif atteint partiellement ses objectifs et recommande de revoir ses critères.","Rapport d'évaluation","Juridiction financière","Institutionnelle forte, recommandation non contraignante","Contrôler / évaluer","Limite + recommandation"],
["Une circulaire ministérielle demande aux préfets d'harmoniser les modalités de contrôle.","Circulaire / instruction","Ministère","Pilotage administratif","Organiser la mise en œuvre","Modalité d'application"],
["Un schéma régional fixe les priorités de répartition de l'offre de soins pour cinq ans.","Schéma","ARS / autorité territoriale","Planification encadrée","Planifier et territorialiser","Organisation territoriale"],
["Un préfet interdit temporairement l'accès à une zone par arrêté.","Arrêté préfectoral","Préfet","Contraignante dans son champ","Réglementer","Mesure normative territoriale"],
["L'État lance un appel à projets doté de 50 M€ pour financer des projets locaux.","Appel à projets","État / administration","Procédure de sélection","Financer et mobiliser","Levier opérationnel"],
["Une charte signée par des plateformes énonce des engagements sans sanction.","Charte","Signataires publics/privés","Droit souple / engagement","Orienter les pratiques","Mesure d'engagement"],
["Une convention entre un ministère et une association fixe objectifs, financements et indicateurs.","Convention / contrat","Ministère + partenaire","Engage les parties","Contractualiser et financer","Action partenariale mise en œuvre"],
["Dix départements testent pendant deux ans un nouveau dispositif avant décision sur sa généralisation.","Expérimentation","Autorité publique compétente","Limitée au test","Tester et évaluer","Mesure engagée non généralisée"],
["Une agence publique délivre un label aux établissements respectant un référentiel.","Certification / label","Agence / organisme habilité","Variable selon le dispositif","Normaliser / inciter","Levier de qualité"],
["Une commission d'enquête parlementaire publie trente propositions de réforme.","Rapport parlementaire","Parlement","Contrôle / expertise","Contrôler et proposer","Diagnostic + pistes de réforme"],
["Une AAI prononce une amende après avoir constaté un manquement entrant dans son champ.","Décision / sanction","AAI","Contraignante selon ses pouvoirs","Réguler / sanctionner","Action de contrôle"],
["Le Conseil d'État annule un décret pour excès de pouvoir.","Décision juridictionnelle","Conseil d'État","Juridique élevée","Juger / contrôler la légalité","Cadre juridique / limite"],
["Une stratégie nationale fixe un objectif à long terme ensuite décliné par des plans sectoriels.","Stratégie nationale","Gouvernement","Orientation stratégique","Fixer la direction","Cadre général"],
["Une feuille de route ministérielle fixe six actions, trois échéances et les directions responsables.","Feuille de route","Ministère","Pilotage opérationnel","Programmer la mise en œuvre","Mesures + calendrier"],
["Une association publie un baromètre annuel fondé sur une enquête auprès de 2 000 personnes.","Baromètre / enquête","Association","Factuelle dépendant de la méthode","Documenter / alerter","Diagnostic à contextualiser"],
["Une loi pose un principe ; un décret en précise l'application ; une circulaire explique aux services comment l'appliquer.","Chaîne normative","Parlement + exécutif + administration","Hiérarchisée","Normer puis appliquer","Chaîne de mise en œuvre"],
["Un fonds finance des projets, attribués après sélection par un appel à projets.","Fonds + appel à projets","Financeur public","Financement + sélection","Financer et sélectionner","Moyen + modalité d'attribution"],
["Un référentiel fixe des critères de qualité dont le respect conditionne une subvention.","Référentiel","Autorité / organisme compétent","Prescriptive par effet indirect","Harmoniser et conditionner","Normalisation + financement"],
["Un plan annonce vingt mesures mais aucun calendrier, financement ou responsable n'est précisé.","Plan","Pouvoir public","Portée politique","Orienter / annoncer","Opérationnalité à discuter"]
].map(([excerpt,nature,acteur,autorite,fonction,nds])=>({excerpt,answers:{nature,acteur,autorite,fonction,nds}}));

const REPERE_COMPARE_ADV = [
["Pour établir qu'une obligation juridique existe, quelle source est la plus probante ?","Le texte normatif qui crée l'obligation","Un rapport associatif qui décrit ses effets","a","La norme établit l'obligation ; le rapport peut en documenter les effets."],
["Pour chiffrer l'évolution du chômage sur dix ans, quelle source privilégier ?","Une série de l'INSEE","Une tribune d'acteurs économiques","a","La statistique publique apporte l'autorité factuelle la plus adaptée."],
["Pour montrer qu'une politique fonctionne mal sur le terrain, quelle combinaison est la plus solide ?","Le texte qui a créé la politique","Données + rapport d'évaluation + retours de terrain","b","L'existence du cadre ne suffit pas à prouver son effectivité."],
["Une recommandation de la Cour des comptes et un décret divergent. Lequel crée directement une obligation ?","La recommandation","Le décret","b","La recommandation n'est pas une norme générale."],
["Un ministère publie un plan et une association une enquête. Quelle source renseigne le mieux sur les intentions de l'État ?","Le plan ministériel","L'enquête associative","a","Le plan expose directement l'orientation portée par l'État."],
["Un index progresse de 80 à 95/100 mais les écarts réels persistent. Quelle conclusion est la plus rigoureuse ?","L'égalité est presque atteinte","Le score s'améliore sans établir la disparition des écarts","b","Un index dépend de ce qu'il mesure et de sa méthode."],
["Un plan annonce une mesure puis une convention signée la finance. Quel document prouve le mieux la mise en œuvre ?","Le plan seul","La convention signée et financée","b","La convention apporte un indice opérationnel plus fort."],
["Pour hiérarchiser deux chiffres contradictoires, quel premier réflexe ?","Choisir le plus récent","Comparer définitions, périmètres, dates et méthodes","b","Deux chiffres peuvent être exacts sans mesurer la même chose."],
["Une AAI recommande dans un rapport puis sanctionne dans une décision. Les deux actes ont-ils la même portée ?","Oui","Non","b","Recommandation et sanction relèvent de pouvoirs différents."],
["Pour une sous-partie « mesures engagées », quelle information est la plus forte ?","Le HCE recommande de créer un fonds","Le fonds est créé, doté et ouvert aux bénéficiaires","b","La seconde établit une mise en œuvre effective."],
["Une collectivité adopte un schéma et l'État une stratégie nationale. La stratégie nationale est-elle forcément plus importante dans la copie ?","Oui, toujours","Non, cela dépend de la compétence et de la question","b","Il faut raisonner par fonction et pertinence, pas par prestige."],
["Un rapport IGAS recommande une mesure reprise ensuite par décret. Dans « mesures engagées », que citer prioritairement ?","La recommandation seule","Le décret, éventuellement relié à la recommandation","b","Le décret montre que la préconisation a été adoptée."]
].map(([q,a,b,answer,why])=>({q,a,b,answer,why}));

if(!REPERE_TABS.some(x=>x[0]==="cases")) REPERE_TABS.splice(3,0,["cases","Cas pratiques"]);
if(!REPERE_TABS.some(x=>x[0]==="compare")) REPERE_TABS.splice(4,0,["compare","Comparer les sources"]);
state.repereCase=state.repereCase||0; state.repereCompare=state.repereCompare||0;
const _renderRepereContentV4=renderRepereContent;
renderRepereContent=function(){const el=$("repereContent");if(!el)return;if(state.repereTab==="cases")return renderRepereCaseAdv(el);if(state.repereTab==="compare")return renderRepereCompareAdv(el);return _renderRepereContentV4();};
function renderRepereCaseAdv(el){const ex=REPERE_CASES_ADV[state.repereCase%REPERE_CASES_ADV.length];const labels={nature:"Nature",acteur:"Type d'acteur",autorite:"Autorité / portée",fonction:"Fonction",nds:"Usage dans la NDS"};el.innerHTML=`<div class="card"><span class="badge gold">Cas pratique ${state.repereCase+1}/${REPERE_CASES_ADV.length}</span><h2>Analyse complète du document</h2><div class="quote">${escapeHtml(ex.excerpt)}</div><p class="muted">Réponds sans regarder les fiches : nature, auteur, portée, fonction et usage dans la note.</p></div><div class="card" style="margin-top:16px">${Object.keys(ex.answers).map(k=>`<label>${labels[k]}</label><input class="input" id="rc_${k}" placeholder="Ta réponse">`).join("")}<div class="actions"><button class="btn" onclick="checkRepereCaseAdv()">Corriger</button><button class="btn ghost" onclick="nextRepereCaseAdv()">Suivant</button></div><div id="rcFeedback"></div></div>`;}
function checkRepereCaseAdv(){const ex=REPERE_CASES_ADV[state.repereCase%REPERE_CASES_ADV.length],keys=Object.keys(ex.answers),scores=keys.map(k=>tokenScore($("rc_"+k).value,ex.answers[k])),avg=scores.reduce((a,b)=>a+b,0)/scores.length,ok=avg>=.55;markAttempt("reperes",ok);$("rcFeedback").innerHTML=`<div class="feedback ${ok?'good':'warn'}"><b>Référence :</b><br>${keys.map(k=>`<b>${k}</b> : ${escapeHtml(ex.answers[k])}`).join("<br>")}</div>`;}
function nextRepereCaseAdv(){state.repereCase=(state.repereCase+1)%REPERE_CASES_ADV.length;renderRepereContent();}
function renderRepereCompareAdv(el){const ex=REPERE_COMPARE_ADV[state.repereCompare%REPERE_COMPARE_ADV.length];el.innerHTML=`<div class="card"><span class="badge gold">Comparaison ${state.repereCompare+1}/${REPERE_COMPARE_ADV.length}</span><h2>${escapeHtml(ex.q)}</h2><button class="option" onclick="answerRepereCompareAdv(this,'a')"><b>A.</b> ${escapeHtml(ex.a)}</button><button class="option" onclick="answerRepereCompareAdv(this,'b')"><b>B.</b> ${escapeHtml(ex.b)}</button><div id="rcompFeedback"></div><div class="actions"><button class="btn ghost" onclick="nextRepereCompareAdv()">Suivant</button></div></div>`;}
function answerRepereCompareAdv(el,a){const ex=REPERE_COMPARE_ADV[state.repereCompare%REPERE_COMPARE_ADV.length],ok=a===ex.answer;document.querySelectorAll("#repereContent .option").forEach(b=>b.disabled=true);el.classList.add(ok?"correct":"wrong");markAttempt("reperes",ok);$("rcompFeedback").innerHTML=`<div class="feedback ${ok?'good':'warn'}"><b>${ok?'Correct':'À corriger'}</b><br>${escapeHtml(ex.why)}</div>`;}
function nextRepereCompareAdv(){state.repereCompare=(state.repereCompare+1)%REPERE_COMPARE_ADV.length;renderRepereContent();}

// 3) Syntaxe : nouvelles propositions ciblées
const V4_SYNTAX_MORE=[
["Ces mesures permettent de réduire les délais.","Ces mesures permettent de pouvoir réduire les délais.","« Permettre de pouvoir » est redondant."],
["Cette politique contribue à réduire les inégalités.","Cette politique contribue de réduire les inégalités.","« Contribuer » se construit avec « à »."],
["Le dispositif vise à renforcer la coordination.","Le dispositif vise de renforcer la coordination.","« Viser à + infinitif »."],
["La réforme se traduit par une hausse des moyens.","La réforme se traduit en une hausse des moyens.","« Se traduire par »."],
["Ces difficultés résultent d'un manque de moyens.","Ces difficultés résultent à un manque de moyens.","« Résulter de »."],
["L'efficacité dépend de la mise en œuvre.","L'efficacité dépend à la mise en œuvre.","« Dépendre de »."],
["Cette évolution conduit à renforcer les contrôles.","Cette évolution conduit de renforcer les contrôles.","« Conduire à »."],
["La réforme s'inscrit dans une stratégie plus large.","La réforme s'inscrit sur une stratégie plus large.","« S'inscrire dans »."],
["Le dispositif repose sur trois piliers.","Le dispositif repose dans trois piliers.","« Reposer sur »."],
["La mesure consiste à renforcer l'accompagnement.","La mesure consiste de renforcer l'accompagnement.","« Consister à + infinitif »."],
["Ces aides favorisent l'accès au logement.","Ces aides favorisent à l'accès au logement.","« Favoriser » est transitif direct."],
["Bien que les moyens aient augmenté, les écarts persistent.","Bien que les moyens ont augmenté, les écarts persistent.","« Bien que » appelle le subjonctif."],
["Après que le dispositif a été déployé, une évaluation a été conduite.","Après que le dispositif ait été déployé, une évaluation a été conduite.","Dans la norme soignée, « après que » appelle l'indicatif."],
["Malgré l'augmentation des moyens, les délais restent élevés.","Malgré que les moyens ont augmenté, les délais restent élevés.","Éviter « malgré que »."],
["L'analyse se fonde sur plusieurs indicateurs.","L'analyse se base sur plusieurs indicateurs.","« Se fonder sur » est plus soigné dans ce registre."],
["Cette évolution affecte particulièrement les ménages modestes.","Cette évolution impacte particulièrement les ménages modestes.","« Affecter » est plus neutre et précis."],
["En matière d'accès aux droits, des écarts persistent.","Au niveau de l'accès aux droits, des écarts persistent.","Éviter l'abus de « au niveau de »."],
["L'ensemble des mesures a été déployé en 2026.","L'ensemble des mesures ont été déployées en 2026.","Le noyau du sujet est « l'ensemble », singulier."],
["La plupart des collectivités ont adopté le dispositif.","La plupart des collectivités a adopté le dispositif.","Avec « la plupart de + pluriel », accord au pluriel."],
["Le nombre de bénéficiaires augmente depuis 2024.","Le nombre de bénéficiaires augmentent depuis 2024.","Le noyau est « le nombre », singulier."],
["Les mesures mises en œuvre restent inégalement appliquées.","Les mesures mise en œuvre restent inégalement appliqué.","Accords au féminin pluriel."],
["Le dispositif prévoit que les entreprises publient leurs résultats.","Le dispositif prévoit à ce que les entreprises publient leurs résultats.","On dit « prévoir que »."],
["Afin que la mesure soit effective, un contrôle est prévu.","Afin que la mesure est effective, un contrôle est prévu.","« Afin que » appelle le subjonctif."],
["Cette réforme est susceptible de réduire les écarts.","Cette réforme est susceptible à réduire les écarts.","« Susceptible de »."],
["Le dispositif participe à l'amélioration de l'accès aux droits.","Le dispositif participe de l'amélioration de l'accès aux droits.","« Participer à »."],
["Le dispositif permet aux collectivités de financer leurs projets.","Le dispositif permet les collectivités de financer leurs projets.","Permettre à quelqu'un de faire quelque chose."],
["Le rapport relève notamment trois difficultés.","Le rapport relève notamment par exemple trois difficultés.","« Notamment » et « par exemple » font doublon."],
["Ces mesures demeurent toutefois insuffisantes.","Mais ces mesures demeurent cependant insuffisantes.","Éviter le double connecteur."],
["Les acteurs coopèrent afin d'harmoniser les pratiques.","Les acteurs collaborent ensemble afin d'harmoniser les pratiques.","« Collaborer ensemble » est pléonastique."],
["Les écarts persistent, voire s'accentuent.","Les écarts persistent, voire même s'accentuent.","« Voire » suffit."],
["La mesure est entrée en vigueur en 2026.","La mesure est rentrée en vigueur en 2026.","On dit « entrer en vigueur »."],
["La réforme prévoit un renforcement des moyens.","La réforme prévoie un renforcement des moyens.","Au présent : « prévoit »."],
["Les pouvoirs publics ont mis en œuvre plusieurs dispositifs.","Les pouvoirs publics ont mit en œuvre plusieurs dispositifs.","Participe passé : « mis »."],
["Les données ont permis d'objectiver les difficultés.","Les données ont permises d'objectiver les difficultés.","Pas d'accord ici avec l'auxiliaire avoir."],
["Les mesures qu'elle a mises en œuvre ont produit des effets.","Les mesures qu'elle a mis en œuvre ont produit des effets.","COD placé avant : « mises »."],
["La réforme tient compte des disparités territoriales.","La réforme tient en compte les disparités territoriales.","« Tenir compte de »."],
["Le dispositif est assorti de sanctions.","Le dispositif est assorti avec des sanctions.","« Assorti de »."],
["Le rapport fait état d'une amélioration.","Le rapport fait état une amélioration.","« Faire état de »."],
["La politique se heurte à plusieurs limites.","La politique se heurte contre plusieurs limites.","« Se heurter à »."],
["Les mesures pallient le manque de capacités.","Les mesures pallient au manque de capacités.","« Pallier » est transitif direct."],
["La réforme remédie aux insuffisances.","La réforme remédie les insuffisances.","« Remédier à »."],
["Ces actions concourent à l'amélioration du service.","Ces actions concourent dans l'amélioration du service.","« Concourir à »."],
["Le ministère chargé du logement met en œuvre cette politique.","Le ministère en charge du logement met en œuvre cette politique.","« Chargé de » est la formulation administrative traditionnelle."],
["Cette mesure a vocation à être généralisée.","Cette mesure a vocation de se généraliser.","« Avoir vocation à »."],
["Le dispositif est conforme aux objectifs fixés.","Le dispositif est conforme avec les objectifs fixés.","« Conforme à »."],
["La mesure est compatible avec le droit européen.","La mesure est compatible au droit européen.","« Compatible avec »."],
["Le dispositif se caractérise par une forte territorialisation.","Le dispositif se caractérise avec une forte territorialisation.","« Se caractériser par »."],
["Cette mesure relève d'une logique préventive.","Cette mesure relève à une logique préventive.","« Relever de »."],
["Le rapport recommande de revoir les critères.","Le rapport recommande à revoir les critères.","« Recommander de + infinitif »."],
["La mise en œuvre reste partielle.","La mise en œuvre reste partiellement.","Après « rester », adjectif attribut : « partielle »."],
["Les objectifs sont clairement définis.","Les objectifs sont clairs définis.","Adverbe : « clairement »."],
["Les mesures sont suffisamment précises.","Les mesures sont suffisantes précises.","Adverbe : « suffisamment »."],
["Les mesures sont mises en œuvre progressivement.","Les mesures sont mises en œuvres progressivement.","« Mettre en œuvre » : œuvre reste au singulier."],
["La mission invite les acteurs à formaliser leurs engagements.","La mission invite les acteurs de formaliser leurs engagements.","Inviter quelqu'un à faire quelque chose."],
["Le dispositif impose aux entreprises de publier leurs résultats.","Le dispositif impose les entreprises à publier leurs résultats.","Imposer à quelqu'un de faire quelque chose."],
["L'État incite les collectivités à développer ces services.","L'État incite les collectivités de développer ces services.","Inciter quelqu'un à faire quelque chose."],
["Le rapport alerte sur les risques de saturation.","Le rapport alerte des risques de saturation.","« Alerter sur »."],
["Le dispositif est destiné aux collectivités rurales.","Le dispositif est destiné pour les collectivités rurales.","« Destiné à »."],
["Cette obligation incombe aux employeurs.","Cette obligation incombe les employeurs.","« Incomber à »."],
["Les résultats sont cohérents avec les constats du rapport.","Les résultats sont cohérents aux constats du rapport.","« Cohérent avec »."],
["La mesure est censée réduire les délais.","La mesure est sensée réduire les délais.","« Censé » = supposé ; « sensé » = raisonnable."],
["Parmi les différents leviers, la contractualisation est importante.","Parmis les différents leviers, la contractualisation est importante.","« Parmi » sans s."],
["Le dispositif a notamment renforcé la coordination.","Le dispositif a notament renforcé la coordination.","Orthographe : « notamment »."],
["Cette évolution est susceptible d'accroître les écarts.","Cette évolution est suceptible d'accroître les écarts.","Orthographe : « susceptible »."],
["Le dispositif nécessite une ingénierie renforcée.","Le dispositif nécéssite une ingénierie renforcée.","Orthographe : « nécessite »."],
["Le rapport préconise plusieurs évolutions.","Le rapport préconnise plusieurs évolutions.","Orthographe : « préconise »."],
["La gouvernance demeure fragmentée.","La gouvernance demeure fraguementée.","Orthographe : « fragmentée »."],
["La coordination interinstitutionnelle doit être renforcée.","La coordination inter-institutionnelle doit être renforcée.","Graphie recommandée : « interinstitutionnelle »."],
["La stratégie interministérielle mobilise plusieurs administrations.","La stratégie inter-ministérielle mobilise plusieurs administrations.","Graphie recommandée : « interministérielle »."],
["Le dispositif est pluriannuel.","Le dispositif est pluri-annuel.","Graphie : « pluriannuel »."],
["Le phénomène est multifactoriel.","Le phénomène est multi factoriel.","Graphie : « multifactoriel »."],
["La politique présente un caractère multidimensionnel.","La politique présente un caractère multi-dimensionnel.","Graphie : « multidimensionnel »."],
["Aucune mesure supplémentaire n'a été annoncée.","Aucune mesure supplémentaire n'a pas été annoncée.","Avec « aucune », pas de « pas »."],
["Personne ne conteste l'objectif général.","Personne ne conteste pas l'objectif général.","Avec « personne » sujet négatif, pas de « pas »."],
["Rien ne permet d'établir une amélioration durable.","Rien ne permet pas d'établir une amélioration durable.","Avec « rien » sujet négatif, pas de « pas »."],
["Le plan ne prévoit que trois mesures nouvelles.","Le plan prévoit seulement que trois mesures nouvelles.","Construction restrictive : « ne… que »."],
["Le taux est inférieur à 10 %.","Le taux est inférieur de 10 %.","Pour comparer à un seuil : « inférieur à »."],
["La part augmente de 5 points.","La part augmente à 5 points.","Variation : « augmenter de »."],
["Le budget s'élève à 100 millions d'euros.","Le budget s'élève de 100 millions d'euros.","Niveau : « s'élever à »."],
["Le budget passe de 80 à 100 millions d'euros.","Le budget passe entre 80 jusqu'à 100 millions d'euros.","« Passer de X à Y »."],
["En revanche, les délais se réduisent.","Par contre en revanche, les délais se réduisent.","Un seul connecteur d'opposition suffit."],
["Toutefois, cette progression reste limitée.","Cependant toutefois, cette progression reste limitée.","Un seul connecteur concessif suffit."],
["Dès lors, un renforcement du pilotage apparaît nécessaire.","Dès lors par conséquent, un renforcement du pilotage apparaît nécessaire.","Un seul connecteur de conséquence suffit."]
].map(([good,bad,why])=>({good,bad,why}));
V2_SYNTAX_BANK.push(...V4_SYNTAX_MORE);

// 4) Syntaxe : repérer plusieurs erreurs dans la même phrase
const SYNTAX_SPOT=[
["Malgré que les moyens ont augmentés, le dispositif ne permet pas de pouvoir réduire les écarts.",["malgré que","ont augmentés","permet de pouvoir"],"Bien que les moyens aient augmenté, le dispositif ne permet pas de réduire les écarts."],
["Le rapport appuie sur trois difficultés qui impactent fortement aux petites collectivités.",["appuie sur","impactent","aux petites collectivités"],"Le rapport met en évidence trois difficultés qui affectent fortement les petites collectivités."],
["L'ensemble des mesures ont été mises en œuvres progressivement depuis 2024.",["ont été","mises en œuvres"],"L'ensemble des mesures a été mis en œuvre progressivement depuis 2024."],
["La plupart des collectivités a bénéficié d'une aide qui leur permet à financer leurs projets.",["a bénéficié","permet à financer"],"La plupart des collectivités ont bénéficié d'une aide qui leur permet de financer leurs projets."],
["Le plan vise de renforcer la coordination et de pallier aux insuffisances du dispositif.",["vise de","pallier aux"],"Le plan vise à renforcer la coordination et à pallier les insuffisances du dispositif."],
["Le HCE impose cinq nouvelles mesures qu'il recommande au Gouvernement.",["impose","confusion recommandation/décision"],"Le HCE recommande au Gouvernement cinq nouvelles mesures."],
["L'INSEE décide que le taux de pauvreté est de 16,4 % et impose donc une nouvelle politique.",["décide","impose","autorité factuelle/normative"],"L'INSEE établit que le taux de pauvreté atteint 16,4 % ; cette donnée objectivise le diagnostic sans créer d'obligation."],
["Le rapport de l'IGAS met en place une réforme qu'il préconise pour 2027.",["met en place","préconise","recommandation/mise en œuvre"],"Le rapport de l'IGAS préconise une réforme ; son adoption doit être vérifiée séparément."],
["Le décret conseille aux entreprises de publier leur index sous peine de sanctions.",["conseille","mauvais niveau d'autorité"],"Le décret impose aux entreprises de publier leur index sous peine de sanctions."],
["La circulaire vote les modalités concrètes d'application de la loi.",["vote","fonction de la circulaire"],"La circulaire précise aux services les modalités concrètes d'application de la loi."],
["Le plan interministériel est une loi qui oblige plusieurs ministères à agir.",["plan = loi","portée juridique"],"Le plan interministériel coordonne l'action de plusieurs ministères sans constituer à lui seul une loi."],
["L'index est une sanction administrative qui note les entreprises sur 100.",["index = sanction","instrument/conséquence"],"L'index est un instrument de mesure ; des sanctions peuvent être prévues par le texte qui l'institue."],
["Une recommandation de la Cour des comptes a une autorité juridique supérieure à un décret.",["hiérarchie erronée","institutionnel/juridique"],"Une recommandation de la Cour des comptes a un poids institutionnel élevé mais ne prime pas juridiquement sur un décret."],
["Le dispositif est transversal car il possède des dimensions économique, sanitaire et territoriale.",["transversal","confusion multidimensionnel"],"Le dispositif est multidimensionnel car il comporte plusieurs dimensions distinctes."],
["Le phénomène est multidimensionnel car il touche étudiantes, détenues et femmes sans domicile.",["multidimensionnel","confusion transversal"],"Le phénomène est transversal car il concerne des publics aux profils variés."],
["Le problème est structurel puisqu'il apparaît seulement pendant la saison estivale.",["structurel","temporaire"],"Le problème est principalement conjoncturel puisqu'il apparaît lors d'une période déterminée."],
["La gouvernance est intégrée puisque les acteurs travaillent chacun avec leurs propres conventions bilatérales.",["intégrée","bilatéral/fragmenté"],"La gouvernance demeure fragmentée lorsque les coopérations restent bilatérales et sans cadre commun."],
["Le financement est pérenne car une subvention exceptionnelle est prévue pour une année.",["pérenne","exceptionnelle un an"],"Le financement reste ponctuel lorsqu'il repose sur une subvention exceptionnelle limitée à une année."],
["Le dispositif est coercitif car il propose une aide financière facultative.",["coercitif","aide facultative"],"Le dispositif est incitatif lorsqu'il repose sur une aide financière facultative."],
["Le dispositif est incitatif car le non-respect de l'obligation entraîne une amende.",["incitatif","amende"],"Le dispositif présente une dimension coercitive lorsque le non-respect entraîne une sanction."],
["Le plan est opérationnel puisqu'il annonce vingt mesures mais ne précise aucun calendrier ni financement.",["opérationnel","absence modalités"],"Le caractère opérationnel du plan reste à apprécier en l'absence de calendrier et de financement."],
["Le rapport recommande une réforme, donc la mesure est déjà engagée.",["donc","recommandation = mise en œuvre"],"Une recommandation reste un levier envisagé tant que son adoption n'est pas établie."],
["Le fonds et l'appel à projets sont la même chose puisqu'ils servent tous les deux à financer.",["fonds = appel à projets","fonction distincte"],"Le fonds est l'enveloppe financière ; l'appel à projets est une procédure de sélection."],
["Le référentiel n'a jamais aucune portée obligatoire.",["jamais","absolu"],"La portée d'un référentiel dépend de son fondement et des conséquences attachées à son respect."],
["Une AAI ne peut jamais prendre de décision contraignante car elle est indépendante.",["jamais","indépendance ≠ absence de pouvoirs"],"Les pouvoirs des AAI varient ; certaines disposent de pouvoirs de décision ou de sanction."],
["Le Conseil d'État donne uniquement des avis au Gouvernement.",["uniquement","fonction juridictionnelle oubliée"],"Le Conseil d'État conseille le Gouvernement mais exerce aussi une fonction juridictionnelle majeure."],
["Le préfet est une collectivité territoriale qui représente les élus locaux.",["préfet = collectivité","représente élus"],"Le préfet représente l'État dans le territoire."],
["L'ARS est une association régionale qui conseille les hôpitaux.",["association","conseille seulement"],"L'ARS est un établissement public de l'État qui pilote et régule la santé au niveau régional."],
["Une stratégie nationale et une feuille de route ont exactement la même fonction.",["exactement","orientation/opérationnel"],"La stratégie fixe une orientation ; la feuille de route la traduit en actions, étapes et responsabilités."],
["Une expérimentation est déjà destinée à s'appliquer définitivement à tout le territoire.",["déjà définitive","tout territoire"],"Une expérimentation teste un dispositif dans un périmètre limité avant une éventuelle généralisation."],
["Le mot multifactoriel veut dire qu'un problème touche plusieurs secteurs.",["multifactoriel","facteurs/secteurs"],"Multifactoriel signifie qu'un phénomène résulte de plusieurs facteurs."],
["Le mot systémique signifie simplement que le problème est très important.",["systémique","importance"],"Systémique signifie que le problème affecte le fonctionnement d'ensemble du système."],
["Le mot résiduel peut servir pour n'importe quelle inégalité qui persiste.",["résiduel","persistance seule"],"Résiduel suppose que le phénomène subsiste à un niveau devenu faible."],
["Une mesure ciblée est forcément plus équitable qu'une mesure universaliste.",["forcément","jugement automatique"],"Le ciblage décrit le périmètre ; l'équité dépend des critères, besoins et effets."]
].map(([bad,errors,ref])=>({bad,errors,ref}));
state.syntaxSpotIndex=state.syntaxSpotIndex||0;
renderSyntax=function(){const ex=V2_SYNTAX_BANK[state.syntaxIndex%V2_SYNTAX_BANK.length],rw=V2_REWRITE[state.v2RewriteIndex%V2_REWRITE.length],sp=SYNTAX_SPOT[state.syntaxSpotIndex%SYNTAX_SPOT.length];let choices=[ex.good,ex.bad];if(state.syntaxIndex%2)choices.reverse();$("syntax").innerHTML=`<div class="grid cols2"><div class="card"><span class="badge">Correction rapide ${state.syntaxIndex+1}/${V2_SYNTAX_BANK.length}</span><h2>Choisis la formulation correcte</h2>${choices.map(x=>`<button class="option" onclick="v2ChooseSyntax(this,${x===ex.good})">${escapeHtml(x)}</button>`).join("")}<div id="sFeedback"></div><div class="actions"><button class="btn ghost" onclick="v4RandomSyntax()">Aléatoire</button><button class="btn ghost" onclick="v2NextSyntax()">Suivant</button></div></div><div class="card"><span class="badge gold">Brouillon → copie ${state.v2RewriteIndex+1}/${V2_REWRITE.length}</span><h2>Réécris la phrase de brouillon</h2><div class="quote">${escapeHtml(rw.rough)}</div><textarea id="v2RwInput"></textarea><div class="actions"><button class="btn" onclick="v2CheckRewrite()">Corriger</button><button class="btn ghost" onclick="v2NextRewrite()">Suivant</button></div><div id="v2RwFeedback"></div></div></div><div class="card" style="margin-top:16px"><span class="badge green">Repère les erreurs ${state.syntaxSpotIndex+1}/${SYNTAX_SPOT.length}</span><h2>Repère tout ce qui ne va pas</h2><div class="quote"><b>${escapeHtml(sp.bad)}</b></div><div class="grid cols2"><div><label>Erreurs repérées</label><textarea id="spotErrors"></textarea></div><div><label>Ta réécriture</label><textarea id="spotRewrite"></textarea></div></div><div class="actions"><button class="btn" onclick="checkSyntaxSpot()">Corriger</button><button class="btn ghost" onclick="nextSyntaxSpot()">Suivant</button></div><div id="spotFeedback"></div></div>`;};
function v4RandomSyntax(){state.syntaxIndex=Math.floor(Math.random()*V2_SYNTAX_BANK.length);renderSyntax();}
function checkSyntaxSpot(){const ex=SYNTAX_SPOT[state.syntaxSpotIndex%SYNTAX_SPOT.length],score=Math.max(tokenScore($("spotRewrite").value,ex.ref),tokenScore($("spotErrors").value,ex.errors.join(" "))),ok=score>=.45;markAttempt("syntax",ok);$("spotFeedback").innerHTML=`<div class="feedback ${ok?'good':'warn'}"><b>Erreurs :</b> ${ex.errors.map(escapeHtml).join(" ; ")}<br><b>Réécriture :</b> ${escapeHtml(ex.ref)}</div>`;}
function nextSyntaxSpot(){state.syntaxSpotIndex=(state.syntaxSpotIndex+1)%SYNTAX_SPOT.length;renderSyntax();}

// 5) Suivi automatique « Mes erreurs » pour tous les exercices
const V4_MISTAKE_KEY="ndsMistakesV4";let v4Mistakes=JSON.parse(localStorage.getItem(V4_MISTAKE_KEY)||"[]");
function saveV4Mistakes(){localStorage.setItem(V4_MISTAKE_KEY,JSON.stringify(v4Mistakes));}
function addV4Mistake(module,prompt,user,correction){prompt=(prompt||"Exercice à revoir").trim().slice(0,700);user=(user||"").trim().slice(0,700);correction=(correction||"").trim().slice(0,1000);const key=norm(module+" "+prompt).slice(0,500),old=v4Mistakes.find(x=>x.key===key);if(old){old.count=(old.count||1)+1;old.user=user||old.user;old.correction=correction||old.correction;old.last=Date.now();}else v4Mistakes.unshift({key,module,prompt,user,correction,count:1,last:Date.now()});v4Mistakes=v4Mistakes.slice(0,200);saveV4Mistakes();}
function v4CaptureMistake(module){const map={extract:"extract",draft:"draft",plan:"plan",titles:"titles",vocab:"vocab",syntax:"syntax",reperes:"reperes"},sec=document.getElementById(map[module]||state.page);if(!sec)return;const quote=sec.querySelector(".quote"),heading=sec.querySelector("h2"),prompt=((heading?heading.innerText+" — ":"")+(quote?quote.innerText:"")).trim()||`Exercice ${module}`,user=[...sec.querySelectorAll("input,textarea,select")].map(x=>x.value).filter(Boolean).join(" | "),fbs=[...sec.querySelectorAll(".feedback")].map(x=>x.innerText).filter(Boolean),correction=fbs[fbs.length-1]||"Revoir la correction affichée.";addV4Mistake(module,prompt,user,correction);const fb=[...sec.querySelectorAll(".feedback")].pop();if(fb&&!fb.querySelector(".v4-error-note")){const n=document.createElement("div");n.className="tiny v4-error-note";n.style.marginTop="8px";n.innerHTML="📌 Ajouté automatiquement à <b>Mes erreurs</b>.";fb.appendChild(n);}}
const _markAttemptBeforeV4=markAttempt;markAttempt=function(module,ok){_markAttemptBeforeV4(module,ok);if(!ok)setTimeout(()=>v4CaptureMistake(module),0);};
if(!NAV.some(x=>x[0]==="mistakes"))NAV.push(["mistakes","Mes erreurs","Revoir les erreurs réellement commises"]);
if(!document.getElementById("mistakes")){const s=document.createElement("section");s.className="section";s.id="mistakes";document.querySelector("main.main").appendChild(s);}
$("nav").innerHTML=NAV.map(([id,label])=>`<button data-page="${id}">${label}</button>`).join("");
const _renderPageBeforeMistakes=renderPage;renderPage=function(page){if(page==="mistakes")return renderV4Mistakes();return _renderPageBeforeMistakes(page);};
function renderV4Mistakes(){$("datasetSelect").style.display="none";const groups=[...new Set(v4Mistakes.map(x=>x.module))];$("mistakes").innerHTML=`<div class="card"><h2>Mes erreurs</h2><p class="muted">Chaque réponse incorrecte est enregistrée automatiquement. Si la même erreur revient, son compteur augmente.</p><div class="chips"><span class="chip">${v4Mistakes.length} erreur(s) distincte(s)</span>${groups.map(g=>`<span class="chip">${escapeHtml(g)} : ${v4Mistakes.filter(x=>x.module===g).length}</span>`).join("")}</div><div class="actions"><button class="btn ghost" onclick="clearV4Mistakes()">Tout effacer</button></div></div>${v4Mistakes.length?`<div style="margin-top:16px">${v4Mistakes.map((x,i)=>`<div class="card" style="margin-bottom:12px"><div class="stage"><b>${escapeHtml(x.module)}</b><span class="score-pill">${x.count} fois</span></div><p><b>Exercice :</b> ${escapeHtml(x.prompt)}</p>${x.user?`<p><b>Ta réponse :</b> ${escapeHtml(x.user)}</p>`:""}<div class="feedback warn"><b>Correction :</b><br>${escapeHtml(x.correction)}</div><div class="actions"><button class="btn secondary" onclick="removeV4Mistake(${i})">Je maîtrise maintenant</button></div></div>`).join("")}</div>`:`<div class="card" style="margin-top:16px"><p>Aucune erreur enregistrée pour l'instant.</p></div>`}`;}
function removeV4Mistake(i){v4Mistakes.splice(i,1);saveV4Mistakes();renderV4Mistakes();}function clearV4Mistakes(){if(confirm("Effacer toutes les erreurs enregistrées ?")){v4Mistakes=[];saveV4Mistakes();renderV4Mistakes();}}

// Taille de la banque visible sur le tableau de bord
const _renderDashboardBeforeV4=renderDashboard;renderDashboard=function(){_renderDashboardBeforeV4();const d=$("dashboard");if(!d)return;const info=document.createElement("div");info.className="card";info.style.marginTop="16px";info.innerHTML=`<h2>Banque d'entraînement</h2><div class="chips"><span class="chip">${PUBLIC_INSTRUMENTS.length} instruments</span><span class="chip">${PUBLIC_ACTORS.length} acteurs</span><span class="chip">${PLAN_WORDS.length} mots de plan</span><span class="chip">${REPERE_QUIZ.length+REPERE_CASES_ADV.length+REPERE_COMPARE_ADV.length} exercices Repères</span><span class="chip">${V2_SYNTAX_BANK.length} choix de syntaxe</span><span class="chip">${SYNTAX_SPOT.length} « Repère les erreurs »</span></div></div>`;d.appendChild(info);};
