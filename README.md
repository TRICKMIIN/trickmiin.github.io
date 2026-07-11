# Portafolio — José Ignacio Cartagena Medina

Portafolio profesional de **José Ignacio Cartagena Medina**, Ingeniero en Conectividad y Redes con foco en Ciberseguridad.

Construido con [**Astro**](https://astro.build/) y desplegado en **GitHub Pages** vía GitHub Actions.
Sitio en producción: <https://trickmiin.github.io/>

## 🧱 Stack

- **Astro 5** (salida estática, sin frameworks JS de UI)
- HTML + CSS puro (tema "cyber / terminal" con acentos neón)
- Tipografías: JetBrains Mono + Sora (Google Fonts)

## 📂 Estructura

```
├── public/                 # assets estáticos (se sirven en la raíz)
│   ├── img/                # insignias Cisco (Credly)
│   ├── certificados/       # certificados Coursera / U. de los Andes
│   └── cv/                 # CV en PDF
├── src/
│   ├── data/site.js        # ← TODO EL CONTENIDO editable acá
│   ├── components/         # Nav, Hero, About, Experience, Skills, Education, Certs, Contact, Footer, Icon
│   ├── layouts/Layout.astro
│   ├── pages/index.astro   # ensambla las secciones
│   └── styles/global.css   # sistema de diseño
├── astro.config.mjs
└── .github/workflows/deploy.yml   # deploy automático a GitHub Pages
```

## ✏️ Editar el contenido

Casi todo el texto (perfil, experiencia, skills, educación, certificaciones, contacto)
vive en **`src/data/site.js`**. Edita ese archivo y se refleja en el sitio.

Para agregar/actualizar assets, colócalos en `public/` y referencia la ruta con `/` inicial
(ej. `/img/mi-insignia.png`).

## 🚀 Desarrollo

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (http://localhost:4321)
npm run build     # compilar a dist/
npm run preview   # previsualizar el build
```

## 🌐 Despliegue (GitHub Pages)

El workflow `.github/workflows/deploy.yml` compila y publica automáticamente en cada
push a `main`.

> **Configuración única requerida:** en GitHub → **Settings → Pages → Build and deployment → Source**,
> selecciona **"GitHub Actions"** (no "Deploy from a branch").
