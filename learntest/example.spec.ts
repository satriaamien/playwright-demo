import { test, expect } from "@playwright/test";

// select tag, attribute, arrow
// jenis pseucode sibling ~ +
// save wording table array on table
//p:has-text("")

test.describe("test table", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://letcode.in/table");
  });

  test("count table data", async ({ page }) => {
    const tableName = page.locator("table#simpletable");
    // count row
    const countRow = await tableName.locator("thead>tr>th").count();
    console.log("Number row : ", countRow);
    // count column
    const countColumn = await tableName.locator("tbody tr").count();
    console.log("Number column : ", countColumn);
  });

  test("search on filter table", async ({ page }) => {
    const tableName = page.locator("table#simpletable");
    const filterName = tableName.locator(
      "tr:has-text('Chatterjee'):has-text('koushik@letcode.in')"
    );
    // const filterName2 = tableName.filter({
    //   has: page.locator("td"),
    //   hasText: "Chatterjee",
    // });
    await filterName.locator("input").check();
  });

  test.only("loop & choose on filter table", async ({ page }) => {
    const tableName = page.locator("table#simpletable");
    const countRow = await tableName.locator("tbody tr").count();
    console.log("fqwf", countRow);

    //loop if each row include name based array it will checklist
    for (let i = 0; i < countRow; i++) {
      const row = tableName.locator(`tr:nth-child(${i + 1})`);
      if ((await row.locator("td:first-child").textContent()) === "Koushik") {
        console.log(await row.locator("td:first-child").textContent());
        await row.locator(`input`).check();
      }
    }
  });
});
