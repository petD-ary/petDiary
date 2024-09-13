import { isSameDay } from 'date-fns';

// 해당 날짜가 오늘인지 확인하는 함수
/**
 * 해당 날짜가 오늘인지 확인하는 함수
 *
 * @param {Date} day
 * @returns {boolean}
 */
export const isToday = (day: Date): boolean => {
  const today = new Date();

  return isSameDay(day, today);
};

/**
 * 선택된 날짜인지 확인하는 함수
 *
 * @description
 * 선택된 날짜 컬러 변경을 위한 함수
 *
 * @param {number} year
 * @param {number} month
 * @param {number} date
 * @param {Date} day
 * @returns {boolean}
 */
export const isSelectDay = (
  year: number,
  month: number,
  date: number,
  day: Date,
): boolean => {
  return (
    year === day.getFullYear() &&
    month === day.getMonth() + 1 &&
    date === day.getDate()
  );
};

/**
 * 주말 여부를 확인하는 함수
 *
 * @param {Date} day
 * @returns
 */
export const isSunDay = (day: Date): boolean => {
  const dayOfWeek = day.getDay();
  // 0번째가 일요일
  return dayOfWeek === 0;
};

/**
 * 해당 날짜가 현재 월에 속하는지 확인하는 함수
 *
 * @param {number} year
 * @param {number} month
 * @param {Date} day
 * @returns {boolean}
 */
export const isCurrentMonth = (
  year: number,
  month: number,
  day: Date,
): boolean => {
  return day.getFullYear() == year && day.getMonth() === month - 1;
};

/**
 * 일정 표시 함수
 *
 * @param {any[]} schedule
 * @param {Date} day
 * @returns {boolean}
 */
export const hasSchedule = (schedule: any[], day: Date): boolean => {
  if (!schedule) return false;
  return schedule.some((schedule: { startTime: string; endTime: string }) => {
    const startTime = new Date(schedule.startTime);
    const endTime = new Date(schedule.endTime);

    return isSameDay(startTime, day) || (startTime < day && endTime >= day);
  });
};
