import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Pre-render routes for static generation
const routes = [
  '/',
  '/water-damage-restoration-savannah-ga',
  '/water-extraction-savannah-ga',
  '/mold-remediation-savannah-ga',
  '/flood-damage-restoration-savannah-ga',
  '/emergency-water-damage-savannah-ga',
  '/blog',
  '/flooding-savannah-ga-water-damage-guide',
  '/mold-after-water-damage-savannah-ga',
  '/water-damage-insurance-claim-savannah-ga',
];

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'prerender-plugin',
        apply: 'build',
        async closeBundle() {
          // Copy HTML files for each route to dist
          const distDir = path.join(__dirname, 'dist');
          const indexHtml = path.join(distDir, 'index.html');
          
          if (fs.existsSync(indexHtml)) {
            for (const route of routes) {
              if (route === '/') continue;
              
              const routeDir = path.join(distDir, route);
              fs.mkdirSync(routeDir, { recursive: true });
              
              const routeHtml = path.join(routeDir, 'index.html');
              fs.copyFileSync(indexHtml, routeHtml);
            }
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      minify: 'terser',
      sourcemap: false,
    },
  };
});
