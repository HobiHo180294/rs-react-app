import { SkeletonParagraph } from '@/shared/ui/skeleton-paragraph/ui';
import { cn } from '@/shared/utils';
import { LinkifyText } from '../../linkify-text/ui';
import { PhotoCardProps } from '../model';

export const PhotoCard = ({
  imageProps,
  title,
  description,
}: PhotoCardProps) => (
  <div className="flex flex-col gap-4 w-full rounded-lg overflow-hidden shadow-md h-full">
    {imageProps ? (
      <img
        className={cn('w-full h-72 object-cover', imageProps.className)}
        alt={description}
        {...imageProps}
      />
    ) : (
      <div className="skeleton-decoration w-full h-72 rounded-none" />
    )}
    <div className="py-2 px-4 flex flex-col gap-2 break-words">
      {title ? (
        <h2>{title}</h2>
      ) : (
        <div className="skeleton-decoration skeleton-h2 w-48 mx-auto" />
      )}
      {description ? <LinkifyText text={description} /> : <SkeletonParagraph />}
    </div>
  </div>
);
