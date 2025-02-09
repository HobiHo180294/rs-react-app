import { Gallery } from '@/entities/gallery/model';
import { ErrorTrigger } from '@/features/error-trigger/ui';
import { SearchBar } from '@/features/search-bar/ui';
import { LOCAL_STORAGE_GALLERY_KEY, SEARCH_PARAMS } from '@/shared/constants';
import { DUMMY_PHOTOS } from '@/shared/data';
import { useLocalStorage } from '@/shared/hooks';
import { PhotoCards } from '@/widgets/photo-cards/ui';
import { lazy, Suspense, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router';

const PhotoGallery = lazy(() => import('@/widgets/photo-gallery/ui'));

export default function GalleryPage() {
  const [galleryData, setGalleryData] = useLocalStorage<Gallery>(
    LOCAL_STORAGE_GALLERY_KEY,
    {
      collectionName: '',
    }
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const details = searchParams.get(SEARCH_PARAMS.DETAILS);

  useEffect(() => {
    setSearchParams({
      [SEARCH_PARAMS.SEARCH]: galleryData.collectionName,
      [SEARCH_PARAMS.PAGE]: searchParams.get(SEARCH_PARAMS.PAGE) || '1',
      ...(details ? { [SEARCH_PARAMS.DETAILS]: details } : {}),
    });
  }, []);

  const handleSearch = (existingQuery: string, newQuery: string): void => {
    if (existingQuery !== newQuery) {
      setGalleryData({ collectionName: newQuery });
      setSearchParams({
        [SEARCH_PARAMS.SEARCH]: newQuery,
        [SEARCH_PARAMS.PAGE]: '1',
      });
    }
  };

  const handleSetDetails = (newValue: string): void => {
    const params = Object.fromEntries(searchParams);

    if (newValue) {
      setSearchParams({ ...params, details: newValue });
    } else {
      const newParams = { ...params };
      delete newParams.details;
      setSearchParams(newParams);
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <header className="bg-gray-900 flex flex-col items-center py-10 gap-5">
        <h1>Gallery</h1>
        <SearchBar
          defaultValue={galleryData.collectionName}
          onSearch={(query) => handleSearch(galleryData.collectionName, query)}
        />
      </header>
      <main className="min-h-full flex-1 relative">
        <div className="absolute top-0 left-0 w-full h-full py-8 px-4 overflow-y-auto no-scrollbar">
          <Suspense fallback={<PhotoCards photos={DUMMY_PHOTOS} />}>
            <PhotoGallery
              collectionName={galleryData.collectionName}
              currentPage={Number(searchParams.get(SEARCH_PARAMS.PAGE))}
              onPageChange={(page) =>
                setSearchParams((prev) => ({
                  search: prev.get(SEARCH_PARAMS.SEARCH) || '',
                  page: String(page),
                }))
              }
            />
          </Suspense>
        </div>
      </main>
      <footer className="p-4 flex bg-red-100">
        <ErrorTrigger />
      </footer>
      <Outlet
        context={{
          id: details || '',
          setId: handleSetDetails,
        }}
      />
    </div>
  );
}
