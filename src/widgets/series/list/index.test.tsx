import { render } from '@testing-library/react';

import SeriesList from '.';

jest.mock(
  'next/link',
  () =>
    function MockedLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
      return <a {...props} />;
    }
);

describe('SeriesList', () => {
  it('should render as expected', () => {
    const { container } = render(
      <SeriesList
        label="Series"
        seriesDataList={[
          {
            id: 1,
            title: 'Spiderman',
            description: '',
            modified: new Date(),
            startYear: 1980,
            endYear: 2099,
            rating: 'pg-13',
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
              extension: 'jpg',
            },
            resourceURI: '',
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
          },
          {
            id: 2,
            title: 'Avengers',
            description: '',
            modified: new Date(),
            startYear: 2012,
            endYear: 2019,
            rating: 'pg-13',
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
              extension: 'jpg',
            },
            resourceURI: '',
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
          },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
