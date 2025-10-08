import { test, expect } from '@playwright/test';
import { Base } from '../pages/base';

//test.beforeAll(async () => {
  //browser = await chromium.launch({ headless: false });
  //context = await browser.newContext();
  //page = await context.newPage();
//});

test('User can open amazon successfully', async ({ page }) => {
  const base = new Base(page);

  await base.goto();
  await expect(page).toHaveTitle(/Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in/);
});


//test.afterAll(async () => {
//  await browser.close();  // ✅ Clean up here
//});
