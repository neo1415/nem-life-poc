import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";

describe("home page foundation", () => {
  it("renders foundation copy without product overclaiming", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: /family protection/i })).toBeInTheDocument();
    expect(screen.getByText(/no BVN, NIN, payment, document upload/i)).toBeInTheDocument();
  });
});
