import { ERRORS, FALLBACKS } from '@/shared/constants';
import { DUMMY_PHOTOS } from '@/shared/data';
import { usePhotoGallery } from '@/shared/hooks';
import { ErrorMessage } from '@/widgets/error-message/ui';
import { PaginatedPhotoCards } from '@/widgets/paginated-photo-cards/ui';
import { PhotoCards } from '@/widgets/photo-cards/ui';
import { PhotoGalleryProps } from '../model';

export default function PhotoGallery({
  collectionName,
  currentPage,
  onPageChange,
}: PhotoGalleryProps) {
  const { gallery, isLoading, error, handlePageChange } = usePhotoGallery({
    collectionName,
    currentPage,
    setCurrentPage: onPageChange,
  });

  if (error) {
    return <ErrorMessage error={error} helperText={ERRORS.LOAD_CONTENT} />;
  }
  if (isLoading) return <PhotoCards photos={DUMMY_PHOTOS} />;
  if (!gallery.results.length) return <h2>{FALLBACKS.NOT_FOUND}</h2>;
  return (
    <PaginatedPhotoCards
      photos={gallery.results}
      currentPage={currentPage}
      onPageChange={handlePageChange}
      totalPages={gallery.total_pages}
    />
  );
}
