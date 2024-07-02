import { test, expect } from '@playwright/test';
import { Posts } from '../../support/posts/posts';

let posts: Posts;

test.beforeAll(async () => {
  posts = new Posts();
});

test.describe('update a post', () => {
  test('update a post successfully', async ({ request }) => {
    const post = {
      id: 1,
      body: 'Some updated content',
    };

    const response = await posts.updatePost(request, post);

    expect(response.status).toBe(200);
    expect(response.json.data.updatePost.id).toBe('1');
    expect(response.json.data.updatePost.body).toBe('Some updated content');
  });
});
