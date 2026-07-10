import { z } from "zod";

export const answerValueSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.string()),
  z.record(z.string(), z.string()),
]);

export const answerSourceSchema = z.enum(["customer", "demo", "scenario", "admin_preview"]);

export const rawAnswerPayloadSchema = z
  .object({
    questionId: z.string().min(1).max(80),
    value: answerValueSchema.optional(),
    selectedOptionIds: z.array(z.string().min(1).max(80)).max(20).optional(),
    textValue: z.string().max(500).optional(),
    skipped: z.boolean().optional(),
    notSure: z.boolean().optional(),
    source: answerSourceSchema.optional(),
  })
  .strict();

export const answerSchema = rawAnswerPayloadSchema
  .extend({
    selectedOptionIds: z.array(z.string().min(1).max(80)).max(20),
    normalizedValue: answerValueSchema.optional(),
    answeredAt: z.string().datetime(),
    skipped: z.boolean(),
    notSure: z.boolean(),
    source: answerSourceSchema,
    validationStatus: z.enum(["valid", "invalid", "skipped"]),
    metadata: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])).optional(),
  })
  .strict();
