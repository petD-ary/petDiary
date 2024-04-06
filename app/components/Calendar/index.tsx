'use client';
import React, { useState } from 'react';
import { handleformattedDate } from '../Account/PetInfoForm';
import CalendarForm from './CalendarForm';

import CalendarModal from './CalendarModal';
import ScheduleAddBtn from './ScheduleAddBtn';
import { useModal } from '@/hooks/useModal';
import { MODAL_TYPE } from '../Modal';
import AddScheduleModal from './Schdule/AddScheduleModal';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const { addModal } = useModal();

  const handleSelectedDateClick = (data: Date) => {
    const formattedDate = handleformattedDate(data);
    setSelectedDate(formattedDate);
  };

  return (
    <div className='h-full bg-extra-divice-bg -mx-[20px]'>
      <ScheduleAddBtn onClick={() => addModal(MODAL_TYPE.SCHEDULE_ADD)} />
      <CalendarModal setSelectedDate={setSelectedDate} />
      <AddScheduleModal />

      <CalendarForm
        handleDayClick={(day: Date) => handleSelectedDateClick(day)}
      >
        <CalendarForm.Header headerType='left' />
      </CalendarForm>
    </div>
  );
};

export default Calendar;
