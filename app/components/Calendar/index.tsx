'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CalendarModal from './CalendarModal';
import ScheduleAddBtn from './ScheduleAddBtn';
import CalendarHeader from './CalendarHeader';
import CalendarForm from './CalendarForm';

const Calendar = () => {
  return (
    <div className='calender bg-extra-divice-bg mx-[-20px]'>
      <ScheduleAddBtn />
      <CalendarModal />
      <CalendarHeader />
      <CalendarForm />
    </div>
  );
};

export default Calendar;
