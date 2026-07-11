import { z } from "zod";
import {
  leadIntentSchema,
  leadSourceChannelSchema,
  preferredContactMethodSchema,
} from "@/features/leads/schemas/lead.schema";
import { adminLeadStatusSchema } from "./admin-lead.schema";

export const adminLeadFiltersSchema = z.object({
  status: adminLeadStatusSchema.or(z.literal("all")).optional(),
  priority: z.enum(["low", "medium", "high", "very_high"]).or(z.literal("all")).optional(),
  scoreBand: z.string().optional(),
  productCategory: z.string().optional(),
  ctaIntent: leadIntentSchema.or(z.literal("all")).optional(),
  sourceChannel: leadSourceChannelSchema.or(z.literal("all")).optional(),
  preferredContactMethod: preferredContactMethodSchema.or(z.literal("all")).optional(),
  budgetRange: z.string().optional(),
  consentStatus: z.enum(["accepted", "all"]).optional(),
  search: z.string().max(120).optional(),
});
