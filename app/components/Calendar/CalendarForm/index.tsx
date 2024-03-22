'use client';
import useCalendar from '@/hooks/useCalendar';
import { isSameDay } from 'date-fns';

import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedDateState } from '@/recoil/calendar/atoms';
import { useModal } from '@/hooks/useModal';
import { MODAL_TYPE } from '@/components/Modal';
import IconDown from '@/assets/images/icon-down.svg';
import IconLeft from '@/assets/images/icon-left.svg';
import IconRight from '@/assets/images/icon-right.svg';
import { SubTitle, Title } from '@/constants/Typography/TypographyList';
const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

// calendar

const CalendarForm = ({ children }: any) => {
  // 선택된 날짜와 선택된 날짜 업데이트
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  useEffect(() => {
    console.log(selectedDate);
  });
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
    return (
      selectedDate.selectedYear === day.getFullYear() &&
      selectedDate.selectedMonth - 1 === day.getMonth() &&
      selectedDate.selectedDay === day.getDate()
    );
  };

  // 주말 여부를 확인하는 함수
  const isWeekend = (day: Date) => {
    const dayOfWeek = day.getDay();
    // 0번째가 일요일임
    return dayOfWeek === 0;
  };
  // 해당 날짜가 현재 월에 속하는지 확인하는 함수
  const isCurrentMonth = (day: Date) => {
    const year = day.getFullYear() === selectedDate.selectedYear;
    const month = day.getMonth() === selectedDate.selectedMonth - 1;

    return year && month;
  };
  // 선택 날짜 업데이트
  const handleDayClick = useCallback(
    (day: Date) => {
      // 클릭한 날짜가 현재 월을 벗어나는 경우에만 선택한 월의 값을 변경합니다.
      if (isCurrentMonth(day)) {
        setSelectedDate((prev) => ({
          ...prev,
          selectedYear: day.getFullYear(),
          selectedMonth: day.getMonth() + 1,
          selectedDay: day.getDate(),
        }));
      }
    },
    [isCurrentMonth],
  );

  return (
    <div className='relative after:block w-full h-full'>
      {children}
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
                    className={`max-w-[60px] max-h-[60px] rounded-[4px] relative after:pb-[100%] after:block w-full h-full
                  ${isWeekend(day) ? 'text-error' : 'text-gray-800'} 
                  ${isSelectDay(day) ? 'bg-primary-600 text-grayColor-10' : ''}
                  ${isToday(day) ? 'bg-primary-600/30' : ''}
                  ${!isCurrentMonth(day) ? 'text-opacity-20' : ''}
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
  );
};

// header

const Header = ({
  headerType = 'left',
  onPrevMonth,
  onNextMonth,
}: {
  headerType?: 'center' | 'left';
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
}) => {
  const { addModal } = useModal();
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  const displayYYDate = `${selectedDate.selectedYear.toString().slice(2)}년, ${selectedDate.selectedMonth}월`;
  const displayYYYYDate = `${selectedDate.selectedYear}. ${selectedDate.selectedMonth.toString().padStart(2, '0')}`;
  // 일정 추가 부분에서 이전 함수 다음 함수 분리 필요
  const handlePrevMonth = () => {
    const updatedDate = { ...selectedDate };

    updatedDate.selectedMonth -= 1;

    if (updatedDate.selectedMonth === 0) {
      updatedDate.selectedYear -= 1;
      updatedDate.selectedMonth = 12;
    }

    setSelectedDate(updatedDate);
  };
  const handleNextMonth = () => {
    // 현재 선택된 날짜를 복사
    const updatedDate = { ...selectedDate };

    // 현재 월에서 1을 더해서 다음 달로
    updatedDate.selectedMonth += 1;

    // 현재 월이 12월인 경우, 연도도 업데이트하고 1월로 설정
    if (updatedDate.selectedMonth === 13) {
      updatedDate.selectedYear += 1;
      updatedDate.selectedMonth = 1;
    }

    // 업데이트된 날짜를 선택된 날짜로 설정
    setSelectedDate(updatedDate);
  };
  if (headerType === 'left') {
    return (
      <div
        onClick={() => addModal(MODAL_TYPE.WHEEL_CALENDAR)}
        className='px-[20px] py-[14px] flex mb-3 border-y border-t-1 border-b-8 border-gray-100  bg-white cursor-pointer '
      >
        <div className='flex items-center gap-2 px-3 py-[7px] bg-primary-50 border border-primary-100 rounded-full'>
          <div className={`${SubTitle.subTitle2} `}>{displayYYDate}</div>
          <IconDown />
        </div>
      </div>
    );
  }
  if (headerType === 'center') {
    return (
      <div className='px-[20px] py-[20px]  cursor-pointer'>
        <div className='flex items-center justify-between'>
          <IconLeft onClick={handlePrevMonth} />
          <div
            className={`${Title.title2} `}
            onClick={() => addModal(MODAL_TYPE.WHEEL_CALENDAR)}
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
