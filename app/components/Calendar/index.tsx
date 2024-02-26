'use client';
import useCalendar from '@/hooks/useCalendar';
import { isSameMonth } from 'date-fns';
import React, {   useCallback, useMemo, useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import IconPlus from '@/assets/images/icon-plusW.svg';
const CalendarForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth(),
  );

  const weeks = useCalendar(currentYear, currentMonth).weeks;

  const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];
  const today = new Date();


  const years = useMemo(() => Array.from({ length: 10 }, (_, i) => currentYear - 5 + i), [currentYear]);
  const months = useMemo(() => Array.from({ length: 12 }, (_, i) => i), []);

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

 
 const handleYearChange = useCallback((event: { target: { value: string; }; }) => {
  setCurrentYear(parseInt(event.target.value, 10));
}, []);

const handleMonthChange = useCallback((event: { target: { value: string; }; }) => {
  setCurrentMonth(parseInt(event.target.value, 10));
}, []);

const handleDayClick = useCallback((day: React.SetStateAction<Date | null>) => {
  setSelectedDate(day);
}, []);

  const isCurrentMonth = (day: Date) => {
    const selectedMonth = new Date(currentYear, currentMonth);
    return isSameMonth(day, selectedMonth);
  };

  return (
    <div className='calender '>
      <button
  className="fixed bottom-[80px] right-[25px] z-50 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-full drop-shadow-floatBtn hover:shadow-xl transition-shadow flex items-center justify-center h-12 w-12"
  
>
  <IconPlus color/>
</button>
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
      <div className='min-w-[345px] flex justify-between mb-2 '>
        {WEEK_DAYS.map((day, index) => (
          <div
            key={index}
            className={`py-[2.4vw] px-[1.9vw] text-center ${
              [0].includes(index) ? 'text-primary-400' : 'text-gray-600'
            }`}
          >
            <div className={`px-[clamp(12px, 1.9vw, 16px)] `}>{day}</div>
          </div>
        ))}
      </div>
      {weeks.map((week, weekIndex) => {
        return (
          <div key={weekIndex} className='flex justify-between'>
            {week.map((day, dayIndex) => {
              return (
                <div
                  key={dayIndex}
                  className={`max-w-[60px] max-h-[60px] py-[2.4vw] px-[1.9vw] flex flex-col  justify-center items-center rounded-[4px] 
                  ${isWeekend(day) ? 'text-error' : 'text-gray-800'} 
                  ${isSelectDay(day) ? 'bg-primary-500 text-grayColor-10' : ''}
                  ${isToday(day) ? 'bg-primary-50' : ''}
                  ${!isCurrentMonth(day) ? ' text-opacity-20' : ''}
                  `}
                  onClick={() => isCurrentMonth(day) && handleDayClick(day)}
                >
               <div className={`px-0 ${
                    isToday(day) ? (isWeekend(day) ? 'text-error' : 'text-gray-800') : ''
                        }`}
                          >
                        {day.getDate()}
                      </div>
                  <div
                    className={`px-4 ${
                      isToday(day)
                        ? 'visible text-primary-600 font-bold'
                        : 'invisible'
                    } `}
                  />    
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
