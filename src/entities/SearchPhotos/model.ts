import { Photo } from '@/entities/Photo/model';

interface Success {
  total: number;
  total_pages: number;
  results: Photo[];
}

interface Error {
  errors: string[];
}

export type SearchPhotosResponse = Success | Error | Photo[];
