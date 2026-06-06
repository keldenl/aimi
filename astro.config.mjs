import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "aimi";
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "kelden";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const devPort = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : undefined;
const devHost = process.env.HOST;

export default defineConfig({
  site: process.env.SITE_URL ?? `https://${owner}.github.io`,
  base: process.env.BASE_PATH ?? (isGitHubPages ? `/${repoName}` : "/"),
  output: "static",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-TW"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  server: {
    host: devHost ?? false,
    port: Number.isFinite(devPort) ? devPort : undefined,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
