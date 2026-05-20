import { expect, test } from "@playwright/test";

test("home page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
});

test("can navigate to users", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Users" }).click();
  await expect(page).toHaveURL(/\/users/);
});
