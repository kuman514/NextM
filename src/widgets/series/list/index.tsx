import { Series } from '^/entities/types/full';
import SeriesListItem from '^/features/series/list-item';
import Title from '^/shared/title';

interface Props {
  label: string;
  seriesDataList: Series[];
}

export default function SeriesList({ label, seriesDataList }: Props) {
  return (
    <div className="w-full flex flex-col items-start">
      <Title>{label}</Title>
      <ul className="w-full flex flex-row overflow-x-auto gap-4">
        {seriesDataList.map((seriesData) => (
          <SeriesListItem
            key={`series-${seriesData.id}`}
            seriesData={seriesData}
          />
        ))}
      </ul>
    </div>
  );
}
