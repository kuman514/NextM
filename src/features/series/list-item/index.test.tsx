import { render, screen } from '@testing-library/react';

import SeriesListItem from '.';

jest.mock(
  'next/link',
  () =>
    function MockedLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
      return <a {...props} />;
    }
);

describe('SeriesListItem', () => {
  it('should render thumbnail, title, and startYear to endYear', () => {
    const { container } = render(
      <SeriesListItem
        seriesData={{
          id: 1234567,
          title: 'Koishi Komeiji',
          description: '',
          modified: new Date(),
          startYear: 2008,
          endYear: 2012,
          rating: 'pg-13',
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
          comics: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          next: {
            resourceURI: '',
            name: '',
          },
          previous: {
            resourceURI: '',
            name: '',
          },
          urls: [],
        }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render thumbnail, title, and startYear if endYear==2099', () => {
    const { container } = render(
      <SeriesListItem
        seriesData={{
          id: 1234567,
          title: 'Koishi Komeiji',
          description: '',
          modified: new Date(),
          startYear: 2008,
          endYear: 2099,
          rating: 'pg-13',
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
          comics: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          next: {
            resourceURI: '',
            name: '',
          },
          previous: {
            resourceURI: '',
            name: '',
          },
          urls: [],
        }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render thumbnail, title, and just year if startYear==endYear', () => {
    const { container } = render(
      <SeriesListItem
        seriesData={{
          id: 1234567,
          title: 'Koishi Komeiji',
          description: '',
          modified: new Date(),
          startYear: 2013,
          endYear: 2013,
          rating: 'pg-13',
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
          comics: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          next: {
            resourceURI: '',
            name: '',
          },
          previous: {
            resourceURI: '',
            name: '',
          },
          urls: [],
        }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should has href=/series/1234 when the seriesData is having id=1234', async () => {
    render(
      <SeriesListItem
        seriesData={{
          id: 1234,
          title: 'Koishi Komeiji',
          description: '',
          modified: new Date(),
          startYear: 2008,
          endYear: 2099,
          rating: 'pg-13',
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
          comics: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          next: {
            resourceURI: '',
            name: '',
          },
          previous: {
            resourceURI: '',
            name: '',
          },
          urls: [],
        }}
      />
    );

    const link = await screen.findByLabelText('list-item-link');
    expect((link as HTMLAnchorElement).href).toStrictEqual(
      'http://localhost/series/1234'
    );
  });
});
