import { configExportSchema } from "../schemas/config-export.schema";
import type { ConfigDraft } from "../types/config-admin.types";

export function buildConfigExport(draft: ConfigDraft) {
  if (!draft.validation.valid) {
    return {
      status: "blocked" as const,
      message: "Export simulation is blocked until validation issues are resolved.",
      issues: draft.validation.errors,
    };
  }
  const payload = sanitizeForExport({
    exportLabel: "Config export simulation - not published to live NEM systems." as const,
    version: draft.version,
    generatedAt: new Date("2026-07-11T00:00:00.000Z").toISOString(),
    validation: draft.validation,
    questions: draft.questions,
    scoring: draft.scoring,
    recommendations: draft.recommendations,
    products: draft.products,
    ctas: draft.ctas,
    disclaimers: draft.reportCopy,
  });
  const parsed = configExportSchema.safeParse(payload);
  return parsed.success
    ? { status: "success" as const, payload, json: JSON.stringify(payload, null, 2) }
    : {
        status: "blocked" as const,
        message: "Export payload failed schema validation.",
        issues: parsed.error.issues.map((issue) => issue.message),
      };
}

function sanitizeForExport<T>(value: T): T {
  if (typeof value === "string") return sanitizeText(value) as T;
  if (Array.isArray(value)) return value.map(sanitizeForExport) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, sanitizeForExport(item)]),
    ) as T;
  }
  return value;
}

function sanitizeText(value: string): string {
  return value
    .replace(/\bBVN\b/gi, "sensitive ID")
    .replace(/\bNIN\b/gi, "sensitive ID")
    .replace(/exact address/gi, "precise location")
    .replace(/policy number/gi, "policy identifier")
    .replace(/document upload/gi, "document action")
    .replace(/\bsalary\b/gi, "income detail")
    .replace(
      /\b(card|bank|password|medical record|claim record|insurer login)\b/gi,
      "sensitive detail",
    );
}
