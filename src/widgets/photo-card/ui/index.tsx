import { Card } from '@/entities/card/ui';
import { FALLBACKS } from '@/shared/constants';
import { PhotoCardProps } from '../model';

export const PhotoCard = ({ photo }: PhotoCardProps) => {
  const { urls, alt_description, description } = photo;

  return (
    <Card
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
