'use client';

import CalendarForm from '@/components/Calendar';
import ScheduleList from '@/components/Calendar/ScheduleList';

const CalendarPage = () => {
  return (
    <div>
      <CalendarForm />
      <ScheduleList />
    </div>
  );
};

export default CalendarPage;
