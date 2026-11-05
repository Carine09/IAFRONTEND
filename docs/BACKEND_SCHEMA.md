# BACKEND_SCHEMA · [Nom du projet]

> Tables, colonnes et droits d'accès. Pas de backend en V1 ? Écrivez simplement « Aucun backend en V1 » : l'agent saura qu'il ne doit pas en inventer un.

## 1. Tables

### 1.1 [Nom de la table — exemple : demandes_contact]

| Colonne | Type | Obligatoire | Description |
| --- | --- | --- | --- |
| id | uuid | Oui | Identifiant |
| nom | texte | Oui | Nom saisi |
| email | texte | Oui | Email saisi (RD-01) |
| message | texte | Oui | 2 000 caractères maximum (RD-02) |
| cree_le | date et heure | Oui | Date d'envoi |

> Copiez le bloc 1.1 pour chaque table.

## 2. Relations

- [Exemple : une demande appartient à un type de prestation]

## 3. Droits d'accès

| Rôle | demandes_contact |
| --- | --- |
| Visiteur | Création uniquement |
| Administratrice | Lecture, suppression |

## 4. Données personnelles (RGPD)

| Donnée | Pourquoi on la garde | Durée de conservation |
| --- | --- | --- |
| Email | Répondre à la demande | [Exemple : 12 mois] |
