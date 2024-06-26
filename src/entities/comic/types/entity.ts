/**
 * Referred from: https://developer.marvel.com/documentation/entity_types
 */

import { CharacterSummary } from '^/entities/character/types/summary';
import { SeriesSummary } from '^/entities/series/types/summary';
import { StorySummary } from '^/entities/story/types/summary';
import { ImagePath } from '^/shared/image-path/types';
import { ResourceList } from '^/shared/resource-list/types';
import { TextObject } from '^/shared/text-object/types';
import { URLObject } from '^/shared/url-object/types';

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
