import { Story } from '^/entities/types/full';
import StoryListItem from '^/features/story/list-item';
import Title from '^/shared/title';

interface Props {
  label: string;
  storyDataList: Story[];
}

export default function StoryList({ label, storyDataList }: Props) {
  return (
    <div className="w-full flex flex-col items-start">
      <Title>{label}</Title>
      <ul className="w-full flex flex-row overflow-x-auto gap-4">
        {storyDataList.map((storyData) => (
          <StoryListItem key={`story-${storyData.id}`} storyData={storyData} />
        ))}
      </ul>
    </div>
  );
}
