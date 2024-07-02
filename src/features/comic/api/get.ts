import { callEndpoint } from '^/shared/api/call';
import { ComicDataWrapper } from '../types/data-wrapper';

export const ORIGINAL_ENDPOINT = '/v1/public/comics';

export async function getComics(comicId?: number) {
  const finalAPIURL =
    comicId !== undefined
      ? `${ORIGINAL_ENDPOINT}/${comicId}`
      : ORIGINAL_ENDPOINT;
  return await callEndpoint<ComicDataWrapper>(finalAPIURL);
}
