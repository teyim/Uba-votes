import { test, expect } from '@playwright/test';

test.describe('landing page', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3000');
  });

  test('should have main heading', async ({ page }) => {
    // Assertions use the expect API.
    await expect(
      page.getByRole('heading', { name: 'Cast Votes Online' })
    ).toBeVisible();
  });

  test('should goto login page when already have account link is clicked', async ({
    page,
  }) => {
    // click login button
    await page.getByRole('link', { name: 'Already have an account?' }).click();

    // Assertions use the expect API.
    await expect(
      page.getByRole('heading', { name: 'Login', exact: true })
    ).toBeVisible();
  });
});
