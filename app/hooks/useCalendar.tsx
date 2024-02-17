import { useState, useEffect } from 'react';
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
} from 'date-fns';

// useCalendar 훅의 반환 타입을 정의합니다.
interface UseCalendarReturn {
  weeks: Date[][];
}

const useCalendar = (year: number, month: number): UseCalendarReturn => {
  const [weeks, setWeeks] = useState<Date[][]>([]);

  useEffect(() => {
    // 현재 선택된 년과 월로 날짜 객체를 생성합니다.
    // 월은 0부터 시작하므로, month - 1을 해줍니다.
    const currentDate = new Date(year, month, 1);
    const startDay = startOfWeek(startOfMonth(currentDate));
    const endDay = endOfWeek(endOfMonth(currentDate));
    const days = eachDayOfInterval({ start: startDay, end: endDay });

    // 주별로 날짜를 분할합니다.
    const newWeeks: Date[][] = [];
    let week: Date[] = [];

    days.forEach((day, index) => {
      week.push(day);
      if ((index + 1) % 7 === 0 || index === days.length - 1) {
        newWeeks.push(week);
        week = [];
      }
    });

    // 상태를 업데이트합니다.
    setWeeks(newWeeks);
  }, [year, month]);

  return { weeks };
};

export default useCalendar;
