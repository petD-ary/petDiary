'use client';
import useCalendar from '@/hooks/useCalendar';
import { isSameMonth } from 'date-fns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import IconPlus from '@/assets/images/icon-plusW.svg';
import { SubTitle } from '@/constants/Typography/TypographyList';
import IconDown from '@/assets/images/icon-down.svg';
import { useModal } from '@/hooks/useModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedDateState } from '@/recoil/calendar/atoms';
import { MODAL_TYPE } from '@/components/Modal';

const CalendarHeader = () => {
  const [selectedDate] = useRecoilState(selectedDateState);

  const displayDate = selectedDate.selectedYear
    ? `${selectedDate.selectedYear.toString().slice(2)}년, ${selectedDate.selectedMonth}월`
    : `${new Date().getFullYear().toString().slice(2)}년, ${new Date().getMonth()}월`;

  const { addModal } = useModal();

  return (
    <div
      onClick={() => addModal(MODAL_TYPE.WHEEL_CALENDAR)}
      className='px-[20px] py-[14px] flex mb-3 border-y border-gray-100  bg-white cursor-pointer '
    >
      <div className='flex items-center gap-2 px-3 py-[7px] bg-primary-50 border border-primary-100 rounded-full'>
        <div className={`${SubTitle.subTitle2} `}>{displayDate}</div>
        <IconDown />
      </div>
    </div>
  );
};

export default CalendarHeader;
