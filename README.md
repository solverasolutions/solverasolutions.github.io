# Solvera Solutions

React + Vite site for [solverasolutions.github.io](https://solverasolutions.github.io). Clean structure: `src/main.jsx` entry, `App.jsx`, and components under `src/components/` (layout + sections). **To avoid the "text/jsx" MIME error:** use `npm run dev` locally and deploy only the **dist/** folder (e.g. GitHub Actions); never open `index.html` directly or serve the repo root as static files.

## Running locally

1. Install dependencies (once):
   ```bash
   npm install
   ```

2. Start the dev server (do not open `index.html` directly):
   ```bash
   npm run dev
   ```

3. Open the URL Vite prints (e.g. `http://localhost:5173`).

## Building for production

```bash
npm run build
```

Output is in `dist/`. To preview:

```bash
npm run preview
```

## Favicon checks (Playwright)

`npm run test:e2e` starts the dev server (see `playwright.config.js`) and checks that:

- `index.html` references generated **`favicon-*.png`** (tab icons), not raw `logo.png`.
- `GET /logo.png` is still the navbar/footer asset.
- `GET /favicon-32.png` is **32×32** (generated from **`public/favicon.png`**).

**`public/favicon.png`** should be your **square** master icon; **`npm run favicons`** (runs before `npm run build`) downscales it to `favicon-16/32/48.png` and `apple-touch-icon.png` with `fit: "contain"` and a white letterbox.

```bash
npm run test:e2e
```

## Deployment (GitHub Pages)

The repo uses GitHub Actions to build and deploy. On push to `main`, the workflow builds and deploys **only the contents of `dist/`**.

- In **Settings → Pages**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
- Never deploy the project root as static files; that can cause MIME/script errors.

**If the live site shows "Cannot load app (MIME / script error)", see [DEPLOY.md](DEPLOY.md) for the fix.**

## Avoiding MIME type errors

**Do not open `index.html` directly** (e.g. via `file://`) or serve the project root as static files. Browsers can then request `/src/main.jsx`, which some servers serve as `text/jsx`, causing “Expected a JavaScript module but got MIME type text/jsx”. **Always** use `npm run dev` for development and deploy only the **built** `dist/` folder for production (e.g. via the GitHub Actions workflow). The workflow builds the app and deploys `dist/`, so the live site never serves raw `.jsx` files.

## Logo

Place your logo at **`public/logo.png`** (navbar/footer). Place a **square** master at **`public/favicon.png`** for tab/home-screen icons. **Favicons** are generated from **`favicon.png`** (`npm run favicons`, or automatic via `prebuild`). Those outputs (`favicon-16/32/48.png`, `apple-touch-icon.png`) are **gitignored**; after clone run **`npm run favicons`** once (or **`npm run build`**) before **`npm run dev`** so tab icons exist locally. CI regenerates them on every build.

## Project structure

```
src/
  main.jsx          # Entry
  App.jsx           # Root component
  index.css         # Global styles
  components/
    layout/         # Navbar.jsx, Footer.jsx
    sections/       # Hero, About, Services, WhyUs, Process, Technologies, FAQ, Contact, FinalCTA
    ui/             # Icons.jsx, AnimatedSection.jsx
  hooks/
    useInView.js    # Intersection Observer hook (plain JS)
public/
  logo.png          # Navbar / footer (commit)
  favicon.png       # Square master for tabs (commit)
  favicon-*.png     # Generated — gitignored; see scripts/generate-favicons.mjs
  apple-touch-icon.png
scripts/
  generate-favicons.mjs
```
