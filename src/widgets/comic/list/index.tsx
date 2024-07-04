import { Comic } from '^/entities/types/full';
import ComicListItem from '^/features/comic/list-item';
import Title from '^/shared/title';

interface Props {
  label: string;
  comicDataList: Comic[];
}

export default function ComicList({ label, comicDataList }: Props) {
  return (
    <div className="w-full flex flex-col items-start">
      <Title>{label}</Title>
      <ul className="w-full flex flex-row overflow-x-auto gap-4">
        {comicDataList.map((comicData) => (
          <ComicListItem
            key={`character-${comicData.id}`}
            comicData={comicData}
          />
        ))}
      </ul>
    </div>
  );
}
