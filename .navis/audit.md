# navis audit — Build a static artifact and deploy it to GitHub Pages

Temporary anchor for the journey thread on this PR. Removed before review;
the synthesis lands in the PR description.

## Goal

Make `npm run build` produce a self-contained static artifact that works when served from GitHub Pages (https://a1re1.github.io/personal-website/), and add a GitHub Actions workflow that builds and deploys it on push to master. Done = CI-equivalent build succeeds and the built site loads with all images/CSS/JS resolving under the /personal-website/ subpath.
