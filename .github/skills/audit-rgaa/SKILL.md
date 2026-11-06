---
name: audit-rgaa
description: Audite un composant ou une page selon le RGAA (noms accessibles, clavier, contrastes, erreurs de formulaire). À utiliser après la création ou la modification d’un composant d’interface ou d’un formulaire.
---

# Audit RGAA

1. Lister les éléments interactifs du composant ou de la page.
2. Vérifier que chacun a un nom accessible (label, aria-label).
3. Vérifier la navigation au clavier et la visibilité du focus.
4. Vérifier les contrastes du texte : 4,5:1 minimum.
5. Vérifier que les erreurs sont reliées au champ et annoncées.
6. Vérifier que les messages de statut sont annoncés (role="status").

## Sortie attendue

Un tableau : critère · statut (conforme ou non conforme) · correctif proposé.

Ne modifie aucun fichier : propose seulement les correctifs.