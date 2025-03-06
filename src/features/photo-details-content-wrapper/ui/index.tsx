import { searchApi } from '@/shared/api/search';
import {
  CloseIcon,
  DownloadIcon,
  EyeIcon,
  LikeIcon,
} from '@/shared/assets/icons';
import { ERRORS, FALLBACKS } from '@/shared/constants';
import { useFetch } from '@/shared/hooks';
import { ErrorMessage } from '@/shared/ui/error-message/ui';
import { PhotoDetailsContent } from '@/shared/ui/photo-details-content/ui';
import { formatSlug } from '@/shared/utils';
import { PhotoDetailsContentWrapperProps } from '../model';

export const PhotoDetailsContentWrapper = ({
  photoSlug,
  onClose,
}: PhotoDetailsContentWrapperProps) => {
  const {
    data: photo,
    isLoading,
    errorMessage,
  } = useFetch(searchApi.searchPhotoDetails, [photoSlug], [photoSlug]);

  if (isLoading) return <PhotoDetailsContent />;

  const renderResult = () => {
    if (errorMessage) {
      return (
        <ErrorMessage
          className="absolute left-0 top-1/2 -translate-y-1/2 mx-6"
          errorText={errorMessage}
          helperText={ERRORS.LOAD_CONTENT}
        />
      );
    }
    if (!photo) return null;

    const {
      id,
      slug,
      alt_description,
      description,
      tags,
      views,
      downloads,
      likes,
      user,
      urls,
    } = photo;

    return (
      <PhotoDetailsContent
        title={formatSlug(slug, id)}
        description={description || alt_description || FALLBACKS.NO_DESCRIPTION}
        topics={tags?.slice(0, 9) || []}
        metrics={[
          {
            id: 'views',
            children: <EyeIcon />,
            quantity: views,
          },
          {
            id: 'downloads',
            children: <DownloadIcon />,
            quantity: downloads,
          },
          { id: 'likes', children: <LikeIcon />, quantity: likes },
        ]}
        user={user}
        detailsUrl={urls.full}
      />
    );
  };

  return (
    <div className="h-full relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        aria-label="Close Photo Details Panel"
      >
        <CloseIcon />
      </button>
      {renderResult()}
    </div>
  );
};
