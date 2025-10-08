import { test, expect } from '@playwright/test';
import { ApiUtil } from '../utils/api-helper.js';

test.describe('Amazon.in-like API Tests', () => {
  let api;

  test.beforeEach(async ({ request }) => {
    api = new ApiUtil(request);
  });

  test('Get all products', async () => {
    const products = await api.getAllProducts();
    expect(Array.isArray(products)).toBeTruthy();
    expect(products[0]).toHaveProperty('title');
  });

  test('Get single product', async () => {
    const product = await api.getProductById(1);
    expect(product).toHaveProperty('id', 1);
  });

  test('Create new order', async () => {
    const order = await api.createOrder({
      userId: 1,
      date: '2025-10-08',
      products: [
        { productId: 1, quantity: 2 },
        { productId: 3, quantity: 1 },
      ],
    });
    expect(order).toHaveProperty('id');
  });
});
