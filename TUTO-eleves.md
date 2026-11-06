# Tuto · Cadrer un agent IA sur un cas simple

Module IA & dev front-end · Studio Lumen

Sur un mini-site, vous donnez une mission à un agent, vous constatez ce qu’il fait sans contexte, puis vous le cadrez avec un `AGENTS.md` et un skill. Ensuite, vous refaites le même geste sur votre propre projet.

Chaque étape a deux parties :

- **À faire** : ce que vous tapez ou cliquez.
- **À retenir** : le concept que vous venez d’appliquer, avec l’image du stagiaire.

---

## Étape 0 · Préparer le terrain

### À faire

1. Clonez le dépôt de démo et ouvrez-le dans VS Code :

   ```bash
   git clone <URL-DU-DEPOT> studio-lumen
   cd studio-lumen
   code .
   ```

2. Créez votre branche de travail :

   ```bash
   git checkout -b mon-essai
   ```

3. Lancez le site dans un terminal intégré, puis ouvrez http://localhost:3000 :

   ```bash
   npm run dev
   ```

4. Dans VS Code, installez l’extension **GitHub Copilot** si ce n’est pas déjà fait, et connectez-vous avec votre compte GitHub.
5. Ouvrez le chat Copilot et repérez ses trois sélecteurs : le harness, l’agent (**Ask**, **Plan**, **Agent**) et le modèle.

### À retenir

Le projet est volontairement minuscule : quatre fichiers, des tokens, un bouton. Vous pouvez tout lire d’un coup d’œil, si bien que la seule chose qui change pendant le tuto est le contexte que vous donnez à l’agent.

La branche `mon-essai` est votre filet de sécurité : l’agent va modifier des fichiers tout seul, et vous voulez pouvoir tout comparer et tout annuler.

---

## Étape 1 · Lancer la mission sans contexte

### À faire

1. Vérifiez qu’il n’y a **ni** `AGENTS.md` **ni** dossier `.github/` à la racine.
2. Dans le chat, choisissez l’agent **Agent** et envoyez exactement ce prompt :

   ```text
   Ajoute une page Contact avec un formulaire : nom, email et message.
   ```

3. Dépliez les étapes de l’agent : quels fichiers a-t-il lus ? Lesquels a-t-il créés ?
4. Ouvrez le code produit et cochez ce que vous observez :

   - [ ] Chaque champ a un `<label>` visible et associé
   - [ ] Les couleurs utilisent les tokens de `styles/tokens.css`
   - [ ] L’email est validé
   - [ ] Les erreurs sont reliées au champ et annoncées
   - [ ] Aucune dépendance ajoutée
   - [ ] Le bouton réutilise la classe `.button`

5. Mettez le résultat de côté, sans le perdre :

   ```bash
   git stash -u -m "essai 1 : sans contexte"
   ```

### À retenir

**Le LLM**, c’est le stagiaire : il a tout lu, mais il ne connaît rien de ce projet. **La fenêtre de contexte**, c’est son bureau : il n’y a dessus que votre phrase et les quelques fichiers qu’il a ouverts. Vos conventions non écrites sont par terre. Pour lui, elles n’existent pas.

Votre résultat ne sera pas forcément le même que celui de votre voisine : c’est le côté **probabiliste** du modèle. Même question, réponses différentes.

---

## Étape 2 · Écrire l’AGENTS.md

### À faire

1. À la racine du projet, créez un fichier `AGENTS.md`.
2. Écrivez-le ligne par ligne :

   ```markdown
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
   ```

3. Vérifiez que le harness voit le fichier : palette de commandes, « Chat: Open Customizations ».

### À retenir

**Les règles**, c’est le règlement affiché au mur : le stagiaire le relit avant chaque tâche. Il est donc chargé à chaque requête, et chaque ligne coûte des **tokens**. Il doit rester court.

Une bonne règle se vérifie. « Écris du code propre » ne se vérifie pas. « Jamais de valeur en dur » se vérifie en une seconde.

