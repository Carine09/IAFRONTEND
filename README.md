# Kit d'instructions pour agent IA

À copier à la racine de votre projet. À la fin, votre agent sait **quoi** construire, **comment**, **dans quel ordre**, et **quand c'est fini**.

## Ce qu'il contient

```text
├── AGENTS.md                      le sommaire : règles courtes + où trouver le reste
├── CLAUDE.md                      renvoie vers AGENTS.md (Claude Code)
├── .github/
│   ├── copilot-instructions.md    renvoie vers AGENTS.md (Copilot)
│   └── skills/audit-rgaa/         le skill du tuto
└── docs/
    ├── PRD.md                     le quoi et le pourquoi : règles métier, exigences
    ├── APP_FLOW.md                les écrans et ce que fait chaque clic
    ├── BACKEND_SCHEMA.md          les données et les droits
    ├── TRD.md                     le comment : stack, conventions, décisions
    ├── DESIGN_SYSTEM.md           les tokens et les composants
    └── IMPLEMENTATION_PLAN.md     les étapes et la Definition of Done
```

## Pourquoi AGENTS.md reste court

Il est relu à chaque requête : chaque ligne coûte des tokens. Il contient donc seulement les règles toujours valables, et le sommaire des documents. L'agent ouvre ensuite le document dont la tâche a besoin, comme on va chercher un classeur sur l'étagère.

## Dans quel ordre le remplir

| Quand | Documents |
| --- | --- |
| Fin du jour 1 | `AGENTS.md`, `PRD.md` §1 à §5, `APP_FLOW.md` |
| Avant le jour 2 | `TRD.md`, `DESIGN_SYSTEM.md` (repris du module design system) |
| Jour 2, au démarrage | `BACKEND_SCHEMA.md`, `IMPLEMENTATION_PLAN.md` |

## Trois règles d'or

1. **Une information vit à un seul endroit.** Ailleurs, on renvoie vers elle.
2. **Chaque exigence a un identifiant** (`EX-001`), cité dans le plan et dans les commits.
3. **Toute décision s'écrit** : au §11 du PRD pour le métier, en ADR dans le TRD pour la technique.

## Astuce

Faites relire chaque document par l'agent avant de coder : « Lis docs/PRD.md et liste-moi ce qui est ambigu ou contradictoire. » Une question posée maintenant évite une heure de code à refaire.
