import { AddScheduleData, EditScheduleData } from '@/components/Schedule/type';
import fetchApi from '../fetchApi';

export const getSchedules = async (from: string, to: string) => {
  const url = `/schedules?from=${from}&to=${to}`;
  return (await fetchApi(url, 'GET'))?.data;
};

export const addSchedules = async (data: AddScheduleData) => {
  return await fetchApi('/schedules', 'POST', data);
};

export type ScheduleOption = 'none' | 'onlyOne' | 'since' | 'all';

/**
 * @param option none:반복 일정 x, onlyOne: 반복 일정 중, 선택한 일정만 수정, since:선택한 일정과 이후 일정 수정, all: 반복 일정을 모두 수정
 */
export const updateSchedules = async (
  option: ScheduleOption,
  data: EditScheduleData,
) => {
  const url = `/schedules?editOptions=${option}`;
  return await fetchApi(url, 'PUT', data);
};

/**
 * @param option none:반복 일정 x, onlyOne: 선택한 일정만 수정, since:선택한 일정과 이후 일정 수정, all: 반복 일정을 모두 수정
 * @param id 삭제한 일정 id 값
 */

export const deleteSchedules = async (option: ScheduleOption, id: number) => {
  const url = `/schedules?editOptions=${option}`;
  return await fetchApi(url, 'DELETE', { id: id });
};
