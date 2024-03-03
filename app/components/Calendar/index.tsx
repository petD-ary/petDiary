'use client';
import useCalendar from '@/hooks/useCalendar';
import { isSameMonth } from 'date-fns';
import React, { useCallback, useMemo, useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import IconPlus from '@/assets/images/icon-plusW.svg';
import { SubTitle } from '@/constants/Typography/TypographyList';
import IconDown from '@/assets/images/icon-down.svg';
import { MODAL_TYPE } from '../Modal';
import { useModal } from '@/hooks/useModal';
import CalendarModal from './CalendarModal';
const CalendarForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth(),
  );
  const { addModal } = useModal();

  const weeks = useCalendar(currentYear, currentMonth).weeks;

  const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];
  const today = new Date();

  const years = useMemo(
    () => Array.from({ length: 10 }, (_, i) => currentYear - 5 + i),
    [currentYear],
  );
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

  const handleYearChange = useCallback(
    (event: { target: { value: string } }) => {
      setCurrentYear(parseInt(event.target.value, 10));
    },
    [],
  );

  const handleMonthChange = useCallback(
    (event: { target: { value: string } }) => {
      setCurrentMonth(parseInt(event.target.value, 10));
    },
    [],
  );

  const handleDayClick = useCallback(
    (day: React.SetStateAction<Date | null>) => {
      setSelectedDate(day);
    },
    [],
  );

  const isCurrentMonth = (day: Date) => {
    const selectedMonth = new Date(currentYear, currentMonth);
    return isSameMonth(day, selectedMonth);
  };

  return (
    <div className='calender bg-extra-divice-bg mx-[-20px]'>
      <button className='fixed bottom-[80px] right-[25px] z-1 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-full drop-shadow-floatBtn hover:shadow-xl transition-shadow flex items-center justify-center h-12 w-12'>
        <IconPlus />
      </button>
      <CalendarModal />
      <div
        onClick={() => addModal(MODAL_TYPE.CALENDAR)}
        className='px-[20px] py-[14px] flex mb-3 border-y border-gray-100  bg-white cursor-pointer '
      >
        <div className='flex items-center gap-2 px-3 py-[7px] bg-primary-50 border border-primary-100 rounded-full'>
          <div className={`${SubTitle.subTitle2} `}>
            {currentYear.toString().slice(2)}년, {currentMonth}월
          </div>
          <IconDown />
        </div>
      </div>

      <div className='relative after:pb-[100%] after:block w-full h-full  bg-white'>
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
        <div className=''>
          {weeks.map((week, weekIndex) => {
            return (
              <div key={String(week)} className=' flex justify-around bg-white'>
                {week.map((day, dayIndex) => {
                  return (
                    <div
                      key={String(day)}
                      className={`max-w-[60px] max-h-[60px] rounded-[4px] relative after:pb-[100%] after:block w-full h-full
                      ${isWeekend(day) ? 'text-error' : 'text-gray-800'} 
                      ${isSelectDay(day) ? 'bg-primary-600 text-grayColor-10' : ''}
                      ${isToday(day) ? 'bg-primary-600/30' : ''}
                      ${!isCurrentMonth(day) ? ' text-opacity-20' : ''}
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
    </div>
  );
};

export default CalendarForm;
