/**
 * The test condition for generating MD5 hash to use Marvel API is referred from
 * https://developer.marvel.com/documentation/authorization
 */

import { generateMD5HashForMarvelAPI } from '.';

describe('generateMD5HashForMarvelAPI', () => {
  it('shuold give ffd275c5130566a2916217b101f26150 when ts = 1, publicKey = 1234, and privateKey = abcd', async () => {
    expect(
      generateMD5HashForMarvelAPI({
        timestamp: 1,
        privateKey: 'abcd',
        publicKey: '1234',
      })
    ).toStrictEqual('ffd275c5130566a2916217b101f26150');
  });
});
