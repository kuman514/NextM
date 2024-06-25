/**
 * Referred from: https://developer.marvel.com/documentation/entity_types
 */
export interface ResourceList<ResourceType> {
  /**
   * @desc
   * The number of total available resources in this list
   */
  available: number;

  /**
   * @desc
   * The number of resources returned in this resource list (up to 20).
   */
  returned: number;

  /**
   * @desc
   * The path to the list of full view representations of the items in this resource list.
   */
  collectionURI: string;

  /**
   * @desc
   * A list of summary views of the items in this resource list.
   */
  items: ResourceType[];
}
