/**
 * Referred from: https://developer.marvel.com/docs
 */

export interface DataWrapper<DataContainerType> {
  /**
   * @desc
   * The HTTP status code of the returned result.
   */
  code: number;

  /**
   * @desc
   * A string description of the call status.
   */
  status: string;

  /**
   * @desc
   * The copyright notice for the returned result.
   */
  copyright: string;

  /**
   * @desc
   * The attribution notice for this result.
   * Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API.
   */
  attributionText: string;

  /**
   * @desc
   * An HTML representation of the attribution notice for this result.
   * Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API.
   */
  attributionHTML: string;

  /**
   * @desc
   * The results returned by the call.
   */
  data: DataContainerType;

  /**
   * @desc
   * A digest value of the content returned by the call.
   */
  etag: string;
}
