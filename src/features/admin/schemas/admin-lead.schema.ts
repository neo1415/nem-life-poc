import { z } from "zod";
import {
  leadIntentSchema,
  leadSourceChannelSchema,
  preferredContactMethodSchema,
  preferredContactTimeSchema,
} from "@/features/leads/schemas/lead.schema";

export const adminLeadStatusSchema = z.enum([
  "new",
  "reviewed",
  "contact_pending",
  "contacted",
  "qualified",
  "not_ready",
  "unreachable",
  "converted_demo",
  "archived",
]);

export const followUpNoteSchema = z.object({
  id: z.string().min(1),
  leadId: z.string().min(1),
  text: z.string().trim().min(1).max(400),
  createdAt: z.string().datetime(),
  createdBy: z.literal("Demo Admin"),
});

export const adminLeadSchema = z.object({
  id: z.string().min(1),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  status: adminLeadStatusSchema,
  customerName: z.string().min(1).max(80),
  maskedEmail: z.string().max(120).optional(),
  maskedPhone: z.string().max(30).optional(),
  preferredContactMethod: preferredContactMethodSchema,
  preferredContactTime: preferredContactTimeSchema,
  consentStatus: z.literal("accepted"),
  consentTimestamp: z.string().datetime(),
  consentVersion: z.string().min(1),
  ctaIntent: leadIntentSchema,
  sourceChannel: leadSourceChannelSchema,
  score: z.number().int().min(0).max(100),
  scoreBand: z.string().min(1),
  leadPriority: z.enum(["low", "medium", "high", "very_high"]),
  priorityReason: z.string().min(1),
  topGaps: z.array(z.string().min(1)).max(5),
  recommendedProductCategories: z.array(z.string().min(1)).max(8),
  adminOpportunityTags: z.array(z.string().min(1)).max(20),
  budgetRange: z.string().min(1),
  followUpNotes: z.array(followUpNoteSchema),
  demoMode: z.literal(true),
  metadata: z.object({ sessionId: z.string().min(1) }),
});
