import { Photo } from '@/entities/photo/model';

export interface Success {
  total: number;
  total_pages: number;
  results: Photo[];
}

interface Error {
  errors: string[];
}

export type SearchPhotosResponse = Success | Error | Photo[];

export type SearchPhotoDetailsResponse = Photo | Error;
