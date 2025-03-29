import { MOCKED_BASIC_PHOTO } from '@/shared/api/mock/data';
import { PhotoBasic } from '@/shared/api/types/photos';
import { FALLBACKS } from '@/shared/constants';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { PhotoCardsGrid } from '.';
import { PhotoCardsGridProps } from '../model';

describe('<PhotoCardsGrid />', () => {
  const validateRendering = (photos?: PhotoCardsGridProps['photos']): void => {
    render(
      <MemoryRouter>
        <PhotoCardsGrid photos={photos} />
      </MemoryRouter>
    );

    if (Array.isArray(photos) && !photos.length) {
      const notFoundElement = screen.getByRole('heading', {
        name: new RegExp(FALLBACKS.NOT_FOUND),
      });
      expect(notFoundElement).toBeInTheDocument();
    } else {
      const photoCardsList = screen.getByRole('list');
      const photoCardsItems = within(photoCardsList).getAllByRole('listitem');
      expect(photoCardsItems).toHaveLength(photos?.length || 10);
    }
  };

  it('Should display an appropriate message if no cards are present!', () =>
    validateRendering([]));

  it('Should render a grid of 10 fake photo cards that represent a loading state if photos prop has not been passed!', () =>
    validateRendering());

  it('Should render the correct number of photos!', () => {
    const mockedPhotos: PhotoBasic[] = [MOCKED_BASIC_PHOTO];
    validateRendering(mockedPhotos);
  });
});
