import { ERRORS, FALLBACKS } from '@/shared/constants';
import { usePhotoGallery } from '@/shared/hooks';
import { ErrorMessage } from '@/shared/ui/error-message/ui';
import { PaginatedPhotoCardsGrid } from '@/widgets/photo-cards-grid/paginated/ui';
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
  if (!gallery.results.length) return <h2>{FALLBACKS.NOT_FOUND}</h2>;

  return (
    <PaginatedPhotoCardsGrid
      photos={gallery.results}
      paginationConfig={{
        currentPage,
        totalPages: gallery.total_pages,
        onPageChange: handlePageChange,
      }}
    />
  );
}
