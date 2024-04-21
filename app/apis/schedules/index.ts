import fetchApi from '../fetchApi';

export const getSchedules = async (from: string, to: string) => {
  const url = `/schedules?from=${from}&to=${to}`;
  const res = await fetchApi(url, 'GET');
  console.log(res);
  return res;
};
