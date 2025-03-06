import { FALLBACKS, SEARCH_PARAMS } from '@/shared/constants';
import { PhotoCard } from '@/shared/ui/photo-card/ui';
import { formatSlug } from '@/shared/utils';
import { useSearchParams } from 'react-router';
import { PhotoCardWrapperProps } from '../model';

export const PhotoCardWrapper = ({ photo }: PhotoCardWrapperProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id, slug, urls, alt_description, description } = photo;

  const handleClick = (slug: string): void => {
    if (searchParams.get(SEARCH_PARAMS.DETAILS) !== slug) {
      setSearchParams((prev) => ({
        ...Object.fromEntries(prev),
        [SEARCH_PARAMS.DETAILS]: slug,
      }));
    }
  };

  return (
    <article
      className="w-full cursor-pointer transition-all focus:outline-none [&:is(:hover,:focus)]:shadow-xl [&:is(:hover,:focus)]:-translate-y-2"
      tabIndex={0}
      onClick={(event) => {
        event.stopPropagation();
        handleClick(slug);
      }}
    >
      <PhotoCard
        imageProps={{ src: urls.small }}
        title={formatSlug(slug, id)}
        description={description || alt_description || FALLBACKS.NO_DESCRIPTION}
      />
    </article>
  );
};
