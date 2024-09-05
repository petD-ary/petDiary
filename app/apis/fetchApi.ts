'use client';
import axios from '@/libs/axios';
import { getToken } from '@/utils/getToken';
import { RawAxiosRequestHeaders } from 'axios';
import { reissueAccessToken } from './auth';

/**
 * @param url
 * @param method
 * @param data
 */
const fetchApi = async <T>(
  url: string,
  method: 'GET' | 'POST' | 'DELETE' | 'PUT',
  data?: T,
  headers?: RawAxiosRequestHeaders,
) => {
  const accessToken = await getToken('accessToken');

  if (!accessToken) {
    await reissueAccessToken();
  }

  try {
    const config = {
      method: method,
      url: url,
      ...(method === 'GET' ? {} : { data: data }),
      ...(headers ? { headers: headers } : {}),
    };
    return await axios(config);
  } catch (error) {
    console.log(`🚀 ~ fetchApi url: ${url}, error: ${error}`);
    return undefined;
  }
};

export default fetchApi;
