import { getKnowledgeDisease } from '@/apis/info';
import { queryDiseaseKey } from '@/constants/queryKey';
import { useQuery } from 'react-query';

export const useDisease = () => {
  return useQuery([queryDiseaseKey], () => getKnowledgeDisease(), {
    staleTime: 0,
    cacheTime: 5 * 60 * 1000,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: 5 * 60 * 1000,
  });
};
