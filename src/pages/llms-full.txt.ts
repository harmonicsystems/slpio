import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

function stripMarkdown(text: string): string {
  return text
    .replace(/^---[\s\S]*?---/m, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/#{1,6}\s/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<cite[^>]*><\/cite>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[*_`~]/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export const GET: APIRoute = async () => {
  const [foundations, tasks, settings, domains, resources, prompts, workflows, patterns, antipatterns, glossary] = await Promise.all([
    getCollection('foundations'),
    getCollection('tasks'),
    getCollection('settings'),
    getCollection('domains'),
    getCollection('resources'),
    getCollection('prompts'),
    getCollection('workflows'),
    getCollection('patterns'),
    getCollection('antipatterns'),
    getCollection('glossary'),
  ]);

  const sections = [
    { name: 'Foundations', path: 'foundations', entries: foundations.sort((a, b) => a.data.order - b.data.order) },
    { name: 'Tasks', path: 'tasks', entries: tasks.sort((a, b) => a.data.order - b.data.order) },
    { name: 'Settings', path: 'settings', entries: settings.sort((a, b) => a.data.order - b.data.order) },
    { name: 'Domains', path: 'domains', entries: domains.sort((a, b) => a.data.order - b.data.order) },
    { name: 'Prompts', path: 'prompts', entries: prompts.sort((a, b) => a.data.order - b.data.order) },
    { name: 'Workflows', path: 'workflows', entries: workflows.sort((a, b) => a.data.order - b.data.order) },
    { name: 'Patterns', path: 'patterns', entries: patterns.sort((a, b) => a.data.order - b.data.order) },
    { name: 'Antipatterns', path: 'antipatterns', entries: antipatterns.sort((a, b) => a.data.order - b.data.order) },
    { name: 'Glossary', path: 'glossary', entries: glossary.sort((a, b) => a.data.order - b.data.order) },
    { name: 'Resources', path: 'resources', entries: resources.sort((a, b) => a.data.order - b.data.order) },
  ];

  let output = `# SLP/IO — Full Content Index\n`;
  output += `# https://www.slpio.org\n`;
  output += `# A clinician-first field guide for SLPs using large language models.\n`;
  output += `# Generated at build time. This file contains summaries of all pages.\n\n`;

  for (const section of sections) {
    output += `## ${section.name}\n\n`;
    for (const entry of section.entries) {
      const title = 'term' in entry.data ? (entry.data as any).term : (entry.data as any).title;
      const desc = 'slpDefinition' in entry.data ? (entry.data as any).slpDefinition : (entry.data as any).description;
      output += `### ${title}\n`;
      output += `URL: https://www.slpio.org/${section.path}/${entry.id}/\n`;
      output += `${desc}\n\n`;
      if (entry.body) {
        const cleaned = stripMarkdown(entry.body).slice(0, 1500);
        output += `${cleaned}\n\n`;
      }
      output += `---\n\n`;
    }
  }

  return new Response(output, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
