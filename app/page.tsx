import { getStories } from '^/features/story/api/get';
import StoryList from '^/widgets/story/list';

export default async function Home() {
  const response = await getStories();

  return (
    <main className="flex w-full h-full flex-col items-center justify-center p-24">
      <StoryList label="Stories" storyDataList={response.data.data.results} />
    </main>
  );
}
