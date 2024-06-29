import { callEndpoint } from '^/shared/api/call';
import { CharacterDataWrapper } from '../types/data-wrapper';

export const ORIGINAL_ENDPOINT = '/v1/public/characters';

export async function getCharacters(characterId?: number) {
  const finalAPIURL =
    characterId !== undefined
      ? `${ORIGINAL_ENDPOINT}/${characterId}`
      : ORIGINAL_ENDPOINT;
  return await callEndpoint<CharacterDataWrapper>(finalAPIURL);
}