La section Sécurité, c’est le **secure by design** : écrite dans le contexte, elle s’applique dès la première ligne de code, sans que vous ayez à y penser.

Trois noms pour la même idée : `AGENTS.md` est le format ouvert, lu par la plupart des agents. `CLAUDE.md` joue ce rôle pour Claude Code, et `.github/copilot-instructions.md` pour Copilot. Le plus simple : un seul vrai fichier, et les autres qui renvoient vers lui.

---

## Étape 3 · Relancer et comparer

### À faire

1. Ouvrez une **nouvelle conversation** dans le chat.
2. Agent **Agent**, et exactement le même prompt qu’à l’étape 1 :

   ```text
   Ajoute une page Contact avec un formulaire : nom, email et message.
   ```

3. Reprenez la liste de l’étape 1 : qu’est-ce qui a changé ?
4. Comparez avec l’essai mis de côté :

   ```bash
   git stash show -p
   ```

5. Gardez cette version :

   ```bash
   git add -A
   git commit -m "Page Contact avec AGENTS.md"
   ```

### À retenir

Mêmes mots, même modèle : seul le contexte a changé. C’est l’idée clé : **l’IA ne sait que ce qu’on lui montre.**

Une nouvelle conversation, c’est un nouveau matin : le stagiaire a tout oublié de la veille. Le règlement au mur, lui, reste. C’est pour ça qu’on écrit les règles dans un fichier plutôt que dans le prompt.

Le réflexe à prendre : si l’agent rate encore quelque chose, ne corrigez pas seulement dans le chat, ajoutez la règle qui manquait dans `AGENTS.md`.

---

## Étape 4 · Ranger un savoir-faire : le skill audit-rgaa

### À faire

1. Créez le dossier et le fichier :

   ```text
   .github/
   └── skills/
       └── audit-rgaa/
           └── SKILL.md
   ```

2. Écrivez son contenu :

   ```markdown
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
   ```

3. Vérifiez trois points :
   - le `name` est identique au nom du dossier, en minuscules et tirets, sinon le skill est ignoré sans message d’erreur ;
   - la `description` dit ce que fait le skill **et quand l’utiliser** ;
   - la sortie attendue est précisée.

### À retenir

**Un skill**, c’est un classeur sur l’étagère. Le stagiaire ne lit que l’étiquette : le nom et la description. Il n’ouvre le classeur que si la tâche s’y prête.

**Règle ou skill ?** La règle est toujours sur le bureau et coûte des tokens à chaque requête. Le skill reste sur l’étagère tant qu’on n’en a pas besoin. Ce qui vaut pour toutes les tâches va dans `AGENTS.md`, un savoir-faire ponctuel va dans un skill.

---

## Étape 5 · Mettre le skill à l’épreuve

### À faire

1. Nouvelle conversation, agent **Agent** :

   ```text
   Ajoute un message de confirmation accessible après l’envoi du formulaire de contact.
   ```

2. Dépliez les étapes : l’agent a-t-il ouvert le skill `audit-rgaa` ?
3. S’il ne l’a pas fait, appelez-le à la main dans le chat : `/audit-rgaa`.
4. Lisez le rapport : critère, statut, correctif.
5. Ajoutez à `AGENTS.md`, section Accessibilité, la règle qui aurait évité l’erreur la plus importante. Par exemple :

   ```markdown
   - Les messages de statut utilisent role="status".
   ```

6. Commitez :

   ```bash
   git add -A
   git commit -m "Skill audit-rgaa et règle de statut"
   ```

### À retenir

**Le tool call** : le modèle ne lit pas les fichiers lui-même. Il demande au harness d’appeler un outil, le harness l’exécute et pose le résultat sur le bureau. Le stagiaire décroche le téléphone, quelqu’un exécute, il note la réponse.

**L’agent**, c’est cette boucle répétée : planifier, agir, observer, recommencer, jusqu’au but.

