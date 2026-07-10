import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Field } from "./field";
import { Input } from "./input";

describe("Field", () => {
  it("connects label, helper, and error text to the control", () => {
    render(
      <Field
        htmlFor="email"
        label="Email"
        helperText="Use a reachable email."
        error="Email is required."
      >
        <Input id="email" />
      </Field>,
    );

    const input = screen.getByLabelText("Email");
    expect(input).toHaveAccessibleDescription("Use a reachable email. Email is required.");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });
});
