'use client';

import { useModal } from '@/hooks/useModal';
import { MODAL_TYPE } from '@/components/Modal';
import ScheduleAddBtn from '@/components/Schedule/ScheduleAddBtn';
import AddScheduleModal from '@/components/Schedule/AddScheduleModal';
import ScheduleList from '@/components/Schedule/ScheduleList';
import Calendar from './CalendarPicker';
import { useState } from 'react';
import useCalendar from '@/hooks/useCalendar';

const CalendarComponent = () => {
  const { addModal } = useModal();

  return (
    <div className='h-full bg-extra-device-bg -mx-[20px] overflow-y-scroll scrollbar-none'>
      <ScheduleAddBtn onClick={() => addModal(MODAL_TYPE.SCHEDULE_ADD)} />

      <AddScheduleModal />

      <div className='mb-2'>
        <Calendar viewSchedule>
          <Calendar.YYYYMMPicker />
          <Calendar.Date className='bg-white' />
        </Calendar>
      </div>
      <div className='bg-white'>
        <ScheduleList />
      </div>
    </div>
  );
};

export default CalendarComponent;
