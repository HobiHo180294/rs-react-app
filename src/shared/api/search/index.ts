import { PhotoBasic, PhotoFull } from '@/shared/api/types/photos';
import { PagedApiResponse } from '../types';
import {
  SearchPhotoDetailsApiResponse,
  SearchPhotosApiResponse,
} from './model';

class SearchApi {
  async searchPhotos(
    query: string = '',
    page: number = 1
  ): Promise<PagedApiResponse<PhotoBasic>> {
    const { VITE_API_BASE_URL, VITE_ACCESS_KEY } = import.meta.env;
    const urlPath = query
      ? `/search/photos?page=${page}&query=${encodeURIComponent(query)}`
      : `/photos?page=${page}`;

    const response = (await (
      await fetch(`${VITE_API_BASE_URL}${urlPath}`, {
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${VITE_ACCESS_KEY}`,
          'Content-Type': 'application/json',
        },
      })
    ).json()) as SearchPhotosApiResponse;

    if ('errors' in response) throw new Error(response.errors.join('\n'));

    return 'results' in response
      ? response
      : {
          total: response.length,
          total_pages: 1,
          results: response,
        };
  }

  async searchPhotoDetails(slug: string): Promise<PhotoFull> {
    const { VITE_API_BASE_URL, VITE_ACCESS_KEY } = import.meta.env;

    const response = (await (
      await fetch(`${VITE_API_BASE_URL}/photos/${slug}`, {
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${VITE_ACCESS_KEY}`,
          'Content-Type': 'application/json',
        },
      })
    ).json()) as SearchPhotoDetailsApiResponse;

    if ('errors' in response) throw new Error(response.errors.join('\n'));
    return response;
  }
}

export const searchApi = new SearchApi();
