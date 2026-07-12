export const prohibitedPocDataTerms = [
  "BVN",
  "NIN",
  "exact address",
  "bank details",
  "card details",
  "policy number",
  "document upload",
  "password",
  "exact salary",
  "medical record",
  "claim record",
  "insurer login",
  "beneficiary name",
  "claim ID",
  "payment received",
  "policy issued",
] as const;

export const prohibitedPocFieldNames = [
  "bvn",
  "nin",
  "exactAddress",
  "bankAccount",
  "cardNumber",
  "policyNumber",
  "documentUpload",
  "password",
  "salary",
  "medicalRecord",
  "claimRecord",
  "insurerLogin",
  "beneficiaryName",
  "claimId",
] as const;

export function containsProhibitedPocTerm(text: string): boolean {
  const normalized = text.toLowerCase();
  return prohibitedPocDataTerms.some((term) => normalized.includes(term.toLowerCase()));
}

export function containsProhibitedPocFieldName(keys: Iterable<string>): boolean {
  const prohibited = new Set(prohibitedPocFieldNames.map((field) => field.toLowerCase()));
  return [...keys].some((key) => prohibited.has(key.toLowerCase()));
}
