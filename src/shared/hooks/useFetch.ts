import { DependencyList, useEffect, useState } from 'react';

export const useFetch = <T, A extends unknown[]>(
  fetchFunction: (...args: A) => Promise<T>,
  initialArgs: A,
  deps: DependencyList
) => {
  const [state, setState] = useState<{
    data: T | null;
    isLoading: boolean;
    error: string;
  }>({
    data: null,
    isLoading: false,
    error: '',
  });

  const fetchData = async (...args: A) => {
    setState((prev) => ({ ...prev, isLoading: true, error: '' }));

    try {
      const data = await fetchFunction(...args);
      setState((prev) => ({ ...prev, data }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: (error as Error).message,
      }));
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    if (initialArgs.every(Boolean)) fetchData(...initialArgs);
  }, deps);

  return { ...state, refetch: fetchData };
};
