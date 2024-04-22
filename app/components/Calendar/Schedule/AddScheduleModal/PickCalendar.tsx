import React from 'react';
import CalendarForm from '../../CalendarForm';
import { handleformattedDate } from '@/components/Account/PetInfoForm';
import Input from '@/components/Input';
import { SCHEDULE_TYPE } from '../../Schdule/constants';

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
}
const PickCalendar = ({
  scheduleTime,
  type,
  handleChangeDate,
  handleChangeTime,
}: PickCalendarProps) => {
  return (
    <li className='bg-grayColor-10'>
      <Input name={SCHEDULE_TYPE.ADDRESS}>
        <CalendarForm
          date={handleformattedDate(new Date(scheduleTime.date))}
          handleDayClick={(day: Date) => handleChangeDate(day, type)}
          headerType='center'
        />
        <div className='px-3 pb-5'>
          <Input.Label>시간 설정</Input.Label>
          <div className='bg-white group-focus:border-extra-active flex justify-center border border-extra-border rounded-md overflow-hidden px-[6px] py-4'>
            <input
              type='text'
              value={scheduleTime.time.hh}
              onChange={(e) => handleChangeTime(e.target.value, type, 'hh')}
              placeholder='hh'
              max={2}
              className='w-8 text-center group'
            />
            {`:`}
            <input
              type='text'
              value={scheduleTime.time.mm}
              onChange={(e) => handleChangeTime(e.target.value, type, 'mm')}
              placeholder='mm'
              className='w-8 text-center'
              max={2}
            />
          </div>
        </div>
      </Input>
    </li>
  );
};

export default PickCalendar;
