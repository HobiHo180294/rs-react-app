export const LOCAL_STORAGE_GALLERY_KEY = 'gallery';

export const ERRORS = {
  MANUAL:
    'Error has been manually triggered! Please reload the page to restart the website.',
  UNKNOWN: 'Oops, something went wrong! Please try to reload the website.',
  INFO: 'Application Error',
  LOAD_CONTENT: 'Failed to load content! Please try again later.',
  '404':
    "The page you're looking for doesn't exist. It might have been moved, deleted, or never existed in the first place.",
} as const;

export const FALLBACKS = {
  NOT_FOUND: 'No results found',
  NO_DESCRIPTION: 'No description available',
} as const;

export const SEARCH_PARAMS = {
  SEARCH: 'search',
  PAGE: 'page',
  DETAILS: 'details',
} as const;

export const THREE_ITEMS: undefined[] = [...Array(3)];
