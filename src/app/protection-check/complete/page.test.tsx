import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProtectionCheckCompletePage from "./page";

describe("protection check completion route", () => {
  it("handles a missing completed session safely", () => {
    window.sessionStorage.clear();

    render(<ProtectionCheckCompletePage />);

    expect(screen.getByRole("heading", { name: /your check is complete/i })).toBeInTheDocument();
    expect(screen.getByText(/no completed check was found/i)).toBeInTheDocument();
    expect(screen.queryByText(/\d+\/100/)).not.toBeInTheDocument();
  });
});
