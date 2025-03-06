import { GalleryData } from '@/shared/types';

export interface PhotoGalleryProps extends GalleryData {
  currentPage: number;
  onPageChange: (page: number) => void;
}
