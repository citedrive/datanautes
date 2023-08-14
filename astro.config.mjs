import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  site: 'https://www.datanautes.com',
  integrations: [tailwind(), alpinejs(), mdx(), sitemap(), preact(), react()]
});