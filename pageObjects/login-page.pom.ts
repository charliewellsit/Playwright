import {Locator, Page} from '@playwright/test'; 
// This line imports two types from Playwright: 
// Page → represents a browser tab and lets you interact with the webpage
// Locator → represents an element on the page (like a button or input field) 
// and allows you to perform actions on it

export class LoginPage { 
// This creates a class called LoginPage
// A class is a blueprint for an object; it can store variables (properties) and functions (methods)
// export means you can use this class in other files by importing it

    public readonly emailLocator: Locator; 
    // Declares a property emailLocator
    // public → can be accessed from outside the class
    // readonly → cannot be changed after assignment
    // : Locator → TypeScript type hint, says this property will behave like a Locator

    public readonly passwordLocator: Locator; 
    // Declares a property passwordLocator
    // same rules as emailLocator, but points to the password input field

    public readonly signInButton: Locator; 
    // Declares a property signInButton
    // points to the Sign In button on the page

    constructor(page: Page) { 
    // Special function called a constructor
    // Runs automatically when you create a new instance of LoginPage
    // page: Page → a page object whose type is Page (from Playwright)

        this.emailLocator = page.getByRole('textbox', {name: 'Email'}); 
        // Assigns the email input field to emailLocator
        // page.getByRole('textbox', {name: 'Email'}) finds the textbox with accessible name "Email"

        this.passwordLocator = page.getByRole('textbox', {name: 'Password'}); 
        // Assigns the password input field to passwordLocator
        // Finds the textbox with accessible name "Password"

        this.signInButton = page.getByRole('button', {name: 'Sign In'}); 
        // Assigns the Sign In button to signInButton
        // Finds the button with accessible name "Sign In"
    }
}

// Summary: This LoginPage class is a Page Object Model (POM) for your login page
// It stores locators for important elements (email, password, sign-in button)
// You can use it in tests like:
// const loginPage = new LoginPage(page);
// await loginPage.emailLocator.fill('myemail@example.com');
// await loginPage.passwordLocator.fill('mypassword');
// await loginPage.signInButton.click();
