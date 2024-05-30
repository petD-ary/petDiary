import fetchApi from '../fetchApi';

export const getKnowledgeDisease = async () => {
  const url = '/knowledges/distance';
  const res = await fetchApi(url, 'GET');
  return res ? res.data : res;
};
