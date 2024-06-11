import fetchApi from '../fetchApi';

export const getKnowledgeDisease = async (
  sort: 'high' | 'low',
  page: number,
  size: number = 15,
  petType: 'all' | 'dog' | 'cat',
) => {
  const url = `/knowledges/disease?sort=riskLevel,${sort}${petType === 'all' ? '' : `&petType=${petType}`}&page=${page}&size=${size}`;
  const res = await fetchApi(url, 'GET');
  return res ? res.data : res;
};

export const getKnowledgeDiseaseDetail = async (id: number) => {
  const url = `/knowledges/disease/${id}`;
  const res = await fetchApi(url, 'GET');
  return res ? res.data : false;
};
