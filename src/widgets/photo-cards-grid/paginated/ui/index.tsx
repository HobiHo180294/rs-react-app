import { getPagesCut } from '@/features/pagination/api';
import { PaginationItemProps } from '@/features/pagination/model';
import { Pagination } from '@/features/pagination/ui';
import { range } from '@/shared/utils';
import { PhotoCardsGrid } from '../../ui';
import { PaginatedPhotoCardsGridProps } from '../model';

export const PaginatedPhotoCardsGrid = ({
  photos,
  paginationConfig,
}: PaginatedPhotoCardsGridProps) => {
  const renderPaginationControls = () => {
    if (!photos || !paginationConfig) return <div className="w-full h-13" />;

    const { currentPage, totalPages, onPageChange } = paginationConfig;

    const { start, end } = getPagesCut({
      pagesCount: totalPages,
      pagesCutCount: 5,
      currentPage,
    });
    const pages = range(start, end);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const paginationControls: PaginationItemProps[] = [
      {
        page: 'First',
        tabElementProps: {
          className: 'rounded-l',
          disabled: isFirstPage,
          onClick() {
            onPageChange(1);
          },
        },
      },
      {
        page: 'Prev',
        tabElementProps: {
          disabled: isFirstPage,
          onClick() {
            onPageChange(currentPage - 1);
          },
        },
      },
      ...pages.map((page) => ({
        page,
        'aria-selected': page === currentPage,
        tabElementProps: {
          onClick: () => onPageChange(page),
        },
      })),
      {
        page: 'Next',
        tabElementProps: {
          disabled: isLastPage,
          onClick() {
            onPageChange(currentPage + 1);
          },
        },
      },
      {
        page: 'Last',
        tabElementProps: {
          className: 'rounded-r',
          disabled: isLastPage,
          onClick() {
            onPageChange(totalPages);
          },
        },
      },
    ];

    return paginationControls.map(({ page, ...rest }) => (
      <Pagination.Item key={page} page={page} {...rest} />
    ));
  };

  return (
    <div className="flex flex-col items-center">
      <PhotoCardsGrid photos={photos} />
      <Pagination>{renderPaginationControls()}</Pagination>
    </div>
  );
};
