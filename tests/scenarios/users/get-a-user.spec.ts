import { test, expect } from '@playwright/test';
import { Users } from '../../support/users/users';

let users: Users;

test.beforeAll(async () => {
  users = new Users();
});

test.describe('get a user', () => {
  test('get a user successfully', async ({ request }) => {
    const userId = 1;

    const response = await users.getUser(request, userId);

    expect(response.status).toBe(200);
    expect(response.json.data.user.id).toBe('1');
    expect(response.json.data.user.username).toBe('Bret');
    expect(response.json.data.user.email).toBe('Sincere@april.biz');
    expect(response.json.data.user.address.geo.lat).toBe(-37.3159);
    expect(response.json.data.user.address.geo.lng).toBe(81.1496);
  });

  test('get a non-existent user ', async ({ request }) => {
    const userId = 999999999;

    const response = await users.getUser(request, userId);

    expect(response.status).toBe(200);
    expect(response.json.data.user.id).toBe(null);
    expect(response.json.data.user.username).toBe(null);
    expect(response.json.data.user.email).toBe(null);
    expect(response.json.data.user.address).toBe(null);
  });
});
