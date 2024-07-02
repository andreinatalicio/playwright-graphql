import { test, expect } from '@playwright/test';
import { Posts } from '../../support/posts/posts';

let posts: Posts;

test.beforeAll(async () => {
  posts = new Posts();
});

test.describe('delete a post', () => {
  test('delete a post successfully', async ({ request }) => {
    const postId = 101;

    const response = await posts.deletePost(request, postId);

    expect(response.status).toBe(200);
    expect(response.json.data.deletePost).toBe(true);
  });
});
