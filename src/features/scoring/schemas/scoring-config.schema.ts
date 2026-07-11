import { z } from "zod";

export const scoringConfigSchema = z
  .object({
    disclaimer: z.string().min(1).max(300),
    areas: z.record(
      z.string(),
      z
        .object({
          label: z.string().min(1).max(120),
          maxPoints: z.number().int().min(1).max(100),
        })
        .strict(),
    ),
    totalMaxScore: z.literal(100),
  })
  .strict();
