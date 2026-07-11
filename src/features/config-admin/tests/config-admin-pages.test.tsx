import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ConfigAdminRuntime } from "../components/config-admin-runtime";

describe("config admin pages", () => {
  it("renders overview, questions, scoring, recommendations, products, CTAs, preview, export, and demo", () => {
    render(<ConfigAdminRuntime section="overview" />);
    expect(screen.getByText(/Configuration demo/)).toBeInTheDocument();
    expect(screen.getByText("Validation")).toBeInTheDocument();

    const sections = [
      "questions",
      "scoring",
      "recommendations",
      "products",
      "ctas",
      "preview",
      "export",
      "demo",
    ] as const;
    sections.forEach((section) => {
      cleanup();
      const { unmount } = render(<ConfigAdminRuntime section={section} />);
      expect(screen.getByLabelText(/Configuration demo boundary/)).toBeInTheDocument();
      unmount();
    });
  });
});
