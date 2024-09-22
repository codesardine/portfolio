import { defineCollection, z } from 'astro:content';

// Define the 'blog' schema
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  tags: z.string(),
  draft: z.boolean(),
});

// Define the 'projects' schema by extending the blog schema
const projectsSchema = blogSchema.extend({
  url: z.string(),
  code: z.string(),
  imgs: z.array(z.string()),
});

// Define the 'blog' collection
const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema,
});

// Define the 'projects' collection using the extended schema
const projectsCollection = defineCollection({
  type: 'content',
  schema: projectsSchema, // Use the extended projectsSchema directly
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
