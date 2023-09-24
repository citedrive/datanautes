import { OGImageRoute } from 'astro-og-canvas';

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages: await import.meta.glob('/src/content/**/*.md', { eager: true }),
  getImageOptions: (_path, page) => ({
    title: "DATANAUTES.com",
    description: page.frontmatter.title,
    //logo: { path: './src/datanautes.png', size: [350] },
    bgGradient:[[186, 73, 185]],
    color: [255,255,255],
    border: { width: 10, color: [122,116,211] },
    padding: 40,
  }),
});
