'use client';
import useCalendar from '@/hooks/useCalendar';
import { isSameMonth } from 'date-fns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import IconPlus from '@/assets/images/icon-plusW.svg';
import { SubTitle } from '@/constants/Typography/TypographyList';
import IconDown from '@/assets/images/icon-down.svg';
import { MODAL_TYPE } from '../Modal';
import { useModal } from '@/hooks/useModal';
import CalendarModal from './CalendarModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedDateState } from '@/recoil/calendar/atoms';
import ScheduleAddBtn from './ScheduleAddBtn';

const CalendarForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    console.log(selectedDate);
  });
  const selectedYMDDate = useRecoilValue(selectedDateState);
  const displayDate = selectedYMDDate.selectedYear
    ? `${selectedYMDDate.selectedYear.toString().slice(2)}년, ${selectedYMDDate.selectedMonth}월`
    : `${new Date().getFullYear().toString().slice(2)}년, ${new Date().getMonth()}월`;

  const { addModal } = useModal();

  const weeks = useCalendar(
    selectedYMDDate.selectedYear,
    selectedYMDDate.selectedMonth,
  ).weeks;

  const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];
  const today = new Date();

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

  const handleDayClick = useCallback(
    (day: React.SetStateAction<Date | null>) => {
      const selectedDay =
        day ||
        new Date(
          selectedYMDDate.selectedYear,
          selectedYMDDate.selectedMonth,
          1,
        );
      setSelectedDate(selectedDay);
    },
    [selectedYMDDate.selectedYear, selectedYMDDate.selectedMonth],
  );

  const isCurrentMonth = (day: Date) => {
    const selectedMonth = new Date(
      selectedYMDDate.selectedYear,
      selectedYMDDate.selectedMonth,
    );
    return isSameMonth(day, selectedMonth);
  };

  return (
    <div className='calender bg-extra-divice-bg mx-[-20px]'>
      <ScheduleAddBtn />
      <CalendarModal />
      <div
        onClick={() => addModal(MODAL_TYPE.WHEEL_CALENDAR)}
        className='px-[20px] py-[14px] flex mb-3 border-y border-gray-100  bg-white cursor-pointer '
      >
        <div className='flex items-center gap-2 px-3 py-[7px] bg-primary-50 border border-primary-100 rounded-full'>
          <div className={`${SubTitle.subTitle2} `}>{displayDate}</div>
          <IconDown />
        </div>
      </div>
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
