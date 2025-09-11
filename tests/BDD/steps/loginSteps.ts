import {Given, When, Then, Before, After} from '@cucumber/cucumber';
import{ chromium, expect, Browser, Page } from '@playwright/test';

let page: Page;
let browser: Browser;

Before(async () => {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
})

After(async () => {
    await browser.close();
})

Given('the user is on the login page', async () => {
    await page.goto('https://binaryville.com/account/'); // Replace with actual login URL
});

When('the user enters valid credentials', async () => {
    await page.getByRole('textbox', { name: 'Email' }).fill('test@example.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('password123');
    await page.getByRole('button', { name: 'Sign In' }).click();
});

Then('the user should see their email and password in the URL', async () => {
    await expect(page).toHaveURL(/test%40example.com/);
    await expect(page).toHaveURL(/password123/);
});
