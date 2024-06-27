/**
 * Params for generating MD5 hash to use Marvel API is referred from
 * https://developer.marvel.com/documentation/authorization
 */

import { md5 } from 'js-md5';

interface Params {
  timestamp: number;
  privateKey: string;
  publicKey: string;
}

export function generateMD5HashForMarvelAPI({
  timestamp,
  privateKey,
  publicKey,
}: Params) {
  const original = `${timestamp}${privateKey}${publicKey}`;
  return md5(original);
}
