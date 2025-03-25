import GalleryPage from '@/pages/gallery/ui';
import { LOCAL_STORAGE_KEYS } from '@/shared/constants';
import { mockedLocalStorage } from '@/shared/test/services';
import { user } from '@/shared/test/vitest.setup';
import { GalleryData } from '@/shared/types';
import { render, screen } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { MemoryRouter } from 'react-router';

interface ReturnEnsureSearchPageRender {
  searchField: HTMLElement;
  component: ReactElement;
  rerender: (ui: ReactNode) => void;
}

describe('<SearchBar />', () => {
  const ensureCorrectSearchPageRender = (): ReturnEnsureSearchPageRender => {
    const PhotoSearchPage = () => (
      <MemoryRouter>
        <GalleryPage />
      </MemoryRouter>
    );

    const { rerender } = render(<PhotoSearchPage />);

    const searchField = screen.getByRole('textbox', {
      name: /explore gallery/i,
    });

    expect(searchField).toBeInTheDocument();
    expect(searchField).toHaveValue('');

    return {
      searchField,
      component: <PhotoSearchPage />,
      rerender,
    };
  };

  it('Should verify that clicking the Search button saves the entered value to the local storage!', async () => {
    const { searchField } = ensureCorrectSearchPageRender();

    const searchButton = screen.getByRole('button', {
      name: /search/i,
    });
    const enteredValue = 'Shoes';

    await user.type(searchField, enteredValue);

    expect(searchField).toHaveValue(enteredValue);

    await user.click(searchButton);

    const localStorageValue = mockedLocalStorage.getItem(
      LOCAL_STORAGE_KEYS.GALLERY
    );

    if (localStorageValue) {
      const { collectionName } = JSON.parse(localStorageValue) as GalleryData;
      expect(collectionName).toBe(enteredValue);
    }
  });

  it('Should retrieve the value from localStorage upon mounting!', () => {
    const { searchField, component, rerender } =
      ensureCorrectSearchPageRender();

    const collectionName = 'Nature';

    mockedLocalStorage.setItem(
      LOCAL_STORAGE_KEYS.GALLERY,
      JSON.stringify({
        collectionName,
      })
    );

    rerender(component);

    expect(searchField).toHaveValue(collectionName);
  });
});
