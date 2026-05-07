import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [sitemap()],
  output: 'static',
  site: 'http://localhost:4321',
  server: {
    host: true,
    open: true
  },
  trailingSlash: 'never'
});