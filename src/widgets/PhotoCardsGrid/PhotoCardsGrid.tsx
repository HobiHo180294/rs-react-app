import { Photo } from '@/entities/Photo/model';
import { searchPhotosApi } from '@/entities/SearchPhotos/api';
import { PhotoCard } from '@/features';
import { Component } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { DEFAULT_PHOTOS_AMOUNT, ERRORS } from '@/shared/constants';

interface Props {
  collectionName: string;
}

interface State {
  photos: Photo[];
  isLoading: boolean;
  error: string;
}

export class PhotoCardsGrid extends Component<Props, State> {
  state = {
    photos: [] as State['photos'],
    isLoading: false,
    error: '',
  };

  async loadPhotos() {
    const { collectionName } = this.props;
    this.setState({ isLoading: true, error: '' });

    try {
      const photos = await searchPhotosApi.search(collectionName);

      this.setState({
        photos,
      });
    } catch (error) {
      this.setState({ error: (error as Error).message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.loadPhotos();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.collectionName !== this.props.collectionName) {
      this.loadPhotos();
    }
  }

  render() {
    const { photos, isLoading, error } = this.state;

    if (error || (!isLoading && !photos.length)) {
      return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-70 h-auto">
          {error ? (
            <ErrorMessage error={error} helperText={ERRORS.LOAD_CONTENT} />
          ) : (
            <h2>Not Found</h2>
          )}
        </div>
      );
    }

    return (
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  max-w-7xl mx-auto">
        {(isLoading ? [...Array(DEFAULT_PHOTOS_AMOUNT)] : photos).map(
          (photo, index) => (
            <li
              key={isLoading ? index : photo.id}
              className="flex justify-center"
            >
              <PhotoCard photo={photo} isLoading={isLoading} />
            </li>
          )
        )}
      </ul>
    );
  }
}
