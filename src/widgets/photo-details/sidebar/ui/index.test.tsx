import { MOCKED_FULL_PHOTO } from '@/shared/api/mock/data';
import { MOCKED_PHOTO_DETAILS_ROUTE } from '@/shared/api/mock/routes';
import { createServer } from '@/shared/api/mock/server';
import { expectElementPresence, getLoadingElements } from '@/shared/test/utils';
import { user } from '@/shared/test/vitest.setup';
import { formatSlug } from '@/shared/utils';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useOutletContext } from 'react-router';
import { Mock } from 'vitest';
import { PhotoDetailsSidebar } from '.';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');

  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe('<PhotoDetailsSidebar />', () => {
  const { slug, id, description, user: photoAuthor } = MOCKED_FULL_PHOTO;

  const PhotoDetailsSidebarTestWrapper = () => (
    <MemoryRouter>
      <PhotoDetailsSidebar />
    </MemoryRouter>
  );

  const mockedUseOutletContext = (photoSlug: string, setPhotoSlug: Mock) =>
    (useOutletContext as Mock).mockReturnValue({
      photoSlug,
      setPhotoSlug,
    });

  const setPhotoSlug = vi
    .fn()
    .mockImplementation((newSlug) =>
      mockedUseOutletContext(newSlug, setPhotoSlug)
    );

  createServer([
    {
      path: MOCKED_PHOTO_DETAILS_ROUTE,
      res: () => MOCKED_FULL_PHOTO,
    },
  ]);

  beforeEach(() => mockedUseOutletContext(slug, setPhotoSlug));

  it('Should display a loading indicator while fetching data!', () => {
    render(<PhotoDetailsSidebarTestWrapper />);

    const loadingElements = getLoadingElements([
      'title',
      'content description or text paragraph',
      'topic',
      'metric',
      'author information',
      'details link',
    ]);

    loadingElements.forEach(({ role, name }) =>
      expectElementPresence(screen.getAllByRole(role, { name }))
    );
  });

  it('Should correctly display fetched photo details!', async () => {
    render(<PhotoDetailsSidebarTestWrapper />);

    const contentElements = {
      title: await screen.findByRole('heading', {
        name: new RegExp(formatSlug(slug, id)),
      }),
      description: await screen.findByText(new RegExp(description)),
      topics: await screen.findByRole('list', { name: /related topics/i }),
      metrics: await screen.findByRole('list', { name: /statistics/i }),
      username: await screen.findByRole('link', {
        name: new RegExp(photoAuthor.username),
      }),
      detailsUrl: await screen.findByRole('link', {
        name: /watch full/i,
      }),
    };

    Object.values(contentElements).forEach(expectElementPresence);
  });

  it('Should ensure that clicking the close button hides the component!', async () => {
    const { rerender } = render(<PhotoDetailsSidebarTestWrapper />);

    const contentElements = {
      detailsSidebar: screen.getByRole('complementary'),
      closeButton: screen.getByRole('button', {
        name: /close photo details panel/i,
      }),
    };

    Object.values(contentElements).forEach(expectElementPresence);

    const { closeButton, detailsSidebar } = contentElements;

    expect(detailsSidebar).toHaveClass('translate-x-0');

    await user.click(closeButton);

    expect(setPhotoSlug).toHaveBeenCalledWith('');

    rerender(<PhotoDetailsSidebarTestWrapper />);

    expect(detailsSidebar).toHaveClass('translate-x-full');
  });
});
