import { adminLeadFiltersSchema } from "../schemas/admin-filter.schema";
import type { AdminLead, AdminLeadFilters } from "../types/admin-lead.types";

export function filterAdminLeads(leads: AdminLead[], filters: AdminLeadFilters): AdminLead[] {
  const parsed = adminLeadFiltersSchema.safeParse(filters);
  if (!parsed.success) return leads;
  const safe = parsed.data;
  const search = safe.search?.trim().toLowerCase();
  return leads.filter((lead) => {
    if (safe.status && safe.status !== "all" && lead.status !== safe.status) return false;
    if (safe.priority && safe.priority !== "all" && lead.leadPriority !== safe.priority)
      return false;
    if (safe.scoreBand && lead.scoreBand !== safe.scoreBand) return false;
    if (safe.productCategory && !lead.recommendedProductCategories.includes(safe.productCategory))
      return false;
    if (safe.ctaIntent && safe.ctaIntent !== "all" && lead.ctaIntent !== safe.ctaIntent)
      return false;
    if (
      safe.sourceChannel &&
      safe.sourceChannel !== "all" &&
      lead.sourceChannel !== safe.sourceChannel
    )
      return false;
    if (
      safe.preferredContactMethod &&
      safe.preferredContactMethod !== "all" &&
      lead.preferredContactMethod !== safe.preferredContactMethod
    ) {
      return false;
    }
    if (safe.budgetRange && lead.budgetRange !== safe.budgetRange) return false;
    if (
      safe.consentStatus &&
      safe.consentStatus !== "all" &&
      lead.consentStatus !== safe.consentStatus
    ) {
      return false;
    }
    if (!search) return true;
    return searchableText(lead).includes(search);
  });
}

function searchableText(lead: AdminLead): string {
  return [
    lead.customerName,
    lead.maskedEmail,
    lead.maskedPhone,
    lead.sourceChannel,
    lead.ctaIntent,
    lead.recommendedProductCategories.join(" "),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}
