class MockSearchParamsService {
  params: URLSearchParams;
  setSearchParams: ReturnType<typeof vi.fn>;

  constructor() {
    this.params = new URLSearchParams();
    this.setSearchParams = vi.fn(
      (
        updaterFn: (params: URLSearchParams) => Record<string, string>
      ): void => {
        const newParams = updaterFn(this.params);

        Object.entries(newParams).forEach(([key, value]) =>
          this.params.set(key, value)
        );
      }
    );
  }

  reset(): void {
    this.params = new URLSearchParams();
    this.setSearchParams.mockClear();
  }
}

export const mockSearchParamsService = new MockSearchParamsService();
