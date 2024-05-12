import React from 'react';

import Input from '@/components/Input';
import { SCHEDULE_TYPE } from '../../constants';
import Calendar from '../../../Calendar/CalendarPicker';
import './style.css';
import convertObjToDate from '../convertObjToDate';

export type DateType = 'startTime' | 'endTime';

interface PickCalendarProps {
  scheduleTime: { date: string; time: { hh: string; mm: string } };
  handleChangeDate: (day: Date, type: DateType) => void;
  type: DateType;
  handleChangeTime: (
    time: string,
    type: DateType,
    variant: 'hh' | 'mm',
  ) => void;
  handleAutoSetEndTime?: () => void;
  error?: boolean;
}

const PickCalendar = ({
  scheduleTime,
  type,
  handleChangeDate,
  handleChangeTime,
  handleAutoSetEndTime,
  error,
}: PickCalendarProps) => {
  console.log(
    '🚀 ~ scheduleTime:',
    convertObjToDate(scheduleTime).toLocaleString(),
  );
  return (
    <li className='bg-grayColor-10'>
      <Input name={SCHEDULE_TYPE.ADDRESS}>
        <Calendar
          initDate={scheduleTime ? convertObjToDate(scheduleTime) : undefined}
        >
          <Calendar.YYYYMMPicker type='center' />
          <Calendar.Date
            handleClickDay={(day: Date) => {
              handleChangeDate(day, type);
              handleAutoSetEndTime && handleAutoSetEndTime();
            }}
          />
        </Calendar>

        <div className='px-3 pb-5'>
          <Input.Label>시간 설정</Input.Label>
          <div
            className={`bg-white group-focus:border-extra-active
            flex justify-center items-center
            overflow-hidden px-[6px]
            border rounded-md 
          ${error ? 'border-error' : 'border-extra-border'}`}
          >
            <input
              type='number'
              value={scheduleTime.time.hh}
              onChange={(e) => handleChangeTime(e.target.value, type, 'hh')}
              placeholder='hh'
              maxLength={2}
              onBlur={() => handleAutoSetEndTime && handleAutoSetEndTime()}
              className='py-4 text-right w-full group border border-transparent invalid:group:border-error timeInput'
            />
            <span className='cursor-default px-2'>{`:`}</span>
            <input
              type='number'
              value={scheduleTime.time.mm}
              onChange={(e) => handleChangeTime(e.target.value, type, 'mm')}
              placeholder='mm'
              maxLength={2}
              onBlur={() => handleAutoSetEndTime && handleAutoSetEndTime()}
              className='py-4 text-left w-full border border-transparent invalid:group:border-error timeInput'
            />
          </div>
        </div>
      </Input>
    </li>
  );
};

export default PickCalendar;
