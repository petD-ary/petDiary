import { getKnowledgeDisease } from '@/apis/info';
import { queryDiseaseKey } from '@/constants/queryKey';
import { PetType, RiskType } from '@/recoil/Info/atoms';
import { useInfiniteQuery } from 'react-query';

export const useDisease = (query: { petType: PetType; risk: RiskType }) => {
  const size = 15;
  return useInfiniteQuery(
    [queryDiseaseKey, query.petType, query.risk],
    ({ pageParam = 100000 }) =>
      getKnowledgeDisease(query.risk, pageParam, size, query.petType),
    {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.data[lastPage.data.length - 1].cursor;
        return !lastPage.isEnd ? nextPage : false;
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
