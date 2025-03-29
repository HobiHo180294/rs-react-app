import { PhotoBasic } from '@/shared/api/types/photos';

type PaginationConfig = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export interface PaginatedPhotoCardsGridProps {
  photos?: PhotoBasic[];
  paginationConfig?: PaginationConfig;
}
