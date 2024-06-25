/**
 * Referred from: https://developer.marvel.com/documentation/entity_types
 */
export interface URLObject {
  /**
   * @desc
   * A text identifier for the URL.
   */
  type: string;

  /**
   * @desc
   * A full URL (including scheme, domain, and path).
   */
  url: string;
}
