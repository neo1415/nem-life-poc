import { z } from "zod";
import { configValidationResultSchema } from "./config-validation.schema";

export const configExportSchema = z
  .object({
    exportLabel: z.literal("Config export simulation - not published to live NEM systems."),
    version: z.string().min(1),
    generatedAt: z.string().datetime(),
    validation: configValidationResultSchema,
    questions: z.array(z.unknown()),
    scoring: z.unknown(),
    recommendations: z.unknown(),
    products: z.unknown(),
    ctas: z.array(z.unknown()),
    disclaimers: z.record(z.string(), z.string()),
  })
  .strict();
