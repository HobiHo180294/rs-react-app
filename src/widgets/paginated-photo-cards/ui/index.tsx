import { getPagesCut } from '@/features/pagination/api';
import { Pagination } from '@/features/pagination/ui';
import { range } from '@/shared/utils';
import { PhotoCards } from '@/widgets/photo-cards/ui';
import { PhotoCardsProps } from '../model';

export const PaginatedPhotoCards = ({
  photos,
  currentPage,
  totalPages,
  onPageChange,
}: PhotoCardsProps) => {
  const { start, end } = getPagesCut({
    pagesCount: totalPages,
    pagesCutCount: 5,
    currentPage,
  });
  const pages = range(start, end);

  return (
    <div>
      <PhotoCards photos={photos} />
      <Pagination>
        <Pagination.Item
          className={`rounded-l text-green-500 bg-white cursor-pointer ${currentPage === 1 ? 'pointer-events-none' : 'pointer-events-auto'}`}
          page="First"
          onClick={() => onPageChange(1)}
        />
        <Pagination.Item
          className={` text-green-500 bg-white cursor-pointer ${currentPage === 1 ? 'pointer-events-none' : 'pointer-events-auto'}`}
          page="Prev"
          onClick={() => onPageChange(currentPage - 1)}
        />
        {pages.map((page) => (
          <Pagination.Item
            key={page}
            page={page}
            className={`${
              page === currentPage
                ? 'z-10 text-green-800 cursor-default bg-gray-100 border-green-500 hover:text-green-800'
                : 'text-green-500 bg-white cursor-pointer'
            }`}
            onClick={() => onPageChange(page)}
          />
        ))}
        <Pagination.Item
          className={`text-green-500 bg-white cursor-pointer ${currentPage === totalPages ? 'pointer-events-none' : 'pointer-events-auto'}`}
          page="Next"
          onClick={() => onPageChange(currentPage + 1)}
        />
        <Pagination.Item
          className={`rounded-r text-green-500 bg-white cursor-pointer ${currentPage === totalPages ? 'pointer-events-none' : 'pointer-events-auto'}`}
          page="Last"
          onClick={() => onPageChange(totalPages)}
        />
      </Pagination>
    </div>
  );
};
