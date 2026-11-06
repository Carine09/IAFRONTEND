# AGENTS.md · Studio Lumen

## Projet
Site vitrine d’une photographe.

## Stack
- HTML, CSS et JS natifs. Pas de framework.
- Lancer le site : `npm run dev` (http://localhost:3000).

## Architecture
- Une page = un fichier .html à la racine.
- Styles dans styles/, composants dans components/, scripts dans scripts/.

## Design system
- Couleurs et espacements via styles/tokens.css.
- Jamais de valeur en dur.
- Tout bouton utilise la classe .button.

## Accessibilité
- Chaque champ a un <label> visible.
- Les erreurs sont reliées au champ (aria-describedby) et annoncées.
- Tout fonctionne au clavier, avec un focus visible.

## Sécurité
- Aucun secret dans le code.
- Pas d’innerHTML avec des données saisies : utiliser textContent.

## Interdits
- Ne modifie pas tokens.css sans demander.
- Aucune dépendance sans la justifier.