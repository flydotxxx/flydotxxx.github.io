# Deploying Charlotte LLC to GitHub Pages

This site is a **fully static** React app (no backend required), so it runs perfectly on GitHub Pages.

## What's already configured
- `frontend/package.json` → `"homepage": "."` so asset paths are **relative** (works at any URL/sub-path).
- Routing uses **HashRouter** (`/#/brands`, `/#/founders`, …) so deep links and refreshes never 404 on Pages.
- `frontend/public/.nojekyll` → stops GitHub from stripping CRA's static assets.
- `.github/workflows/deploy.yml` → builds `frontend/` and publishes it on every push to `main`/`master`.

## One-time setup
1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

The site will be published at:
- Project page: `https://<user>.github.io/<repo>/`
- User/Org page: `https://<user>.github.io/`
- Or your custom domain (add a `CNAME` file in `frontend/public/`).

## Build locally
```bash
cd frontend
yarn install
yarn build      # outputs to frontend/build
```

## Alternative: gh-pages npm package
If you prefer manual deploys instead of Actions:
```bash
cd frontend
yarn add -D gh-pages
# add to package.json scripts:  "deploy": "gh-pages -d build"
yarn build && yarn deploy
```
