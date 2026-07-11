import type { AdminLead, ProductOpportunity } from "../types/admin-lead.types";

const buckets = [
  { label: "Life Cover", terms: ["life"] },
  { label: "NEM Health", terms: ["health"] },
  { label: "NEM Asset / Wealth Planning", terms: ["wealth", "asset", "savings"] },
  { label: "Motor / General Insurance", terms: ["motor", "general"] },
  { label: "Home / Fire / Burglary", terms: ["home", "fire", "burglary"] },
  { label: "Business Protection", terms: ["business"] },
  { label: "Professional Indemnity", terms: ["professional"] },
  { label: "Beneficiary / Claims Readiness", terms: ["beneficiary", "claims"] },
  { label: "Family Document Readiness", terms: ["document"] },
];

export function buildProductOpportunitySummary(leads: AdminLead[]): ProductOpportunity[] {
  return buckets
    .map((bucket) => {
      const matched = leads.filter((lead) =>
        [...lead.recommendedProductCategories, ...lead.adminOpportunityTags].some((value) =>
          bucket.terms.some((term) => value.toLowerCase().includes(term)),
        ),
      );
      return {
        category: bucket.label,
        leadCount: matched.length,
        priorityMix: priorityMix(matched),
        representativeReason: matched[0]?.priorityReason ?? "No demo leads in this category yet.",
        filterHref: `/admin/leads?product=${encodeURIComponent(bucket.label)}`,
      };
    })
    .filter((item) => item.leadCount > 0);
}

function priorityMix(leads: AdminLead[]) {
  if (!leads.length) return "No leads";
  const mix = leads.reduce<Record<string, number>>((acc, lead) => {
    acc[lead.leadPriority] = (acc[lead.leadPriority] ?? 0) + 1;
    return acc;
  }, {});
  return Object.entries(mix)
    .map(([priority, count]) => `${priority.replace("_", " ")}: ${count}`)
    .join(", ");
}
