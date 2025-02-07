import { Photos } from '@/entities/photo/model';

export interface PhotoGalleryProps {
  collection: string;
}

export interface PhotoGalleryState extends Photos {
  isLoading: boolean;
  error: string;
}
