import { test, expect } from '@playwright/test';
import { Posts } from '../../support/posts/posts';

let posts: Posts;

test.beforeAll(async () => {
  posts = new Posts();
});

test.describe('create a post', () => {
  test('create a post successfully', async ({ request }) => {
    const post = {
      title: 'A Very Captivating Post Title',
      body: 'Some interesting content',
    };

    const response = await posts.createPost(request, post);

    expect(response.status).toBe(200);
    expect(response.json.data.createPost.id).toBe('101');
    expect(response.json.data.createPost.title).toBe(post.title);
    expect(response.json.data.createPost.body).toBe(post.body);
  });
});
