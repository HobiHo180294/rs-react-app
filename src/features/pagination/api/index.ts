import { GetPagesCutParams, GetPagesCutReturn } from '../model';

export const getPagesCut = ({
  pagesCount,
  pagesCutCount,
  currentPage,
}: GetPagesCutParams): GetPagesCutReturn => {
  const halfCut = Math.floor(pagesCutCount / 2);

  let start = Math.max(currentPage - halfCut, 1);
  let end = start + pagesCutCount - 1;

  if (end > pagesCount) {
    end = pagesCount;
    start = Math.max(end - pagesCutCount + 1, 1);
  }

  return { start, end };
};
