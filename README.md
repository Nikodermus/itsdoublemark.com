# 🎮 APEIRON - Landing Page

**Desciende, Mejora, Muere**

Landing page para el videojuego APEIRON de Double Mark. Un shooter en tercera persona con combates en arenas, ambientado en una plataforma petrolera abandonada.

---

## 📁 Estructura del Proyecto

```
apeiron-project/
│
├── index.html              # Página principal
│
├── css/
│   ├── variables.css       # Variables CSS (colores, tipografías, espaciados)
│   ├── reset.css           # Reset/Normalización de estilos
│   ├── base.css            # Estilos base y tipografía
│   ├── components.css      # Componentes reutilizables (botones, cards)
│   ├── layout.css          # Layout (navegación, grids, footer)
│   ├── sections.css        # Estilos específicos de cada sección
│   ├── animations.css      # Keyframes y animaciones
│   └── responsive.css      # Media queries responsive
│
├── js/
│   ├── navigation.js       # Menú móvil y scroll suave
│   ├── animations.js       # Animaciones al scroll
│   └── main.js             # Utilidades generales
│
├── images/
│   ├── icons/              # Iconos SVG de features
│   │   ├── icon-combat.svg
│   │   ├── icon-upgrade.svg
│   │   ├── icon-robot.svg
│   │   ├── icon-story.svg
│   │   ├── icon-challenge.svg
│   │   └── icon-humor.svg
│   │
│   ├── characters/         # Arte de personajes
│   │   ├── character-engineer.jpg
│   │   ├── character-companion.jpg
│   │   └── character-boss.jpg
│   │
│   ├── zones/              # Screenshots de zonas
│   │   ├── zone-industrial.jpg
│   │   ├── zone-laboratory.jpg
│   │   └── zone-ruins.jpg
│   │
│   ├── screenshot-concept.jpg    # Screenshot principal
│   ├── og-image.jpg              # Imagen para redes sociales (1200x630)
│   ├── logo-doublemark.svg       # Logo Double Mark
│   ├── favicon-32x32.png         # Favicon 32px
│   ├── favicon-16x16.png         # Favicon 16px
│   └── apple-touch-icon.png      # Icono para iOS (180x180)
│
├── fonts/                  # Fuentes locales (opcional)
│
└── README.md               # Este archivo
```

---

## 🚀 Instalación

1. **Descarga** o clona el proyecto
2. **Abre** `index.html` en tu navegador

No requiere instalación de dependencias ni build tools.

---

## 🎨 Personalización

### Cambiar Colores

Edita `css/variables.css` y modifica las variables:

```css
:root {
    --color-accent-yellow: #f4c542;   /* Color primario */
    --color-accent-orange: #e8793a;   /* Acento secundario */
    --color-accent-red: #c44569;      /* Acento terciario */
    --color-accent-magenta: #9b2d6b;  /* Degradado */
    --color-accent-purple: #6b2d5c;   /* Degradado */
}
```

### Cambiar Tipografías

En `css/variables.css`:

```css
:root {
    --font-display: 'Bebas Neue', sans-serif;  /* Títulos */
    --font-mono: 'Share Tech Mono', monospace;  /* Cuerpo */
}
```

Y actualiza el link de Google Fonts en `index.html`.

---

## 🖼️ Imágenes Requeridas

### Dimensiones Recomendadas

| Imagen | Tamaño | Formato |
|--------|--------|---------|
| `screenshot-concept.jpg` | 1200 x 800 px | JPG/WebP |
| `zone-*.jpg` | 800 x 400 px | JPG/WebP |
| `character-*.jpg` | 600 x 500 px | JPG/WebP |
| `og-image.jpg` | 1200 x 630 px | JPG |
| `icon-*.svg` | 48 x 48 px | SVG |
| `favicon-32x32.png` | 32 x 32 px | PNG |
| `favicon-16x16.png` | 16 x 16 px | PNG |
| `apple-touch-icon.png` | 180 x 180 px | PNG |

### Generar Favicons

Usa [RealFaviconGenerator](https://realfavicongenerator.net/) para generar todos los tamaños de favicon desde una imagen de 512x512px.

---

## 📱 Responsive Breakpoints

| Breakpoint | Dispositivo |
|------------|-------------|
| > 1400px | Desktop grande |
| 1024px - 1399px | Desktop |
| 768px - 1023px | Tablet |
| 640px - 767px | Mobile landscape |
| < 640px | Mobile portrait |
| < 375px | Mobile pequeño |

---

## ⚡ Características Incluidas

- ✅ **Mobile-first** responsive design
- ✅ **Menú hamburguesa** en móvil
- ✅ **Smooth scroll** en navegación
- ✅ **Animaciones al scroll** (Intersection Observer)
- ✅ **Navbar transparente → sólida** al hacer scroll
- ✅ **Accesibilidad** (ARIA labels, focus visible, reduced motion)
- ✅ **SEO** optimizado (meta tags, Open Graph, Twitter Cards)
- ✅ **Performance** (lazy loading, CSS variables, sin jQuery)
- ✅ **Print styles** incluidos

---

## 🌐 Despliegue

### Opción 1: GitHub Pages
1. Sube el proyecto a un repositorio
2. Ve a Settings → Pages
3. Selecciona la rama `main` y carpeta `/ (root)`

### Opción 2: Netlify
1. Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)

### Opción 3: Vercel
1. Conecta tu repositorio en [Vercel](https://vercel.com)

---

## 🔧 Mejoras Opcionales

Para añadir funcionalidades extra, puedes:

1. **Google Analytics**: Añade el script en `index.html`
2. **Formulario de contacto**: Integra con Formspree o Netlify Forms
3. **Modo oscuro/claro**: Ya tienes la base en variables CSS
4. **Video de fondo**: Reemplaza `.hero__stripe` por un `<video>`

---

## 📄 Licencia

© 2026 Double Mark. Todos los derechos reservados.

---

## 👥 Créditos

- **Desarrollo**: Double Mark
- **Diseño**: Estética Synthwave 80s
- **Tipografías**: [Google Fonts](https://fonts.google.com) (Bebas Neue, Share Tech Mono)

---

*¿Preguntas? Contacta a Double Mark*
