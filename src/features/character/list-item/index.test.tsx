import { render, screen } from '@testing-library/react';

import CharacterListItem from '.';

jest.mock(
  'next/link',
  () =>
    function MockedLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
      return <a {...props} />;
    }
);

describe('CharacterListItem', () => {
  it('should render as expected (current: thumbnail, name, description)', () => {
    const { container } = render(
      <CharacterListItem
        characterData={{
          id: 1234567,
          name: 'Koishi Komeiji',
          description: '',
          modified: new Date(),
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
            extension: 'jpg',
          },
          resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
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
          stories: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          urls: [],
        }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should has href=/character/1234 when the characterData is having id=1234', async () => {
    render(
      <CharacterListItem
        characterData={{
          id: 1234,
          name: 'Koishi Komeiji',
          description: '',
          modified: new Date(),
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
            extension: 'jpg',
          },
          resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
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
          stories: {
            available: 0,
            collectionURI: '',
            items: [],
            returned: 0,
          },
          urls: [],
        }}
      />
    );

    const link = await screen.findByLabelText('character-list-item-link');
    expect((link as HTMLAnchorElement).href).toStrictEqual(
      'http://localhost/character/1234'
    );
  });
});
