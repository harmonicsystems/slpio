import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.{js,ts}'],
    environment: 'node',
    coverage: {
      provider: 'v8',
      include: [
        'public/tools/engine/**/*.js',
        'src/components/**/*.astro',
        'src/pages/goals/index.astro',
        'src/pages/search-index.json.ts',
      ],
      reporter: ['text', 'html'],
    },
  },
});
