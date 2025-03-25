import { MOCKED_BASIC_PHOTO } from '@/shared/api/mock/data';
import { expectElementPresence, getLoadingElements } from '@/shared/test/utils';
import { formatSlug } from '@/shared/utils';
import { render, screen } from '@testing-library/react';
import { it } from 'vitest';
import { PhotoCard } from '.';

describe('<PhotoCard />', () => {
  it('Should render a fake photo card that represents a loading state if props are not passed!', () => {
    render(<PhotoCard />);

    const loadingElements = getLoadingElements([
      'photo image',
      'photo title',
      'content description or text paragraph',
    ]);
    loadingElements.forEach(({ role, name }) =>
      expectElementPresence(screen.getByRole(role, { name }))
    );
  });

  it('Should render the relevant photo data!', () => {
    const { urls, description, slug, id } = MOCKED_BASIC_PHOTO;
    const title = formatSlug(slug, id);
    const descriptionRegExp = new RegExp(description);

    render(
      <PhotoCard
        data={{
          imageProps: { src: urls.small },
          description,
          title,
        }}
      />
    );

    const contentElements = {
      image: screen.getByRole('img', {
        name: descriptionRegExp,
      }),
      title: screen.getByRole('heading', {
        name: new RegExp(title),
      }),
      description: screen.getByText(descriptionRegExp),
    };

    Object.values(contentElements).forEach(expectElementPresence);
  });
});
