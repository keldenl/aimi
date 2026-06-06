# aimi

A small static lyrics site for aimi, built with Astro and JSON content.

## Run locally

```sh
npm install
npm run dev
```

Portless now fronts the local dev server, so the site should come up at [http://aimi.localhost](http://aimi.localhost) instead of an Astro-assigned port number.

On first run, Portless may need permission to bind port 80. This HTTP setup avoids certificate trust prompts. Portless keeps its local state in `.portless/` inside this repo.

Astro is configured to honor the `PORT` and `HOST` values Portless injects, which avoids 502 errors from Astro falling back to its default port `4321`.

If you want the plain Astro server directly:

```sh
npm run dev:astro
```

## Add a song

Add a JSON file to `src/content/songs/`. The route is generated from the song `slug`.

## Deploy

Push to `main`. GitHub Actions builds the Astro site and deploys the static output to GitHub Pages.
