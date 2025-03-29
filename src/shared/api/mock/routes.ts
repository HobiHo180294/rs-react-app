import { MOCKED_BASIC_PHOTO } from './data';

const { VITE_API_BASE_URL } = import.meta.env;

export const MOCKED_PHOTO_DETAILS_ROUTE = `${VITE_API_BASE_URL}/photos/${MOCKED_BASIC_PHOTO.slug}`;
