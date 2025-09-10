import {test as base, expect} from '@playwright/test';
import {LoginPage} from './pageObjects/reuse-login-page.pom.ts';

const test = base.extend<{loginPage: LoginPage}>({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
});

test('should login using POM', async ({page, loginPage}) => {
    await page.goto('https://binaryville.com/account/');
    await loginPage.login('user@example.com', 'password123');
    expect(page.url()).toContain('password123');
});