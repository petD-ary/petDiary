'use client';
import { useQuery } from 'react-query';
import { queryPetInfoKey } from '@/constants/queryKey';
import { getPetData } from '@/utils/getPetData';

export const usePetInfo = () => {
  return useQuery({
    queryKey: [queryPetInfoKey],
    queryFn: () => getPetData(),
  });
};
