'use client';
import useCalendar from '@/hooks/useCalendar';
import { isSameMonth } from 'date-fns';
import React, { useEffect, useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const CalendarForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth(),
  );

  // useCalendar 훅을 사용하여 현재 선택된 년도와 월에 기반한 주 데이터를 가져옵니다.
  const { weeks } = useCalendar(currentYear, currentMonth);

  const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];
  const today = new Date();

  // 10년 범위의 년도와 12개월을 위한 배열
  const months = Array.from({ length: 12 }, (_, i) => i);
  const years = Array.from(
    { length: 10 },
    (_, i) => today.getFullYear() - 5 + i,
  );

  const isToday = (day: Date) => {
    return (
      day.getDate() === today.getDate() &&
      day.getMonth() === today.getMonth() &&
      day.getFullYear() === today.getFullYear()
    );
  };

  const isSelectDay = (day: Date) => {
    return (
      selectedDate &&
      day.getDate() === selectedDate.getDate() &&
      day.getMonth() === selectedDate.getMonth() &&
      day.getFullYear() === selectedDate.getFullYear()
    );
  };

  const isWeekend = (day: Date) => {
    const dayOfWeek = day.getDay();
    return dayOfWeek === 0;
  };

  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentYear(parseInt(event.target.value, 10));
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentMonth(parseInt(event.target.value, 10));
  };

  const isCurrentMonth = (day: Date) => {
    const selectedMonth = new Date(currentYear, currentMonth);
    return isSameMonth(day, selectedMonth);
  };

  return (
    <div className='calender'>
      <div>
        <select value={currentYear} onChange={handleYearChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}년
            </option>
          ))}
        </select>
        <select value={currentMonth} onChange={handleMonthChange}>
          {months.map((month) => (
            <option key={month} value={month}>
              {month + 1}월
            </option>
          ))}
        </select>
      </div>
      <div className='flex justify-between border-b border-grayColor-100/40  mb-5 '>
        {WEEK_DAYS.map((day, index) => (
          <div
            key={index}
            className={`py-2 px-4 flex-1 text-center ${
              [0].includes(index) ? 'text-primary-400' : 'text-gray-600'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      {weeks.map((week, weekIndex) => {
        return (
          <div key={weekIndex} className='week flex justify-between'>
            {week.map((day, dayIndex) => {
              return (
                <div
                  key={dayIndex}
                  className={`py-4 px-4  flex flex-col  justify-center items-center rounded-[4px] 
                  ${isSelectDay(day) ? 'bg-primary-600 text-grayColor-10' : ''}
                  ${isWeekend(day) ? 'text-error' : 'text-gray-800'} 
                  ${isToday(day) ? 'bg-primary-600/30' : ''}
                  ${!isCurrentMonth(day) ? ' text-opacity-20' : ''}
                  `}
                  onClick={() => isCurrentMonth(day) && handleDayClick(day)}
                >
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
                    오늘
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarForm;
