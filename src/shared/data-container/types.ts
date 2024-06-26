/**
 * Referred from: https://developer.marvel.com/docs
 */

export interface DataContainer<DataType> {
  /**
   * @desc
   * The requested offset (number of skipped results) of the call.
   */
  offset: number;

  /**
   * @desc
   * The requested result limit.
   */
  limit: number;

  /**
   * @desc
   * The total number of resources available given the current filter set.
   */
  total: number;

  /**
   * @desc
   * The total number of results returned by this call.
   */
  count: number;

  /**
   * @desc
   * The list of characters returned by the call.
   */
  results: DataType[];
}
