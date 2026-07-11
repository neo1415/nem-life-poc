import { describe, expect, it } from "vitest";
import { buildDashboardCtas, leadCaptureCtas } from "../services/dashboard-cta-builder";

describe("dashboard CTA builder", () => {
  it("builds safe internal dashboard CTAs", () => {
    const ctas = [...buildDashboardCtas(true), ...leadCaptureCtas()];

    expect(ctas.map((cta) => cta.label)).toContain("View My Report");
    expect(ctas.map((cta) => cta.label)).toContain("Request a Review");
    ctas.forEach((cta) => {
      expect(cta.href).toMatch(/^\//);
      expect(`${cta.label} ${cta.href}`).not.toMatch(/pay|buy|purchase|claim|upload|bank/i);
    });
  });
});
