import { HTMLAttributes } from 'react';

export interface PaginationItemProps extends HTMLAttributes<HTMLSpanElement> {
  page: string | number;
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
