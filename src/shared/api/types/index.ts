export interface PagedApiResponse<T> {
  total: number;
  total_pages: number;
  results: T[];
}

export interface ApiErrorResponse {
  errors: string[];
}

export interface Entity {
  id: string;
}
