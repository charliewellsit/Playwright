import { expect, test, chromium } from '@playwright/test';
// Imports Playwright tools: 
// test → to define tests
// expect → to check/assert things
// chromium → to launch a Chromium browser

test('Sign in button is visible', async () => {
// Defines a test named “Sign in button is visible”
// async → allows using await for asynchronous browser actions

    const browser = await chromium.launch();
    // Opens a new Chromium browser
    // await → waits until the browser is fully ready

    const page = await browser.newPage();
    // Opens a new browser tab (a page)

    await page.goto('https://binaryville.com/account');
    // Navigates the page to the given URL
    // await → waits until the page is loaded

    const signInButton = page.getByRole('button', { name: 'Sign in' });
    // Finds the button with text “Sign in” using accessibility roles

    await expect(signInButton).toBeVisible();
    // Checks/asserts that the button is visible on the page
    // Automatically waits a few seconds for the button to appear if it’s slow

    await browser.close();
    // Closes the browser and ends the test
});

