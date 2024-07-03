import { Character } from '^/entities/types/full';
import CharacterListItem from '^/features/character/list-item';
import Title from '^/shared/title';

interface Props {
  label: string;
  characterDataList: Character[];
}

export default function CharacterList({ label, characterDataList }: Props) {
  return (
    <div className="w-full flex flex-col items-start">
      <Title>{label}</Title>
      <ul className="w-full flex flex-row overflow-x-auto gap-4">
        {characterDataList.map((characterData) => (
          <CharacterListItem
            key={`character-${characterData.id}`}
            characterData={characterData}
          />
        ))}
      </ul>
    </div>
  );
}
