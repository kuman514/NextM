import Image from 'next/image';
import Link from 'next/link';

import { Character } from '^/entities/types/full';

interface Props {
  characterData: Character;
}

export default function CharacterListItem({ characterData }: Props) {
  return (
    <li>
      <Link
        aria-label="character-list-item-link"
        href={`/character/${characterData.id}`}
        className="flex flex-col w-48 h-72 rounded-xl overflow-hidden bg-black hover:bg-red-700 transition"
      >
        <div className="w-48 h-48">
          <Image
            alt={characterData.name}
            src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}
            className="w-full h-full object-cover"
            loading="lazy"
            width={192}
            height={192}
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full h-36">
          <span className="text-white">{characterData.name}</span>
          <span className="text-white">{characterData.description}</span>
        </div>
      </Link>
    </li>
  );
}
