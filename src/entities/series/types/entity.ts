/**
 * Referred from: https://developer.marvel.com/documentation/entity_types
 */

import { CharacterSummary } from '^/entities/character/types/summary';
import { ComicSummary } from '^/entities/comic/types/summary';
import { StorySummary } from '^/entities/story/types/summary';
import { ImagePath } from '^/shared/image-path/types';
import { ResourceList } from '^/shared/resource-list/types';
import { URLObject } from '^/shared/url-object/types';

import { SeriesSummary } from './summary';

export interface Series {
  /**
   * @desc
   * The unique ID of the series resource.
   */
  id: number;

  /**
   * @desc
   * The canonical title of the series.
   */
  title: string;

  /**
   * @desc
   * A description of the series.
   */
  description: string;

  /**
   * @desc
   * The canonical URL identifier for this resource.
   */
  resourceURI: string;

  /**
   * @desc
   * A set of public web site URLs for the resource.
   */
  urls: URLObject[];

  /**
   * @desc
   * The first year of publication for the series.
   */
  startYear: number;

  /**
   * @desc
   * The last year of publication for the series (conventionally, 2099 for ongoing series).
   */
  endYear: number;

  /**
   * @desc
   * The age-appropriateness rating for the series.
   */
  rating: string;

  /**
   * @desc
   * The date the resource was most recently modified.
   */
  modified: Date;

  /**
   * @desc
   * The representative image for this series.
   */
  thumbnail: ImagePath;

  /**
   * @desc
   * A resource list containing comics in this series.
   */
  comics: ResourceList<ComicSummary>;

  /**
   * @desc
   * A resource list containing stories which occur in comics in this series.
   */
  stories: ResourceList<StorySummary>;

  /**
   * @desc
   * A resource list containing characters which appear in comics in this series.
   */
  characters: ResourceList<CharacterSummary>;

  /**
   * @desc
   * A summary representation of the series which follows this series.
   */
  next: SeriesSummary;

  /**
   * @desc
   * A summary representation of the series which preceded this series.
   */
  previous: SeriesSummary;
}
