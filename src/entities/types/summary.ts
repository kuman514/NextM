/**
 * Types are referred from
 * - https://developer.marvel.com/docs
 * - https://developer.marvel.com/documentation/entity_types
 */

/**
 * @desc
 * A summary representation for characters.
 */
export interface CharacterSummary {
  /**
   * @desc
   * The path to the individual character resource.
   */
  resourceURI: string;

  /**
   * @desc
   * The full name of the character.
   */
  name: string;

  /**
   * @desc
   * The role of the creator in the parent entity.
   */
  role: string;
}

/**
 * @desc
 * A summary representation for comics.
 */
export interface ComicSummary {
  /**
   * @desc
   * The path to the individual comic resource.
   */
  resourceURI: string;

  /**
   * @desc
   * The canonical name of the comic.
   */
  name: string;
}

/**
 * @desc
 * A summary representation for series.
 */
export interface SeriesSummary {
  /**
   * @desc
   * The path to the individual series resource.,
   */
  resourceURI: string;

  /**
   * @desc
   * The canonical name of the series.
   */
  name: string;
}

/**
 * @desc
 * A summary representation for stories.
 */
export interface StorySummary {
  /**
   * @desc
   * The path to the individual story resource.
   */
  resourceURI: string;

  /**
   * @desc
   * The canonical name of the story.
   */
  name: string;

  /**
   * @desc
   * The type of the story (interior or cover).
   */
  type: string;
}
