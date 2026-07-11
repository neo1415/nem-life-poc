import { describe, expect, it } from "vitest";
import { firstNameFromDisplayName, maskEmail, maskPhone } from "../services/contact-masking";

describe("contact masking", () => {
  it("masks email and phone details", () => {
    expect(maskEmail("ada@example.com")).toBe("ad***@example.com");
    expect(maskPhone("+2348012345678")).toBe("234***5678");
  });

  it("handles unsafe or empty contacts without exposing them", () => {
    expect(maskEmail("bad-email")).toBeUndefined();
    expect(maskPhone("123")).toBeUndefined();
    expect(maskEmail(undefined)).toBeUndefined();
    expect(maskPhone(undefined)).toBeUndefined();
  });

  it("extracts a safe first name", () => {
    expect(firstNameFromDisplayName("Ada Nwosu")).toBe("Ada");
  });
});
