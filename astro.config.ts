import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [],
  output: 'static',
  site: 'http://localhost:4321',
  server: {
    host: true,
    open: true
  },
  trailingSlash: 'never'
});