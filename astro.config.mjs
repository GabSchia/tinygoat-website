// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tinygoat.ai',
  integrations: [sitemap({
    filter: (page) => !['/local/', '/revops/', '/systems/'].some(route => page.includes(route))
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});