import { ScheduleData } from '@/components/Calendar/Schedule/type';
import fetchApi from '../fetchApi';

export const getSchedules = async (from: string, to: string) => {
  const url = `/schedules?from=${from}&to=${to}`;
  const res = await fetchApi(url, 'GET');
  return res;
};

export const addSchedules = async (data: ScheduleData) => {
  return await fetchApi('/schedules', 'POST', data);
};
