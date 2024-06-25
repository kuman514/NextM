/**
 * Referred from: https://developer.marvel.com/documentation/entity_types
 */
export interface TextObject {
  /**
   * @desc
   * The string description of the text object (e.g. solicit text, preview text, etc.).
   */
  type: string;

  /**
   * @desc
   * A language code denoting which language the text object is written in.
   */
  language: string;

  /**
   * @desc
   * The text of the text object.
   */
  text: string;
}
