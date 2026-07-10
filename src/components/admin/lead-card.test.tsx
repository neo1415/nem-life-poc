import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LeadCard } from "./lead-card";

describe("LeadCard", () => {
  it("renders status and priority labels", () => {
    render(<LeadCard name="Demo Customer" priority="high" score="58/100" status="new demo lead" />);

    expect(screen.getByText("high priority")).toBeInTheDocument();
    expect(screen.getByText("new demo lead")).toBeInTheDocument();
  });
});
