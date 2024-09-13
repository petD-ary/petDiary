import fetchApi from '../fetchApi';

export const reissueAccessToken = async () => {
  return fetchApi('/auth/token', 'POST');
};
