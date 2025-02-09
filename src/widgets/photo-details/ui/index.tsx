import { PhotoDetailsContentBase } from '@/entities/photo-details-content-base/ui';
import { searchApi } from '@/entities/search/api';
import {
  CloseIcon,
  DownloadIcon,
  EyeIcon,
  LikeIcon,
} from '@/shared/assets/icons';
import { ERRORS, FALLBACKS } from '@/shared/constants';
import { useControlledOutsideClick, useFetch } from '@/shared/hooks';
import { formatNumber, formatSlug } from '@/shared/utils';
import { ErrorMessage } from '@/widgets/error-message/ui';
import { PhotoDetailsLoader } from '@/widgets/photo-details-loader/ui';
import { Link, useOutletContext } from 'react-router';
import { PhotoDetailsContext } from '../model';

export const PhotoDetails = () => {
  const { id, setId } = useOutletContext<PhotoDetailsContext>();
  const ref = useControlledOutsideClick(!!id, () => setId(''));
  const {
    data: photo,
    isLoading,
    error,
  } = useFetch(searchApi.searchPhotoDetails, [id], [id]);

  const renderContent = () => {
    if (error) {
      return <ErrorMessage error={error} helperText={ERRORS.LOAD_CONTENT} />;
    }
    if (isLoading) return <PhotoDetailsLoader />;
    if (photo) {
      return (
        <PhotoDetailsContentBase
          renderAbsoluteElements={() => (
            <button
              onClick={() => setId('')}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close details"
            >
              <CloseIcon />
            </button>
          )}
          renderTitle={() => (
            <h2>{formatSlug(photo.slug, id) || FALLBACKS.NO_TITLE}</h2>
          )}
          renderDescription={() => (
            <p className="text-lg text-justify leading-relaxed text-neutral-600 first-letter:uppercase">
              {photo.alt_description}
            </p>
          )}
          renderTopics={() =>
            photo.tags.length ? (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Main Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {photo.tags.slice(0, 4).map(({ title }) => (
                    <span
                      key={title}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </div>
            ) : null
          }
          renderStats={() => (
            <>
              <div className="flex items-center gap-2">
                <EyeIcon />
                <span>{formatNumber(photo.views)}</span>
              </div>
              <div className="flex items-center gap-2">
                <DownloadIcon />
                <span>{formatNumber(photo.downloads)}</span>
              </div>
              <div className="flex items-center gap-2">
                <LikeIcon />
                <span>{formatNumber(photo.likes)}</span>
              </div>
            </>
          )}
          renderUserInfo={() => (
            <Link
              to={photo.user.links.html}
              target="_blank"
              className="font-medium"
            >
              @{photo.user.username}
            </Link>
          )}
          renderMore={() => (
            <Link
              to={photo.urls.full}
              target="_blank"
              className="w-full block text-center py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors mt-6"
            >
              WATCH FULL
            </Link>
          )}
        />
      );
    }
    return null;
  };

  return (
    <aside
      {...(!isLoading && { ref })}
      className={`fixed top-0 right-0 h-screen w-96 bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
        id || isLoading ? 'translate-x-0' : 'translate-x-full'
      } z-99`}
    >
      {renderContent()}
    </aside>
  );
};
