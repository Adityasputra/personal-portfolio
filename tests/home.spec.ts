import { test, expect } from "@playwright/test";

test.describe("Halaman Home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("menampilkan heading utama", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /Building the Future with Code/i })
    ).toBeVisible();
  });

  test("menampilkan avatar image", async ({ page }) => {
    const image = page.locator('img[alt="Aditya Saputra\'s Avatar Profile"]');
    await expect(image).toBeVisible();
  });

  test("menampilkan nama 'Aditya Saputra'", async ({ page }) => {
    await expect(
      page.locator("h1", { hasText: "I'm Aditya Saputra" })
    ).toBeVisible();
  });

  test("toggle dark mode berfungsi", async ({ page }) => {
    const button = page.getByRole("button", { name: /toggle mode/i });
    const backgroundBefore = await page.evaluate(
      () => getComputedStyle(document.body).backgroundColor
    );

    await button.click();

    const backgroundAfter = await page.evaluate(
      () => getComputedStyle(document.body).backgroundColor
    );
    expect(backgroundAfter).not.toBe(backgroundBefore);
  });

  test("toggle clsx aktif", async ({ page }) => {
    const button = page
      .getByRole("button", { name: /aktif/i })
      .or(page.getByRole("button", { name: /tidak aktif/i }));

    const status = page.locator("p", { hasText: /status/i });

    await expect(status).toBeVisible();
    const textBefore = await status.textContent();
    await button.click();
    const textAfter = await status.textContent();

    expect(textAfter).not.toBe(textBefore);
  });

  test("typography test muncul", async ({ page }) => {
    await expect(page.locator("h1", { hasText: "Judul Besar" })).toBeVisible();
    await expect(page.locator("blockquote")).toBeVisible();
    await expect(page.locator("pre")).toBeVisible();
  });
});
