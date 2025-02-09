import { Photos } from '@/entities/photo/model';

export interface PhotoCardsProps extends Photos {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
