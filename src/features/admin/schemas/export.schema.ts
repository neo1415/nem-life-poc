import { z } from "zod";

export const exportRowSchema = z.object({
  leadId: z.string(),
  createdDate: z.string(),
  status: z.string(),
  priority: z.string(),
  customerName: z.string(),
  maskedEmail: z.string(),
  maskedPhone: z.string(),
  preferredContactMethod: z.string(),
  ctaIntent: z.string(),
  sourceChannel: z.string(),
  scoreBand: z.string(),
  score: z.number(),
  topGaps: z.string(),
  recommendedProductCategories: z.string(),
  consentAccepted: z.literal("yes"),
  demoMode: z.literal("demo"),
});
