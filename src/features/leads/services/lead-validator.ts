import { consentText } from "../config/lead-intents";
import { leadFormInputSchema, leadRecordSchema } from "../schemas/lead.schema";
import type { Lead, LeadFormInput, LeadIntent, LeadResultContext } from "../types/lead.types";

export function createLead(input: {
  form: unknown;
  intent: LeadIntent;
  context: LeadResultContext;
  now?: string;
  id?: string;
}) {
  const parsed = leadFormInputSchema.safeParse(input.form);
  if (!parsed.success) {
    return {
      status: "validation_error" as const,
      message: "Lead details could not be validated.",
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  const now = input.now ?? new Date().toISOString();
  const form: LeadFormInput = parsed.data;
  const lead: Lead = {
    id: input.id ?? `lead_${Date.now()}`,
    createdAt: now,
    updatedAt: now,
    status: "submitted",
    fullName: form.fullName,
    email: form.email,
    phone: form.phone,
    preferredContactMethod: form.preferredContactMethod,
    preferredContactTime: form.preferredContactTime,
    consent: {
      accepted: true,
      text: consentText,
      timestamp: now,
      purpose: "family_protection_follow_up",
      contactChannels: [form.preferredContactMethod],
      version: "2026-07-11",
    },
    sourceChannel: input.context.sourceChannel,
    ctaIntent: input.intent,
    scoreSummary: input.context.scoreSummary,
    topGapIds: input.context.topGapIds,
    recommendedProductIds: input.context.recommendedProductIds,
    recommendedProductCategories: input.context.recommendedProductCategories,
    budgetRange: input.context.budgetRange,
    leadPriority: input.context.leadPriority,
    adminOpportunityTags: input.context.adminOpportunityTags,
    customerMessage: form.customerMessage || undefined,
    metadata: { sessionId: input.context.sessionId, demoOnly: true },
  };

  const leadResult = leadRecordSchema.safeParse(lead);
  if (!leadResult.success) {
    return {
      status: "validation_error" as const,
      message: "Lead record could not be validated.",
      issues: leadResult.error.issues.map((issue) => issue.message),
    };
  }

  return { status: "success" as const, lead: leadResult.data as Lead };
}
