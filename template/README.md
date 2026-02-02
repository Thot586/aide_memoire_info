# 🎨 Dark Theme Template

Un template de design moderne avec **glassmorphism**, **effets de glow**, et une palette **sky/slate** cohérente.

## ✨ Caractéristiques

- 🌙 **Dark Theme** élégant avec dégradés subtils
- 🪟 **Glassmorphism** (effets de verre translucide)
- ✨ **Shine Effects** (reflets au survol)
- 💡 **Glow Effects** (halos lumineux)
- 📱 **Responsive** (mobile-first)
- ♿ **Accessible** (focus visible, contraste optimal)

## 📁 Structure

```
template/
├── css/
│   └── styles.css      # Design system complet
├── js/
│   └── app.js          # Utilitaires JS
├── index.html          # Page démo
└── README.md           # Documentation
```

## 🚀 Utilisation

### 1. Copier le dossier template

Copiez ce dossier `template/` dans votre nouveau projet.

### 2. Inclure les fichiers

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <!-- Font Awesome (optionnel) -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    
    <!-- Styles du template -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Votre contenu -->
    
    <script src="js/app.js"></script>
</body>
</html>
```

## 🎯 Composants disponibles

### Cartes Glass

```html
<div class="glass-card card-glow shine-effect">
    <h3>Titre</h3>
    <p>Contenu de la carte</p>
</div>
```

### Boutons

```html
<button class="btn-primary">Primaire</button>
<button class="btn-secondary">Secondaire</button>
<button class="btn-ghost">Ghost</button>
<button class="btn-icon"><i class="fas fa-heart"></i></button>
```

### Filtres

```html
<button class="filter-btn active">Actif</button>
<button class="filter-btn">Inactif</button>
```

### Inputs

```html
<div class="input-with-icon">
    <i class="fas fa-search icon"></i>
    <input type="text" class="input" placeholder="Rechercher...">
</div>
```

### Badges

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
```

### Header avec Glow

```html
<header class="header-glow">
    <div class="relative z-10 text-center">
        <h1 class="gradient-text">Titre</h1>
    </div>
</header>
```

## 🎨 Variables CSS

Personnalisez facilement les couleurs dans `css/styles.css` :

```css
:root {
    --color-primary: #0ea5e9;        /* Couleur principale */
    --color-bg-dark: #0f172a;        /* Fond sombre */
    --color-text-primary: #f8fafc;   /* Texte clair */
    /* ... voir le fichier pour toutes les variables */
}
```

## 📝 License

Basé sur le design de IT Cheatsheets - Dr FENOHASINA Toto Jean Felicien
