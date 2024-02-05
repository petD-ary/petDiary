'use client';
import useCalendar from '@/hooks/useCalendar';
import React, { useEffect, useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const CalendarForm = () => {
  const { weeks } = useCalendar();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const today = new Date();

  const isToday = (day: Date) => day.getDate() === today.getDate();
  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
  };

  useEffect(() => {
    console.log(today.getDate());
  });
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
                    isToday(day) ? 'bg-primary-500 text-grayColor-10' : ''
                  }`}
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
