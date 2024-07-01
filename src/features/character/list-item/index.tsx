import { Character } from '^/entities/types/full';
import ListItem from '^/shared/list-item';

interface Props {
  characterData: Character;
}

export default function CharacterListItem({ characterData }: Props) {
  return (
    <ListItem
      name={characterData.name}
      description={characterData.description}
      href={`/character/${characterData.id}`}
      imageSrc={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
      imageAlt={characterData.name}
    />
  );
}
