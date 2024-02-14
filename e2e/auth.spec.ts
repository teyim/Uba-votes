import { test, expect } from '@playwright/test';
import { users } from 'utils/mock';

const { login } = users;
test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3000/login');
  });

  test('should login user with valid credentials ', async ({ page }) => {
    await page.fill('input[name="matricule"]', login.validLogin.matricule);
    await page.getByPlaceholder('Matricule').press('Tab');

    await page.fill('input[name="password"]', login.validLogin.password);
    await page.getByPlaceholder('Password').press('Tab');
    await page.press('input[name="password"]', 'Enter');

    await page.waitForURL('http://localhost:3000/campaigns');
    await expect(page).toHaveURL('http://localhost:3000/campaigns');
  });
});
