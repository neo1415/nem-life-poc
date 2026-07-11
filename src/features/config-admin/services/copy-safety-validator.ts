import type { ConfigValidationIssue } from "../types/config-admin.types";

const unsafePhrases = [
  "guaranteed approval",
  "final premium",
  "nem has verified",
  "email sent",
  "advisor assigned",
  "crm synced",
  "fully protected",
  "policy issued",
  "claim processed",
  "must buy",
  "pay now",
  "live in production",
  "published to nem",
  "approved by compliance",
];

const fearPhrases = ["your family is at risk", "too late", "danger", "unprotected"];

export function validateCopySafety(text: string, path = "copy"): ConfigValidationIssue[] {
  const normalized = text.toLowerCase();
  const issues: ConfigValidationIssue[] = [];
  unsafePhrases.forEach((phrase) => {
    if (normalized.includes(phrase)) {
      issues.push(issue(`copy_${slug(phrase)}`, "copy", path, `Unsafe claim: ${phrase}.`));
    }
  });
  fearPhrases.forEach((phrase) => {
    if (normalized.includes(phrase)) {
      issues.push(issue(`fear_${slug(phrase)}`, "copy", path, `Fear-based copy: ${phrase}.`));
    }
  });
  return issues;
}

export function hasRequiredDisclaimerConcepts(copy: string): boolean {
  const normalized = copy.toLowerCase();
  return (
    (normalized.includes("estimate") || normalized.includes("guidance only")) &&
    normalized.includes("approved") &&
    normalized.includes("eligibility") &&
    normalized.includes("pricing")
  );
}

function issue(
  id: string,
  section: ConfigValidationIssue["section"],
  path: string,
  message: string,
): ConfigValidationIssue {
  return {
    id,
    severity: "error",
    section,
    path,
    message,
    suggestedFix:
      "Use calm preview-only language with no final approval, pricing, or live-system claim.",
    blocking: true,
  };
}

function slug(value: string): string {
  return value.replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}
