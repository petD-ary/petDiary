import getDaysInMonth from 'date-fns/getDaysInMonth';
import React, { useState } from 'react';

const DATE_MONTH_FIXER = 1;
// 한 달을 표시하는 총 칸 수
const CALENDER_LENGTH = 35;
// 빈 칸 표시용
const DEFAULT_TRASH_VALUE = 0;
// 한 주의 일수
const DAY_OF_WEEK = 7;
const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  //   getDaysInMonth : 현재 날짜가 속한 달의 총 일수 계산
  const totalMonthDays = getDaysInMonth(currentDate);

  // 이전 달 마지막 주에 표시될 빈 칸 수
  const prevDayList = Array.from({
    length: Math.max(0, currentDate.getDay() - DATE_MONTH_FIXER),
  }).map(() => DEFAULT_TRASH_VALUE);

  // 현재 달의 일자를 나타내는 배열
  const currentDayList = Array.from({ length: totalMonthDays }).map(
    (_, i) => i + DATE_MONTH_FIXER,
  );

  // 다음 달 시작 주에 표시될 빈 칸 수
  const nextDayList = Array.from({
    length: CALENDER_LENGTH - currentDayList.length - prevDayList.length,
  }).map(() => DEFAULT_TRASH_VALUE);

  // 최종 달력 data
  const currentCalendarList = [
    ...prevDayList,
    ...currentDayList,
    ...nextDayList,
  ];

  // 달력 데이터를 주 단위로 분할하여 2차원 배열 생성함
  const weekCalendarList = currentCalendarList.reduce<number[][]>(
    (acc, cur, idx) => {
      const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = []; // 새 주를 시작할 때 새 배열 생성
      }
      acc[chunkIndex].push(cur); // 현재 날짜를 해당 주 배열에 추가
      return acc;
    },
    [],
  );

  return {
    weekCalendarList: weekCalendarList,
    currentDate: currentDate,
    setCurrentDate: setCurrentDate,
  };
};

export default useCalendar;
