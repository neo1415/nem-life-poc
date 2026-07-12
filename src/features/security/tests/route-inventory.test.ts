import { describe, expect, it } from "vitest";
import { existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { routeInventory } from "@/lib/security/route-inventory";

describe("route inventory", () => {
  it("classifies every current app page route", () => {
    const appDir = join(process.cwd(), "src", "app");
    const actualRoutes = listPageRoutes(appDir);
    const inventoried = new Set(routeInventory.map((route) => route.path));

    expect(actualRoutes.filter((route) => !inventoried.has(route))).toEqual([]);
  });

  it("flags admin and config routes for future auth", () => {
    const protectedRoutes = routeInventory.filter((route) => route.path.startsWith("/admin"));
    expect(protectedRoutes.length).toBeGreaterThan(0);
    expect(protectedRoutes.every((route) => route.futureAuthRequired)).toBe(true);
  });
});

function listPageRoutes(appDir: string): string[] {
  return walk(appDir)
    .filter((file) => file.endsWith("page.tsx"))
    .map((file) => toRoute(relative(appDir, file)))
    .sort();
}

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) return walk(path);
    return existsSync(path) ? [path] : [];
  });
}

function toRoute(pageFile: string) {
  const parts = pageFile
    .replace(/\\page\.tsx$/, "")
    .split("\\")
    .filter((part) => !part.startsWith("("));
  return `/${parts.join("/")}`.replace(/\/$/, "") || "/";
}
