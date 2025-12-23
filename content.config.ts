import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
    }),
    numbers: defineCollection({
      type: "data",
      source: "content/entries/*.yml",
      schema: z.strictObject({
        milestone: z.optional(z.enum([
          "none",
          "minor",
          "important",
          "major",
          "powerful",
          "grand",
          "unbearable",
          "extreme",
          "mythical",
          "absolute",
          "primordial",
        ])),
        name: z.string(),
        description: z.string(),
        abmetricIndex: z.number(),
      }),
    }),
  },
});
