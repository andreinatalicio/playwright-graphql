import { APIRequestContext } from '@playwright/test';

const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL;

export class Users {
  async getUser(request: APIRequestContext, userId: number) {
    const query = `query { user(id: ${userId}) { id username email address { geo { lat lng } } } }`;

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

  async getUsersPosts(request: APIRequestContext, userPostsId: number) {
    const query = `query { user(id: ${userPostsId}) { posts { data { id title } } } }`;

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
}
