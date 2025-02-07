import { SearchPhotosResponse } from './photos/model';

class SearchApi {
  async searchPhotos(query: string = '', page: number = 1) {
    const { VITE_API_BASE_URL, VITE_ACCESS_KEY } = import.meta.env;
    const urlPath = query
      ? `/search/photos?page=${page}&query=${encodeURIComponent(query.trim())}`
      : `/photos`;

    const response = (await (
      await fetch(`${VITE_API_BASE_URL}${urlPath}`, {
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${VITE_ACCESS_KEY}`,
          'Content-Type': 'application/json',
        },
      })
    ).json()) as SearchPhotosResponse;

    if ('errors' in response) throw new Error(response.errors.join('\n'));
    return 'results' in response ? response.results : response;
  }
}

export const searchApi = new SearchApi();
