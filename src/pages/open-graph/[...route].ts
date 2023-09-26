import { OGImageRoute } from 'astro-og-canvas';

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages: await import.meta.glob('/src/content/**/*.md', { eager: true }),
  getImageOptions: (_path, page) => ({
    title: "DATANAUTES",
    description: page.frontmatter.title,
    logo: { path: './src/assets/images/thumbnail_logo.png', size: [350] },
    bgGradient:[[9,16,23]],
    color: [0,0,0],
    border: { width: 10, color: [122,116,211] },
    padding: 40,
  }),
});
