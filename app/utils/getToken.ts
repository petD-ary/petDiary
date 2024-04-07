'use server';
import { cookies } from 'next/headers';

const getToken = (name: string) => {
  const cookieStore = cookies();
  const token = cookieStore.get(name);

  return token;
};

export default getToken;
