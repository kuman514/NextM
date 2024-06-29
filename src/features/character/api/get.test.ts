import axios from 'axios';

import { ORIGINAL_ENDPOINT, getCharacters } from './get';

jest.mock('axios');

describe('getCharacters', () => {
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

  it('should call endpoint /v1/public/characters if there is no characterId', async () => {
    const mockFn = jest.fn();
    axios.mockImplementationOnce(mockFn);
    await getCharacters();
    expect(mockFn).toHaveBeenCalledWith(ORIGINAL_ENDPOINT, {
      baseURL: 'https://base-api.url',
      params: {
        apikey: '1234',
        hash: 'ffd275c5130566a2916217b101f26150',
        ts: 1,
      },
    });
  });

  it('should call endpoint /v1/public/characters/123 if there is characterId having 123', async () => {
    const mockFn = jest.fn();
    axios.mockImplementationOnce(mockFn);
    await getCharacters(123);
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
