import { TransformedScheduleData } from '@/components/Schedule/type';

/**
 *
 * @param schedules
 * @returns
 */
export function transformSchedules(schedules: TransformedScheduleData[] = []) {
  const returnSchedules: TransformedScheduleData[] = [];

  schedules.forEach((schedule: { startTime: string; endTime: string }) => {
    const startTime = new Date(schedule.startTime);
    const endTime = new Date(schedule.endTime);
    const startMidnight = new Date(
      Date.UTC(
        startTime.getUTCFullYear(),
        startTime.getUTCMonth(),
        startTime.getUTCDate(),
      ),
    );
    const endMidnight = new Date(
      Date.UTC(
        endTime.getUTCFullYear(),
        endTime.getUTCMonth(),
        endTime.getUTCDate(),
      ),
    );

    // 일정이 같은 날에 시작하고 끝나는 경우
    if (
      startTime.getUTCDate() === endTime.getUTCDate() ||
      (endTime.getUTCHours() === 0 &&
        endTime.getUTCMinutes() === 0 &&
        endTime.getUTCDate() - startTime.getUTCDate() === 1)
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
        endTime: getNextDate(startMidnight).toISOString(),
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
          endTime: getNextDate(currentMidnight).toISOString(),
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
          startTime: currentMidnight.toISOString(),
          isStartDay: false,
          isAllDay: false,
          isEndDay: true,
        });
      }
    }
  });

  // startTime 을 기준으로 정렬
  returnSchedules.sort(
    (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
  );

  // 날짜별 첫 번째 일정에 isFirst: true 추가
  let lastDate = 0;
  returnSchedules.forEach((schedule) => {
    const scheduleDate = new Date(schedule.startTime).getUTCDate();
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
