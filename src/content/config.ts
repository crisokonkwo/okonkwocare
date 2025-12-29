import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional().default("Okonkwo Care Pediatrics"),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().optional().default(false),
    // optional, if you later want thumbnails:
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { blog };