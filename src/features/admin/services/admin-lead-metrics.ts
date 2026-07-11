import type { AdminLead, AdminMetrics } from "../types/admin-lead.types";

export function computeAdminLeadMetrics(leads: AdminLead[]): AdminMetrics {
  const total = leads.length;
  return {
    totalLeads: total,
    newLeads: leads.filter((lead) => lead.status === "new").length,
    highPriorityLeads: leads.filter((lead) => lead.leadPriority === "high").length,
    veryHighPriorityLeads: leads.filter((lead) => lead.leadPriority === "very_high").length,
    averageScore: total ? Math.round(leads.reduce((sum, lead) => sum + lead.score, 0) / total) : 0,
    mostCommonScoreBand: mostCommon(leads.map((lead) => lead.scoreBand)) ?? "None",
    consentedLeads: leads.filter((lead) => lead.consentStatus === "accepted").length,
    needingFollowUp: leads.filter((lead) =>
      ["new", "reviewed", "contact_pending"].includes(lead.status),
    ).length,
    bySourceChannel: countBy(leads.map((lead) => lead.sourceChannel)),
    byCtaIntent: countBy(leads.map((lead) => lead.ctaIntent)),
  };
}

function countBy(values: string[]) {
  return values.reduce<Record<string, number>>((acc, value) => {
    acc[value] = (acc[value] ?? 0) + 1;
    return acc;
  }, {});
}

function mostCommon(values: string[]) {
  const counts = countBy(values);
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
}
