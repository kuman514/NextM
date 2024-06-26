/**
 * Referred from: https://developer.marvel.com/docs
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
