export const forbiddenClaimPhrases = [
  "guaranteed approval",
  "final premium",
  "your policy is ready",
  "you are fully protected",
  "nem has verified your records",
  "verified policy status",
  "your report has been emailed",
  "email sent successfully",
  "nem crm synced",
  "advisor assigned",
  "policy issued",
  "payment received",
  "premium due",
  "payment overdue",
  "claim processed",
  "buy now or your family is at risk",
  "you must buy this",
  "your family will suffer",
  "you are unprotected",
  "actual conversion rate",
  "confirmed revenue",
] as const;

export function findForbiddenClaims(text: string): string[] {
  const normalized = text.toLowerCase();
  return forbiddenClaimPhrases.filter((phrase) => normalized.includes(phrase));
}
