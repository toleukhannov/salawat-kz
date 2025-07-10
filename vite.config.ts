import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), eslint(), svgr({
    include: '**/*.svg?react',
    exportAsDefault: true,
  } as any), tsconfigPaths()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  build: {
    sourcemap: true,
  },
  server: {
    host: 'localhost',
    port: 5173,
    cors: false,
    origin: 'http://localhost:5173',
    fs: {
      strict: true,
      deny: ['..'],
    },
  },
});
