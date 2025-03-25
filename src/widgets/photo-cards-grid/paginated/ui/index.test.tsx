import { MOCKED_BASIC_PHOTO } from '@/shared/api/mock/data';
import { generateMockedBasicPhotos } from '@/shared/api/mock/utils';
import { SEARCH_PARAMS } from '@/shared/constants';
import { mockedSearchParamsService } from '@/shared/test/services';
import { user } from '@/shared/test/vitest.setup';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { PaginatedPhotoCardsGrid } from '.';

describe('<PaginatedPhotoCardsGrid />', () => {
  const getPageSearchParamValue = (): number =>
    Number(mockedSearchParamsService.params.get(SEARCH_PARAMS.PAGE) || '1');

  it('Should update URL query parameter when page changes!', async () => {
    const photos = generateMockedBasicPhotos(MOCKED_BASIC_PHOTO);
    const initialPageSearchParamValue = getPageSearchParamValue();

    const PaginatedPhotoCardsGridTestWrapper = () => (
      <MemoryRouter>
        <PaginatedPhotoCardsGrid
          photos={photos}
          paginationConfig={{
            currentPage: initialPageSearchParamValue,
            totalPages: photos.length,
            onPageChange: (page) =>
              mockedSearchParamsService.setSearchParams(
                (prev: URLSearchParams) => ({
                  [SEARCH_PARAMS.SEARCH]: prev.get(SEARCH_PARAMS.SEARCH) || '',
                  [SEARCH_PARAMS.PAGE]: String(page),
                })
              ),
          }}
        />
      </MemoryRouter>
    );

    const { rerender } = render(<PaginatedPhotoCardsGridTestWrapper />);

    const nextPageButton = screen.getByRole('tab', { name: /next/i });

    expect(nextPageButton).toBeInTheDocument();
    expect(initialPageSearchParamValue).toBe(1);

    await user.click(nextPageButton);

    rerender(<PaginatedPhotoCardsGridTestWrapper />);

    expect(getPageSearchParamValue()).toBe(initialPageSearchParamValue + 1);
  });
});
