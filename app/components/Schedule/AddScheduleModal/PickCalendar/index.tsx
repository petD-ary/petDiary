import React, { FocusEvent } from 'react';

import Input from '@/components/Input';
import { SCHEDULE_TYPE } from '../../constants';
import Calendar from '../../../Calendar/CalendarPicker';
import './style.css';

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
  handleAutoSetEndTime?: (e: FocusEvent<HTMLInputElement>) => void;
}

const PickCalendar = ({
  scheduleTime,
  type,
  handleChangeDate,
  handleChangeTime,
  handleAutoSetEndTime,
}: PickCalendarProps) => {
  return (
    <li className='bg-grayColor-10'>
      <Input name={SCHEDULE_TYPE.ADDRESS}>
        <Calendar>
          <Calendar.YYYYMMPicker type='center' />
          <Calendar.Date
            handleClickDay={(day: Date) => handleChangeDate(day, type)}
          />
        </Calendar>

        <div className='px-3 pb-5'>
          <Input.Label>시간 설정</Input.Label>
          <div className='bg-white group-focus:border-extra-active flex justify-center border border-extra-border rounded-md overflow-hidden px-[6px] py-4'>
            <input
              type='number'
              value={scheduleTime.time.hh}
              onChange={(e) => handleChangeTime(e.target.value, type, 'hh')}
              placeholder='hh'
              maxLength={2}
              onBlur={(e) => handleAutoSetEndTime && handleAutoSetEndTime(e)}
              className='w-8 text-center group border border-transparent invalid:group:border-error timeInput'
            />
            {`:`}
            <input
              type='number'
              value={scheduleTime.time.mm}
              onChange={(e) => handleChangeTime(e.target.value, type, 'mm')}
              placeholder='mm'
              maxLength={2}
              onBlur={(e) => handleAutoSetEndTime && handleAutoSetEndTime(e)}
              className='w-8 text-center border border-transparent invalid:group:border-error timeInput'
            />
          </div>
        </div>
      </Input>
    </li>
  );
};

export default PickCalendar;
