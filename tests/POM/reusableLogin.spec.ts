import { test, expect } from './pageObjects/pageFixtures.ts';
// Import the custom test and expect from pageFixtures.ts, which includes the LoginPage fixture.

test('should login using POM', async ({page, loginPage}) => {
    await page.goto('https://binaryville.com/account/');
    await loginPage.login('user@example.com', 'password123');
    expect(page.url()).toContain('password123');
});