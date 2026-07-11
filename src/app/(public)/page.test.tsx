import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";

describe("NEM Life+ landing page", () => {
  it("renders required landing copy and CTA without asking for contact details", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /is your family protected if life changes tomorrow/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /start my free check/i })).toHaveAttribute(
      "href",
      "/protection-check/start",
    );
    expect(screen.queryByText(/phone number/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/email address/i)).not.toBeInTheDocument();
  });
});
