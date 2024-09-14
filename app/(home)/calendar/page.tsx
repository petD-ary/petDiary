'use client';
import { useState } from 'react';
import Calendar from '@/components/Calendar/index';
import AddScheduleModal from '@/components/Schedule/AddSchedule';
import ScheduleAddBtn from '@/components/Schedule/ScheduleAddBtn';
import ScheduleList from '@/components/Schedule/ScheduleList';
import { useGetSchedules } from '@/hooks/queries/useSchedules';
import useCalendar from '@/hooks/util/useCalendar';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const { startDay, endDay } = useCalendar(
    date.getFullYear(),
    date.getMonth() + 1,
  );
  const { data: schedule, refetch } = useGetSchedules(startDay, endDay);

  return (
    <div className='h-full bg-extra-device-bg overflow-y-scroll scrollbar-none'>
      <ScheduleAddBtn />
      <AddScheduleModal refetch={refetch} />

      <Calendar initDate={date} setUpdateDate={setDate}>
        <Calendar.YYYYMMPicker type='left' goToToday />
        <Calendar.Date className='bg-white' schedule={schedule} />
        <div className='bg-white mt-2'>
          <ScheduleList schedule={schedule} />
        </div>
      </Calendar>
    </div>
  );
};

export default CalendarPage;
