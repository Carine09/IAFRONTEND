# PRD · [Nom du projet]

> Product Requirements Document : le *quoi* et le *pourquoi*. **Source de vérité pour les règles métier.**
> On ne le modifie qu'après une décision, notée au §11.
> Les lignes « Exemple » viennent de Studio Lumen : remplacez-les par les vôtres.

## 1. Contexte

[2 à 3 phrases : qui porte le projet, dans quelle situation.]

## 2. Problème à résoudre

[Le problème, du point de vue de l'utilisateur. Pas encore la solution.]

## 3. Utilisateurs

| Profil | Besoin principal | Contexte d'usage |
| --- | --- | --- |
| Exemple : futur client | Prendre rendez-vous rapidement | Sur mobile, souvent le soir |

## 4. Périmètre

### 4.1 Dans la V1

- [Fonctionnalité 1]
- [Fonctionnalité 2]
- [Fonctionnalité 3 — trois au maximum pour une V1]

### 4.2 Hors périmètre

- [Ce qu'on ne fera pas, et pourquoi. Aussi important que le reste.]

## 5. Exigences

### 5.1 Règles métier

| ID | Règle | Exemple |
| --- | --- | --- |
| RM-01 | Exemple : une demande de contact concerne un seul type de prestation | Portrait, mariage ou reportage |

### 5.2 Règles de données et de validation

| ID | Donnée | Règle |
| --- | --- | --- |
| RD-01 | Exemple : email | Obligatoire, format valide |
| RD-02 | Exemple : message | Obligatoire, 2 000 caractères maximum |

### 5.3 Exigences fonctionnelles

| ID | Besoin | Critères d'acceptation | Priorité |
| --- | --- | --- | --- |
| EX-001 | En tant que client, je veux envoyer une demande de contact, afin d'être rappelé | Les trois champs sont obligatoires ; une erreur s'affiche sous le champ fautif ; un message confirme l'envoi | Haute |

> Une exigence = un identifiant stable. Le code, les commits et le plan d'implémentation y renvoient.

## 6. Exigences non fonctionnelles

| Domaine | Exigence |
| --- | --- |
| Accessibilité | RGAA : [niveau visé, critères prioritaires] |
| Éco-conception | [Poids de page maximal, pas d'image non optimisée…] |
| Performance | [Exemple : affichage en moins de 2 s sur mobile 4G] |
| Sécurité | [Données sensibles, authentification…] |
| RGPD | [Données personnelles collectées, durée de conservation] |

## 7. Indicateurs de succès

- [Exemple : 20 demandes de contact par mois]

## 8. Hypothèses

- [Ce qu'on suppose vrai sans l'avoir vérifié.]

## 9. Risques

| Risque | Probabilité | Parade |
| --- | --- | --- |
| [Risque] | [Faible / moyenne / forte] | [Ce qu'on prévoit] |

## 10. Questions ouvertes

- [ ] [Question à trancher, et qui la tranche]

## 11. Journal des décisions

| Date | Décision | Pourquoi | Impacts |
| --- | --- | --- | --- |
| [AAAA-MM-JJ] | Exemple : pas de compte utilisateur en V1 | Réduire le périmètre | Retirer l'écran de connexion d'APP_FLOW |
