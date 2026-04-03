import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.slpio.org',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
