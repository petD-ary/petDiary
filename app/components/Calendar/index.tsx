'use client';

import React, { useState } from 'react';

import { handleformattedDate } from '../Account/PetInfoForm';
import CalendarForm from './CalendarForm';

import ScheduleAddBtn from './ScheduleAddBtn';
import { useModal } from '@/hooks/useModal';
import { MODAL_TYPE } from '../Modal';
import AddScheduleModal from './Schdule/AddScheduleModal';
import CalendarModal from './CalendarModal';

const Calendar = () => {
  const [selectedCalendarDate, setSelectedCalendarDate] = useState('');

  const { addModal } = useModal();
  const handleSelectedDateClick = (data: Date) => {
    const formattedDate = handleformattedDate(data);
    setSelectedCalendarDate(formattedDate);
  };

  return (
    <div className='h-full bg-extra-divice-bg -mx-[20px]'>
      <ScheduleAddBtn onClick={() => addModal(MODAL_TYPE.SCHEDULE_ADD)} />
      <CalendarModal setSelectedDate={setSelectedCalendarDate} />
      <AddScheduleModal />

      <CalendarForm
        handleDayClick={(day: Date) => handleSelectedDateClick(day)}
        date={selectedCalendarDate}
      >
        <CalendarForm.Header headerType='left' />
      </CalendarForm>
    </div>
  );
};

export default Calendar;
