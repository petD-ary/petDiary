import { ReactNode } from 'react';

import { ScheduleData } from '@/components/Schedule/type';
import useCalendarContext from '@/hooks/context/useCalendarContext';
import {
  hasSchedule,
  isSelectDay,
  isToday,
  isCurrentMonth,
  isSunDay,
} from '@/utils/calendar';

interface DateProps {
  children?: ReactNode;
  day: Date;
  schedule?: ScheduleData[];
  handleClickDay?: (day: Date) => void;
}

const DateComponent = ({
  children,
  day,
  schedule,
  handleClickDay,
}: DateProps) => {
  const {
    selectedDate: { year, month, date },
    setSelectedDate,
  } = useCalendarContext();
  return (
    <div
      onClick={() => {
        handleClickDay && handleClickDay(day);
        setSelectedDate(day);
      }}
      className={`max-w-[64px] aspect-square rounded-[4px]
      w-full h-full flex justify-center items-center
      relative after:pb-[100%] after:block cursor-pointer
      ${isSelectDay(year, month, date, day) && 'bg-primary-600 !text-grayColor-10'}
      ${isToday(day) && '!bg-primary-50 border border-primary-100 [&]:!text-gray-800 font-medium'}
      ${isToday(day) && isSelectDay(year, month, date, day) && 'border border-primary-600'}
      ${!isCurrentMonth(year, month, day) && '!text-opacity-20'}
      ${isSunDay(day) ? '!text-error' : 'text-gray-800'} 
  `}
    >
      {/* 일정 표시 아이콘 */}
      {schedule && hasSchedule(schedule, day) ? (
        <div className='absolute top-2 right-2 bg-accent h-2 w-2 rounded-full' />
      ) : null}
      {isToday(day) ? (
        <div className='flex flex-col items-center'>
          <div>{children}</div>
          <div className={`text-primary-600 text-today`}>오늘</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default DateComponent;
