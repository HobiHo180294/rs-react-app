import { searchApi } from '../api/search';
import { PagedApiResponse } from '../api/types';
import { PhotoBasic } from '../api/types/photos';
import { useFetch } from './useFetch';

interface UsePhotoGalleryParams {
  collectionName: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

interface UsePhotoGalleryReturn {
  gallery: PagedApiResponse<PhotoBasic>;
  isLoading: boolean;
  errorMessage: string;
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
    errorMessage,
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
    errorMessage,
    handlePageChange,
  };
};
