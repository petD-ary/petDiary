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
      relative after:pb-[100%] after:block cursor-pointer
      ${isSelected && 'bg-primary-600 !text-grayColor-10'}
      ${isToday && '!bg-primary-50 border border-primary-100 [&]:!text-gray-800 font-medium'}
      ${isToday && isSelected && 'border border-primary-600'}
      ${!isCurrentMonth && '!text-opacity-20'}
      ${isSaturDay ? '!text-secondary-400' : 'text-gray-800'}
      ${isSunDay ? '!text-error' : 'text-gray-800'} 
  `}
    >
      {/* 일정 표시 아이콘 */}
      {hasSchedule ? (
        <div className='absolute top-2 right-2 bg-accent h-2 w-2 rounded-full' />
      ) : null}
      {isToday ? (
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
