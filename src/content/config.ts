import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    authors: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    isLocalized: z.boolean()
  })
});

const pageCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    isLocalized: z.boolean()
  })
});







export const collections = {
  'blog': blogCollection,
  'page': pageCollection
};