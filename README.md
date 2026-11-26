# personal-website

This node.js project functions as the back end for my personal website.

# usage

Use Node 16 (react-scripts 1.x / webpack 3 does not build on newer Node).

```sh
npm ci            # install dependencies
npm start         # dev server at http://localhost:3000
npm run build     # static site in build/
npx serve build   # serve the built site locally
```

The build uses relative asset paths (`"homepage": "."`), so `build/` works from any subpath.

## Deploy

Pushing to `master` builds and deploys the site to GitHub Pages via `.github/workflows/pages.yml`
(it can also be run manually from the Actions tab). In the repo's Settings → Pages, the source must be
set to "GitHub Actions".
