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

// ── New collections ──

const settingEnum = z.enum([
  'school', 'medical', 'snf-rehab', 'early-intervention', 'private-practice', 'university',
]);

const populationEnum = z.enum([
  'pediatric', 'adult', 'geriatric', 'all',
]);

const difficultyEnum = z.enum(['beginner', 'intermediate', 'advanced']);

const prompts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prompts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'documentation', 'goal-writing', 'parent-communication', 'eval-reports',
      'clinical-reasoning', 'materials', 'compliance', 'ethical-reflection',
    ]),
    settings: z.array(settingEnum),
    populations: z.array(populationEnum),
    domains: z.array(z.string()).optional(),
    difficulty: difficultyEnum,
    clinicalFrameworks: z.array(z.string()).optional(),
    ashaPrinciples: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

const workflows = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/workflows' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    settings: z.array(settingEnum),
    populations: z.array(populationEnum),
    stepCount: z.number(),
    estimatedTime: z.string(),
    difficulty: difficultyEnum,
    order: z.number(),
  }),
});

const patterns = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/patterns' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    clinicalOrientation: z.string(),
    contrasts: z.string().optional(),
    settings: z.array(settingEnum),
    populations: z.array(populationEnum),
    order: z.number(),
  }),
});

const antipatterns = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/antipatterns' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'vague-goals', 'phi-violation', 'over-reliance', 'generic-output',
      'measurability', 'clinical-voice', 'ethical',
    ]),
    severity: z.enum(['critical', 'major', 'minor']),
    settings: z.array(settingEnum).optional(),
    order: z.number(),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    aliases: z.array(z.string()).optional(),
    slpDefinition: z.string(),
    techDefinition: z.string(),
    order: z.number(),
  }),
});

const casestudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    setting: settingEnum,
    population: populationEnum,
    domains: z.array(z.string()),
    clinician: z.string(),
    scenario: z.string(),
    aiRole: z.string(),
    outcome: z.string(),
    order: z.number(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    authors: z.string(),
    year: z.number(),
    journal: z.string(),
    doi: z.string().optional(),
    relevance: z.enum(['direct', 'cross-disciplinary', 'foundational']),
    topics: z.array(z.string()),
    order: z.number(),
  }),
});

const policies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/policies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    setting: settingEnum,
    audience: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  foundations,
  tasks,
  settings,
  domains,
  resources,
  prompts,
  workflows,
  patterns,
  antipatterns,
  glossary,
  casestudies,
  research,
  policies,
};
