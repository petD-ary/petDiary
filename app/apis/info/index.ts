import fetchApi from '../fetchApi';

export const getKnowledgeDisease = async () => {
  const url = '/knowledges/disease';
  const res = await fetchApi(url, 'GET');
  return res ? res.data : res;
};

export const getKnowledgeDiseaseDetail = async (id: number) => {
  const url = `/knowledges/disease/${id}`;
  const res = await fetchApi(url, 'GET');
  return res ? res.data : false;
};
