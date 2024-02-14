import { test, expect } from '@playwright/test';

test.describe('login page', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3000/login');
  });

  test('should login when user filles ', async ({ page }) => {
    // Assertions use the expect API.
    await expect(
      page.getByRole('heading', { name: 'Cast Votes Online' })
    ).toBeVisible();
  });
});
