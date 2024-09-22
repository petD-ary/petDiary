import {
  SignalType,
  getKnowledgeDisease,
  getKnowledgeDiseaseDetail,
  getKnowledgeFood,
  getKnowledgeFoodDetail,
  getKnowledgeSignal,
  getKnowledgeSignalDetail,
} from '@/apis/info';
import {
  queryDiseaseDetailKey,
  queryDiseaseKey,
  queryFoodDetailKey,
  queryFoodKey,
  querySignalDetailKey,
  querySignalKey,
} from '@/constants/queryKey';
import { FoodCookType, PetType, RiskType } from '@/recoil/Info/atoms';
import { useInfiniteQuery, useQuery } from 'react-query';

export const useDisease = (query: { petType: PetType; risk: RiskType }) => {
  const size = 15;
  return useInfiniteQuery(
    [queryDiseaseKey, query.petType, query.risk],
    ({ pageParam = 100000 }) =>
      getKnowledgeDisease(query.risk, pageParam, size, query.petType),
    {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage?.data[lastPage.data.length - 1].cursor;
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

export const useDiseaseDetail = (id: number) => {
  return useQuery(
    [queryDiseaseDetailKey, id],
    () => getKnowledgeDiseaseDetail(id),
    {
      staleTime: 0,
      cacheTime: 5 * 60 * 1000,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      refetchInterval: 5 * 60 * 1000,
    },
  );
};

export const useSignal = (query: { type: SignalType }) => {
  return useQuery(
    [querySignalKey, query.type],
    () => getKnowledgeSignal(query.type),
    {
      staleTime: 0,
      cacheTime: 5 * 60 * 1000,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      refetchInterval: 5 * 60 * 1000,
    },
  );
};

export const useSignalDetail = (id: number) => {
  return useQuery(
    [querySignalDetailKey, id],
    () => getKnowledgeSignalDetail(id),
    {
      staleTime: 0,
      cacheTime: 5 * 60 * 1000,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      refetchInterval: 5 * 60 * 1000,
    },
  );
};

export type FoodType = 'dangerousFood' | 'safeFood';

export const useFood = (query: { type: FoodType; sort?: FoodCookType }) => {
  return useQuery(
    [queryFoodKey, query.type, query.sort],
    () => getKnowledgeFood(query.type, query.sort ?? 'cooking'),
    {
      staleTime: 0,
      cacheTime: 5 * 60 * 1000,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      refetchInterval: 5 * 60 * 1000,
    },
  );
};

export const useFoodDetail = (id: number) => {
  return useQuery([queryFoodDetailKey, id], () => getKnowledgeFoodDetail(id), {
    staleTime: 0,
    cacheTime: 5 * 60 * 1000,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: 5 * 60 * 1000,
  });
};
