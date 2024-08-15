
import { TransformedScheduleData } from '@/components/Schedule/type';
import { convertUTC, getOffsetByTimeZone } from './calculateDay';

/**
 * 일정 데이터 변환
 *
 * 여러 날에 걸쳐진 일정을 날짜마다 분리
 *
 * `isStartDay`, `isAllDay`, `isEndDay`, `isFirst` 추가
 *
 * @param schedules
 * @returns
 */
export function transformSchedules(schedules: TransformedScheduleData[] = []) {
  const returnSchedules: TransformedScheduleData[] = [];

  schedules.forEach(
    (schedule: { startTime: string; endTime: string; timeZone: string }) => {
      const startTime = new Date(schedule.startTime);
      const endTime = new Date(schedule.endTime);
      const timeZone = schedule.timeZone;
      const startMidnight = getMidnightByTimeZone(startTime, timeZone);
      const endMidnight = getMidnightByTimeZone(endTime, timeZone);

      // 일정이 같은 날에 시작하고 끝나는 경우
      if (
        startTime.getDate() === endTime.getDate() ||
        (endTime.getHours() === 0 &&
          endTime.getMinutes() === 0 &&
          endTime.getDate() - startTime.getDate() === 1)
      ) {
        returnSchedules.push({
          ...(schedule as TransformedScheduleData),
          isStartDay: true,
          isAllDay: false,
          isEndDay: true,
        });
      } else {
        // 첫째 날 처리
        returnSchedules.push({
          ...(schedule as TransformedScheduleData),
          startTime: formatDate(startTime),
          endTime: formatDate(startMidnight),
          isStartDay: true,
          isAllDay: false,
          isEndDay: false,
        });

        // 중간 전체 날짜 처리
        let currentMidnight = startMidnight;
        while (getNextDate(currentMidnight).getTime() < endMidnight.getTime()) {
          returnSchedules.push({
            ...(schedule as TransformedScheduleData),
            startTime: formatDate(currentMidnight),
            endTime: formatDate(getNextDate(currentMidnight)),
            isStartDay: false,
            isAllDay: true,
            isEndDay: false,
          });
          currentMidnight = getNextDate(currentMidnight);
        }

        // 마지막 날 처리
        returnSchedules.push({
          ...(schedule as TransformedScheduleData),
          startTime: formatDate(currentMidnight),
          endTime: formatDate(endTime),
          isStartDay: false,
          isAllDay: false,
          isEndDay: true,
        });
      }
    },
  );

  // startTime 을 기준으로 정렬
  returnSchedules.sort(
    (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
  );

  // 날짜별 첫 번째 일정에 isFirst: true 추가
  let lastDate = 0;
  returnSchedules.forEach((schedule) => {
    const scheduleDate = new Date(schedule.startTime).getDate();
    if (scheduleDate !== lastDate) {
      schedule.isFirst = true;
      lastDate = scheduleDate;
    } else {
      schedule.isFirst = false;
    }
  });

  return returnSchedules;
}

const getNextDate = (date: Date) => {
  return new Date(date.getTime() + 86400000);
};

/**
 * timeZone 에 맞게 날짜 자정 시각 반환
 */
export const getMidnightByTimeZone = (
  dateString: string | Date,
  timeZone: string,
) => {
  const timeZoneOffset = getOffsetByTimeZone(timeZone);
  const date = new Date(dateString);

  // 원래 날짜에서 자정 시각을 UTC로 계산합니다.
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate() + 1;

  const utcMidnight = new Date(Date.UTC(year, month, day));
  const timezoneAdjustedMidnight = new Date(
    utcMidnight.getTime() - timeZoneOffset,
  );

  return timezoneAdjustedMidnight;
};

/**
 * Date 객체를 'YYYY-MM-DDTHH:mm:ss.sss±HH:mm' 형식의 문자열로 포맷
 * jest 에서 Date 객체 작성 및 보기 편하게 하기 위함
 *
 * @param {Date} date - 포맷할 Date 객체
 * @returns {string} 포맷된 날짜 문자열
 */
const formatDate = (date: Date) => {
  const pad = (num: number) => String(num).padStart(2, '0');

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

  const timezoneOffset = -date.getTimezoneOffset();
  const sign = timezoneOffset >= 0 ? '+' : '-';
  const absOffset = Math.abs(timezoneOffset);
  const offsetHours = pad(Math.floor(absOffset / 60));
  const offsetMinutes = pad(absOffset % 60);

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${sign}${offsetHours}:${offsetMinutes}`;
};
