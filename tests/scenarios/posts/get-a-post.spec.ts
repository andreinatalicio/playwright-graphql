import { test, expect } from '@playwright/test';
import { Posts } from '../../support/posts/posts';

let posts: Posts;

test.beforeAll(async () => {
  posts = new Posts();
});

test.describe('get a post', () => {
  test('get a post successfully', async ({ request }) => {
    const postId = '1';

    const response = await posts.getPost(request, postId);

    expect(response.status).toBe(200);
    expect(response.json.data.post.id).toBe('1');
    expect(response.json.data.post.title).toBe(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    );
    expect(response.json.data.post.body).toBe(
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    );
  });

  test('get a non-existent post', async ({ request }) => {
    const postId = '999999999';

    const response = await posts.getPost(request, postId);

    expect(response.status).toBe(200);
    expect(response.json.data.post.id).toBe(null);
    expect(response.json.data.post.title).toBe(null);
    expect(response.json.data.post.body).toBe(null);
  });
});
