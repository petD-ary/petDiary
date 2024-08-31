import fetchApi from '../fetchApi';

export const reissueAccessToken = async () => {
  return await fetchApi('/auth/token', 'POST');
};
