import { PhotoBasic } from '../types/photos';

export const generateMockedBasicPhotos = (
  example: PhotoBasic,
  count = 20
): PhotoBasic[] =>
  Array.from({ length: count }, (_, index) => {
    const { id, slug, links, ...rest } = example;

    const uniqueId = `${id}_${index}`;

    return {
      ...rest,
      id: uniqueId,
      slug: `${slug.split('-').slice(0, -1).join('-')}-${uniqueId}`,
      links: {
        ...links,
        self: `${links.self.split('/').slice(0, -1).join('/')}/${uniqueId}`,
        html: `${links.html.split('/').slice(0, -1).join('/')}/${uniqueId}`,
        download: `${links.download.split('/').slice(0, -1).join('/')}/${uniqueId}/download`,
        download_location: `${links.download_location.split('/').slice(0, -1).join('/')}/${uniqueId}/download`,
      },
    };
  });
