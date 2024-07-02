/**
 * Types are referred from
 * - https://developer.marvel.com/docs
 * - https://developer.marvel.com/documentation/entity_types
 */

import { ImagePath } from '^/shared/image-path/types';
import { ResourceList } from '^/shared/resource-list/types';
import { TextObject } from '^/shared/text-object/types';
import { URLObject } from '^/shared/url-object/types';

import {
  CharacterSummary,
  ComicSummary,
  SeriesSummary,
  StorySummary,
} from './summary';

/**
 * @desc
 * A full representation for characters.
 */
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

/**
 * @desc
 * A full representation for comics.
 */
export interface Comic {
  /**
   * @desc
   * The unique ID of the comic resource.
   */
  id: number;

  /**
   * @desc
   * The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally.
   */
  digitalId: number;

  /**
   * @desc
   * The canonical title of the comic.
   */
  title: string;

  /**
   * @desc
   * The number of the issue in the series (will generally be 0 for collection formats).
   */
  issueNumber: number;

  /**
   * @desc
   * If the issue is a variant (e.g. an alternate cover, second printing, or director's cut), a text description of the variant.
   */
  variantDescription: string;

  /**
   * @desc
   * The preferred description of the comic.
   */
  description: string;

  /**
   * @desc
   * The date the resource was most recently modified.
   */
  modified: Date;

  /**
   * @desc
   * The ISBN for the comic (generally only populated for collection formats).
   */
  isbn: string;

  /**
   * @desc
   * The UPC barcode number for the comic (generally only populated for periodical formats).
   */
  upc: string;

  /**
   * @desc
   * The Diamond code for the comic.
   */
  diamondCode: string;

  /**
   * @desc
   * The EAN barcode for the comic.
   */
  ean: string;

  /**
   * @desc
   * The ISSN barcode for the comic.
   */
  issn: string;

  /**
   * @desc
   * The publication format of the comic e.g. comic, hardcover, trade paperback.
   */
  format: string;

  /**
   * @desc
   * The number of story pages in the comic.
   */
  pageCount: number;

  /**
   * @desc
   * A set of descriptive text blurbs for the comic.
   */
  textObjects: TextObject[];

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
   * The representative image for this comic.
   */
  thumbnail: ImagePath;

  /**
   * @desc
   * A list of promotional images associated with this comic.
   */
  images: ImagePath[];

  /**
   * @desc
   * A summary representation of the series to which this comic belongs.
   */
  series: SeriesSummary;

  /**
   * @desc
   * A resource list containing the characters which appear in this comic.
   */
  characters: ResourceList<CharacterSummary>;

  /**
   * @desc
   * A resource list containing the stories which appear in this comic.
   */
  stories: ResourceList<StorySummary>;
}

/**
 * @desc
 * A full representation for series.
 */
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

/**
 * @desc
 * A full representation for stories.
 */
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
  thumbnail: ImagePath | null;

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
