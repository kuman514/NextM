import { render, screen } from '@testing-library/react';

import StoryListItem from '.';

jest.mock(
  'next/link',
  () =>
    function MockedLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
      return <a {...props} />;
    }
);

describe('StoryListItem', () => {
  it('should render as expected (current: thumbnail, title, description)', () => {
    const { container } = render(
      <StoryListItem
        storyData={{
          id: 1234567,
          title: 'Koishi Komeiji',
          description: '',
          type: '',
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
        }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render image if it does not have thumbnail', () => {
    const { container } = render(
      <StoryListItem
        storyData={{
          id: 1234567,
          title: 'Koishi Komeiji',
          description: '',
          type: '',
          modified: new Date(),
          thumbnail: null,
          resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
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
        }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should has href=/story/1234 when the storyData is having id=1234', async () => {
    render(
      <StoryListItem
        storyData={{
          id: 1234,
          title: 'Koishi Komeiji',
          description: '',
          type: '',
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
        }}
      />
    );

    const link = await screen.findByLabelText('list-item-link');
    expect((link as HTMLAnchorElement).href).toStrictEqual(
      'http://localhost/story/1234'
    );
  });
});
