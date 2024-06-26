/**
 * Referred from: https://developer.marvel.com/documentation/entity_types
 */

import { ComicSummary } from '^/entities/comic/types/summary';
import { SeriesSummary } from '^/entities/series/types/summary';
import { StorySummary } from '^/entities/story/types/summary';
import { ImagePath } from '^/shared/image-path/types';
import { ResourceList } from '^/shared/resource-list/types';
import { URLObject } from '^/shared/url-object/types';

export interface Character {
  /**
   * @desc
   * The unique ID of the character resource.
   */
  id: number;

  /**
   * @desc
   * The name of the character.
   */
  name: string;

  /**
   * @desc
   * A short bio or description of the character.
   */
  description: string;

  /**
   * @desc
   * The date the resource was most recently modified.
   */
  modified: Date;

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
   * The representative image for this character.
   */
  thumbnail: ImagePath;

  /**
   * @desc
   * A resource list containing comics which feature this character.
   */
  comics: ResourceList<ComicSummary>;

  /**
   * @desc
   * A resource list of stories in which this character appears.
   */
  stories: ResourceList<StorySummary>;

  /**
   * @desc
   * A resource list of series in which this character appears.
   */
  series: ResourceList<SeriesSummary>;
}
