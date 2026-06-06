import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const lyricLine = z.object({
  id: z.string(),
  text: z.string(),
  annotationId: z.string().optional(),
  highlighted: z.boolean().optional(),
  gap: z.boolean().optional(),
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

  }),
});

const translations = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/translations/zh-TW/songs" }),
  schema: z.object({
    lyricSectionLabels: z.record(z.string(), z.string()).optional(),
    album: z.string().optional(),
    genre: z.string().optional(),
    story: z.object({
      title: z.string().optional(),
      body: z.string().optional(),
    }).optional(),
    annotations: z.record(
      z.string(),
      z.object({
        body: z.string(),
      }),
    ).optional(),
    themes: z.array(z.string()).optional(),
    moods: z.array(z.string()).optional(),
    credits: z.array(z.string()).optional(),
  }),
});

export const collections = { songs, translations };
