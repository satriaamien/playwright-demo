import { test, expect } from "@playwright/test";

// select tag, attribute, arrow
// jenis pseucode sibling ~ +
// save wording table array on table
//p:has-text("")
test.describe("test table", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://letcode.in/table");
  });
  test("test", async () => {
    
  });
});
