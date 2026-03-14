# Solvera Solutions

React + Vite project for [solverasolutions.github.io](https://solverasolutions.github.io).

## Running locally

**Do not open `index.html` directly in the browser** (e.g. via `file://` or a static file server). The app uses JSX and must be served by Vite so scripts are transpiled and sent with the correct MIME type.

1. Install dependencies (once):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the URL Vite prints (e.g. `http://localhost:5173`) in your browser.

## Building for production

```bash
npm run build
```

Output is in the `dist/` folder. To preview the production build locally:

```bash
npm run preview
```

## Deployment (GitHub Pages)

This repo uses GitHub Actions to build and deploy. On push to `main`, the workflow builds the app and deploys the **contents of `dist/`** to GitHub Pages.

- In the repo **Settings → Pages**, set **Source** to **GitHub Actions** (not "Deploy from a branch"). Otherwise the live site would serve the raw source and trigger MIME/JSX errors.
- After each push to `main`, the workflow runs and updates the live site.

## Troubleshooting: MIME type error for `.jsx`

If you see: *"Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of 'text/jsx'"*:

- **Cause:** The browser is loading the **source** `index.html` (which points to `/src/main.jsx`). Raw `.jsx` is then served with MIME type `text/jsx`, which module scripts reject.
- **Local fix:** Do not open `index.html` via `file://` or serve the project root with a static server. Use **`npm run dev`** or **`npm start`** (Vite dev server), or **`npm run build`** then **`npm run preview`** to serve the built `dist/` folder.
- **GitHub Pages fix:** In **Settings → Pages**, set **Source** to **GitHub Actions**. The workflow deploys the built `dist/` output (with compiled `.js`), not the repo source.
