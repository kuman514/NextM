import { render } from '@testing-library/react';

import StoryList from '.';

jest.mock(
  'next/link',
  () =>
    function MockedLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
      return <a {...props} />;
    }
);

describe('StoryList', () => {
  it('should render as expected', () => {
    const { container } = render(
      <StoryList
        label="Stories"
        storyDataList={[
          {
            id: 1,
            title: 'Spiderman',
            description: '',
            type: '',
            modified: new Date(),
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
            comics: {
              available: 0,
              collectionURI: '',
              items: [],
              returned: 0,
            },
            series: {
              available: 0,
              collectionURI: '',
              items: [],
              returned: 0,
            },
            originalissue: {
              resourceURI: '',
              name: '',
            },
          },
          {
            id: 2,
            title: 'The New Spiderman',
            description: '',
            type: '',
            modified: new Date(),
            thumbnail: null,
            resourceURI: '',
            characters: {
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
            series: {
              available: 0,
              collectionURI: '',
              items: [],
              returned: 0,
            },
            originalissue: {
              resourceURI: '',
              name: '',
            },
          },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
