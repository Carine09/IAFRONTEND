# IMPLEMENTATION_PLAN · [Nom du projet]

> Phases, lots, gates et Definition of Done. L'agent travaille un lot à la fois, et un lot n'est fini que lorsque sa Definition of Done est remplie.

## 1. Phases

| Phase | Objectif | Gate pour passer à la suite |
| --- | --- | --- |
| 0 · Fondations | Projet initialisé, docs remplies, tokens en place | Le site se lance ; PRD et TRD relus |
| 1 · MVP | Les exigences « Haute » du PRD | Toutes passent leurs critères d'acceptation |
| 2 · Finitions | Audit RGAA, éco-conception, performance | Aucune non-conformité bloquante |
| 3 · Mise en ligne | Déploiement | Validation humaine avant publication |

## 2. Lots

| Lot | Phase | Contenu | Exigences | Statut |
| --- | --- | --- | --- | --- |
| L0.1 | 0 | Initialiser le projet et les tokens | — | À faire |
| L1.1 | 1 | Exemple : page Contact et validation | EX-001, RD-01, RD-02 | À faire |

> Un lot doit tenir en une session de travail. Trop gros ? Découpez-le.

## 3. Definition of Done

Un lot est terminé quand :

- [ ] Tous les critères d'acceptation des exigences liées sont remplis
- [ ] Les tests passent
- [ ] Le skill d'audit RGAA ne signale aucune non-conformité bloquante
- [ ] Aucune valeur en dur : uniquement des tokens
- [ ] Aucune dépendance ajoutée sans justification
- [ ] Les docs sont à jour (APP_FLOW, ADR si nouvelle décision)
- [ ] Le commit cite l'identifiant de l'exigence
- [ ] Une relecture humaine a validé le code
