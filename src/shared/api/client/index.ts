import axios from 'axios';
import qs from 'qs';

import { generateMD5HashForMarvelAPI } from '../util';

export const apiClient = (() => {
  const createdAPIClient = axios.create({
    baseURL: 'https://gateway.marvel.com',
    paramsSerializer: (params) => {
      const timestamp = new Date().getTime();
      return qs.stringify(
        {
          ...params,
          ts: timestamp,
          apikey: process.env.MARVEL_PUBLIC_KEY,
          hash: generateMD5HashForMarvelAPI({
            timestamp,
            privateKey: String(process.env.MARVEL_PRIVATE_KEY),
            publicKey: String(process.env.MARVEL_PUBLIC_KEY),
          }),
        },
        { arrayFormat: 'comma' }
      );
    },
  });

  return createdAPIClient;
})();
