import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, vi } from 'vitest';
import { mockedLocalStorage, mockedSearchParamsService } from './services';

vi.mock('useSearchParams', () => ({
  useSearchParams: vi.fn(() => [
    mockedSearchParamsService.params,
    mockedSearchParamsService.setSearchParams,
  ]),
}));

vi.mock('@/shared/assets/icons', () => ({
  CloseIcon: () => 'MockedCloseIcon',
  DownloadIcon: () => 'MockedDownloadIcon',
  EyeIcon: () => 'MockedEyeIcon',
  LikeIcon: () => 'MockedLikeIcon',
}));

vi.mock('@/shared/hooks/useLocalStorage', () => ({
  useLocalStorage: vi.fn(
    (key: string, initialValue?: Record<string, unknown>) => {
      const item = mockedLocalStorage.getItem(key);

      if (!item && initialValue) {
        mockedLocalStorage.setItem(key, JSON.stringify(initialValue));
      }

      const setValue = vi.fn(
        (
          value:
            | Record<string, unknown>
            | ((prev: Record<string, unknown>) => Record<string, unknown>)
        ) => {
          const currentItem = mockedLocalStorage.getItem(key);
          const newValue = JSON.stringify(
            value instanceof Function
              ? value(currentItem ? JSON.parse(currentItem) : initialValue)
              : value
          );

          mockedLocalStorage.setItem(key, newValue);
        }
      );

      return [item ? JSON.parse(item) : initialValue, setValue];
    }
  ),
}));

beforeAll(() =>
  Object.defineProperty(window, 'localStorage', {
    value: mockedLocalStorage,
  })
);

afterEach(() => {
  if (mockedSearchParamsService.params.size) mockedSearchParamsService.reset();
  if (Object.keys(mockedLocalStorage['store']).length) {
    mockedLocalStorage.clear();
  }

  cleanup();
  vi.clearAllMocks();
});

export const user = userEvent.setup();
