import axios from 'axios';

import { ORIGINAL_ENDPOINT, getComics } from './get';

jest.mock('axios');

describe('getComics', () => {
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

  it('should call endpoint /v1/public/comics if there is no comicId', async () => {
    const mockFn = jest.fn();
    axios.mockImplementationOnce(mockFn);
    await getComics();
    expect(mockFn).toHaveBeenCalledWith(ORIGINAL_ENDPOINT, {
      baseURL: 'https://base-api.url',
      params: {
        apikey: '1234',
        hash: 'ffd275c5130566a2916217b101f26150',
        ts: 1,
      },
    });
  });

  it('should call endpoint /v1/public/comics/123 if there is comicId having 123', async () => {
    const mockFn = jest.fn();
    axios.mockImplementationOnce(mockFn);
    await getComics(123);
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
