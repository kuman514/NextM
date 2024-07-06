import { getSeries } from '^/features/series/api/get';
import SeriesList from '^/widgets/series/list';

export default async function Home() {
  const response = await getSeries();

  return (
    <main className="flex w-full h-full flex-col items-center justify-center p-24">
      <SeriesList label="Series" seriesDataList={response.data.data.results} />
    </main>
  );
}
