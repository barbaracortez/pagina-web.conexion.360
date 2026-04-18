# Conexión 360° — Landing Page

Landing page profesional construida con **React 18 + Vite 5**.

---

## 🚀 Desarrollo local

```bash
npm install
npm run dev
```

Abrí **http://localhost:5173**

---

## 📦 Deploy en Hostinger — paso a paso

### 1. Generar el build

```bash
npm install
npm run build
```

Esto crea la carpeta `dist/` con todos los archivos estáticos listos.

### 2. Subir a Hostinger

**Opción A — File Manager (más simple):**
1. Entrá al panel de Hostinger → **File Manager**
2. Navegá a `public_html/`
3. Subí **todo el contenido de la carpeta `dist/`** (no la carpeta en sí, sino su contenido)
4. Asegurate de que el `.htaccess` también se subió (está dentro de `dist/`)

**Opción B — FTP (FileZilla, etc.):**
1. Conectate con los datos FTP de Hostinger
2. Subí el contenido de `dist/` a `/public_html/`

### 3. Verificar

Entrá a tu dominio. Deberías ver la landing funcionando.

> ⚠️ Si Hostinger usa `public_html/` como raíz, subí el contenido de `dist/` ahí directamente.
> Si querés subirlo en un subdirectorio (ej: `public_html/web/`), cambiá `base: '/'` por `base: '/web/'` en `vite.config.js` antes de hacer el build.

---

## ⚙️ Config del negocio

Todo en `src/App.jsx`:

```js
export const WHATSAPP_NUMBER = '542617254321'
export const EMAIL = 'conexion360.contacto.oficial@gmail.com'
```

---

## 🗂 Estructura

```
conexion-360/
├── public/
│   ├── logo.png          ← Logo (reemplazable)
│   └── .htaccess         ← Config Apache para Hostinger
├── src/
│   ├── components/       ← Header, Hero, Services, etc.
│   ├── styles/global.css
│   ├── App.jsx           ← Config central
│   └── main.jsx
├── vite.config.js
└── package.json
```
