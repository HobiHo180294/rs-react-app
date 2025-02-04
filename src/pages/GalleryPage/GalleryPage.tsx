import { Component, lazy, Suspense } from 'react';
import { ErrorTrigger, PhotoCardsGrid } from '@/widgets';
import { SearchBar } from '@/features';

interface State {
  galleryName: string;
}

const PhotoGallery = lazy(() => import('@/features/PhotoGallery/PhotoGallery'));

export default class GalleryPage extends Component<unknown, State> {
  state = {
    galleryName: localStorage.getItem('gallery') || '',
  };

  render() {
    const { galleryName } = this.state;

    return (
      <div className="min-h-screen flex flex-col overflow-hidden">
        <header className="bg-gray-900 flex flex-col items-center py-10 gap-5">
          <h1>Gallery</h1>
          <SearchBar
            defaultValue={galleryName}
            onSearch={(query) => {
              localStorage.setItem('gallery', query);
              if (this.state.galleryName !== query) {
                this.setState({ galleryName: query });
              }
            }}
          />
        </header>
        <main className="px-4 py-8 min-h-full flex-1 relative">
          <Suspense fallback={<PhotoCardsGrid />}>
            <PhotoGallery collectionName={galleryName} />
          </Suspense>
        </main>
        <footer className="p-4 flex justify-center">
          <ErrorTrigger />
        </footer>
      </div>
    );
  }
}
