import { callEndpoint } from '^/shared/api/call';
import { SeriesDataWrapper } from '../types/data-wrapper';

export const ORIGINAL_ENDPOINT = '/v1/public/series';

export async function getSeries(seriesId?: number) {
  const finalAPIURL =
    seriesId !== undefined
      ? `${ORIGINAL_ENDPOINT}/${seriesId}`
      : ORIGINAL_ENDPOINT;
  return await callEndpoint<SeriesDataWrapper>(finalAPIURL);
}
