'use client';
import useCalendar from '@/hooks/useCalendar';
import React, { useEffect } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const CalendarForm = () => {
  const { weeks } = useCalendar();
  useEffect(() => {
    console.log(weeks);
  });
  return (
    <div className='calender'>
      {weeks.map((week, weekIndex) => {
        return (
          <div key={weekIndex} className='week'>
            {week.map((day, dayIndex) => {
              return (
                <div key={dayIndex} className='day'>
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
