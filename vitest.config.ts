import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/shared/test/vitest.setup.ts',
    coverage: {
      include: ['src/**/*.tsx'],
      exclude: [
        '**/node_modules/**',
        '**/*.test.tsx',
        '**/*.spec.tsx',
        'src/__tests__/setup.ts',
      ],
    },
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
});
