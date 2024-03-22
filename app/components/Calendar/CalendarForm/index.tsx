'use client';
import useCalendar from '@/hooks/useCalendar';
import { isSameDay } from 'date-fns';

import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedDateState } from '@/recoil/calendar/atoms';

const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarForm = () => {
  // 선택된 날짜와 선택된 날짜 업데이트
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  useEffect(() => {
    console.log(selectedDate);
  });
  // 현재 선택된 연도와 월을 기준으로 주 계산
  const weeks = useCalendar(
    selectedDate.selectedYear,
    selectedDate.selectedMonth,
  ).weeks;

  // 오늘 날짜
  const today = new Date();

  // 해당 날짜가 오늘인지 확인하는 함수
  const isToday = (day: Date) => {
    return isSameDay(day, today);
  };

  // 선택된 날짜인지 확인하는 함수 : 선택된 건 컬러 변경 위함
  const isSelectDay = (day: Date) => {
    return (
      selectedDate.selectedYear === day.getFullYear() &&
      selectedDate.selectedMonth - 1 === day.getMonth() &&
      selectedDate.selectedDay === day.getDate()
    );
  };

  // 주말 여부를 확인하는 함수
  const isWeekend = (day: Date) => {
    const dayOfWeek = day.getDay();
    // 0번째가 일요일임
    return dayOfWeek === 0;
  };
  // 해당 날짜가 현재 월에 속하는지 확인하는 함수
  const isCurrentMonth = (day: Date) => {
    const year = day.getFullYear() === selectedDate.selectedYear;
    const month = day.getMonth() === selectedDate.selectedMonth - 1;

    return year && month;
  };
  // 선택 날짜 업데이트
  const handleDayClick = useCallback(
    (day: Date) => {
      // 클릭한 날짜가 현재 월을 벗어나는 경우에만 선택한 월의 값을 변경합니다.
      if (isCurrentMonth(day)) {
        setSelectedDate((prev) => ({
          ...prev,
          selectedYear: day.getFullYear(),
          selectedMonth: day.getMonth() + 1,
          selectedDay: day.getDate(),
        }));
      }
    },
    [isCurrentMonth],
  );

  return (
    <div className='relative after:block w-full h-full  bg-white'>
      {/* 주 */}
      <div className='flex justify-around mb-2 bg-white'>
        {WEEK_DAYS.map((day, index) => (
          <div
            key={day}
            className={`py-[16px] flex text-center ${
              [0].includes(index) ? 'text-primary-400' : 'text-gray-600'
            }`}
          >
            <div className={`px-2 `}>{day}</div>
          </div>
        ))}
      </div>
      {/* 일 */}
      <div>
        {weeks.map((week) => {
          return (
            <div key={String(week)} className=' flex justify-around bg-white'>
              {week.map((day) => {
                return (
                  <div
                    key={String(day)}
                    className={`max-w-[60px] max-h-[60px] rounded-[4px] relative after:pb-[100%] after:block w-full h-full
                  ${isWeekend(day) ? 'text-error' : 'text-gray-800'} 
                  ${isSelectDay(day) ? 'bg-primary-600 text-grayColor-10' : ''}
                  ${isToday(day) ? 'bg-primary-600/30' : ''}
                  ${!isCurrentMonth(day) ? 'text-opacity-20' : ''}
                  `}
                    onClick={() => isCurrentMonth(day) && handleDayClick(day)}
                  >
                    <div className='max-w-[60px] max-h-[60px] absolute w-full h-full flex flex-col justify-center items-center'>
                      <div
                        className={
                          isToday(day) ? 'text-primary-600  font-medium' : ''
                        }
                      >
                        {day.getDate()}
                      </div>
                      <div
                        className={`px-4 ${
                          isToday(day)
                            ? 'visible text-primary-600 font-bold'
                            : 'invisible'
                        } `}
                      >
                        {/* 오늘 */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarForm;
