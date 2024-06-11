import { getKnowledgeDisease } from '@/apis/info';
import { queryDiseaseKey } from '@/constants/queryKey';
import { PetType, RiskType } from '@/recoil/Info/atoms';
import { useInfiniteQuery } from 'react-query';

export const useDisease = (query: { petType: PetType; risk: RiskType }) => {
  return useInfiniteQuery(
    [queryDiseaseKey, query.petType, query.risk],
    ({ pageParam = 1 }) =>
      getKnowledgeDisease(query.risk, pageParam, 15, query.petType),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return !lastPage?.isEnd ? nextPage : false;
      },
      staleTime: 0,
      cacheTime: 5 * 60 * 1000,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      refetchInterval: 5 * 60 * 1000,
    },
  );
};
