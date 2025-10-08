import { expect } from '@playwright/test';

export class CartCheck {
  constructor(page) {
    this.page = page;
    this.cartEmptyMessage = page.locator('#sc-empty-cart');
  }

  async openProfile() {
    await this.page.goto('https://www.amazon.in/');
    await this.page.getByRole('link', { name: 'items in cart' }).click();
    await expect(this.cartEmptyMessage).toContainText('Your Amazon Cart is empty');
  }
}
