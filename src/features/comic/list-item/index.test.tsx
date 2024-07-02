import { render, screen } from '@testing-library/react';

import ComicListItem from '.';

jest.mock(
  'next/link',
  () =>
    function MockedLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
      return <a {...props} />;
    }
);

describe('ComicListItem', () => {
  it('should render as expected (current: thumbnail, title, description)', () => {
    const { container } = render(
      <ComicListItem
        comicData={{
          id: 1234567,
          digitalId: 0,
          issueNumber: 0,
          variantDescription: '',
          isbn: '',
          upc: '',
          title: 'Koishi Komeiji',
          description: '',
          diamondCode: '',
          ean: '',
          issn: '',
          format: '',
          pageCount: 0,
          textObjects: [],
          images: [],
          modified: new Date(),
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
            extension: 'jpg',
          },
          resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
          characters: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          stories: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          series: {
            resourceURI: '',
            name: '',
          },
          urls: [],
        }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should has href=/comic/1234 when the comicData is having id=1234', async () => {
    render(
      <ComicListItem
        comicData={{
          id: 1234,
          digitalId: 0,
          issueNumber: 0,
          variantDescription: '',
          isbn: '',
          upc: '',
          title: 'Koishi Komeiji',
          description: '',
          diamondCode: '',
          ean: '',
          issn: '',
          format: '',
          pageCount: 0,
          textObjects: [],
          images: [],
          modified: new Date(),
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
            extension: 'jpg',
          },
          resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
          characters: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          stories: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          series: {
            resourceURI: '',
            name: '',
          },
          urls: [],
        }}
      />
    );

    const link = await screen.findByLabelText('list-item-link');
    expect((link as HTMLAnchorElement).href).toStrictEqual(
      'http://localhost/comic/1234'
    );
  });
});
