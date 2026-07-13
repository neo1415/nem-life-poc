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

for (const viewport of [
  { width: 1440, height: 900 },
  { width: 1366, height: 768 },
  { width: 1280, height: 720 },
]) {
  test(`assessment fits the ${viewport.width}x${viewport.height} desktop viewport`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/protection-check/start");
    await expect(page.getByRole("button", { name: /continue/i })).toBeVisible();
    const dimensions = await page.evaluate(() => ({
      clientHeight: document.documentElement.clientHeight,
      scrollHeight: document.documentElement.scrollHeight,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(dimensions.scrollHeight).toBeLessThanOrEqual(dimensions.clientHeight + 1);
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
  });
}

test("mobile assessment keeps controls reachable and allows necessary scrolling", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/protection-check/start");
  await expect(page.getByRole("heading", { name: /what should we call you/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /continue/i })).toBeVisible();
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  expect(scrollWidth).toBeLessThanOrEqual(391);
});

test("report produces a printable PDF", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "accessibility", "PDF generation runs once in Chromium.");
  await page.goto("/demo/reports");
  await page.emulateMedia({ media: "print" });
  const pdf = await page.pdf({
    format: "A4",
    path: "tmp/pdfs/nem-life-report.pdf",
    printBackground: true,
  });
  expect(pdf.subarray(0, 4).toString()).toBe("%PDF");
});

test("customer can complete every visible assessment step", async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name === "accessibility",
    "The full-flow journey runs once in Chromium.",
  );
  test.setTimeout(90_000);
  await page.goto("/protection-check/start");

  for (let step = 0; step < 24 && page.url().includes("/start"); step += 1) {
    await page.waitForTimeout(250);
    if (!page.url().includes("/start")) break;
    const locationState = page.getByLabel(/primary state/i);
    const textAnswer = page.getByLabel(/your answer/i);
    const plus = page.getByRole("button", { name: /increase dependants/i });
    const options = page.locator(".ds-option");

    if (await locationState.isVisible().catch(() => false)) {
      await locationState.fill("Lagos");
      await page.getByLabel(/city or local government area/i).fill("Ikeja");
    } else if (await textAnswer.isVisible().catch(() => false)) {
      await textAnswer.fill("Ada");
    } else if (await plus.isVisible().catch(() => false)) {
      await plus.click();
    } else if ((await options.count()) > 0) {
      await options.first().evaluate((element) => (element as HTMLButtonElement).click());
    }

    await page
      .getByRole("button", { name: /continue/i })
      .evaluate((element) => (element as HTMLButtonElement).click());
  }

  await expect(page).toHaveURL(/\/protection-check\/complete/);
  await expect(page.getByRole("heading", { level: 1, name: /check is complete/i })).toBeVisible();
});
