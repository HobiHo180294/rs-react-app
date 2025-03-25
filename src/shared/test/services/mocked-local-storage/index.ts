import { Nullable } from '@/shared/types';

class MockedLocalStorage {
  private store: Record<string, string> = {};

  getItem = vi.fn((key: string): Nullable<string> => this.store[key] || null);
  setItem = vi.fn((key: string, value: string): void => {
    this.store[key] = value;
  });
  removeItem = vi.fn((key: string): boolean =>
    Reflect.deleteProperty(this.store, key)
  );
  clear = vi.fn((): void => {
    this.store = {};
  });
}

export const mockedLocalStorage = new MockedLocalStorage();
