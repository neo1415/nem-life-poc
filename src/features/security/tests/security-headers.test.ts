import { describe, expect, it } from "vitest";
import nextConfig from "../../../../next.config";
import { securityHeaders } from "@/lib/security/security-headers";

describe("security headers", () => {
  it("defines the baseline browser hardening headers", () => {
    expect(securityHeaders).toContainEqual({ key: "X-Content-Type-Options", value: "nosniff" });
    expect(securityHeaders).toContainEqual({ key: "X-Frame-Options", value: "DENY" });
  });

  it("applies headers through Next config", async () => {
    const headers = await nextConfig.headers?.();
    expect(headers?.[0]?.headers).toEqual([...securityHeaders]);
  });
});
