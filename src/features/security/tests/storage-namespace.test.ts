import { describe, expect, it } from "vitest";
import { resetNemLifeDemoData } from "@/features/demo-scenarios/services/demo-reset-service";
import { isNemLifeStorageKey } from "@/lib/security/storage-namespace";

describe("storage namespace", () => {
  it("only treats NEM Life keys as resettable", () => {
    expect(isNemLifeStorageKey("nem-life-plus:demo-leads:v1")).toBe(true);
    expect(isNemLifeStorageKey("nem-life.config-admin.demo-draft")).toBe(true);
    expect(isNemLifeStorageKey("unrelated")).toBe(false);
  });

  it("demo reset preserves unrelated browser storage", () => {
    window.sessionStorage.setItem("nem-life-plus:demo-leads:v1", "[]");
    window.sessionStorage.setItem("unrelated", "keep");

    const result = resetNemLifeDemoData(window.sessionStorage);

    expect(result.status).toBe("success");
    expect(window.sessionStorage.getItem("nem-life-plus:demo-leads:v1")).toBeNull();
    expect(window.sessionStorage.getItem("unrelated")).toBe("keep");
  });
});
