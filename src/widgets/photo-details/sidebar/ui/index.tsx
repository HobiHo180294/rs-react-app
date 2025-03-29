import { PhotoDetailsContentWrapper } from '@/features/photo-details-content-wrapper/ui';
import { PhotoDetailsContext } from '@/shared/types';
import { cn } from '@/shared/utils';
import { useOutletContext } from 'react-router';

export const PhotoDetailsSidebar = () => {
  const { photoSlug, setPhotoSlug } = useOutletContext<PhotoDetailsContext>();

  return (
    <aside
      className={cn(
        'fixed top-0 right-0 h-screen max-w-80 w-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-99',
        photoSlug ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      {photoSlug ? (
        <PhotoDetailsContentWrapper
          photoSlug={photoSlug}
          onClose={() => setPhotoSlug('')}
        />
      ) : null}
    </aside>
  );
};
