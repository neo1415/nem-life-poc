import { expect, test } from "@playwright/test";

test("home page renders the NEM Life+ landing page", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /is your family protected if life changes tomorrow/i }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /start my free check/i })).toBeVisible();
});
