import { Photos } from '@/entities/photo/model';
import { PhotoCardLoader } from '@/widgets/photo-card-loader/ui';
import { PhotoCard } from '@/widgets/photo-card/ui';

export const PhotoCards = ({ photos }: Photos) => (
  <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
    {photos.map((photo, index) => (
      <li key={photo?.id || index} className="flex justify-center">
        {photo ? <PhotoCard photo={photo} /> : <PhotoCardLoader />}
      </li>
    ))}
  </ul>
);
