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
  site: 'https://datanautes.com',
  integrations: [tailwind(), alpinejs(), mdx(), sitemap(), preact(), react()]
});

/*{
     i18n: {
      defaultLocale: 'en', 
      locales: {
        en: 'en-US',
        de: 'de-DE',
        cs: 'cs-CZ',
        es: 'es-ES',
        pt: 'pt-BR',
        fr: 'fr-FR',
        sv: 'sv-SE',
        tr: 'tr-TR',
        'zh-cn': 'zh-cn',
        da: 'da-DK',
        it: 'it-IT',
        ja: 'ja-JP',
        ko: 'ko-KR',
        no: 'no-NO',
        ru: 'ru-RU',
      },
    }
  }*/