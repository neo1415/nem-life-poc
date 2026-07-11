import { z } from "zod";
import {
  leadIntentSchema,
  preferredContactMethodSchema,
} from "@/features/leads/schemas/lead.schema";

const dashboardCtaSchema = z.object({
  label: z.string().min(1),
  href: z.string().startsWith("/"),
  type: z.enum(["result", "report", "lead", "start", "demo"]),
  isDemoLink: z.boolean(),
  note: z.string().min(1),
});

const engineSchema = z.object({
  id: z.enum(["life", "health", "wealth", "protection", "legacy"]),
  label: z.string().min(1),
  status: z.enum(["strong", "review", "gap", "unknown", "future_verified_required"]),
  scoreAreaIds: z.array(z.string()).min(1),
  summary: z.string().min(1),
  customerExplanation: z.string().min(1),
  relatedGaps: z.array(z.string()),
  relatedRecommendations: z.array(z.string()),
  nextStep: z.string().min(1),
  demoMode: z.boolean(),
});

export const customerDashboardSnapshotSchema = z.object({
  id: z.string().min(1),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  demoMode: z.boolean(),
  customer: z.object({
    displayName: z.string().max(80).optional(),
    firstName: z.string().max(40).optional(),
    maskedEmail: z.string().max(120).optional(),
    maskedPhone: z.string().max(30).optional(),
    preferredContactMethod: preferredContactMethodSchema.optional(),
  }),
  savedResult: z.object({
    score: z.number().int().min(0).max(100),
    maxScore: z.literal(100),
    scoreBand: z.string().min(1),
    scoreExplanation: z.string().min(1),
    confidence: z.string().min(1),
    completedAt: z.string().datetime(),
    resultStatus: z.enum(["estimated", "saved_demo", "needs_review", "future_verified_required"]),
    reviewStatus: z.string().min(1),
    disclaimer: z.string().min(1),
  }),
  fiveEngines: z.array(engineSchema).length(5),
  scoreSummary: z.object({ label: z.string(), value: z.string(), helper: z.string() }),
  gapSummary: z.array(
    z.object({
      title: z.string().min(1),
      area: z.string().min(1),
      severityLabel: z.string().min(1),
      shortExplanation: z.string().min(1),
      nextStep: z.string().min(1),
      status: z.enum(["review", "gap", "unknown"]),
    }),
  ),
  recommendationSummary: z.array(
    z.object({
      productCategory: z.string().min(1),
      title: z.string().min(1),
      reason: z.string().min(1),
      cta: dashboardCtaSchema,
      status: z.enum(["recommended", "demo_next_step"]),
      demoLabel: z.string().min(1),
    }),
  ),
  monthlyProtectionGuidance: z.object({
    selectedBudgetRange: z.string().min(1),
    guidanceLabel: z.string().min(1),
    recommendedReviewFocus: z.string().min(1),
    productCategoriesToReview: z.array(z.string()).min(1),
    disclaimer: z.string().min(1),
    futurePricingNote: z.string().min(1),
  }),
  timeline: z.array(
    z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      description: z.string().min(1),
      timestamp: z.string().datetime().optional(),
      status: z.enum(["completed", "current", "future", "not_started", "demo_only"]),
      type: z.enum(["check", "score", "recommendation", "lead", "report", "future"]),
      demoOrFuture: z.boolean(),
    }),
  ),
  reportSummary: z.object({
    status: z.enum(["available", "not_generated"]),
    reportDate: z.string().datetime().optional(),
    primaryCta: dashboardCtaSchema,
    secondaryCtas: z.array(dashboardCtaSchema),
  }),
  leadFollowUpSummary: z.object({
    status: z.enum(["saved_demo", "not_requested"]),
    intent: leadIntentSchema.optional(),
    preferredContactMethod: preferredContactMethodSchema.optional(),
    consentCaptured: z.boolean(),
    copy: z.string().min(1),
    ctas: z.array(dashboardCtaSchema),
  }),
  futureVerifiedData: z.array(
    z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      statusLabel: z.literal("Not connected in this POC"),
    }),
  ),
  ctas: z.array(dashboardCtaSchema).min(1),
  disclaimers: z.array(z.string().min(1)).min(3),
  metadata: z.object({
    sessionId: z.string().min(1),
    leadCaptured: z.boolean(),
    reportAvailable: z.boolean(),
  }),
});
