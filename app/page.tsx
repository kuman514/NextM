import { getCharacters } from '^/features/character/api/get';
import CharacterList from '^/widgets/character/list';

export default async function Home() {
  const response = await getCharacters();

  return (
    <main className="flex w-full h-full flex-col items-center justify-center p-24">
      <CharacterList
        label="Characters"
        characterDataList={response.data.data.results}
      />
    </main>
  );
}
