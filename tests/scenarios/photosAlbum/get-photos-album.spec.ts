import { test, expect } from '@playwright/test';
import { PhotosAlbum } from '../../support/photosAlbum/photosAlbum';

let photosAlbum: PhotosAlbum;

test.beforeAll(async () => {
  photosAlbum = new PhotosAlbum();
});

test.describe('get a photos album', () => {
  test('get a photos album successfully', async ({ request }) => {
    const photosAlbumId = '5';

    const response = await photosAlbum.getPhotosAlbum(request, photosAlbumId);

    expect(response.status).toBe(200);
    expect(response.json.data.photo.album.id).toBe('1');
    expect(response.json.data.photo.album.title).toBe('quidem molestiae enim');
    expect(response.json.data.photo.album.user.id).toBe('1');
  });

  test('get a non-existent photos album', async ({ request }) => {
    const photosAlbumId = '999999999';

    const response = await photosAlbum.getPhotosAlbum(request, photosAlbumId);

    expect(response.status).toBe(200);
    expect(response.json.data.photo.album.id).toBe(null);
    expect(response.json.data.photo.album.title).toBe(null);
    expect(response.json.data.photo.album.user.id).toBe(null);
  });
});
