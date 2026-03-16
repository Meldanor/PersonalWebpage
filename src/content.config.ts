import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/projects" }),
  schema: ({ image }) =>
    z.object({
      date: z.date(),
      title: z.string(),
      image: image(),
      imageAlt: z.string(),
      technologies: z.array(z.string()),
      repositoryUrl: z.url().optional(),
      projectUrl: z.string().optional(),
      showOnMain: z.boolean().default(false),
    }),
});

const blogEntries = defineCollection({
  loader: glob({ pattern: "**/*.md*", base: "./content/blog" }),
  schema: z.object({
    language: z.enum(["de", "en"]),
    draft: z.boolean().default(false),
    publishDate: z.date(),
    title: z.string(),
    summary: z.string(),
    seoTags: z.array(z.string()).optional(),
  }),
});

const careerEntries = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/career" }),
  schema: z.object({
    date: z.date(),
    position: z.string(),
    company: z.string(),
    linkToCompany: z.url().nullable(),
    startYear: z.number(),
    endYear: z.number().or(z.literal("Present")),
    technologies: z.array(z.string()),
  }),
});

const texts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/texts" }),
});

const gameReviews = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./content/gameReviews" }),
  schema: z.object({
    draft: z.boolean().default(false),
    language: z.enum(["de", "en"]),
    title: z.string(),
    summary: z.string(),
    gameReleaseDate: z.date(),
    publishDate: z.date(),
    startedOn: z.date(),
    finishedOn: z.date(),
    playthroughHours: z.number(),
    settings: z.string(),
    platform: z.enum(["GOG", "Steam"]),
    playedWith: z
      .enum(["Keyboard+Mouse", "Controller"])
      .default("Keyboard+Mouse"),
    pcConfig: z.object({
      operatingSystem: z.string(),
      windowManager: z.string(),
      gpu: z.string(),
      cpu: z.string(),
      ram: z.string(),
      mainboard: z.string(),
      monitor: z.string(),
      mouse: z.string(),
      keyboard: z.string(),
      controller: z.string(),
      soundCard: z.string(),
      headphone: z.string(),
    }),
  }),
});

export const collections = {
  projects,
  blogEntries,
  careerEntries,
  texts,
  gameReviews,
};
