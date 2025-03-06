import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const formatSlug = (slug: string, id: string): string =>
  !slug || !id ? '' : slug.replace(id, '').replace(/-+/g, ' ').trim();

export const formatNumber = (number: number): string => {
  if (number === 0) return '0';

  const isNegative = number < 0;
  const absNumber = Math.abs(number);

  if (absNumber < 1) {
    return isNegative ? '-' + absNumber.toString() : absNumber.toString();
  }

  const suffixes = ['', 'K', 'M', 'B', 'T'];
  const exponent = Math.min(Math.floor(Math.log10(absNumber) / 3), 4);
  const shortValue = Number(
    (absNumber / Math.pow(1000, exponent)).toPrecision(3)
  );

  const formatted = `${shortValue}${suffixes[exponent]}`;
  return isNegative ? '-' + formatted : formatted;
};

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
