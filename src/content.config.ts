import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
	tutorials: defineCollection({
		loader: glob({ base: "./src/content/tutorial", pattern: "**/*.{md,mdx}" }),
		schema: z.object({
			title: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date()
		})
	}),
	specs: defineCollection({
		loader: glob({ base: "./src/content/spec", pattern: "**/*.{md,mdx}" }),
		schema: z.object({
			title: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date()
		})
	})
};
