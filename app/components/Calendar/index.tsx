'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CalendarForm from './CalendarForm';

import CalendarModal from './CalendarModal';
import ScheduleAddBtn from './ScheduleAddBtn';
const Calendar = () => {
  return (
    <div className='calender bg-extra-divice-bg mx-[-20px]'>
      <ScheduleAddBtn />
      <CalendarModal />

      <CalendarForm>
        <CalendarForm.Header headerType='center' />
      </CalendarForm>
    </div>
  );
};

export default Calendar;
