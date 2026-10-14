# Nahuel Trassani · Portfolio

Portfolio personal, bilingüe (español / inglés) con tema claro y oscuro.

**Stack:** React 19 + Vite. Sin librerías de UI: CSS propio con variables por tema.

## Correr local

```bash
npm install
npm run dev
```

## Contenido

Todo el texto vive en `src/data/content.js`, separado por idioma. Para sumar un proyecto se agrega en `projects` (datos técnicos) y su texto en `content.es.projects` y `content.en.projects`.

## Deploy

GitHub Pages con GitHub Actions (`.github/workflows/deploy.yml`): cada push a `main` compila y publica `dist/`.
