import { test, expect } from '@playwright/test';
//import { DBUtil } from '../utils/db-helper';

test.describe('Database Test Example', () => {
  let db;

/*   test.beforeAll(async () => {
    db = new DBUtil();
    await db.connect();
  });

  test.afterAll(async () => {
    await db.disconnect();
  });

  test('Insert and validate user record', async () => {
    const email = 'testuser@example.com';

    // Step 1: Insert user
    const userId = await db.insertUser({
      name: 'Test User',
      email,
      role: 'customer',
    });
    expect(userId).toBeTruthy();

    // Step 2: Fetch and validate
    const user = await db.getUserByEmail(email);
    expect(user.name).toBe('Test User');
    expect(user.role).toBe('customer');

    // Step 3: Clean up
    await db.deleteUserByEmail(email);
  }); */
});
