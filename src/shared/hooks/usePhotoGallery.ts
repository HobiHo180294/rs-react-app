import { searchApi } from '@/entities/search/api';
import { Success } from '@/entities/search/photos/model';
import { useFetch } from './useFetch';

interface UsePhotoGalleryParams {
  collectionName: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

interface UsePhotoGalleryReturn {
  gallery: Success;
  isLoading: boolean;
  error: string;
  handlePageChange: (newPage: number) => void;
}

export const usePhotoGallery = ({
  collectionName,
  currentPage,
  setCurrentPage,
}: UsePhotoGalleryParams): UsePhotoGalleryReturn => {
  const {
    data: gallery,
    isLoading,
    error,
    refetch,
  } = useFetch(
    searchApi.searchPhotos,
    [collectionName, currentPage],
    [collectionName]
  );

  const handlePageChange = (newPage: number): void => {
    setCurrentPage(newPage);
    refetch(collectionName, newPage);
  };

  return {
    gallery: gallery || { results: [], total: 0, total_pages: 0 },
    isLoading,
    error,
    handlePageChange,
  };
};
