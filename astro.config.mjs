import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.slpio.org',
  output: 'static',
  build: {
    format: 'directory',
  },
});
