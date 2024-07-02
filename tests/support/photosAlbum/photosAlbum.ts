import { APIRequestContext } from '@playwright/test';

const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL;

export class PhotosAlbum {
  async getPhotosAlbum(request: APIRequestContext, photosAlbumId: string) {
    const query = `query ($id: ID!) { photo(id: $id) { album { id title user { id } } } }`;

    const response = await request.post(`${GRAPHQL_API_URL}`, {
      data: {
        query: query,
        variables: {
          id: photosAlbumId,
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
