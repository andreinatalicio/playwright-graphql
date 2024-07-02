import { APIRequestContext } from '@playwright/test';

const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL;

export class Posts {
  async getPost(request: APIRequestContext, postId: string) {
    const query = `query { post(id: ${postId}) { id title body } }`;

    const response = await request.post(`${GRAPHQL_API_URL}`, {
      data: {
        query: query,
      },
    });

    const status = response.status();
    const json = await response.json();

    console.log(response.url());
    console.log(response.status());
    const body = await response.text();
    console.log(body + '\n');

    return { status, json };
  }

  async getAllPosts(request: APIRequestContext, page: number, limit: number) {
    const query =
      'query ($options: PageQueryOptions) { posts(options: $options) { data { id title } meta { totalCount } } }';

    const response = await request.post(`${GRAPHQL_API_URL}`, {
      data: {
        query: query,
        variables: {
          options: {
            paginate: {
              page: page,
              limit: limit,
            },
          },
        },
      },
    });

    const status = response.status();
    const json = await response.json();

    console.log(response.url());
    console.log(response.status());
    const body = await response.text();
    console.log(body + '\n');

    return { status, json };
  }

  async createPost(
    request: APIRequestContext,
    post: { title: string; body: string },
  ) {
    const query =
      'mutation ($input: CreatePostInput!) { createPost(input: $input) { id title body } }';

    const response = await request.post(`${GRAPHQL_API_URL}`, {
      data: {
        query: query,
        variables: {
          input: {
            title: post.title,
            body: post.body,
          },
        },
      },
    });

    const status = response.status();
    const json = await response.json();

    console.log(response.url());
    console.log(response.status());
    const body = await response.text();
    console.log(body + '\n');

    return { status, json };
  }

  async updatePost(
    request: APIRequestContext,
    post: { id: number; body: string },
  ) {
    const query =
      'mutation ($id: ID!, $input: UpdatePostInput!) { updatePost(id: $id, input: $input) { id body } }';

    const response = await request.post(`${GRAPHQL_API_URL}`, {
      data: {
        query: query,
        variables: {
          id: post.id,
          input: {
            body: post.body,
          },
        },
      },
    });

    const status = response.status();
    const json = await response.json();

    console.log(response.url());
    console.log(response.status());
    const body = await response.text();
    console.log(body + '\n');

    return { status, json };
  }

  async deletePost(request: APIRequestContext, postId: number) {
    const query = 'mutation ($id: ID!) { deletePost(id: $id) }';

    const response = await request.post(`${GRAPHQL_API_URL}`, {
      data: {
        query: query,
        variables: {
          id: postId,
        },
      },
    });

    const status = response.status();
    const json = await response.json();

    console.log(response.url());
    console.log(response.status());
    const body = await response.text();
    console.log(body + '\n');

    return { status, json };
  }
}
