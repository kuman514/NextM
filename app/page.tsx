import CharacterListItem from '^/features/character/list-item';
import Paragraph from '^/shared/paragraph';
import Title from '^/shared/title';

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center p-24">
      <ul>
        <CharacterListItem
          characterData={{
            id: 1234567,
            name: 'Koishi Komeiji',
            description: '',
            modified: new Date(),
            thumbnail: {
              path: 'https://pbs.twimg.com/profile_images/1175746616545857538/JuT5t8dm',
              extension: 'jpg',
            },
            resourceURI:
              'http://gateway.marvel.com/v1/public/characters/1011334',
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
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=210f167ce9ef4ac5a0a576bec067bcc1',
              },
              {
                type: 'wiki',
                url: 'http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=210f167ce9ef4ac5a0a576bec067bcc1',
              },
              {
                type: 'comiclink',
                url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=210f167ce9ef4ac5a0a576bec067bcc1',
              },
            ],
          }}
        />
      </ul>
      <Title>Lorem Ipsum</Title>
      <Paragraph customClassName="first-letter:font-bold first-letter:text-2xl first-letter:text-red-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
        consequat velit. Etiam et nunc sit amet urna feugiat sollicitudin.
        Curabitur sed faucibus nunc, sed suscipit lorem. Ut vitae dolor sit amet
        massa sodales pulvinar quis vel felis. Maecenas efficitur magna ac ex
        ornare bibendum. Vivamus tempus id lectus sit amet hendrerit. Integer
        pulvinar fringilla maximus. Mauris neque eros, finibus in bibendum sed,
        suscipit vitae neque. Suspendisse pellentesque fringilla massa id
        egestas. Quisque sagittis, libero sed rhoncus aliquam, mauris eros
        gravida tellus, vel porttitor quam dolor ac ante. Sed sit amet urna sit
        amet lacus feugiat blandit. Sed eu egestas est, vitae ultrices lacus.
        Praesent non lorem vitae leo lobortis mollis. Pellentesque id consequat
        mi. Nulla dapibus ante est. Interdum et malesuada fames ac ante ipsum
        primis in faucibus.
      </Paragraph>
      <Paragraph>
        Proin ac urna a lectus ultrices pretium non vel nibh. Morbi in aliquet
        odio. Suspendisse posuere nisi faucibus purus consectetur tempus. Sed
        dapibus augue elit, vel interdum eros cursus non. Sed rutrum rhoncus
        facilisis. Proin blandit interdum diam, ac ultricies lectus bibendum at.
        Donec sit amet risus dui. Donec nibh lectus, bibendum quis luctus ut,
        dignissim iaculis arcu. Donec lectus urna, molestie a tristique non,
        eleifend quis ipsum. Pellentesque efficitur tempor libero id sodales.
        Vestibulum auctor neque orci, at ultricies nulla posuere ut.
      </Paragraph>
      <Paragraph>
        Ut a ultrices mauris. Donec blandit eros id justo suscipit auctor. Sed
        vestibulum erat vitae dolor maximus, ac pretium neque rhoncus. Etiam
        imperdiet, sem at auctor tincidunt, magna sapien vehicula diam, ut
        porttitor nisi mi id justo. Etiam malesuada leo et quam suscipit, at
        semper quam pretium. Sed luctus odio at lorem interdum tincidunt. Aenean
        dignissim, neque vel hendrerit ultricies, nunc erat tempor nunc, vitae
        rhoncus dolor purus quis erat. Duis dapibus sem non lorem pharetra, sit
        amet molestie diam auctor. Proin a aliquet tortor.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
        consequat velit. Etiam et nunc sit amet urna feugiat sollicitudin.
        Curabitur sed faucibus nunc, sed suscipit lorem. Ut vitae dolor sit amet
        massa sodales pulvinar quis vel felis. Maecenas efficitur magna ac ex
        ornare bibendum. Vivamus tempus id lectus sit amet hendrerit. Integer
        pulvinar fringilla maximus. Mauris neque eros, finibus in bibendum sed,
        suscipit vitae neque. Suspendisse pellentesque fringilla massa id
        egestas. Quisque sagittis, libero sed rhoncus aliquam, mauris eros
        gravida tellus, vel porttitor quam dolor ac ante. Sed sit amet urna sit
        amet lacus feugiat blandit. Sed eu egestas est, vitae ultrices lacus.
        Praesent non lorem vitae leo lobortis mollis. Pellentesque id consequat
        mi. Nulla dapibus ante est. Interdum et malesuada fames ac ante ipsum
        primis in faucibus.
      </Paragraph>
      <Paragraph>
        Proin ac urna a lectus ultrices pretium non vel nibh. Morbi in aliquet
        odio. Suspendisse posuere nisi faucibus purus consectetur tempus. Sed
        dapibus augue elit, vel interdum eros cursus non. Sed rutrum rhoncus
        facilisis. Proin blandit interdum diam, ac ultricies lectus bibendum at.
        Donec sit amet risus dui. Donec nibh lectus, bibendum quis luctus ut,
        dignissim iaculis arcu. Donec lectus urna, molestie a tristique non,
        eleifend quis ipsum. Pellentesque efficitur tempor libero id sodales.
        Vestibulum auctor neque orci, at ultricies nulla posuere ut.
      </Paragraph>
      <Paragraph>
        Ut a ultrices mauris. Donec blandit eros id justo suscipit auctor. Sed
        vestibulum erat vitae dolor maximus, ac pretium neque rhoncus. Etiam
        imperdiet, sem at auctor tincidunt, magna sapien vehicula diam, ut
        porttitor nisi mi id justo. Etiam malesuada leo et quam suscipit, at
        semper quam pretium. Sed luctus odio at lorem interdum tincidunt. Aenean
        dignissim, neque vel hendrerit ultricies, nunc erat tempor nunc, vitae
        rhoncus dolor purus quis erat. Duis dapibus sem non lorem pharetra, sit
        amet molestie diam auctor. Proin a aliquet tortor.
      </Paragraph>
    </main>
  );
}
