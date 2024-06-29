import axios from 'axios';

import { callEndpoint } from '.';

jest.mock('axios');

describe('callEndpoint', () => {
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

  it('should call endpoint /test-endpoint with query parameters', async () => {
    const mockFn = jest.fn();
    axios.mockImplementationOnce(mockFn);
    await callEndpoint<string>('/test-endpoint');
    expect(mockFn).toHaveBeenCalledWith('/test-endpoint', {
      baseURL: 'https://base-api.url',
      params: {
        apikey: '1234',
        hash: 'ffd275c5130566a2916217b101f26150',
        ts: 1,
      },
    });
  });
});
