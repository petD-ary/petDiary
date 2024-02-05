'use client';
import useCalendar from '@/hooks/useCalendar';
import React, { useEffect, useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const CalendarForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
    console.log(day);
  };
  const { weeks } = useCalendar();
  return (
    <div className='calender flex flex-col'>
      {weeks.map((week, weekIndex) => {
        return (
          <div key={weekIndex} className='week flex justify-between'>
            {week.map((day, dayIndex) => {
              return (
                <div
                  key={dayIndex}
                  className='day flex-1 p-2 flex justify-center items-center'
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
