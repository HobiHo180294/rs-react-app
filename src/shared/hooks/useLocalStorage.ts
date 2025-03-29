import { useCallback, useState } from 'react';
import { SetterFn } from '../types';

export function useLocalStorage<T>(
  key: string,
  initialValue?: T
): [T, SetterFn<T>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    if (item) return JSON.parse(item) as T;
    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue as T;
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const newValue = value instanceof Function ? value(prev) : value;
        localStorage.setItem(key, JSON.stringify(newValue));
        return newValue;
      });
    },
    [key]
  );

  return [storedValue, setValue];
}
