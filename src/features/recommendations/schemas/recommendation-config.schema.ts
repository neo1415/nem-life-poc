import { z } from "zod";
import { productCategoryIdSchema } from "./recommendation.schema";

export const recommendationConfigSchema = z
  .object({
    disclaimer: z.string().min(1).max(400),
    productCategories: z.record(
      productCategoryIdSchema,
      z
        .object({
          label: z.string().min(1).max(120),
          title: z.string().min(1).max(140),
          shortDescription: z.string().min(1).max(240),
          customerExplanation: z.string().min(1).max(700),
          href: z.string().min(1).max(160),
          isDemoLink: z.boolean(),
          sortPriority: z.number().int().min(1).max(100),
        })
        .strict(),
    ),
  })
  .strict();
