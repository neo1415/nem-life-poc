import { z } from "zod";

const scoreAreaIdSchema = z.enum([
  "life_cover",
  "health_protection",
  "dependents_covered",
  "premium_continuity",
  "beneficiary_readiness",
  "document_readiness",
  "property_business_protection",
  "emergency_wealth_planning",
]);

export const scoreBreakdownSchema = z
  .object({
    totalScore: z.number().int().min(0).max(100),
    maxScore: z.literal(100),
    percentage: z.number().int().min(0).max(100),
    band: z
      .object({
        id: z.string().min(1).max(80),
        label: z.string().min(1).max(120),
        min: z.number().int().min(0).max(100),
        max: z.number().int().min(0).max(100),
        tone: z.enum(["strong", "good", "review", "gap"]),
        customerExplanation: z.string().min(1).max(600),
      })
      .strict(),
    areas: z.array(
      z
        .object({
          id: scoreAreaIdSchema,
          label: z.string().min(1).max(120),
          maxPoints: z.number().int().min(1).max(100),
          earnedPoints: z.number().int().min(0).max(100),
          status: z.enum(["strong", "partial", "gap", "unknown", "not_applicable"]),
          customerExplanation: z.string().min(1).max(600),
          auditNotes: z.array(z.string().min(1).max(240)).max(10),
        })
        .strict(),
    ),
    gaps: z.array(
      z
        .object({
          id: z.string().min(1).max(100),
          areaId: scoreAreaIdSchema,
          severity: z.enum(["low", "moderate", "high", "critical"]),
          customerTitle: z.string().min(1).max(160),
          customerExplanation: z.string().min(1).max(700),
          evidence: z.array(z.string().min(1).max(240)).max(8),
          relatedQuestionIds: z.array(z.string().min(1).max(80)).max(8),
          confidence: z.enum(["low", "medium", "high"]),
        })
        .strict(),
    ),
    summary: z.string().min(1).max(900),
    disclaimer: z.string().min(1).max(300),
    confidence: z.enum(["low", "medium", "high"]),
    confidenceExplanation: z.string().min(1).max(300),
    auditTrail: z.array(
      z
        .object({
          areaId: scoreAreaIdSchema,
          ruleId: z.string().min(1).max(120),
          pointsPossible: z.number().int().min(0).max(100),
          pointsAwarded: z.number().int().min(0).max(100),
          reason: z.string().min(1).max(300),
          relatedAnswerIds: z.array(z.string().min(1).max(80)).max(8),
          confidence: z.enum(["low", "medium", "high"]),
        })
        .strict(),
    ),
  })
  .strict();
