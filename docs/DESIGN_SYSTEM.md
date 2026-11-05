# DESIGN_SYSTEM · [Nom du projet]

> Tokens et composants. Reprenez ce que vous avez construit au module design system. Règle d'or : jamais de valeur en dur, et on réutilise un composant avant d'en créer un.

## 1. Tokens

Fichier source : `[styles/tokens.css]`

### 1.1 Couleurs

| Token | Valeur | Usage | Contraste |
| --- | --- | --- | --- |
| `--color-primary` | Exemple : `#1f4e5f` | Boutons, liens | 9:1 sur blanc |
| `--color-text` | | Texte courant | |
| `--color-error` | | Messages d'erreur | |

### 1.2 Espacements

| Token | Valeur |
| --- | --- |
| `--space-1` | Exemple : `0.25rem` |

### 1.3 Typographie

| Token | Valeur | Usage |
| --- | --- | --- |
| `--font-size-md` | Exemple : `1rem` | Texte courant |

## 2. Composants

| Composant | Fichier | Variantes | Règles d'accessibilité |
| --- | --- | --- | --- |
| Bouton | `components/button.css` | primaire | Focus visible, libellé explicite |
| Champ de formulaire | `components/form.css` | texte, email, zone de texte | Label visible, erreur reliée par `aria-describedby` |

## 3. Règles d'usage

- [Exemple : un seul bouton primaire par écran]
- [Exemple : les icônes seules ont toujours un libellé accessible]
