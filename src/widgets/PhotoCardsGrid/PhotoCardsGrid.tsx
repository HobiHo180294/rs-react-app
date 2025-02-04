import { Component } from 'react';
import { DEFAULT_PHOTOS_AMOUNT } from '@/shared/constants';
import { Photos } from '@/entities/Photo/model';
import { PhotoCard } from '@/features';

export class PhotoCardsGrid extends Component<Partial<Photos>> {
  render() {
    const { photos } = this.props;

    return (
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  max-w-7xl mx-auto">
        {(photos || [...Array(DEFAULT_PHOTOS_AMOUNT)]).map((photo, index) => (
          <li key={photo?.id || index} className="flex justify-center">
            <PhotoCard photo={photo} isLoading={!photos} />
          </li>
        ))}
      </ul>
    );
  }
}
