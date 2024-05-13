import { ReactNode } from 'react';

interface DateProps {
  children?: ReactNode;
  day: Date;
  dateInfo: {
    isToday?: boolean;
    isSelected?: boolean;
    isSunDay?: boolean;
    isSaturDay?: boolean;
    isCurrentMonth?: boolean;
  };
  hasSchedule?: boolean | Date[];
  handleClickDay?: (day: Date) => void;
  setSelectedDate: (day: Date) => void;
}

const DateComponent = ({
  children,
  day,
  dateInfo: { isToday, isSelected, isSaturDay, isSunDay, isCurrentMonth },
  hasSchedule,
  handleClickDay,
  setSelectedDate,
}: DateProps) => {
  return (
    <div
      onClick={() => {
        handleClickDay && handleClickDay(day);
        setSelectedDate(day);
      }}
      className={`max-w-[64px] aspect-square rounded-[4px]
      w-full h-full flex justify-center items-center
      relative after:pb-[100%] after:block
      cursor-pointer
      ${isToday ? '!bg-primary-200/50 [&]:!text-gray-800 font-medium' : ''}
      ${isSaturDay ? '!text-secondary-400' : 'text-gray-800'}
      ${isSelected ? 'bg-primary-600 !text-grayColor-10' : ''}
      ${isSunDay ? '!text-error' : 'text-gray-800'} 
  ${!isCurrentMonth ? '!text-opacity-20' : ''}
  `}
    >
      {/* 일정 표시 아이콘 */}
      {hasSchedule ? (
        <div className='absolute top-2 right-2 bg-accent h-2 w-2 rounded-full' />
      ) : null}
      {children}
    </div>
  );
};

export default DateComponent;
