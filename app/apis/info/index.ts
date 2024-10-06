import { SignalProps } from '@/components/Info/Signal';
import fetchApi from '../fetchApi';
import { FoodType } from '@/hooks/queries/useKnowledge';
import { FoodProps } from '@/components/Info/DangerousFood';
import { FoodCookType } from '@/recoil/Info/atoms';

export const getKnowledgeDisease = async (
  sort: 'high' | 'low',
  cursor: number,
  size: number = 15,
  petType: 'all' | 'dog' | 'cat',
) => {
  const url = `/knowledges/disease?sort=riskLevel,${sort}${petType === 'all' ? '' : `&petType=${petType}`}&size=${size}&cursor=${cursor}`;
  const res = await fetchApi(url, 'GET');
  return res?.data;
};

export const getKnowledgeDiseaseDetail = async (id: number) => {
  const url = `/knowledges/disease/${id}`;
  const res = await fetchApi(url, 'GET');
  return res?.data;
};

export type SignalType =
  | 'poopColor'
  | 'poopShape'
  | 'pee'
  | 'throwUp'
  | 'weight'
  | 'drinkAmount'
  | 'breathingDuringSleep';

export const getKnowledgeSignal = async (type: SignalType) => {
  const url = `/knowledges/signal?type=${type}`;
  const res = await fetchApi(url, 'GET');
  return res?.data as SignalProps[];
};

export const getKnowledgeSignalDetail = async (id: number) => {
  const url = `/knowledges/signal/${id}`;
  const res = await fetchApi(url, 'GET');
  return res?.data as SignalProps;
};

export const getKnowledgeFood = async (
  type: FoodType,
  foodCookType?: FoodCookType,
) => {
  const cookTypeParam = foodCookType ? '&foodCookType=' + foodCookType : '';
  const url = `/knowledges/food?type=${type}${cookTypeParam}`;
  const res = await fetchApi(url, 'GET');
  return res?.data as FoodProps[];
};

export const getKnowledgeFoodDetail = async (id: number) => {
  const url = `/knowledges/food/${id}`;
  const res = await fetchApi(url, 'GET');
  return res?.data as FoodProps;
};

export interface SearchSymptoms {
  id: string;
  symptom: string;
}

export const searchDiseaseSymptom = async (search: string) => {
  if (search === '') return null;

  const url = `/knowledges/disease/symptom?search=${search}`;
  const res = await fetchApi(url, 'GET');
  return res?.data as SearchSymptoms[];
};

export const searchDisease = async ({
  sort,
  cursor,
  symptomSearch,
  symptomId,
  size = 15,
}: {
  sort: 'high' | 'low';
  cursor: number;
  symptomSearch?: string;
  symptomId?: string;
  size?: number;
}) => {
  if (symptomSearch && symptomId) return;

  const url = symptomSearch
    ? `/knowledges/disease?sort=riskLevel,${sort}&size=${size}&cursor=${cursor}&symptomSearch=${symptomSearch}`
    : `/knowledges/disease?sort=riskLevel,${sort}&size=${size}&cursor=${cursor}&symptomId=${symptomId}`;
  const res = await fetchApi(url, 'GET');
  return res?.data;
};

export const searchSignal = async (type: string, search: string) => {
  const url = `/knowledges/signal?type=${type}&search=${search}`;
  return (await fetchApi(url, 'GET'))?.data;
};

export const searchFood = async (type: FoodType, search: string) => {
  const url = `/knowledges/food?type=${type}&search=${search}`;
  return (await fetchApi(url, 'GET'))?.data;
};
