import { ButtonHTMLAttributes, HTMLAttributes } from 'react';

export interface PaginationItemProps extends HTMLAttributes<HTMLLIElement> {
  page: string | number;
  tabElementProps: ButtonHTMLAttributes<HTMLButtonElement>;
}

export interface GetPagesCutParams {
  pagesCount: number;
  pagesCutCount: number;
  currentPage: number;
}

export interface GetPagesCutReturn {
  start: number;
  end: number;
}
