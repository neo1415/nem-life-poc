export type SafeErrorKind = "missing" | "invalid" | "storage" | "not_found";

const safeErrorMessages: Record<SafeErrorKind, string> = {
  missing: "We could not find the demo context for this page.",
  invalid: "This demo context could not be validated.",
  storage: "Browser demo storage is unavailable.",
  not_found: "That demo record was not found.",
};

export function safeErrorMessage(kind: SafeErrorKind): string {
  return safeErrorMessages[kind];
}
