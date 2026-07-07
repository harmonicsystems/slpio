import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Set when a human (or verified agent pass) last checked the entry against
// current reality — model capabilities, policy, citations. Surfaced on the
// page and reported by `npm run freshness`. Absent = never reviewed.
const lastReviewed = z.coerce.date().optional();

const foundations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/foundations' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
    lastReviewed,
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
    lastReviewed,
  }),
});

const domains = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/domains' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
    lastReviewed,
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
    lastReviewed,
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
    lastReviewed,
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
    lastReviewed,
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
    lastReviewed,
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
    lastReviewed,
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
    lastReviewed,
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
    lastReviewed,
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
    lastReviewed,
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
    lastReviewed,
  }),
});

// ── Goal Bank ──

const goalDomainEnum = z.enum([
  'articulation-phonology',
  'receptive-language',
  'expressive-language',
  'pragmatics-social',
  'dysphagia',
  'cognitive-linguistic',
  'fluency',
  'voice-resonance',
  'aac',
  'literacy',
]);

const supportLevelEnum = z.enum([
  'independent', 'minimal', 'moderate', 'maximum',
]);

const goals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/goals' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    domain: goalDomainEnum,
    subdomain: z.string(),
    settings: z.array(settingEnum),
    populations: z.array(populationEnum),
    ageRange: z.string().optional(),
    supportLevel: supportLevelEnum,
    severity: z.enum(['mild', 'moderate', 'severe', 'varies']),
    neurodiversityAffirming: z.boolean().default(false),
    fourQuestions: z.object({
      conditions: z.string(),
      behavior: z.string(),
      criteria: z.string(),
      measurement: z.string(),
    }),
    evidenceBase: z.array(z.object({
      source: z.string(),
      url: z.string().optional(),
    })).min(1),
    relatedGoals: z.array(z.string()).optional(),
    order: z.number(),
    lastReviewed,
  }),
});

// ── Reading LLM Writing ──

const reading = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reading' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    lastReviewed,
  }),
});

// ── AI Updates Feed ──

const aiupdates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ai-updates' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    models: z.array(z.enum([
      'chatgpt', 'claude', 'gemini', 'deepseek', 'copilot', 'other', 'all',
    ])),
    riskLevel: z.enum(['info', 'caution', 'critical']),
    categories: z.array(z.enum([
      'privacy', 'accuracy', 'features', 'pricing', 'baa', 'policy', 'new-model',
    ])),
    clinicalImpact: z.string(),
    order: z.number(),
    lastReviewed,
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
  goals,
  aiupdates,
  reading,
};
