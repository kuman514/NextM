import axios from 'axios';

import { ORIGINAL_ENDPOINT, getStories } from './get';

jest.mock('axios');

describe('getStories', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    process.env = {
      ...OLD_ENV,
      MARVEL_API_BASE_URL: 'https://base-api.url',
      MARVEL_PUBLIC_KEY: '1234',
      MARVEL_PRIVATE_KEY: 'abcd',
    };
    jest.useFakeTimers();
    jest.setSystemTime(1);
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('should call endpoint /v1/public/stories if there is no storyId', async () => {
    const mockFn = jest.fn();
    axios.mockImplementationOnce(mockFn);
    await getStories();
    expect(mockFn).toHaveBeenCalledWith(ORIGINAL_ENDPOINT, {
      baseURL: 'https://base-api.url',
      params: {
        apikey: '1234',
        hash: 'ffd275c5130566a2916217b101f26150',
        ts: 1,
      },
    });
  });

  it('should call endpoint /v1/public/stories/123 if there is storyId having 123', async () => {
    const mockFn = jest.fn();
    axios.mockImplementationOnce(mockFn);
    await getStories(123);
    expect(mockFn).toHaveBeenCalledWith(`${ORIGINAL_ENDPOINT}/123`, {
      baseURL: 'https://base-api.url',
      params: {
        apikey: '1234',
        hash: 'ffd275c5130566a2916217b101f26150',
        ts: 1,
      },
    });
  });
});
