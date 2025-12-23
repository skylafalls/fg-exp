import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    numbers: defineCollection({
      type: "page",
      source: "entries/*.yml",
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
