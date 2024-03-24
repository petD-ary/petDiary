'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { handleformattedDate } from '../Account/PetInfoForm';
import CalendarForm from './CalendarForm';

import CalendarModal from './CalendarModal';
import ScheduleAddBtn from './ScheduleAddBtn';
const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const handleSelectedDateClick = (data: Date) => {
    const formattedDate = handleformattedDate(data);
    setSelectedDate(formattedDate);
  };

  return (
    <div className='calender bg-extra-divice-bg mx-[-20px]'>
      <ScheduleAddBtn />
      <CalendarModal setSelectedDate={setSelectedDate} />

      <CalendarForm
        handleDayClick={(day: Date) => handleSelectedDateClick(day)}
      >
        <CalendarForm.Header headerType='left' />
      </CalendarForm>
    </div>
  );
};

export default Calendar;
