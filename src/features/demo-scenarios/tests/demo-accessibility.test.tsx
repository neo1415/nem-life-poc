import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ExecutiveDemoPage from "@/app/demo/executive/page";

describe("demo accessibility", () => {
  it("uses clear headings, links, and readable demo warning", () => {
    render(<ExecutiveDemoPage />);
    expect(screen.getByRole("heading", { name: /NEM Life\+ Executive Demo/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/demo data warning/i)).toHaveTextContent(/fictional/i);
    expect(screen.getAllByRole("link", { name: /view report/i }).length).toBeGreaterThan(0);
  });
});
