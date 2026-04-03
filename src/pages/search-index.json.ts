import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const [foundations, tasks, settings, domains, resources] = await Promise.all([
    getCollection('foundations'),
    getCollection('tasks'),
    getCollection('settings'),
    getCollection('domains'),
    getCollection('resources'),
  ]);

  const index = [
    ...foundations.map((e) => ({
      title: e.data.title,
      description: e.data.description,
      url: `/foundations/${e.id}/`,
      layer: 'Foundations',
      icon: e.data.icon || '',
      body: e.body || '',
    })),
    ...tasks.map((e) => ({
      title: e.data.title,
      description: e.data.description,
      url: `/tasks/${e.id}/`,
      layer: 'Tasks',
      icon: e.data.icon || '',
      body: e.body || '',
    })),
    ...settings.map((e) => ({
      title: e.data.title,
      description: e.data.description,
      url: `/settings/${e.id}/`,
      layer: 'Settings',
      icon: e.data.icon || '',
      body: e.body || '',
    })),
    ...domains.map((e) => ({
      title: e.data.title,
      description: e.data.description,
      url: `/domains/${e.id}/`,
      layer: 'Domains',
      icon: e.data.icon || '',
      body: e.body || '',
    })),
    ...resources.map((e) => ({
      title: e.data.title,
      description: e.data.description,
      url: `/resources/${e.id}/`,
      layer: 'Resources',
      icon: e.data.icon || '',
      body: e.body || '',
    })),
  ];

  // Strip markdown formatting from body for cleaner search
  const cleaned = index.map((item) => ({
    ...item,
    body: item.body
      .replace(/^---[\s\S]*?---/m, '') // frontmatter
      .replace(/```[\s\S]*?```/g, '') // code blocks
      .replace(/#{1,6}\s/g, '') // headings
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
      .replace(/[*_`~]/g, '') // formatting
      .replace(/\n{2,}/g, ' ') // collapse newlines
      .replace(/\s{2,}/g, ' ') // collapse whitespace
      .trim()
      .slice(0, 2000), // cap body length per entry
  }));

  return new Response(JSON.stringify(cleaned), {
    headers: { 'Content-Type': 'application/json' },
  });
};
