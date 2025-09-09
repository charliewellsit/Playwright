import { test as base, expect } from '@playwright/test'; 
// Import Playwright's test runner and assertion library
// 'test' lets us write tests, 'expect' lets us check conditions in tests

// ------------------------
// 1. Define fixture types
// ------------------------
type MyFixtures = { 
  testData: { email: string; password: string } 
};
// This tells TypeScript: 
// "We will have a fixture called 'testData' that provides an object with email and password as strings"
// Helps TypeScript understand the shape of our custom fixture

// ---------------------------------------
// 2. Extend the base test with our fixture
// ---------------------------------------
const test = base.extend<MyFixtures>({
  testData: async ({}, use) => {
    // 'testData' is the name of our fixture

    const data = { email: "test@example.com", password: "password123" };
    // This is the data our fixture will provide

    await use(data); 
    // 'use' passes the fixture value to the test function
    // The test can now access this fixture via { testData }
  },
});

// ---------------------------------------
// 3. Write a test that uses the fixture
// ---------------------------------------
test("Should log in with test data", async ({ page, testData }) => {
  // 'page' is Playwright's browser page object
  // 'testData' is our custom fixture containing email and password

  // ------------------------
  // Go to the login page
  // ------------------------
  await page.goto("https://binaryville.com/account");
  // Navigate the browser to the given URL
  // 'await' ensures the code waits until the page finishes loading

  // ------------------------
  // Fill in email
  // ------------------------
  const emailInput = page.getByLabel("Email"); 
  // Find the input field whose label text is "Email"
  await emailInput.fill(testData.email); 
  // Fill the email field with the value from our fixture

  // ------------------------
  // Fill in password
  // ------------------------
  const passwordInput = page.getByLabel("Password");
  // Find the input field whose label text is "Password"
  await passwordInput.fill(testData.password);
  // Fill the password field with the value from our fixture

  // ------------------------
  // Click the Sign in button
  // ------------------------
  const signInButton = page.getByRole("button", { name: "Sign in" });
  // Find the button with role 'button' and visible name 'Sign in'
  await signInButton.click(); 
  // Click the button

  // ------------------------
  // Verify page URL
  // ------------------------
  const url = page.url(); 
  // Get the current page URL
  expect(url).toContain("account"); 
  // Check that the URL contains 'account' as a simple assertion
  // (better than checking password in URL)
});
