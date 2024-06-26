/**
 * Referred from: https://developer.marvel.com/documentation/entity_types
 */

import { CharacterSummary } from '^/entities/character/types/summary';
import { ComicSummary } from '^/entities/comic/types/summary';
import { SeriesSummary } from '^/entities/series/types/summary';
import { ImagePath } from '^/shared/image-path/types';
import { ResourceList } from '^/shared/resource-list/types';

export interface Story {
  /**
   * @desc
   * The unique ID of the story resource.
   */
  id: number;

  /**
   * @desc
   * The story title.
   */
  title: string;

  /**
   * @desc
   * A short description of the story.
   */
  description: string;

  /**
   * @desc
   * The canonical URL identifier for this resource.
   */
  resourceURI: string;

  /**
   * @desc
   * The story type e.g. interior story, cover, text story.
   */
  type: string;

  /**
   * @desc
   * The date the resource was most recently modified.
   */
  modified: Date;

  /**
   * @desc
   * The representative image for this story.
   */
  thumbnail: ImagePath;

  /**
   * @desc
   * A resource list containing comics in which this story takes place.
   */
  comics: ResourceList<ComicSummary>;

  /**
   * @desc
   * A resource list containing series in which this story appears.
   */
  series: ResourceList<SeriesSummary>;

  /**
   * @desc
   * A resource list of characters which appear in this story.
   */
  characters: ResourceList<CharacterSummary>;

  /**
   * @desc
   * A summary representation of the issue in which this story was originally published.
   */
  originalissue: ComicSummary;
}
