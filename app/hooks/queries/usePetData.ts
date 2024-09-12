'use client';
import { useQuery } from 'react-query';
import { getPetData } from '@/utils/getPetData';
import { queryPetDataKey } from '@/constants/queryKey';

export const usePetData = () => {
  return useQuery({ queryKey: [queryPetDataKey], queryFn: () => getPetData() });
};
