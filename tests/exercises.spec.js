// ***npx playwright codegen***

import { expect, test } from "@playwright/test";
const testcafeURL = "https://devexpress.github.io/testcafe/example/";


test.beforeEach(async ({page}) => {
  await page.goto(testcafeURL)
})


//1
test.describe("Checkboxes validation", () => {
  test("3 Checkboxes", async ({ page }) => {
    await page.getByTestId("remote-testing-checkbox").check();
    await page.getByTestId("reusing-js-code-checkbox").check();
    await page.getByTestId("parallel-testing-checkbox").check();
    await expect(page.getByTestId("remote-testing-checkbox")).toBeChecked();
  });
});

//2
test.describe("radio button validation", () => {
  test("OS radio button - windwos", async ({ page }) => {
    await page.getByTestId("windows-radio").check();
    await expect(page.getByTestId("windows-radio")).toBeChecked();
  });
});

//3
test.describe("checklist validation", () => {
  test("JavaScriptAPI", async ({ page }) => {
    await page.getByTestId("preferred-interface-select").selectOption("JavaScript API");
    await expect(page.getByTestId("preferred-interface-select")).toHaveValue("JavaScript API");
  });
});

//4
test.describe("slider validation", () => {
  test("isDisabled", async ({ page }) => {
    await expect(page.locator("#tried-test-cafe")).not.toBeChecked();
    await expect(page.locator("#slider")).toHaveClass(/ui-slider-disabled/);
  });

//5
  test("isEnabled", async ({ page }) => {
    await page.locator('#tried-test-cafe').click();
    await expect(page.locator("#tried-test-cafe")).toBeChecked();
    await expect(page.locator("#slider")).toBeEnabled();
  });
});

//6
test("isEnabled", async ({ page }) => {
  await page.locator('#tried-test-cafe').click();
  await page.locator('#comments').click()
  await page.locator('#comments').fill('I am doing Automation\nIm an automated comment\nI should assert this works');
  await expect(page.locator('#comments')).toHaveValue('I am doing Automation\nIm an automated comment\nI should assert this works')
});

//7
test("submitIsDisabled", async ({page}) =>{
  await expect(page.locator("#submit-button")).toBeDisabled()
});

//8
test('fillForm', async ({ page }) => {
  await page.getByTestId('remote-testing-checkbox').check();
  await page.getByTestId('analysis-checkbox').check();
  await page.getByTestId('windows-radio').check();
  await page.getByTestId('tried-testcafe-checkbox').check();
  await page.getByTestId('name-input').click();
  await page.getByTestId('name-input').type('Peter Parker');
  await page.getByTestId('comments-area').click();
  await page.getByTestId('comments-area').type('lol');
  await page.getByTestId('submit-button').click();
  await expect(page.getByTestId('thank-you-header')).toContainText('Thank you, Peter Parker!');
});

//9
test('fillForm&URL', async ({ page }) => {
  await page.getByTestId('remote-testing-checkbox').check();
  await page.getByTestId('analysis-checkbox').check();
  await page.getByTestId('windows-radio').check();
  await page.getByTestId('tried-testcafe-checkbox').check();
  await page.getByTestId('name-input').click();
  await page.getByTestId('name-input').type('Peter Parker');
  await page.getByTestId('comments-area').click();
  await page.getByTestId('comments-area').type('lol');
  await page.getByTestId('submit-button').click();
  await expect(page).toHaveURL('https://devexpress.github.io/testcafe/example/thank-you.html')
});