import { containsProhibitedPocTerm } from "./prohibited-data";

export const safeAdminExportFields = [
  "leadId",
  "createdDate",
  "status",
  "priority",
  "customerName",
  "maskedEmail",
  "maskedPhone",
  "preferredContactMethod",
  "ctaIntent",
  "sourceChannel",
  "scoreBand",
  "score",
  "topGaps",
  "recommendedProductCategories",
  "consentAccepted",
  "demoMode",
] as const;

export function assertSafeExportText(value: string): boolean {
  return !containsProhibitedPocTerm(value);
}
