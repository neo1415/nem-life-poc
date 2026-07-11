import { describe, expect, it } from "vitest";
import { buildReportCtas } from "../services/report-cta-builder";

describe("report CTA builder", () => {
  it("builds honest internal links", () => {
    const ctas = buildReportCtas("send_report");

    expect(ctas.map((cta) => cta.label)).toContain("Preview Email");
    ctas.forEach((cta) => {
      expect(cta.href).toMatch(/^\//);
      expect(cta.href).not.toMatch(/payment|purchase|checkout/i);
      if (cta.isDemoLink) expect(cta.note).toMatch(/Demo|simulated/i);
    });
  });
});
