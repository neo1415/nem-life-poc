import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CustomerResultCtas } from "../components/customer-result-ctas";
import { buildCustomerResultViewModel } from "../services/customer-result-view-model";
import { makeCompletedSession } from "./customer-result-test-utils";

describe("result CTA lead routing", () => {
  it("routes result CTAs through lead capture intents", async () => {
    const result = buildCustomerResultViewModel(makeCompletedSession("business_owner"));
    expect(result.status).toBe("success");
    if (result.status !== "success") return;

    render(
      <CustomerResultCtas
        primary={result.result.primaryCtas}
        secondary={result.result.secondaryCtas}
        support={result.result.supportCtas}
      />,
    );

    const links = await screen.findAllByRole("link");
    const hrefs = links.map((link) => link.getAttribute("href") ?? "");
    expect(hrefs.some((href) => href.includes("/protection-check/lead?intent="))).toBe(true);
    expect(hrefs).not.toContain(expect.stringContaining("pay_now"));
  });

  it("does not render payment or prohibited lead-wall copy", async () => {
    const result = buildCustomerResultViewModel(makeCompletedSession());
    expect(result.status).toBe("success");
    if (result.status !== "success") return;

    render(
      <CustomerResultCtas
        primary={result.result.primaryCtas}
        secondary={result.result.secondaryCtas}
        support={result.result.supportCtas}
      />,
    );

    expect(
      await screen.findByRole("heading", { name: /choose how you may want to continue/i }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/pay now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/submit your details to see your score/i)).not.toBeInTheDocument();
  });
});
