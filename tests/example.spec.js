  import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('חיפוש', { exact: true }).fill('playwright');
  await page.goto('https://www.google.com/search?q=playwright&sca_esv=77c72257878c30ef&source=hp&ei=mr88Z5XTOsWgnesPkNvM6Ao&iflsig=AL9hbdgAAAAAZzzNqtZKSZOCTeeO56FHuRahWLfEh889&ved=0ahUKEwiViKmV6-iJAxVFUGcHHZAtE60Q4dUDCA0&uact=5&oq=playwright&gs_lp=Egdnd3Mtd2l6IgpwbGF5d3JpZ2h0MgsQABiABBixAxiDATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiWKVCYB1iOJXAFeACQAQCYAWKgAcMIqgECMTK4AQPIAQD4AQGYAhGgAusIqAIKwgIKEC4YAxjqAhiPAcICChAAGAMY6gIYjwHCAg0QLhgDGNQCGOoCGI8BwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QLhiABBixAxjRAxjHAcICCxAuGIAEGNEDGMcBwgIFEC4YgATCAggQABiABBixA8ICDRAAGIAEGLEDGIMBGArCAgcQABiABBgKmAMGkgcEMTYuMaAHy1M&sclient=gws-wiz');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' }).locator('span')).toBeVisible();
});