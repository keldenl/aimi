import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "aimi";
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "kelden";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: process.env.SITE_URL ?? `https://${owner}.github.io`,
  base: process.env.BASE_PATH ?? (isGitHubPages ? `/${repoName}` : "/"),
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
