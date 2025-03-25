import { PhotoCardWrapper } from '@/features/photo-card-wrapper/ui';
import { FALLBACKS } from '@/shared/constants';
import { PhotoCard } from '@/shared/ui/photo-card/ui';
import { PhotoCardsGridProps } from '../model';

const DUMMY_PHOTOS: undefined[] = [...Array(10)];

export const PhotoCardsGrid = ({ photos }: PhotoCardsGridProps) =>
  Array.isArray(photos) && !photos.length ? (
    <h2>{FALLBACKS.NOT_FOUND}</h2>
  ) : (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4 max-w-7xl mx-auto">
      {(photos || DUMMY_PHOTOS).map((photo, index) => (
        <li key={photo?.id || index} className="flex justify-center">
          {photo ? <PhotoCardWrapper photo={photo} /> : <PhotoCard />}
        </li>
      ))}
    </ul>
  );
