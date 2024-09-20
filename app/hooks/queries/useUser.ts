'use client';
import { useQuery } from 'react-query';
import { queryUserKey } from '@/constants/queryKey';
import { getUser } from '@/apis/users';

export const useUser = () => {
  return useQuery({
    queryKey: [queryUserKey],
    queryFn: () => getUser(),
  });
};
