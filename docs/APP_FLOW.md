# APP_FLOW · [Nom du projet]

> Routes, écrans, et ce que fait chaque clic. L'agent s'en sert pour savoir où ranger une page et comment elle se comporte.

## 1. Plan des routes

| Route | Écran | Accès | Exigences |
| --- | --- | --- | --- |
| `/` | Accueil | Public | — |
| `/contact.html` | Contact | Public | EX-001 |

## 2. Parcours principal

1. [Exemple : l'utilisateur arrive sur l'accueil]
2. [Il clique sur « Prendre rendez-vous »]
3. [Il arrive sur Contact, remplit le formulaire, envoie]
4. [Un message confirme l'envoi]

## 3. Écrans

### 3.1 [Nom de l'écran — exemple : Contact]

- **Rôle** : [à quoi sert l'écran, en une phrase]
- **Éléments** : [champs, boutons, listes]

| Action | Résultat |
| --- | --- |
| Clic sur « Envoyer », formulaire incomplet | Erreurs sous chaque champ fautif, focus sur le premier |
| Clic sur « Envoyer », formulaire valide | Formulaire vidé, message de confirmation annoncé |

**États à prévoir** : chargement · vide · erreur · succès.

**Accessibilité** : titre de page unique ; où va le focus après chaque action.

> Copiez le bloc 3.1 pour chaque écran.
