import { PhotoDetailsContentBase } from '@/entities/photo-details-content-base/ui';

export const PhotoDetailsLoader = () => (
  <>
    <PhotoDetailsContentBase
      renderTitle={() => (
        <div className="h-8 bg-gray-200 rounded-md animate-pulse w-3/4" />
      )}
      renderDescription={() => (
        <>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
        </>
      )}
      renderTopics={() => (
        <>
          <div className="h-6 bg-gray-200 rounded animate-pulse w-32" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="h-6 bg-gray-200 rounded-full animate-pulse w-20"
              />
            ))}
          </div>
        </>
      )}
      renderStats={() => (
        <>
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
              <div className="w-10 h-4 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </>
      )}
      renderUserInfo={() => (
        <div className="w-32 h-5 bg-gray-200 rounded animate-pulse" />
      )}
      renderMore={() => (
        <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse mt-6" />
      )}
    />
  </>
);
