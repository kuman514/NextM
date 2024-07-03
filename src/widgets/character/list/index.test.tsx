import { render } from '@testing-library/react';

import CharacterList from '.';

jest.mock(
  'next/link',
  () =>
    function MockedLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
      return <a {...props} />;
    }
);

describe('CharacterList', () => {
  it('should render as expected', () => {
    const { container } = render(
      <CharacterList
        label="Avengers"
        characterDataList={[
          {
            id: 1,
            name: 'Iron Man',
            description: '',
            modified: new Date(),
            resourceURI: '',
            urls: [],
            thumbnail: {
              path: 'https://avenge.rs/images/iron_man',
              extension: 'jpg',
            },
            comics: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            stories: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            series: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
          },
          {
            id: 2,
            name: 'Captain America',
            description: '',
            modified: new Date(),
            resourceURI: '',
            urls: [],
            thumbnail: {
              path: 'https://avenge.rs/images/captain_america',
              extension: 'jpg',
            },
            comics: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            stories: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            series: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
          },
          {
            id: 3,
            name: 'Hulk',
            description: '',
            modified: new Date(),
            resourceURI: '',
            urls: [],
            thumbnail: {
              path: 'https://avenge.rs/images/hulk',
              extension: 'jpg',
            },
            comics: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            stories: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            series: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
          },
          {
            id: 4,
            name: 'Thor',
            description: '',
            modified: new Date(),
            resourceURI: '',
            urls: [],
            thumbnail: {
              path: 'https://avenge.rs/images/thor',
              extension: 'jpg',
            },
            comics: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            stories: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            series: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
          },
          {
            id: 5,
            name: 'Black Widow',
            description: '',
            modified: new Date(),
            resourceURI: '',
            urls: [],
            thumbnail: {
              path: 'https://avenge.rs/images/black_widow',
              extension: 'jpg',
            },
            comics: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            stories: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            series: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
          },
          {
            id: 6,
            name: 'Hawk Eye',
            description: '',
            modified: new Date(),
            resourceURI: '',
            urls: [],
            thumbnail: {
              path: 'https://avenge.rs/images/hawk_eye',
              extension: 'jpg',
            },
            comics: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            stories: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            series: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
          },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
