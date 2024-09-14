'use client';
import { createContext, useEffect, useMemo, useState } from 'react';

import {
  CalendarContextProps,
  CalendarProps,
  DateContainerProps,
  YYYYMMPickerProps,
} from './type';
import DateComponent from './Date';
import useCalendarContext from '@/hooks/context/useCalendarContext';
import useCalendar from '@/hooks/util/useCalendar';
import { useModal } from '@/hooks/view/useModal';
import { MODAL_TYPE } from '@/components/Modal';
import CalendarModal from './DateScrollPickerModal';
import { Body, SubTitle, Title } from '@/constants/Typography/TypographyList';
import IconDown from '@/assets/images/icon-down.svg';
import IconLeft from '@/assets/images/icon-left.svg';
import IconRight from '@/assets/images/icon-right.svg';
import {
  hasSchedule,
  isCurrentMonth,
  isSelectDay,
  isSunDay,
  isToday,
} from '@/utils/calendar';

export const defaultCalendarContext: CalendarContextProps = {
  selectedDate: {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  },
  setSelectedDate: (date: Date | string) => {},
};

export const CalendarContext = createContext<CalendarContextProps>(
  defaultCalendarContext,
);

/**
 * DatePicker, Calendar를 반환
 * @param children <Calendar.YYYYMMPicker />, <Calendar.Date />
 * @param initDate (선택)기본 값은 당일(선택일을 변경할 수 있음)
 * @param setUpdateDate (선택)캘린더 선택 시, 해당 일자 업데이트 함수
 * @param viewSchedule (선택)일정 표시 여부, 기본값 - false
 * @param className (선택)캘린더 wrapper className 추가 가능(크기 및 배경 색상, 위치관련 추천)
 */
const Calendar = ({
  children,
  initDate,
  setUpdateDate,
  className = '',
}: CalendarProps) => {
  const today = new Date();
  const [date, setDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
  });

  useEffect(() => {
    if (initDate) {
      const initValue = new Date(initDate);

      setDate({
        year: initValue.getFullYear(),
        month: initValue.getMonth() + 1,
        date: initValue.getDate(),
      });
    }
  }, []);

  const handleUpdateDate = (date: string | Date) => {
    const updateDate = new Date(date);
    if (setUpdateDate) {
      setUpdateDate(updateDate);
    }

    setDate({
      year: updateDate.getFullYear(),
      month: updateDate.getMonth() + 1,
      date: updateDate.getDate(),
    });
  };

  return (
    <CalendarContext.Provider
      value={{
        selectedDate: date,
        setSelectedDate: handleUpdateDate,
      }}
    >
      <div className={`w-full ${className}`}>{children}</div>
    </CalendarContext.Provider>
  );
};

const YYYYMMPicker = ({
  type = 'left',
  goToToday = false,
  className = '',
}: YYYYMMPickerProps) => {
  const { selectedDate, setSelectedDate } = useCalendarContext();
  const { addModal } = useModal();
  const today = new Date();

  const displayYYDate = useMemo(() => {
    return `${selectedDate.year.toString().slice(2)}년, ${selectedDate.month.toString().padStart(2, '0')}월`;
  }, [selectedDate]);

  const displayYYYYDate = useMemo(() => {
    return `${selectedDate.year}. ${selectedDate.month.toString().padStart(2, '0')}`;
  }, [selectedDate]);

  // 일정 추가 부분에서 이전 함수 다음 함수 분리 필요
  const handlePrevMonth = () => {
    const updatedDate = { ...selectedDate };
    let { year, month } = updatedDate;

    month -= 1;

    if (month === 0) {
      year -= 1;
      month = 12;
    }

    const dateObj = new Date(year, month - 1, updatedDate.date);

    setSelectedDate(dateObj);
  };

  const handleClickToday = () => {
    setSelectedDate(today);
  };

  const handleNextMonth = () => {
    const updatedDate = { ...selectedDate };
    let { year, month } = updatedDate;

    month += 1;

    if (month === 13) {
      year += 1;
      month = 1;
    }

    const dateObj = new Date(year, month - 1, updatedDate.date);

    setSelectedDate(dateObj);
  };

  if (type === 'center')
    return (
      <div className={`px-[20px] py-[20px] cursor-pointer ${className}`}>
        <CalendarModal />
        <div className='flex items-center justify-between'>
          <IconLeft onClick={handlePrevMonth} />
          <div
            className={`${Title.title2} `}
            onClick={() => {
              addModal(MODAL_TYPE.WHEEL_CALENDAR);
            }}
          >
            {displayYYYYDate}
          </div>
          <IconRight onClick={handleNextMonth} />
        </div>
      </div>
    );

  return (
    <div
      className={`px-5 py-[14px] flex justify-between items-center mb-2 bg-white ${className}`}
    >
      <CalendarModal />
      <div
        onClick={() => addModal(MODAL_TYPE.WHEEL_CALENDAR)}
        className='flex items-center gap-2 px-3 py-[7px] bg-primary-50 border border-primary-100 rounded-full cursor-pointer'
      >
        <div className={`${SubTitle.subTitle2} `}>{displayYYDate}</div>
        <IconDown />
      </div>

      {goToToday && (
        <button
          onClick={handleClickToday}
          className={`${Body.body2} text-secondary-500 px-2 py-1`}
        >
          오늘
        </button>
      )}
    </div>
  );
};

const DateContainer = ({
  className = '',
  handleClickDay,
  schedule,
}: DateContainerProps) => {
  const {
    selectedDate: { year, month, date },
  } = useCalendarContext();

  const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

  const { weeks } = useCalendar(year, month);

  return (
    <div className={`${className}`}>
      <div className='pb-4 lg:pb-8 [&>div]:flex [&>div]:justify-around'>
        <div>
          {WEEK_DAYS.map((day, index) => (
            <div
              key={day}
              className={`py-[16px] flex text-center
              ${[0].includes(index) ? '!text-error' : 'text-gray-600'}
              `}
            >
              <div className={`px-2 `}>{day}</div>
            </div>
          ))}
        </div>

        {weeks.map((week) => (
          <div key={String(week)}>
            {week.map((day) => (
              <DateComponent
                key={String(day)}
                day={day}
                schedule={schedule}
                handleClickDay={handleClickDay}
              >
                {day.getDate()}
              </DateComponent>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

Calendar.Date = DateContainer;
Calendar.YYYYMMPicker = YYYYMMPicker;
export default Calendar;
