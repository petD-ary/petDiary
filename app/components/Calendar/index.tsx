'use client';
import React, { useState } from 'react';
import { handleformattedDate } from '../Account/PetInfoForm';
import CalendarForm from './CalendarForm';

import ScheduleAddBtn from './ScheduleAddBtn';
const Calendar = () => {
  const [selectedCalendarDate, setSelectedCalendarDate] = useState('');
  const handleSelectedDateClick = (data: Date) => {
    const formattedDate = handleformattedDate(data);
    setSelectedCalendarDate(formattedDate);
  };

  return (
    <div className='calender bg-extra-divice-bg mx-[-20px]'>
      <ScheduleAddBtn />

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
