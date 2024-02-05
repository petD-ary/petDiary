import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from 'date-fns';

const useCalendar = (currentDate = new Date()) => {
  const startDay = startOfWeek(startOfMonth(currentDate));
  const endDay = endOfWeek(endOfMonth(currentDate));

  const days = eachDayOfInterval({ start: startDay, end: endDay });

  // 주별로 분할
  const weeks: Date[][] = [];
  let week: Date[] = [];

  days.forEach((day, index) => {
    week.push(day);
    if ((index + 1) % 7 === 0 || index === days.length - 1) {
      weeks.push(week);
      week = [];
    }
  });

  return { weeks };
};

export default useCalendar;
