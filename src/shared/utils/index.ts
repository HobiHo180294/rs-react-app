export const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const formatSlug = (slug: string, id: string) =>
  !slug || !id
    ? ''
    : slug.replace(id, '').replace(/-+/g, ' ').trim().toUpperCase();

export const formatNumber = (num: number): string => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
  ];

  const item = lookup
    .slice()
    .reverse()
    .find((item) => num >= item.value);

  return item ? (num / item.value).toFixed(0) + item.symbol : '0';
};
