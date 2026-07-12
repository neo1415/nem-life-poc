import { describe, expect, it } from "vitest";
import { safeErrorMessage } from "@/lib/security/safe-errors";

describe("safe errors", () => {
  it("uses plain messages without stack traces or internals", () => {
    const messages = [
      safeErrorMessage("missing"),
      safeErrorMessage("invalid"),
      safeErrorMessage("storage"),
      safeErrorMessage("not_found"),
    ].join(" ");

    expect(messages).not.toMatch(/stack|trace|syntaxerror|database|token|secret/i);
  });
});
