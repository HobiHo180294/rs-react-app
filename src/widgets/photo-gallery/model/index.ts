import { Gallery } from '@/entities/gallery/model';

export interface PhotoGalleryProps extends Gallery {
  currentPage: number;
  onPageChange: (page: number) => void;
}
