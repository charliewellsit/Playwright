import {expect, test} from '@playwright/test';

test('Sign in button is visible', async ({ page }) => {
    // const browser = await chromium.launch();
    // const page = await browser.newPage();

    await page.goto('https://binaryville.com/account');
    const signInButton = page.getByRole('button', { name: 'Sign in' });
    await expect(signInButton).toBeVisible();

    // await browser.close();
});
