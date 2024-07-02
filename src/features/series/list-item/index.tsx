import { Series } from '^/entities/types/full';

import ListItem from '^/shared/list-item';

interface Props {
  seriesData: Series;
}

export default function SeriesListItem({ seriesData }: Props) {
  const startToEnd =
    seriesData.startYear === seriesData.endYear
      ? `${seriesData.startYear}`
      : `${seriesData.startYear} ~${
          seriesData.endYear === 2099 ? '' : ` ${seriesData.endYear}`
        }`;

  return (
    <ListItem
      name={seriesData.title}
      description={startToEnd}
      href={`/series/${seriesData.id}`}
      imageSrc={`${seriesData.thumbnail.path}.${seriesData.thumbnail.extension}`}
      imageAlt={seriesData.title}
    />
  );
}
