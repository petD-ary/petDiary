'use client';
import useCalendar from '@/hooks/useCalendar';
import { isSameDay } from 'date-fns';

import React, { useEffect, useMemo } from 'react';
import { useModal } from '@/hooks/useModal';
import { MODAL_TYPE } from '@/components/Modal';
import IconDown from '@/assets/images/icon-down.svg';
import IconLeft from '@/assets/images/icon-left.svg';
import IconRight from '@/assets/images/icon-right.svg';
import { SubTitle, Title } from '@/constants/Typography/TypographyList';
import CalendarModal from '../CalendarModal';
import { usePathname } from 'next/navigation';
import { useGetSchedules } from '@/hooks/queries/useSchedules';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { scheduleDataState } from '@/recoil/Schedule/atom';
import { selectedDateState } from '@/recoil/calendar/atoms';

const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export function formatDateToYYYYMMDDTHHMMSSZ(date: Date): string {
  const isoString = date.toISOString();
  return isoString.replace(
    /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).\d{3}Z/,
    '$1$2$3T$4$5$6Z',
  );
}

const CalendarForm = ({ headerType }: any) => {
  // 선택된 날짜와 선택된 날짜 업데이트

  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  const setScheduleData = useSetRecoilState(scheduleDataState);

  const { startDay, endDay } = useCalendar(
    selectedDate.selectedYear,
    selectedDate.selectedMonth,
  );

  console.log(
    '🚀 ~ CalendarForm ~ startDay:',
    formatDateToYYYYMMDDTHHMMSSZ(startDay),
  );
  console.log(
    '🚀 ~ CalendarForm ~ endDay:',
    formatDateToYYYYMMDDTHHMMSSZ(endDay),
  );
  const { data, isSuccess } = useGetSchedules(
    formatDateToYYYYMMDDTHHMMSSZ(startDay),
    formatDateToYYYYMMDDTHHMMSSZ(endDay),
  );

  useEffect(() => {
    setScheduleData({ data, isSuccess });
  }, [selectedDate, data, isSuccess, setScheduleData]);

  // 현재 선택된 연도와 월을 기준으로 주 계산
  const weeks = useCalendar(
    selectedDate.selectedYear,
    selectedDate.selectedMonth,
  ).weeks;

  // 오늘 날짜
  const today = new Date();

  // 해당 날짜가 오늘인지 확인하는 함수
  const isToday = (day: Date) => {
    return isSameDay(day, today);
  };

  // 선택된 날짜인지 확인하는 함수 : 선택된 건 컬러 변경 위함
  const isSelectDay = (day: Date) => {
    const { selectedYear, selectedDay, selectedMonth } = selectedDate;
    return (
      selectedYear === day.getFullYear() &&
      selectedMonth === day.getMonth() + 1 &&
      selectedDay === day.getDate()
    );
  };

  // 주말 여부를 확인하는 함수
  const isWeekend = (day: Date) => {
    const dayOfWeek = day.getDay();
    // 0번째가 일요일임
    return dayOfWeek === 0;
  };

  // 해당 날짜가 현재 월에 속하는지 확인하는 함수
  const isCurrentMonth = (day: Date) =>
    day.getFullYear() == selectedDate.selectedYear &&
    day.getMonth() === selectedDate.selectedMonth - 1;

  // 일정 표시 함수

  const hasSchedule = (day: Date) => {
    if (!data) return false;
    return data.some(
      (schedule: {
        startTime: string | number | Date;
        endTime: string | number | Date;
      }) =>
        isSameDay(new Date(schedule.startTime), day) ||
        (new Date(schedule.startTime) < day &&
          new Date(schedule.endTime) >= day),
    );
  };
  return (
    <div className='relative after:block w-full h-full'>
      <CalendarModal />
      <Header
        headerType={headerType}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />

      <div className='pb-4 lg:pb-8'>
        {/* 주 */}
        <div className='flex justify-around'>
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
          {weeks.map((week) => {
            return (
              <div key={String(week)} className=' flex justify-around '>
                {week.map((day) => {
                  return (
                    <div
                      key={String(day)}
                      className={`max-w-[60px] max-h-[60px] rounded-[4px] relative after:pb-[100%] after:block w-full h-full cursor-pointer
                  ${isWeekend(day) ? 'text-error' : 'text-gray-800'} 
                  ${isSelectDay(day) ? 'bg-primary-600 text-grayColor-10' : ''}
                  ${isToday(day) ? 'bg-primary-600/30' : ''}
                  ${!isCurrentMonth(day) ? 'text-opacity-20' : ''}
                  `}
                      onClick={() => {
                        console.log('onClick: ' + isSelectDay(day));
                        isCurrentMonth(day) &&
                          setSelectedDate({
                            selectedYear: day.getFullYear(),
                            selectedMonth: day.getMonth() + 1,
                            selectedDay: day.getDate(),
                          });
                      }}
                    >
                      <div className='max-w-[60px] max-h-[60px] absolute w-full h-full flex flex-col justify-center items-center'>
                        <div
                          className={
                            isToday(day) ? 'text-primary-600  font-medium' : ''
                          }
                        >
                          <div
                            className={`absolute top-2 right-2 ${
                              headerType === 'left' && hasSchedule(day)
                                ? 'bg-accent'
                                : '' // 일정이 있는 경우 동그라미의 배경색을 설정합니다.
                            } h-2 w-2 rounded-full`}
                          ></div>
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

// header

const Header = ({
  headerType = 'left',
  selectedDate,
  setSelectedDate,
}: {
  selectedDate?: any;
  setSelectedDate?: any;
  headerType?: 'center' | 'left';
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
}) => {
  const { addModal } = useModal();

  const pathname = usePathname();

  const displayYYDate = useMemo(() => {
    return `${selectedDate.selectedYear.toString().slice(2)}년, ${selectedDate.selectedMonth.toString().padStart(2, '0')}월`;
  }, [selectedDate]);

  const displayYYYYDate = useMemo(() => {
    return `${selectedDate.selectedYear}. ${selectedDate.selectedMonth.toString().padStart(2, '0')}`;
  }, [selectedDate]);
  // 일정 추가 부분에서 이전 함수 다음 함수 분리 필요
  const handlePrevMonth = () => {
    const updatedDate = { ...selectedDate };

    updatedDate.selectedMonth = parseInt(updatedDate.selectedMonth, 10) - 1;

    if (updatedDate.selectedMonth === 0) {
      updatedDate.selectedYear = parseInt(updatedDate.selectedYear, 10) - 1;
      updatedDate.selectedMonth = 12;
    }

    setSelectedDate(updatedDate);
  };

  const handleNextMonth = () => {
    const updatedDate = { ...selectedDate };

    updatedDate.selectedMonth = parseInt(updatedDate.selectedMonth, 10) + 1;

    if (updatedDate.selectedMonth === 13) {
      updatedDate.selectedYear = parseInt(updatedDate.selectedYear, 10) + 1;
      updatedDate.selectedMonth = 1;
    }

    setSelectedDate(updatedDate);
  };

  if (headerType === 'left') {
    return (
      <div
        className={`px-[20px] py-[14px] flex mb-2 bg-white ${pathname.includes('/calendar') ? 'bg-white' : ''}`}
      >
        <div
          onClick={() => addModal(MODAL_TYPE.WHEEL_CALENDAR)}
          className='flex items-center gap-2 px-3 py-[7px] bg-primary-50 border border-primary-100 rounded-full cursor-pointer'
        >
          <div className={`${SubTitle.subTitle2} `}>{displayYYDate}</div>
          <IconDown />
        </div>
      </div>
    );
  }
  if (headerType === 'center') {
    return (
      <div className='px-[20px] py-[20px] cursor-pointer'>
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
  }
  return null;
};

CalendarForm.Header = Header;
export default CalendarForm;
