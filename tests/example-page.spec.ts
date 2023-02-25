import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle(/DOM SVG Arrows test page/);
});

test('visually test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});
