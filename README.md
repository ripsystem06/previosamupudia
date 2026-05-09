# Alan Ampudia — Coming Soon Page

Página de "próximamente" para los dominios de Alan Ampudia. Desplegada en Vercel con routing por dominio.

## Dominios

| Dominio | Versión | Archivo |
|---------|---------|---------|
| `alanampudia.com` | Español | `index.html` |
| `alanampudia.store` | Inglés | `index-en.html` |

## Características

- Marquee infinito con el mensaje del sitio
- Crossfade de imágenes (solo versión ES)
- Imagen estática (versión EN)
- Textura grain overlay
- Footer con crédito a Xant
- Responsive — `background-size: contain` en todos los breakpoints

## Stack

- HTML / CSS / JS vanilla
- Sin build step
- Fuentes: Bebas Neue, Rajdhani (Google Fonts)

## Estructura

```
├── index.html          # Versión español
├── index-en.html       # Versión inglés
├── styles.css          # Estilos compartidos
├── script.js           # JS compartido
├── proximamente.png    # Imagen versión ES
├── comingsoon.png      # Imagen versión EN
├── vercel.json         # Routing por dominio
└── README.md
```

## Deploy

1. Conectar repo a Vercel
2. Framework: **Other**
3. Agregar dominios en Settings → Domains

## Licencia

Privado — Alan Ampudia