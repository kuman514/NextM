import { Comic } from '^/entities/types/full';
import ListItem from '^/shared/list-item';

interface Props {
  comicData: Comic;
}

export default function ComicListItem({ comicData }: Props) {
  return (
    <ListItem
      name={comicData.title}
      description={comicData.description}
      href={`/comic/${comicData.id}`}
      imageSrc={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
      imageAlt={comicData.title}
    />
  );
}
