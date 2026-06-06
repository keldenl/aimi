# aimi

A small static lyrics site for aimi, built with Astro and JSON content.

## Run locally

```sh
npm install
npm run dev
```

## Add a song

Add a JSON file to `src/content/songs/`. The route is generated from the song `slug`.

## Deploy

Push to `main`. GitHub Actions builds the Astro site and deploys the static output to GitHub Pages.
