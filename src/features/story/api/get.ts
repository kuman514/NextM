import { callEndpoint } from '^/shared/api/call';
import { StoryDataWrapper } from '../types/data-wrapper';

export const ORIGINAL_ENDPOINT = '/v1/public/stories';

export async function getStories(storyId?: number) {
  const finalAPIURL =
    storyId !== undefined
      ? `${ORIGINAL_ENDPOINT}/${storyId}`
      : ORIGINAL_ENDPOINT;
  return await callEndpoint<StoryDataWrapper>(finalAPIURL);
}
