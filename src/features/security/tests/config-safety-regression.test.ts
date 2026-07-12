import { describe, expect, it } from "vitest";
import { validateConfigDraft } from "@/features/config-admin/services/config-validator";
import { makeConfigDraft } from "@/features/config-admin/tests/config-test-utils";

describe("config safety regression", () => {
  it("blocks prohibited questions and unsafe CTA copy", () => {
    const draft = makeConfigDraft();
    const validation = validateConfigDraft({
      ...draft,
      questions: [
        {
          ...draft.questions[0]!,
          title: "Please provide your BVN",
        },
      ],
      ctas: [{ ...draft.ctas[0]!, label: "Pay now", href: "/pay" }],
    });

    expect(validation.valid).toBe(false);
    expect(validation.privacyIssues.length).toBeGreaterThan(0);
    expect(validation.ctaIssues.length).toBeGreaterThan(0);
  });
});
