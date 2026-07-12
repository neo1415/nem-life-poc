import type { ConfigValidationIssue } from "../types/config-admin.types";
import { findForbiddenClaims } from "@/lib/security/copy-safety";

const extraUnsafePhrases = ["pay now", "live in production", "published to nem"];

export function validateCopySafety(text: string, path = "copy"): ConfigValidationIssue[] {
  const normalized = text.toLowerCase();
  const issues: ConfigValidationIssue[] = [];
  [...findForbiddenClaims(text), ...extraUnsafePhrases].forEach((phrase) => {
    if (normalized.includes(phrase)) {
      issues.push(issue(`copy_${slug(phrase)}`, "copy", path, `Unsafe claim: ${phrase}.`));
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
