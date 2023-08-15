import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import preact from "@astrojs/preact";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'always',
  site: 'https://www.datanautes.com',
  integrations: [tailwind(), alpinejs(), mdx(), sitemap({
    i18n: {
      defaultLocale: 'en', // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
      locales: {
        en: 'en-US', // The `defaultLocale` value must present in `locales` keys
        de: 'de-DE',
      },
    },
  }), preact(), react()]
});