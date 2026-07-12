import { prohibitedPocDataTerms } from "@/lib/security/prohibited-data";

const prohibitedTerms = [
  ...prohibitedPocDataTerms.map((term) => term.toLowerCase()),
  "payment",
  "bank",
  "card",
  "salary",
];

export function containsProhibitedDataRequest(text: string): boolean {
  const normalized = text.toLowerCase();
  if (
    /\b(no|not|without)\b.{0,50}(bvn|nin|payment|upload|document|card|bank|policy number)/i.test(
      text,
    ) ||
    /\b(do not|don't|not)\b.{0,50}(exact address|policy number)/i.test(text)
  ) {
    return false;
  }
  return prohibitedTerms.some((term) => {
    const pattern = new RegExp(
      `\\b(enter|provide|submit|upload|collect|ask for|require|add)\\b.{0,60}${escapeRegExp(term)}`,
      "i",
    );
    return pattern.test(normalized) || normalized.includes(`collect ${term}`);
  });
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
