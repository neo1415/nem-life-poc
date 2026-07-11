import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NemEntryPage from "./page";

describe("mock NEM entry page", () => {
  it("renders the required entry card and CTA", () => {
    render(<NemEntryPage />);

    expect(
      screen.getByRole("heading", { name: /check your family protection score/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/not the real NEM website or app/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /check my score/i })).toHaveAttribute("href", "/");
  });
});
