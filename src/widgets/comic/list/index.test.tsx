import { render } from '@testing-library/react';

import ComicList from '.';

jest.mock(
  'next/link',
  () =>
    function MockedLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
      return <a {...props} />;
    }
);

describe('ComicList', () => {
  it('should render as expected', () => {
    const { container } = render(
      <ComicList
        label="Avengers"
        comicDataList={[
          {
            id: 1,
            digitalId: 11,
            title: 'Avengers',
            issueNumber: 0,
            variantDescription: '',
            description: 'Avengers assemble',
            modified: new Date(),
            isbn: '',
            upc: '',
            diamondCode: '',
            ean: '',
            issn: '',
            format: '',
            pageCount: 0,
            textObjects: [],
            resourceURI: '',
            urls: [],
            thumbnail: {
              path: 'https://avenge.rs/images/avengers',
              extension: 'jpg',
            },
            images: [],
            series: {
              resourceURI: '',
              name: '',
            },
            characters: {
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
          },
          {
            id: 2,
            digitalId: 12,
            title: 'Dr. Strange',
            issueNumber: 0,
            variantDescription: '',
            // prettier-ignore
            description: 'Dormammu, I\'ve come to bargain!',
            modified: new Date(),
            isbn: '',
            upc: '',
            diamondCode: '',
            ean: '',
            issn: '',
            format: '',
            pageCount: 0,
            textObjects: [],
            resourceURI: '',
            urls: [],
            thumbnail: {
              path: 'https://avenge.rs/images/dr_strange',
              extension: 'jpg',
            },
            images: [],
            series: {
              resourceURI: '',
              name: '',
            },
            characters: {
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
          },
          {
            id: 3,
            digitalId: 13,
            title: 'Avergers: Endgame',
            issueNumber: 0,
            variantDescription: '',
            // prettier-ignore
            description: 'We\'re in the endgame now.',
            modified: new Date(),
            isbn: '',
            upc: '',
            diamondCode: '',
            ean: '',
            issn: '',
            format: '',
            pageCount: 0,
            textObjects: [],
            resourceURI: '',
            urls: [],
            thumbnail: {
              path: 'https://avenge.rs/images/avengers_endgame',
              extension: 'jpg',
            },
            images: [],
            series: {
              resourceURI: '',
              name: '',
            },
            characters: {
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
          },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
