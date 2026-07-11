import { z } from "zod";
import {
  leadIntentSchema,
  preferredContactMethodSchema,
} from "@/features/leads/schemas/lead.schema";

const reportCtaSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1).startsWith("/"),
  type: z.enum([
    "view_result",
    "lead_capture",
    "email_preview",
    "report_preview",
    "confirm",
    "demo",
  ]),
  isDemoLink: z.boolean(),
  note: z.string().min(1),
});

export const familyProtectionReportSchema = z.object({
  id: z.string().min(1),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  reportVersion: z.literal("2026-07-11"),
  demoMode: z.boolean(),
  customer: z
    .object({
      displayName: z.string().min(1).max(80).optional(),
      firstName: z.string().min(1).max(40).optional(),
      preferredContactMethod: preferredContactMethodSchema.optional(),
      maskedEmail: z.string().max(120).optional(),
      maskedPhone: z.string().max(30).optional(),
    })
    .strict(),
  score: z.object({
    score: z.number().int().min(0).max(100),
    maxScore: z.literal(100),
    explanation: z.string().min(1),
    confidenceExplanation: z.string().min(1),
  }),
  scoreBand: z.string().min(1),
  confidence: z.string().min(1),
  summary: z.string().min(1),
  scoreAreas: z
    .array(
      z.object({
        label: z.string().min(1),
        earnedPoints: z.number().min(0),
        maxPoints: z.number().positive(),
        statusLabel: z.string().min(1),
        explanation: z.string().min(1),
      }),
    )
    .min(1),
  keyGaps: z
    .array(
      z.object({
        title: z.string().min(1),
        explanation: z.string().min(1),
        severityLabel: z.string().min(1),
        relatedArea: z.string().min(1),
        confidenceLabel: z.string().min(1),
      }),
    )
    .max(5),
  recommendations: z.array(
    z.object({
      productCategory: z.string().min(1),
      title: z.string().min(1),
      explanation: z.string().min(1),
      reason: z.string().min(1),
      ctaLabel: z.string().min(1),
      ctaHref: z.string().min(1).startsWith("/"),
      disclaimer: z.string().min(1),
    }),
  ),
  budgetPreview: z.object({
    selectedBudgetLabel: z.string().min(1),
    guidance: z.string().min(1),
    disclaimer: z.string().min(1),
  }),
  ctaLinks: z.array(reportCtaSchema).min(1),
  nextSteps: z.array(z.string().min(1)).min(1),
  leadIntent: leadIntentSchema.optional(),
  sourceChannel: z.string().min(1),
  disclaimers: z.array(z.string().min(1)).min(4),
  metadata: z.object({
    generatedFromSessionId: z.string().min(1),
    leadCaptured: z.boolean(),
    printLabel: z.string().min(1),
  }),
});