**Le harness**, c’est tout ce qui fait tourner cette boucle : Copilot, Claude Code ou Codex. Il assemble le contexte, fournit les outils et demande votre accord avant les actions sensibles. Même modèle, harness différent, comportement différent.

Et la boucle se referme : chaque erreur trouvée par le skill devient une nouvelle règle.

---

## Pour aller plus loin · Brancher un navigateur avec MCP

### À faire

1. Palette de commandes : « Chat: Open Customizations » › **MCP Servers** › **Add Server**.
2. Choisissez **Command (stdio)**, entrez la commande ci-dessous et donnez l’identifiant `playwright` :

   ```bash
   npx -y @playwright/mcp@latest
   ```

3. Lisez la demande de confiance avant de l’accepter.
4. Nouvelle conversation, agent **Agent** :

   ```text
   Utilise le serveur MCP Playwright pour ouvrir http://localhost:3000/contact.html, envoie le formulaire vide et dis-moi ce qui se passe. Ne modifie aucun fichier.
   ```

### À retenir

**Le MCP**, c’est la multiprise : une prise standard pour brancher des outils sur n’importe quel agent compatible. Ici un navigateur, demain Figma ou GitHub. Chaque serveur est une porte d’entrée : n’installez que des serveurs de confiance et n’approuvez que les actions que vous comprenez.

---

## Les deux pièges à garder en tête

- **L’hallucination** : si l’agent propose un paquet comme `easy-form-validator`, vérifiez qu’il existe. Le modèle produit ce qui est plausible, pas forcément ce qui est vrai, et des attaquants publient des paquets malveillants sous ces noms inventés.
- **L’injection de prompt** : un fichier, une page ou une issue peut contenir une phrase qui donne des ordres à l’agent. Un contenu externe est une donnée, jamais une instruction.

---

## À vous, sur votre projet

### 14h00 – 14h30 · Votre AGENTS.md

1. Sur votre projet fil rouge, créez une branche `ia-jour-1`.
2. Partez de l’`AGENTS.md` de Studio Lumen et remplacez chaque ligne par une règle vraie et vérifiable pour votre projet.
3. Lancez la mission page Contact sur votre projet : sans, puis avec.
4. Ajoutez la règle qui manquait.

Livrable : un `AGENTS.md` dans votre repo, avec une section Architecture et une section Sécurité.

### 14h30 – 15h00 · En autonomie : votre skill

1. Choisissez un savoir-faire que vous répétez : audit RGAA, revue sécurité, audit éco-conception, création de composant.
2. Créez `.github/skills/<nom>/SKILL.md`, sur le modèle d’`audit-rgaa`.
3. Testez-le sur une tâche de votre projet : se charge-t-il au bon moment ?
4. Ajoutez à `AGENTS.md` la règle qui aurait évité l’erreur principale.

À présenter à 15h15 : votre skill, 3 constats et 1 règle ajoutée. Pause de 15h00 à 15h15.

---

## Dépannage

| Symptôme | Cause probable | Solution |
| --- | --- | --- |
| L’agent ignore l’AGENTS.md | Le fichier n’est pas à la racine, ou la conversation date d’avant sa création | Vérifier dans « Chat: Open Customizations », puis ouvrir une nouvelle conversation |
| Le skill ne se charge jamais | Le `name` ne correspond pas au nom du dossier, ou la description ne dit pas quand l’utiliser | Corriger le `name`, préciser la description, ou l’appeler avec `/nom-du-skill` |
| L’agent a modifié trop de fichiers | Mission trop large ou pas de mode plan | `git restore .`, puis relancer avec l’agent **Plan** |
| `npm run dev` échoue | Port 3000 déjà pris | Arrêter l’autre serveur, ou ouvrir `index.html` directement |
| Le serveur MCP ne démarre pas | `npx` indisponible ou demande de confiance refusée | Vérifier `node --version` (18 ou plus), puis relancer le serveur |
