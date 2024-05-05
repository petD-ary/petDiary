import axios from './axios';
import getToken from '@/utils/getToken';

export async function getUser() {
  const accessToken = getToken('accessToken');

  try {
    const response = await axios('/users', {
      headers: { cookie: `accessToken=${accessToken?.value}` },
    });
    return response.data;
  } catch {
    return undefined;
  }
}
