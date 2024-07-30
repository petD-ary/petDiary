import { TransformedScheduleData } from '@/components/Schedule/type';
import { convertUTC } from './calculateDay';

/**
 *
 * @param schedules
 * @returns
 */
export function transformSchedules(schedules: TransformedScheduleData[] = []) {
  const returnSchedules: TransformedScheduleData[] = [];

  schedules.forEach(
    (schedule: { startTime: string; endTime: string; timeZone: string }) => {
      const startTime = new Date(
        convertUTC(schedule.startTime, schedule.timeZone),
      );
      const endTime = new Date(convertUTC(schedule.endTime, schedule.timeZone));
      const startMidnight = new Date(
        startTime.getFullYear(),
        startTime.getMonth(),
        startTime.getDate() - 1,
      );
      const endMidnight = new Date(
        endTime.getFullYear(),
        endTime.getMonth(),
        endTime.getDate() - 1,
      );

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
          endTime: getNextDate(startMidnight).toString(),
          isStartDay: true,
          isAllDay: false,
          isEndDay: false,
        });

        // 중간 전체 날짜 처리
        let currentMidnight = getNextDate(startMidnight);
        while (currentMidnight.getTime() < endMidnight.getTime()) {
          returnSchedules.push({
            ...(schedule as TransformedScheduleData),
            startTime: currentMidnight.toISOString(),
            endTime: getNextDate(currentMidnight).toString(),
            isStartDay: false,
            isAllDay: true,
            isEndDay: false,
          });
          currentMidnight = getNextDate(currentMidnight);
        }

        // 마지막 날 처리
        if (currentMidnight.getTime() === endMidnight.getTime()) {
          returnSchedules.push({
            ...(schedule as TransformedScheduleData),
            startTime: currentMidnight.toString(),
            isStartDay: false,
            isAllDay: false,
            isEndDay: true,
          });
        }
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
