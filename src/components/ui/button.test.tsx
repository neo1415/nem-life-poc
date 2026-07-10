import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders variants and disabled state", () => {
    render(
      <Button disabled variant="secondary">
        Continue
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Continue" });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("ds-button--secondary");
  });

  it("requires an accessible label for icon-only buttons", () => {
    expect(() => render(<Button size="icon">x</Button>)).toThrow(
      "Icon-only buttons require iconOnlyLabel.",
    );
  });
});
