'use client';
import useCalendar from '@/hooks/useCalendar';
import React, { useEffect, useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const CalendarForm = () => {
  const { weeks } = useCalendar();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

  const today = new Date();

  // 10년 범위의 년도와 12개월을 위한 배열
  const months = Array.from({ length: 12 }, (_, i) => i);
  const years = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() - 5 + i,
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

  const isCurrentMonth = (day: Date) => day.getMonth() === today.getMonth();

  const handleDayClick = (day: Date) => {
    if (day.getMonth() === today.getMonth()) {
      setSelectedDate(day);
    }
  };

  const handleYearChange = (event: { target: { value: string } }) => {
    setCurrentYear(parseInt(event.target.value, 10));
  };

  const handleMonthChange = (event: { target: { value: string } }) => {
    setCurrentMonth(parseInt(event.target.value, 10));
  };

  useEffect(() => {}, [currentYear, currentMonth]);

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
                  className={`flex-1 py-4 px-4 flex justify-center items-center rounded-[4px] ${
                    isToday(day) ? 'bg-primary-50' : ''
                  }
                  ${isSelectDay(day) ? 'bg-primary-500 text-grayColor-10' : ''}
                  ${isWeekend(day) ? 'text-error' : ''}
                  ${!isCurrentMonth(day) ? 'text-opacity-20' : ''}
                  `}
                  onClick={() => handleDayClick(day)}
                >
                  {day.getDate()}
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
