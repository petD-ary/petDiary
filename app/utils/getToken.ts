'use server';
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

export const getToken = async (name: string) => {
  const cookieStore = cookies();
  const token = cookieStore.get(name);

  return token;
};

export const setToken = async (
  name: string,
  value: string,
  options?: Partial<ResponseCookie>,
) => {
  const cookieStore = cookies();
  cookieStore.set(name, value, { ...options });
};
