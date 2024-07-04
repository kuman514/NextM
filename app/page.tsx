import { getComics } from '^/features/comic/api/get';
import ComicList from '^/widgets/comic/list';

export default async function Home() {
  const response = await getComics();

  return (
    <main className="flex w-full h-full flex-col items-center justify-center p-24">
      <ComicList label="Comics" comicDataList={response.data.data.results} />
    </main>
  );
}
