import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ConfigAdminRuntime } from "../components/config-admin-runtime";

const forbidden = [
  "BVN",
  "NIN",
  "exact address",
  "card details",
  "bank details",
  "policy number",
  "password",
  "salary",
  "medical record",
  "claim record",
  "insurer login",
  "Live in production",
  "Published to NEM",
  "Approved by Compliance",
];

describe("config admin privacy", () => {
  it("does not render sensitive data or live-publish claims", () => {
    render(<ConfigAdminRuntime section="export" />);
    const text = document.body.textContent ?? "";
    forbidden.forEach((phrase) =>
      expect(new RegExp(`\\b${phrase.replaceAll(" ", "\\s+")}\\b`).test(text)).toBe(false),
    );
    expect(text).toContain("not published to live NEM systems");
  });
});
