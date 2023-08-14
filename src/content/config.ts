import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    authors: z.array(z.string()).optional(),
    description: z.string().optional()
  })
});





export const collections = {
  'blog': blogCollection
};