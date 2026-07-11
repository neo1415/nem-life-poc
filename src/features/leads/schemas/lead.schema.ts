import { z } from "zod";

export const leadIntentSchema = z.enum([
  "send_report",
  "save_result",
  "ask_advisor",
  "call_me_later",
  "request_review",
  "start_registration",
  "get_quote",
  "start_protection_plan",
  "view_recommended_plans",
  "learn_more",
]);

export const preferredContactMethodSchema = z.enum([
  "phone_call",
  "whatsapp",
  "email",
  "sms",
  "no_preference",
]);

export const preferredContactTimeSchema = z.enum(["morning", "afternoon", "evening", "anytime"]);

const phonePattern = /^[+()0-9\s-]{7,20}$/;
const prohibitedKeys = new Set([
  "bvn",
  "nin",
  "exactAddress",
  "cardNumber",
  "bankAccount",
  "policyNumber",
  "upload",
  "password",
  "salary",
]);

export const leadFormInputSchema = z
  .object({
    fullName: z.string().trim().min(2, "Enter your full name.").max(80, "Name is too long."),
    email: z.email("Enter a valid email address.").max(120),
    phone: z.string().trim().regex(phonePattern, "Enter a valid phone number.").max(20),
    preferredContactMethod: preferredContactMethodSchema,
    preferredContactTime: preferredContactTimeSchema,
    consentAccepted: z.literal(true, "Please accept the consent statement before continuing."),
    customerMessage: z.string().trim().max(300).optional().or(z.literal("")),
  })
  .strict()
  .refine((input) => !Object.keys(input).some((key) => prohibitedKeys.has(key)), {
    message: "Unsupported sensitive fields are not accepted.",
  });

export const leadSourceChannelSchema = z.enum([
  "nem_website",
  "nem_app",
  "social",
  "whatsapp_campaign",
  "sms_campaign",
  "email_campaign",
  "agent_link",
  "branch_qr",
  "corporate_hr",
  "demo",
]);

export const leadRecordSchema = z.object({
  id: z.string().min(1),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  status: z.enum(["new", "submitted", "demo_only", "failed_validation"]),
  fullName: z.string().min(2).max(80),
  email: z.email().max(120),
  phone: z.string().regex(phonePattern).max(20),
  preferredContactMethod: preferredContactMethodSchema,
  preferredContactTime: preferredContactTimeSchema,
  consent: z.object({
    accepted: z.literal(true),
    text: z.string().min(1),
    timestamp: z.string().datetime(),
    purpose: z.literal("family_protection_follow_up"),
    contactChannels: z.array(preferredContactMethodSchema),
    version: z.literal("2026-07-11"),
  }),
  sourceChannel: leadSourceChannelSchema,
  ctaIntent: leadIntentSchema,
  scoreSummary: z.object({
    score: z.number().int().min(0).max(100),
    maxScore: z.literal(100),
    scoreBandLabel: z.string().min(1),
  }),
  topGapIds: z.array(z.string()).max(5),
  recommendedProductIds: z.array(z.string()).max(8),
  recommendedProductCategories: z.array(z.string()).max(8),
  budgetRange: z.string().min(1),
  leadPriority: z.enum(["low", "medium", "high", "very_high"]),
  adminOpportunityTags: z.array(z.string()).max(20),
  customerMessage: z.string().max(300).optional(),
  metadata: z.object({
    sessionId: z.string().min(1),
    demoOnly: z.literal(true),
  }),
});
