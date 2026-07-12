import { expect, test } from "@playwright/test";

test("home page renders the NEM Life+ landing page", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /is your family protected if life changes tomorrow/i }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /start my free check/i })).toBeVisible();
});

test("executive demo scenario path renders key pages", async ({ page }) => {
  await page.goto("/demo/executive");
  await expect(page.getByRole("heading", { name: /NEM Life\+ Executive Demo/i })).toBeVisible();

  await page.goto("/demo/scenarios/business_owner");
  await expect(page.getByRole("heading", { name: /Chinedu Eze/i })).toBeVisible();

  await page.goto("/demo/scenarios/compare");
  await expect(page.getByRole("heading", { name: /fictional data only/i })).toBeVisible();

  await page.goto("/demo/reset");
  await expect(page.getByRole("button", { name: /reset demo data/i })).toBeVisible();
});
