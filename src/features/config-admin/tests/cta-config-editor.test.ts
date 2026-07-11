import { describe, expect, it } from "vitest";
import {
  editCtaHelper,
  editCtaHref,
  editCtaLabel,
  toggleCtaFutureFlag,
} from "../services/cta-config-editor";
import { makeConfigDraft } from "./config-test-utils";

describe("CTA config editor", () => {
  it("edits labels and flags unsafe payment routes", () => {
    const draft = makeConfigDraft();
    const edited = editCtaLabel(draft, "send_report", "Send Report Preview");
    const helper = editCtaHelper(edited, "send_report", "Demo report handoff.");
    const toggled = toggleCtaFutureFlag(helper, "send_report");
    expect(toggled.ctas.find((cta) => cta.intent === "send_report")?.futurePlaceholder).toBe(true);
    const unsafe = editCtaHref(toggled, "send_report", "/pay-now");
    expect(unsafe.validation.ctaIssues.some((issue) => issue.id === "cta_href")).toBe(true);
  });
});
