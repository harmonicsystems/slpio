import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const foundations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/foundations' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
  }),
});

const tasks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tasks' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
    category: z.enum(['writing-goals', 'documentation', 'communication', 'compliance', 'clinical-reasoning', 'materials']),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/settings' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
  }),
});

const domains = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/domains' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = {
  foundations,
  tasks,
  settings,
  domains,
  resources,
};
