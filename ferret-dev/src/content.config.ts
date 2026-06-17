import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const games = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    image:       z.string(),
    link:        z.string().optional(),
    tags:        z.array(z.string()),
    featured:    z.boolean().default(false),
    releaseYear: z.number().optional(),
  }),
});

const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    title:   z.string(),
    date:    z.date(),
    game:    z.string(),
    tags:    z.array(z.string()),
    excerpt: z.string(),
  }),
});

export const collections = { games, updates };
