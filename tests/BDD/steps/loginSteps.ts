import {Given, When, Then} from '@cucumber/cucumber';
import{ expect } from '@playwright/test';
import { page } from './browserSetup';

Given('the user is on the login page', async () => {
    await page.goto('https://binaryville.com/account/');
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
