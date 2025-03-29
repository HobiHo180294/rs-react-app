import { ERRORS } from '@/shared/constants';
import { usePhotoGallery } from '@/shared/hooks';
import { ErrorMessage } from '@/shared/ui/error-message/ui';
import { PaginatedPhotoCardsGrid } from '@/widgets/photo-cards-grid/paginated/ui';
import { PhotoCardsGrid } from '@/widgets/photo-cards-grid/ui';
import { PhotoGalleryProps } from '../model';

export default function PhotoGallery({
  collectionName,
  currentPage,
  onPageChange,
}: PhotoGalleryProps) {
  const { gallery, isLoading, errorMessage, handlePageChange } =
    usePhotoGallery({
      collectionName,
      currentPage,
      setCurrentPage: onPageChange,
    });

  if (errorMessage) {
    return (
      <ErrorMessage errorText={errorMessage} helperText={ERRORS.LOAD_CONTENT} />
    );
  }
  if (isLoading) return <PaginatedPhotoCardsGrid />;

  const { results, total_pages } = gallery;

  return results.length ? (
    <PaginatedPhotoCardsGrid
      photos={results}
      paginationConfig={{
        currentPage,
        totalPages: total_pages,
        onPageChange: handlePageChange,
      }}
    />
  ) : (
    <PhotoCardsGrid photos={results} />
  );
}
