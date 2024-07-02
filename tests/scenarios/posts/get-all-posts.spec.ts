import { test, expect } from '@playwright/test';
import { Posts } from '../../support/posts/posts';

let posts: Posts;

test.beforeAll(async () => {
  posts = new Posts();
});

test.describe('get all posts', () => {
  test('get all posts successfully', async ({ request }) => {
    const page = 1;
    const limit = 5;

    const response = await posts.getAllPosts(request, page, limit);

    expect(response.status).toBe(200);
    expect(response.json.data.posts.data[0].id).toBe('1');
    expect(response.json.data.posts.data[0].title).toBe(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    );
    expect(response.json.data.posts.data[1].id).toBe('2');
    expect(response.json.data.posts.data[1].title).toBe('qui est esse');
    expect(response.json.data.posts.data[2].id).toBe('3');
    expect(response.json.data.posts.data[2].title).toBe(
      'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    );
    expect(response.json.data.posts.data[3].id).toBe('4');
    expect(response.json.data.posts.data[3].title).toBe('eum et est occaecati');
    expect(response.json.data.posts.data[4].id).toBe('5');
    expect(response.json.data.posts.data[4].title).toBe('nesciunt quas odio');
    expect(response.json.data.posts.meta.totalCount).toBe(100);
  });
});
