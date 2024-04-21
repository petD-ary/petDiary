import { getDate } from './calculateDay';

export function transformSchedules(schedules: any[] = []) {
  const returnSchedules: any[] = [];

  schedules.forEach((schedule: { startTime: string; endTime: string }) => {
    const startTime = new Date(schedule.startTime);
    const endTime = new Date(schedule.endTime);
    const startDay = new Date(
      startTime.getFullYear(),
      startTime.getMonth(),
      startTime.getDate() + 1,
    );
    const endDay = new Date(
      endTime.getFullYear(),
      endTime.getMonth(),
      endTime.getDate() + 1,
    );

    // 일정이 같은 날에 시작하고 끝나는 경우
    if (getDate(schedule.startTime) === getDate(schedule.endTime)) {
      returnSchedules.push({
        ...schedule,
        isStartDay: true,
        isAllDay: false,
        isEndDay: true,
      });
    } else {
      // 첫째 날 처리
      returnSchedules.push({
        ...schedule,
        isStartDay: true,
        isAllDay: false,
        isEndDay: false,
      });

      // 중간 전체 날짜 처리
      let currentDay = new Date(startDay.getTime() + 86400000); // 다음 날로 이동
      while (currentDay.getTime() < endDay.getTime()) {
        returnSchedules.push({
          ...schedule,
          startTime: currentDay.toISOString(),
          isStartDay: false,
          isAllDay: true,
          isEndDay: false,
        });
        currentDay = new Date(currentDay.getTime() + 86400000); // 다음 날로 이동
      }

      // 마지막 날 처리
      if (currentDay.getTime() === endDay.getTime()) {
        returnSchedules.push({
          ...schedule,
          startTime: currentDay.toISOString(),
          isStartDay: false,
          isAllDay: false,
          isEndDay: true,
        });
      }
    }
  });

  returnSchedules.sort(
    (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
  );

  // 날짜별 첫 번째 일정에 isFirst: true 추가
  let lastDate = '';
  returnSchedules.forEach((schedule) => {
    const scheduleDate = getDate(schedule.startTime);
    if (scheduleDate !== lastDate) {
      schedule.isFirst = true;
      lastDate = scheduleDate;
    } else {
      schedule.isFirst = false;
    }
  });

  return returnSchedules;
}
