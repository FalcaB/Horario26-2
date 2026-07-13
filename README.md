# HorarioUdeA PWA

Proyecto de horario universitario en un solo `index.html`, listo para subir a GitHub Pages o Netlify y poder instalarlo como app.

## Archivos
- `index.html` → la app principal
- `manifest.webmanifest` → define nombre, iconos y modo de instalación
- `service-worker.js` → cache para uso offline
- `icons/icon-192.png` y `icons/icon-512.png` → iconos de la app

## Cómo integrarlo paso a paso

### 1) Crea la carpeta del proyecto
Crea una carpeta llamada `HorarioUdeA_PWA`.

### 2) Copia los archivos exactamente así
```
HorarioUdeA_PWA/
├── index.html
├── manifest.webmanifest
├── service-worker.js
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

### 3) Sube todo a tu repositorio
En GitHub, sube la carpeta completa al repositorio principal.

### 4) Activa GitHub Pages
Ve a:
`Settings` → `Pages` → `Deploy from a branch` → `main` → `/root`

### 5) Abre la URL pública
Cuando GitHub termine el despliegue, abre la URL pública en Chrome.

### 6) Instala la app
En Chrome toca el menú `⋮` y elige:
- `Instalar aplicación`, o
- `Añadir a pantalla de inicio`

## Qué hace cada archivo

### `index.html`
Contiene toda la interfaz del horario y el JavaScript principal.

### `manifest.webmanifest`
Le dice al navegador cómo se llama la app, qué icono usar y cómo abrirla.

### `service-worker.js`
Guarda los archivos principales en caché para que la app funcione sin conexión.

### `icons/`
Los iconos que verá Android/Chrome cuando instales la app.

## Si no ves la opción de instalar
1. Abre la URL en Chrome, no en el navegador interno de otra app.
2. Espera a que cargue completamente.
3. Toca el menú `⋮`.
4. Si aún no aparece, revisa que `manifest.webmanifest` y `service-worker.js` estén en la raíz del repo.

## Nota
Si luego quieres, el siguiente paso natural es añadir:
- enlaces de Zoom por sesión,
- notificaciones,
- vista de exámenes y entregas,
- exportación/importación del horario.
