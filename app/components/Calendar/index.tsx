'use client';

import CalendarForm from './CalendarForm';
import ScheduleAddBtn from './ScheduleAddBtn';
import { useModal } from '@/hooks/useModal';
import { MODAL_TYPE } from '../Modal';
import AddScheduleModal from '@/components/Calendar/Schedule/AddScheduleModal';
import ScheduleList from './ScheduleList';

const Calendar = () => {
  const { addModal } = useModal();

  return (
    <div className='h-full bg-extra-device-bg -mx-[20px] overflow-y-scroll scrollbar-none'>
      <ScheduleAddBtn onClick={() => addModal(MODAL_TYPE.SCHEDULE_ADD)} />

      <AddScheduleModal />

      <div className='bg-white mb-2'>
        <CalendarForm />
      </div>
      <div className='bg-white'>
        <ScheduleList />
      </div>
    </div>
  );
};

export default Calendar;
