# TRD · [Nom du projet]

> Technical Requirements Document : le *comment*. **Source de vérité pour les choix techniques.**
> Une nouvelle décision technique = un nouvel ADR au §5, jamais une modification silencieuse.

## 1. Stack

| Couche | Choix | Version |
| --- | --- | --- |
| Front | [Exemple : HTML, CSS et JS natifs] | — |
| Back | [Exemple : aucun en V1] | — |
| Hébergement | [Exemple : GitHub Pages] | — |

## 2. Commandes

| Usage | Commande |
| --- | --- |
| Lancer en local | `npm run dev` |
| Tests | `npm test` |
| Lint | `npm run lint` |

## 3. Architecture

```text
[nom-du-projet]/
├── index.html
├── styles/       tokens et styles globaux
├── components/   un composant = un fichier CSS (et JS si besoin)
├── scripts/      comportements des pages
└── docs/         ce dossier
```

- [Ce qui s'exécute côté client, côté serveur]
- [Ce qu'un composant d'affichage n'a pas le droit de faire]

## 4. Conventions

- Nommage : [exemple : fichiers en kebab-case, classes CSS en BEM]
- Commits : `type(EX-xxx): description`, par exemple `feat(EX-001): formulaire de contact`.
- Langue du code et des commentaires : [français / anglais]

## 5. Décisions techniques (ADR)

### ADR-001 · [Titre — exemple : pas de framework JS]

- **Contexte** : [la situation qui impose un choix]
- **Décision** : [ce qu'on a choisi]
- **Alternatives écartées** : [et pourquoi]
- **Conséquences** : [ce que ça implique, en bien et en moins bien]

> Copiez le bloc pour chaque nouvelle décision : ADR-002, ADR-003…

## 6. Sécurité

- Les secrets vivent dans des variables d'environnement, jamais dans le code ni dans le dépôt.
- Toute entrée est validée côté client **et** côté serveur.
- Aucun `innerHTML` avec des données externes.
- [Règles propres au projet : CSP, authentification…]

## 7. Tests

- [Ce qu'on teste, avec quoi, et quand]

## 8. Déploiement

- [Où, comment, et qui valide avant la mise en ligne]
