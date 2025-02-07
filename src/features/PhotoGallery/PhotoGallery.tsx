import { Photos } from '@/entities/Photo/model';
import { searchPhotosApi } from '@/entities/SearchPhotos/api';
import { Component } from 'react';
import { ErrorMessage } from '../../widgets/ErrorMessage/ErrorMessage';
import { ERRORS } from '@/shared/constants';
import { PhotoCardsGrid } from '@/widgets';

interface Props {
  collectionName: string;
}

interface State extends Photos {
  isLoading: boolean;
  error: string;
}

export default class PhotoGallery extends Component<Props, State> {
  state = {
    photos: [],
    isLoading: false,
    error: '',
  };

  async loadPhotos() {
    const { collectionName } = this.props;
    this.setState({ isLoading: true, error: '' });

    try {
      this.setState({ photos: await searchPhotosApi.search(collectionName) });
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

    return !isLoading && !photos.length ? (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-70 h-auto">
        {error ? (
          <ErrorMessage error={error} helperText={ERRORS.LOAD_CONTENT} />
        ) : (
          <h2>Not Found</h2>
        )}
      </div>
    ) : (
      <PhotoCardsGrid {...(!isLoading && { photos })} />
    );
  }
}
