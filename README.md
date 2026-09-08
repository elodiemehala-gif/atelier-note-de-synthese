# Atelier Note de Synthèse

Application d'entraînement à la note de synthèse, construite autour de la méthodologie ISP et d'exercices issus de dossiers administratifs réels.

## Objectif

L'application entraîne les décisions à prendre pendant l'épreuve plutôt que de rédiger à la place du candidat :

- **Extraire** : thème → idée → preuve forte → document → place dans le plan
- **Condenser** : brouillon minimaliste à trous
- **Organiser** : construire un plan à partir d'un brouillon, en croisant le plan-type et l'énoncé
- **Formuler** : titres, chapeaux et transitions
- **Vocabulaire** : lexique actif de note de synthèse
- **Syntaxe** : fautes fréquentes de concours
- **Simulation** : entraînement chronométré avec budget de mots
- **Progression** : suivi local des exercices réalisés

## Utilisation

L'application est statique : aucun serveur n'est nécessaire. Ouvrir `index.html` dans un navigateur, ou publier le dépôt avec GitHub Pages.

La progression est stockée uniquement dans le navigateur (`localStorage`).

## Structure

- `index.html` : interface
- `styles.css` : mise en forme
- `data.js` : sujets, brouillons et exercices
- `app.js` : logique de l'application

## Principe pédagogique

> THÈME → IDÉE → PREUVE FORTE → DOCUMENT → PLACE DANS LE PLAN → RÉDACTION

Le plan de référence n'est pas présenté comme l'unique plan possible : un autre plan peut être valide s'il couvre entièrement le sujet, suit une progression logique, reste équilibré et respecte la méthodologie de l'épreuve.
