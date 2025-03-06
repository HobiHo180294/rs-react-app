import { PhotoBasic, PhotoFull } from '@/shared/api/types/photos';
import { ApiErrorResponse, PagedApiResponse } from '../types';

export type SearchPhotosApiResponse =
  | PagedApiResponse<PhotoBasic>
  | ApiErrorResponse
  | PhotoBasic[];

export type SearchPhotoDetailsApiResponse = PhotoFull | ApiErrorResponse;
