import { z } from "zod";

export const productCategoryIdSchema = z.enum([
  "life_cover",
  "nem_health",
  "nem_asset_wealth",
  "motor_general",
  "home_fire_burglary",
  "business_protection",
  "professional_indemnity",
  "beneficiary_claims_readiness",
  "family_document_readiness",
]);

export const adminOpportunityTagSchema = z.enum([
  "LIFE_COVER_OPPORTUNITY",
  "HEALTH_CROSS_SELL",
  "FAMILY_HEALTH_GAP",
  "BUSINESS_PROTECTION_OPPORTUNITY",
  "PROFESSIONAL_INDEMNITY_OPPORTUNITY",
  "PROPERTY_PROTECTION_OPPORTUNITY",
  "BENEFICIARY_READINESS_GAP",
  "DOCUMENT_READINESS_GAP",
  "BUDGET_GUIDANCE_NEEDED",
  "HIGH_VALUE_LEAD",
  "BUDGET_SENSITIVE_LEAD",
  "EXISTING_NEM_CUSTOMER_SIGNAL",
  "EXTERNAL_INSURANCE_SIGNAL",
  "EMPLOYER_GROUP_LIFE_SIGNAL",
  "WEALTH_PLANNING_REVIEW",
  "GUIDANCE_NEEDED",
]);

const ctaSchema = z
  .object({
    type: z.enum([
      "view_options",
      "start_registration",
      "get_quote",
      "continue_to_nem_life",
      "start_protection_plan",
      "send_report",
      "save_result",
      "compare_options",
      "learn_more",
      "ask_advisor",
      "call_me_later",
      "explain_this",
      "request_review",
    ]),
    level: z.enum(["primary", "secondary", "support"]),
    label: z.string().min(1).max(80),
    href: z.string().min(1).max(160),
    isDemoLink: z.boolean(),
  })
  .strict();

export const recommendationResultSchema = z
  .object({
    id: z.string().min(1).max(120),
    profileSummary: z.string().min(1).max(500),
    recommendedProducts: z.array(
      z
        .object({
          id: z.string().min(1).max(120),
          category: productCategoryIdSchema,
          title: z.string().min(1).max(140),
          shortDescription: z.string().min(1).max(240),
          customerExplanation: z.string().min(1).max(700),
          reason: z.string().min(1).max(500),
          relatedGapIds: z.array(z.string().min(1).max(100)).max(12),
          relatedScoreAreaIds: z.array(z.string().min(1).max(80)).max(8),
          priority: z.enum(["low", "medium", "high", "urgent_review"]),
          confidence: z.enum(["low", "medium", "high"]),
          cta: ctaSchema,
          secondaryCtas: z.array(ctaSchema).max(4),
          supportCtas: z.array(ctaSchema).max(4),
          adminTags: z.array(adminOpportunityTagSchema).max(12),
          disclaimer: z.string().min(1).max(400),
          productLink: z.string().min(1).max(160),
          isDemoLink: z.boolean(),
          metadata: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()])),
        })
        .strict(),
    ),
    primaryRecommendationIds: z.array(z.string().min(1).max(120)).max(8),
    supportingRecommendationIds: z.array(z.string().min(1).max(120)).max(12),
    ctaGroups: z
      .object({
        primary: z.array(ctaSchema).max(8),
        secondary: z.array(ctaSchema).max(8),
        support: z.array(ctaSchema).max(8),
      })
      .strict(),
    adminOpportunityTags: z.array(adminOpportunityTagSchema).max(20),
    leadPriority: z
      .object({
        level: z.enum(["low", "medium", "high", "very_high"]),
        reasons: z.array(z.string().min(1).max(240)).max(12),
        confidence: z.enum(["low", "medium", "high"]),
      })
      .strict(),
    reasoningSummary: z.string().min(1).max(800),
    customerSummary: z.string().min(1).max(800),
    disclaimer: z.string().min(1).max(400),
    auditTrail: z.array(
      z
        .object({
          ruleId: z.string().min(1).max(120),
          category: productCategoryIdSchema,
          reason: z.string().min(1).max(400),
          relatedGapIds: z.array(z.string().min(1).max(100)).max(12),
          adminTags: z.array(adminOpportunityTagSchema).max(12),
          confidence: z.enum(["low", "medium", "high"]),
        })
        .strict(),
    ),
  })
  .strict();
