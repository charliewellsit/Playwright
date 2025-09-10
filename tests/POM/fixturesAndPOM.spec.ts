import {test as base, expect} from '@playwright/test';
import {LoginPage} from './pageObjects/login-page.pom.ts';

const test = base.extend<{loginPage: LoginPage}>({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
});

test('should login using POM', async ({page, loginPage}) => {
    await page.goto('https://binaryville.com/account/');
    await loginPage.emailLocator.fill('user@example.com');
    await loginPage.passwordLocator.fill('password123');
    await loginPage.signInButton.click();
    expect(page.url()).toContain('password123');
});