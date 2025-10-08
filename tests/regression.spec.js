// @ts-check
import { test, expect } from '@playwright/test';
import { CartCheck } from '../pages/cart-check';

test('User can open Cart section', async ({ page }) => {
  const cartCheck = new CartCheck(page);
  await cartCheck.openProfile();
});
