import { PhotoCardWrapper } from '@/features/photo-card-wrapper/ui';
import { PhotoCard } from '@/shared/ui/photo-card/ui';
import { PhotoCardsGridProps } from '../model';

const DUMMY_PHOTOS: undefined[] = [...Array(10)];

export const PhotoCardsGrid = ({ photos }: PhotoCardsGridProps) => {
  if (Array.isArray(photos) && !photos.length) return null;

  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4 max-w-7xl mx-auto">
      {(photos || DUMMY_PHOTOS).map((photo, index) => (
        <li key={photo?.id || index} className="flex justify-center">
          {photo ? <PhotoCardWrapper photo={photo} /> : <PhotoCard />}
        </li>
      ))}
    </ul>
  );
};
