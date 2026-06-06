import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const lyricLine = z.object({
  id: z.string(),
  text: z.string(),
  annotationId: z.string().optional(),
  highlighted: z.boolean().optional(),
});

const songs = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/songs" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    artist: z.string(),
    album: z.string(),
    releaseDate: z.string(),
    duration: z.string(),
    genre: z.string(),
    coverImage: z.string(),
    audioUrl: z.string().optional(),
    story: z.object({
      title: z.string(),
      body: z.string(),
    }),
    lyrics: z.array(
      z.object({
        label: z.string(),
        lines: z.array(lyricLine),
      }),
    ),
    annotations: z.record(
      z.string(),
      z.object({
        lyric: z.string(),
        body: z.string(),
      }),
    ),
    themes: z.array(z.string()),
    moods: z.array(z.string()),
    credits: z.array(z.string()),
    relatedSongs: z.array(
      z.object({
        title: z.string(),
        slug: z.string(),
        album: z.string(),
      }),
    ),
  }),
});

export const collections = { songs };
