import { z } from "zod";
import { productCategoryIdSchema } from "./recommendation.schema";

export const productCategorySchema = z
  .object({
    id: productCategoryIdSchema,
    label: z.string().min(1).max(120),
    title: z.string().min(1).max(140),
    shortDescription: z.string().min(1).max(240),
    customerExplanation: z.string().min(1).max(700),
    href: z.string().min(1).max(160),
    isDemoLink: z.boolean(),
    sortPriority: z.number().int().min(1).max(100),
  })
  .strict();
