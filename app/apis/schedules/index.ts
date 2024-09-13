import {
  AddScheduleData,
  EditScheduleData,
  ScheduleData,
} from '@/components/Schedule/type';
import fetchApi from '../fetchApi';
import {
  applyTimeZone,
  convertUTC,
  getCurrentTimeZone,
} from '@/utils/calculateDay';
import { formatDateToYYYYMMDDTHHMMSSZ } from '@/utils/dateFormat';

/**
 * 시작일, 종료일에 속하는 일정 데이터 반환 API
 *
 * @param {Date} from Date 시작일
 * @param {Date} to Date 종료일
 * @returns 시작일, 종료일에 속하는 일정 데이터(현재 timeZone이 적용)
 */
export const getSchedules = async (from: Date, to: Date) => {
  const timeZone = getCurrentTimeZone();
  const fromUTC = formatDateToYYYYMMDDTHHMMSSZ(convertUTC(from, timeZone));
  const toUTC = formatDateToYYYYMMDDTHHMMSSZ(convertUTC(to, timeZone));
  const url = `/schedules?from=${fromUTC}&to=${toUTC}`;
  const schedule = (await fetchApi(url, 'GET'))?.data;

  const returnSchedule = schedule.map(
    (schedule: { startTime: string; endTime: string }) => {
      const startTime = applyTimeZone(schedule.startTime, timeZone);
      const endTime = applyTimeZone(schedule.endTime, timeZone);
      return { ...schedule, startTime, endTime };
    },
  );
  return returnSchedule as ScheduleData[];
};

/**
 * @param {AddScheduleData} data 일정 추가 데이터
 */
export const addSchedules = async (data: AddScheduleData) => {
  const timeZone = getCurrentTimeZone();
  const applyTimeZoneData = {
    ...data,
    startTime: convertUTC(data.startTime, timeZone),
    endTime: convertUTC(data.endTime, timeZone),
    timeZone: timeZone,
  };
  return await fetchApi('/schedules', 'POST', applyTimeZoneData);
};

export type ScheduleOption = 'none' | 'onlyOne' | 'since' | 'all';

/**
 * @param {ScheduleOption} option none:반복 일정 x, onlyOne: 반복 일정 중, 선택한 일정만 수정, since:선택한 일정과 이후 일정 수정, all: 반복 일정을 모두 수정
 * @param {EditScheduleData} data 수정 일정 데이터
 */
export const updateSchedules = async (
  option: ScheduleOption,
  data: EditScheduleData,
) => {
  const url = `/schedules?editOptions=${option}`;
  const timeZone = getCurrentTimeZone();
  const applyTimeZoneData = {
    ...data,
    startTime: convertUTC(data.startTime, timeZone),
    endTime: convertUTC(data.endTime, timeZone),
  };
  return await fetchApi(url, 'PUT', applyTimeZoneData);
};

/**
 * @param {ScheduleOption} option none:반복 일정 x, onlyOne: 선택한 일정만 수정, since:선택한 일정과 이후 일정 수정, all: 반복 일정을 모두 수정
 * @param {number} id 삭제한 일정 id 값
 */
export const deleteSchedules = async (option: ScheduleOption, id: number) => {
  const url = `/schedules?editOptions=${option}`;
  return await fetchApi(url, 'DELETE', { id: id });
};
