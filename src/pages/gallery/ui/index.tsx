import { ErrorTrigger } from '@/features/error-trigger/ui';
import { SearchBar } from '@/features/search-bar/ui';
import { LOCAL_STORAGE_GALLERY_KEY } from '@/shared/constants';
import { DUMMY_PHOTOS } from '@/shared/data';
import { PhotoCards } from '@/widgets/photo-cards/ui';
import { lazy, Suspense, useState } from 'react';

const PhotoGallery = lazy(() => import('@/widgets/photo-gallery/ui'));

export default function GalleryPage() {
  const [galleryName, setGalleryName] = useState<string>(
    localStorage.getItem(LOCAL_STORAGE_GALLERY_KEY) || ''
  );

  const handleSearch = (query: string): void => {
    localStorage.setItem(LOCAL_STORAGE_GALLERY_KEY, query);
    if (galleryName !== query) setGalleryName(query);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <header className="bg-gray-900 flex flex-col items-center py-10 gap-5">
        <h1>Gallery</h1>
        <SearchBar defaultValue={galleryName} onSearch={handleSearch} />
      </header>
      <main className="min-h-full flex-1 relative">
        <div className="absolute top-0 left-0 w-full h-full py-8 px-4 overflow-y-auto no-scrollbar">
          <Suspense fallback={<PhotoCards photos={DUMMY_PHOTOS} />}>
            <PhotoGallery collection={galleryName} />
          </Suspense>
        </div>
      </main>
      <footer className="p-4 flex justify-end bg-red-100">
        <ErrorTrigger />
      </footer>
    </div>
  );
}
