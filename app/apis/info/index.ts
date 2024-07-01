import { SignalProps } from '@/components/Info/Signal';
import fetchApi from '../fetchApi';

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
