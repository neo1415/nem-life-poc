import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { OptionButton } from "./option-button";

describe("OptionButton", () => {
  it("exposes selected state accessibly", () => {
    render(<OptionButton label="My children" selected />);

    expect(screen.getByRole("button", { name: "My children" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });
});
