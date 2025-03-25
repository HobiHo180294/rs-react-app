import { MOCKED_BASIC_PHOTO, MOCKED_FULL_PHOTO } from '@/shared/api/mock/data';
import { MOCKED_PHOTO_DETAILS_ROUTE } from '@/shared/api/mock/routes';
import { createServer } from '@/shared/api/mock/server';
import { SEARCH_PARAMS } from '@/shared/constants';
import { mockSearchParamsService } from '@/shared/test/services';
import { expectElementPresence } from '@/shared/test/utils';
import { user } from '@/shared/test/vitest.setup';
import { PhotoDetailsSidebar } from '@/widgets/photo-details/sidebar/ui';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe } from 'vitest';
import { PhotoCardWrapper } from '.';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  const { useSearchParams } = await vi.importMock('useSearchParams');

  return {
    ...actual,
    useSearchParams,
    useOutletContext: vi.fn(() => ({
      photoSlug:
        mockSearchParamsService.params.get(SEARCH_PARAMS.DETAILS) || '',
      setPhotoSlug: vi.fn((slug) => {
        if (!slug) mockSearchParamsService.params.delete(SEARCH_PARAMS.DETAILS);
      }),
    })),
  };
});

describe('<PhotoCardWrapper />', () => {
  const fetchPhotoDetails = vi.fn();

  createServer([
    {
      path: MOCKED_PHOTO_DETAILS_ROUTE,
      res: () => {
        fetchPhotoDetails();
        return MOCKED_FULL_PHOTO;
      },
    },
  ]);

  const PhotoCardWithDetails = () => (
    <MemoryRouter>
      <PhotoCardWrapper photo={MOCKED_BASIC_PHOTO} />
      <PhotoDetailsSidebar />
    </MemoryRouter>
  );

  it('Should trigger an additional API call and open a sidebar with the photo details when clicked!', async () => {
    const { rerender } = render(<PhotoCardWithDetails />);

    const contentElements = {
      photoCard: screen.getByRole('article'),
      detailsSidebar: screen.getByRole('complementary'),
    };

    Object.values(contentElements).forEach(expectElementPresence);

    const { photoCard, detailsSidebar } = contentElements;

    expect(detailsSidebar).toHaveClass('translate-x-full');

    await user.click(photoCard);

    rerender(<PhotoCardWithDetails />);

    expect(detailsSidebar).toHaveClass('translate-x-0');

    await waitFor(() => expect(fetchPhotoDetails).toHaveBeenCalledTimes(1));
  });
});
