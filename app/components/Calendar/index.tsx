'use client';

import { useState } from 'react';
import { handleformattedDate } from '../Account/PetInfoForm';
import CalendarForm from './CalendarForm';
import ScheduleAddBtn from './ScheduleAddBtn';
import { useModal } from '@/hooks/useModal';
import { MODAL_TYPE } from '../Modal';
import AddScheduleModal from '@/components/Calendar/Schedule/AddScheduleModal';
import CalendarModal from './CalendarModal';
import ScheduleList from './ScheduleList';

const Calendar = () => {
  const [selectedCalendarDate, setSelectedCalendarDate] = useState('');

  const { addModal } = useModal();
  const handleSelectedDateClick = (data: Date) => {
    const formattedDate = handleformattedDate(data);
    setSelectedCalendarDate(formattedDate);
  };

  return (
    <div className='h-full bg-extra-device-bg -mx-[20px] overflow-y-scroll scrollbar-none'>
      <ScheduleAddBtn onClick={() => addModal(MODAL_TYPE.SCHEDULE_ADD)} />
      <CalendarModal setSelectedDate={setSelectedCalendarDate} />
      <AddScheduleModal />

      <div className='bg-white mb-2'>
        <CalendarForm
          handleDayClick={(day: Date) => handleSelectedDateClick(day)}
          date={selectedCalendarDate}
        >
          <CalendarForm.Header headerType='left' />
        </CalendarForm>
      </div>
      <div className='bg-white'>
        <ScheduleList />
      </div>
    </div>
  );
};

export default Calendar;
