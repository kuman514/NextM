import { Story } from '^/entities/types/full';

import ListItem from '^/shared/list-item';

interface Props {
  storyData: Story;
}

export default function StoryListItem({ storyData }: Props) {
  const imageSrc =
    storyData.thumbnail !== null
      ? `${storyData.thumbnail.path}.${storyData.thumbnail.extension}`
      : null;
  return (
    <ListItem
      name={storyData.title}
      description={storyData.description}
      href={`/story/${storyData.id}`}
      imageSrc={imageSrc}
      imageAlt={storyData.title}
    />
  );
}
