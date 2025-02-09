import { Card } from '@/entities/card/ui';
import { Photo } from '@/entities/photo/model';
import { FALLBACKS, SEARCH_PARAMS } from '@/shared/constants';
import { useSearchParams } from 'react-router';
import { PhotoCardProps } from '../model';

export const PhotoCard = ({ photo }: PhotoCardProps) => {
  const [, setSearchParams] = useSearchParams();
  const { urls, alt_description, description } = photo;

  const handleClick = (photo: Photo): void => {
    if (photo?.id) {
      setSearchParams((prev) => ({
        ...Object.fromEntries(prev),
        [SEARCH_PARAMS.DETAILS]: photo.id,
      }));
    }
  };

  return (
    <Card
      className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
      onClick={() => handleClick(photo)}
      renderImage={() => (
        <div>
          <img
            src={urls.small}
            alt={alt_description}
            className="w-full h-72 object-cover"
          />
        </div>
      )}
      renderTitle={() => (
        <h2 className="break-words">{description || FALLBACKS.NO_TITLE}</h2>
      )}
      renderDescription={() => (
        <p className="text-lg text-justify leading-relaxed text-neutral-600 first-letter:uppercase">
          {alt_description || FALLBACKS.NO_DESCRIPTION}
        </p>
      )}
    />
  );
};
