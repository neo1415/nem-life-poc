import { z } from "zod";
import { questionCatalogSchema } from "@/features/protection-check/schemas/question.schema";
import { configValidationResultSchema } from "./config-validation.schema";

const textRecord = z.record(z.string(), z.string().min(1).max(600));

export const configDraftSchema = z
  .object({
    id: z.string().min(1),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    version: z.string().min(1),
    status: z.enum(["default", "draft", "valid", "invalid", "preview_only", "exported_demo"]),
    source: z.enum([
      "default_code_config",
      "demo_admin_draft",
      "imported_demo_json",
      "reset_default",
    ]),
    questions: questionCatalogSchema,
    scoring: z
      .object({
        disclaimer: z.string().min(1).max(600),
        areas: z.array(
          z.object({
            id: z.string().min(1),
            label: z.string().min(1).max(120),
            maxPoints: z.number().int().min(1).max(100),
            explanation: z.string().min(1).max(300),
          }),
        ),
        totalMaxScore: z.literal(100),
        scoreBands: z.array(
          z.object({
            id: z.string().min(1),
            label: z.string().min(1).max(120),
            min: z.number().int().min(0).max(100),
            max: z.number().int().min(0).max(100),
            tone: z.enum(["strong", "good", "review", "gap"]),
            customerExplanation: z.string().min(1).max(500),
          }),
        ),
      })
      .strict(),
    recommendations: z
      .object({
        disclaimer: z.string().min(1).max(800),
        rules: z.array(z.record(z.string(), z.unknown())),
      })
      .strict(),
    products: z.record(z.string(), z.record(z.string(), z.unknown())),
    ctas: z.array(z.record(z.string(), z.unknown())),
    leadPriority: z.object({
      veryHigh: z.number().int().min(1),
      high: z.number().int().min(1),
      medium: z.number().int().min(1),
      explanation: z.string().min(1).max(400),
    }),
    reportCopy: textRecord,
    dashboardCopy: textRecord,
    validation: configValidationResultSchema,
    metadata: z.object({
      demoOnly: z.literal(true),
      storage: z.enum(["memory", "session_storage"]),
      notPublished: z.literal(true),
    }),
  })
  .strict();
