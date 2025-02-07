import { searchApi } from '@/entities/search/api';
import { ERRORS } from '@/shared/constants';
import { DUMMY_PHOTOS } from '@/shared/data';
import { ErrorMessage } from '@/widgets/error-message/ui';
import { PhotoCards } from '@/widgets/photo-cards/ui';
import { useEffect, useState } from 'react';
import { PhotoGalleryProps, PhotoGalleryState } from '../model';

export default function PhotoGallery({ collection }: PhotoGalleryProps) {
  const [state, setState] = useState<PhotoGalleryState>({
    photos: [],
    isLoading: false,
    error: '',
  });

  useEffect(() => {
    const loadPhotos = async (collection: string = '') => {
      setState((prev) => ({ ...prev, isLoading: true, error: '' }));

      try {
        const photos = await searchApi.searchPhotos(collection);
        setState((prev) => ({ ...prev, photos }));
      } catch (error) {
        setState((prev) => ({ ...prev, error: (error as Error).message }));
      } finally {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    };

    loadPhotos(collection);
  }, [collection]);

  const { photos, isLoading, error } = state;

  return error ? (
    <ErrorMessage error={error} helperText={ERRORS.LOAD_CONTENT} />
  ) : (
    <PhotoCards photos={isLoading ? DUMMY_PHOTOS : photos} />
  );
}
