import fetchApi from '../fetchApi';

export const deletePet = async (id: number) => {
  return fetchApi('/pets', 'DELETE', { id: id });
};
