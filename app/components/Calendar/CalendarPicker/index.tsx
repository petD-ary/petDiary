'use client';

import { createContext, useEffect, useMemo, useState } from 'react';
import { isSameDay } from 'date-fns';

import {
  CalendarContextProps,
  CalendarProps,
  DateContainerProps,
  YYYYMMPickerProps,
} from './type';
import DateComponent from './Date';
import useCalendarContext from '@/hooks/useCalendarContext';
import { useGetSchedules } from '@/hooks/queries/useSchedules';
import useCalendar from '@/hooks/useCalendar';
import { formatDateToYYYYMMDDTHHMMSSZ } from '@/utils/formatDateToYYYYMMDDTHHMMSSZ';
import { useModal } from '@/hooks/useModal';
import { MODAL_TYPE } from '@/components/Modal';
import CalendarModal from '../CalendarModal';
import { SubTitle, Title } from '@/constants/Typography/TypographyList';
import IconDown from '@/assets/images/icon-down.svg';
import IconLeft from '@/assets/images/icon-left.svg';
import IconRight from '@/assets/images/icon-right.svg';

export const defaultCalendarContext: CalendarContextProps = {
  viewSchedule: false,
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
  viewSchedule = false,
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
      setUpdateDate(date);
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
        viewSchedule: viewSchedule,
        selectedDate: date,
        setSelectedDate: handleUpdateDate,
      }}
    >
      <div className={`w-full ${className}`}>{children}</div>
    </CalendarContext.Provider>
  );
};

const YYYYMMPicker = ({ type = 'left', className = '' }: YYYYMMPickerProps) => {
  const { selectedDate, setSelectedDate } = useCalendarContext();
  const { addModal } = useModal();

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
    <div className={`px-5 py-[14px] flex mb-2 bg-white ${className}`}>
      <CalendarModal />
      <div
        onClick={() => addModal(MODAL_TYPE.WHEEL_CALENDAR)}
        className='flex items-center gap-2 px-3 py-[7px] bg-primary-50 border border-primary-100 rounded-full cursor-pointer'
      >
        <div className={`${SubTitle.subTitle2} `}>{displayYYDate}</div>
        <IconDown />
      </div>
    </div>
  );
};

const DateContainer = ({
  className = '',
  handleClickDay,
}: DateContainerProps) => {
  const {
    selectedDate: { year, month, date },
    viewSchedule,
    setSelectedDate,
  } = useCalendarContext();

  const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

  // 해당 날짜가 오늘인지 확인하는 함수
  const isToday = (day: Date) => {
    // 오늘 날짜
    const today = new Date();

    return isSameDay(day, today);
  };

  // 선택된 날짜인지 확인하는 함수 : 선택된 건 컬러 변경 위함
  const isSelectDay = (day: Date) => {
    return (
      year === day.getFullYear() &&
      month === day.getMonth() + 1 &&
      date === day.getDate()
    );
  };

  // 주말 여부를 확인하는 함수
  const isSunDay = (day: Date) => {
    const dayOfWeek = day.getDay();
    // 0번째가 일요일
    return dayOfWeek === 0;
  };
  // 주말 여부를 확인하는 함수
  const isSaturDay = (day: Date) => {
    const dayOfWeek = day.getDay();
    // 6번째가 토요일
    return dayOfWeek === 6;
  };

  // 해당 날짜가 현재 월에 속하는지 확인하는 함수
  const isCurrentMonth = (day: Date) =>
    day.getFullYear() == year && day.getMonth() === month - 1;

  const { startDay, endDay, weeks } = useCalendar(year, month);

  const { data } = useGetSchedules(
    formatDateToYYYYMMDDTHHMMSSZ(startDay),
    formatDateToYYYYMMDDTHHMMSSZ(endDay),
  );

  // 일정 표시 함수
  const hasSchedule = (day: Date) => {
    if (!data) return false;
    return data.some(
      (schedule: { startTime: string; endTime: string }) =>
        isSameDay(new Date(schedule.startTime), day) ||
        (new Date(schedule.startTime) < day &&
          new Date(schedule.endTime) >= day),
    );
  };

  const thisDateInfo = (day: Date) => {
    const dateInfo = {
      isToday: isToday(day),
      isSelected: isSelectDay(day),
      isSunDay: isSunDay(day),
      isSaturDay: isSaturDay(day),
      isCurrentMonth: isCurrentMonth(day),
    };

    return dateInfo;
  };

  return (
    <div className={`${className}`}>
      <div className='pb-4 lg:pb-8 [&>div]:flex [&>div]:justify-around'>
        <div>
          {WEEK_DAYS.map((day, index) => (
            <div
              key={day}
              className={`py-[16px] flex text-center
              ${[0].includes(index) ? '!text-error' : 'text-gray-600'}
              ${[6].includes(index) ? '!text-secondary-400' : 'text-gray-600'}
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
                dateInfo={thisDateInfo(day)}
                hasSchedule={viewSchedule && hasSchedule(day)}
                setSelectedDate={(day: Date) => setSelectedDate(day)}
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
