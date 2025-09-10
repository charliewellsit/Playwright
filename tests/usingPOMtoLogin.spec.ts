import {test, expect} from '@playwright/test';
import {LoginPage} from '../pageObjects/login-page.pom';

test('should login using POM', async ({page}) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://binaryville.com/account/');
    await loginPage.emailLocator.fill('user@example.com');
    await loginPage.passwordLocator.fill('password123');
    await loginPage.signInButton.click();
    expect(page.url()).toContain('password123');
});