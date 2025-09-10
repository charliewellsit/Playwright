import {Locator, Page} from '@playwright/test';

export class LoginPage {
    public readonly emailLocator: Locator;
    public readonly passwordLocator: Locator;
    public readonly signInButton: Locator;

    constructor(page: Page) {
        this.emailLocator = page.getByRole('textbox', {name: 'Email'});
        this.passwordLocator = page.getByRole('textbox', {name: 'Password'});
        this.signInButton = page.getByRole('button', {name: 'Sign In'});
    }

    async login(email: string, password: string) {
    // Define an async method named login that takes two strings: email and password.
    // - async: the method returns a Promise and lets us use `await` inside it.
    // - email: string, password: string — TypeScript types, help catch mistakes early.
    await this.emailLocator.fill(email);
    // this. refers to the object which called this function.
    // Wait for Playwright to fill the email input with the provided email.
    // fill(...) returns a Promise; `await` pauses until the action completes.
    // Playwright's Locator actions automatically wait for the element to be ready.
    await this.passwordLocator.fill(password);
    // Fill the password input and wait for completion.
    await this.signInButton.click();
    // Click the Sign In button and wait for the click action to finish.
    // If the click causes navigation and you need to wait for new page load, 
    // you might also await a navigation Expect or `page.waitForNavigation()` together with click.
    }
}

