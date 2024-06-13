import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import { instance } from './axios';

export async function getUser() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  try {
    const response = await instance('/users', {
      headers: { cookie: `accessToken=${accessToken?.value}` },
    });
    return response.data;
  } catch {
    return undefined;
  }
}
