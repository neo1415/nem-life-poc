import type { Lead } from "@/features/leads/types/lead.types";
import { maskEmail, maskPhone } from "@/features/reports/services/contact-masking";
import { adminLeadSchema } from "../schemas/admin-lead.schema";
import type { AdminLead } from "../types/admin-lead.types";
import { defaultAdminLeadStatus } from "./lead-status-workflow";

export function buildAdminLeadViewModel(lead: Lead): AdminLead | undefined {
  const adminLead: AdminLead = {
    id: lead.id,
    createdAt: lead.createdAt,
    updatedAt: lead.updatedAt,
    status: defaultAdminLeadStatus(),
    customerName: lead.fullName,
    maskedEmail: maskEmail(lead.email),
    maskedPhone: maskPhone(lead.phone),
    preferredContactMethod: lead.preferredContactMethod,
    preferredContactTime: lead.preferredContactTime,
    consentStatus: "accepted",
    consentTimestamp: lead.consent.timestamp,
    consentVersion: lead.consent.version,
    ctaIntent: lead.ctaIntent,
    sourceChannel: lead.sourceChannel,
    score: lead.scoreSummary.score,
    scoreBand: lead.scoreSummary.scoreBandLabel,
    leadPriority: lead.leadPriority,
    priorityReason: priorityReason(lead),
    topGaps: lead.topGapIds,
    recommendedProductCategories: lead.recommendedProductCategories,
    adminOpportunityTags: lead.adminOpportunityTags,
    budgetRange: lead.budgetRange,
    followUpNotes: [],
    demoMode: true,
    metadata: { sessionId: lead.metadata.sessionId },
  };
  const parsed = adminLeadSchema.safeParse(adminLead);
  return parsed.success ? (parsed.data as AdminLead) : undefined;
}

function priorityReason(lead: Lead): string {
  const signals = [
    ...lead.recommendedProductCategories.slice(0, 3),
    ...lead.adminOpportunityTags.slice(0, 2).map((tag) => tag.replace(/_/g, " ")),
  ];
  return signals.length
    ? `${lead.leadPriority.replace("_", " ")} priority - ${signals.join(", ")}.`
    : `${lead.leadPriority.replace("_", " ")} priority based on the submitted demo result.`;
}
