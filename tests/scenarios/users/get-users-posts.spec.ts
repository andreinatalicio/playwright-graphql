import { test, expect } from '@playwright/test';
import { Users } from '../../support/users/users';

let users: Users;

test.beforeAll(async () => {
  users = new Users();
});

test.describe('get users posts', () => {
  test('get users posts successfully', async ({ request }) => {
    const userPostsId = 1;

    const response = await users.getUsersPosts(request, userPostsId);

    expect(response.status).toBe(200);
    expect(response.json.data.user.posts.data[0].id).toBe('1');
    expect(response.json.data.user.posts.data[0].title).toBe(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    );
    expect(response.json.data.user.posts.data[1].id).toBe('2');
    expect(response.json.data.user.posts.data[1].title).toBe('qui est esse');
    expect(response.json.data.user.posts.data[2].id).toBe('3');
    expect(response.json.data.user.posts.data[2].title).toBe(
      'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    );
    expect(response.json.data.user.posts.data[3].id).toBe('4');
    expect(response.json.data.user.posts.data[3].title).toBe(
      'eum et est occaecati',
    );
    expect(response.json.data.user.posts.data[4].id).toBe('5');
    expect(response.json.data.user.posts.data[4].title).toBe(
      'nesciunt quas odio',
    );
    expect(response.json.data.user.posts.data[5].id).toBe('6');
    expect(response.json.data.user.posts.data[5].title).toBe(
      'dolorem eum magni eos aperiam quia',
    );
    expect(response.json.data.user.posts.data[6].id).toBe('7');
    expect(response.json.data.user.posts.data[6].title).toBe(
      'magnam facilis autem',
    );
    expect(response.json.data.user.posts.data[7].id).toBe('8');
    expect(response.json.data.user.posts.data[7].title).toBe(
      'dolorem dolore est ipsam',
    );
    expect(response.json.data.user.posts.data[8].id).toBe('9');
    expect(response.json.data.user.posts.data[8].title).toBe(
      'nesciunt iure omnis dolorem tempora et accusantium',
    );
    expect(response.json.data.user.posts.data[9].id).toBe('10');
    expect(response.json.data.user.posts.data[9].title).toBe(
      'optio molestias id quia eum',
    );
  });

  test('get non-existent users posts', async ({ request }) => {
    const userPostsId = 999999999;

    const response = await users.getUsersPosts(request, userPostsId);

    expect(response.status).toBe(200);
    expect(response.json.data.user.posts.data[0]).toBe(undefined);
  });
});
