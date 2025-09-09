import { test as base, expect, Page } from '@playwright/test';

type MyFixtures = { 
  testData: { email: string; password: string };
  authenticatedUser: Page; 
};

const test = base.extend<MyFixtures>({
  testData: async ({}, use) => {
    const data = { email: "test@example.com", password: "password123" };
    await use(data); 
    // use() will deliver the only thing after all those lines 
    // and deliver this only result as the outcome of this fixture 
    // and will be used as an object in test()
  },
  authenticatedUser: [async ({ page, testData }, use) => {
    await page.goto("https://binaryville.com/account");

    const emailInput = page.getByLabel("Email");
    await emailInput.fill(testData.email);

    const passwordInput = page.getByLabel("Password");
    await passwordInput.fill(testData.password);

    const signInButton = page.getByRole("button", { name: "Sign in" });
    await signInButton.click();

    await use(page);
  }, { auto: true }] 
    // 'auto: true' means this fixture is used automatically in each test
    // it actually rewrites 'page', which was a default fixture in Playwright.
});

test("Should log in with test data", async ({ page }) => {
  const url = page.url();
  // this page is now the authenticated page. which is the outcome of the fixture above.
  expect(url).toContain("account");
});
