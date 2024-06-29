import axios from 'axios';

import { generateMD5HashForMarvelAPI } from '../util';

export async function callEndpoint<ResponseDataType>(endpoint: string) {
  const timestamp = new Date().getTime();
  return await axios<ResponseDataType>(endpoint, {
    baseURL: String(process.env.MARVEL_API_BASE_URL),
    params: {
      ts: timestamp,
      apikey: process.env.MARVEL_PUBLIC_KEY,
      hash: generateMD5HashForMarvelAPI({
        timestamp,
        privateKey: String(process.env.MARVEL_PRIVATE_KEY),
        publicKey: String(process.env.MARVEL_PUBLIC_KEY),
      }),
    },
  });
}
