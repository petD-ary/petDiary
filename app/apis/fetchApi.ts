'use client';
import axios from '@/libs/axios';

/**
 * @param url
 * @param method
 * @param data
 */
const fetchApi = async <T>(
  url: string,
  method: 'GET' | 'POST' | 'DELETE' | 'PUT',
  data?: T,
) => {
  try {
    const config = {
      method: method,
      url: url,
      ...(method === 'GET' ? {} : { data: data }),
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(`🚀 ~ fetchApi url: ${url}, error: ${error}`);
    return error;
  }
};

export default fetchApi;
