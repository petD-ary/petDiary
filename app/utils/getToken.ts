'use server';
import { cookies } from 'next/headers';

export const getToken = (name: string) => {
  const cookieStore = cookies();
  const token = cookieStore.get(name);

  return token;
};

export interface SetTokenProps {
  accessToken: string;
  refreshToken: string;
  status: 'active' | 'temporary';
  accessTime: number;
  refreshTime: number;
}

export const setToken = async (data: SetTokenProps) => {
  const cookieStore = cookies();

  cookieStore.set('accessToken', data.accessToken, {
    maxAge: data.accessTime,
  });

  cookieStore.set('refreshToken', data.refreshToken, {
    maxAge: data.refreshTime,
  });
};
