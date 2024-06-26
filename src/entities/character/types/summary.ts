/**
 * Referred from: https://developer.marvel.com/docs
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
