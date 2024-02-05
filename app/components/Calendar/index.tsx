'use client';
import useCalendar from '@/hooks/useCalendar';
import React, { useEffect, useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const CalendarForm = () => {
  const { weeks } = useCalendar();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const today = new Date();

  const isToday = (day: Date) => day.getDate() === today.getDate();

  const isSelectDay = (day: Date) => day.getDate() === selectedDate?.getDate();
  // 0: 일요일, 6: 토요일
  const isWeekend = (day: Date) => {
    const dayOfWeek = day.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };
  const isCurrentMonth = (day: Date) => day.getMonth() === today.getMonth();
  // useEffect(() => {
  //   console.log(weeks[4][6].getMonth());
  // });
  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
  };

  return (
    <div className='calender'>
      {weeks.map((week, weekIndex) => {
        return (
          <div key={weekIndex} className='week flex justify-between'>
            {week.map((day, dayIndex) => {
              return (
                <div
                  key={dayIndex}
                  className={`flex-1 py-4 px-4 flex justify-center items-center border rounded-[4px] ${
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
