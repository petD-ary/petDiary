'use client';

import CalendarForm from './CalendarForm';
import ScheduleAddBtn from './ScheduleAddBtn';
import { useModal } from '@/hooks/useModal';
import { MODAL_TYPE } from '../Modal';
import AddScheduleModal from '@/components/Calendar/Schedule/AddScheduleModal';
import { TemporarySelectedDateState } from './CalendarModal';
import ScheduleList from './ScheduleList';
import { useRecoilState } from 'recoil';
import { selectedDateState } from '@/recoil/calendar/atoms';

const Calendar = () => {
  const [selectedCalendarDate, setSelectedCalendarDate] =
    useRecoilState(selectedDateState);

  const { addModal } = useModal();

  return (
    <div className='h-full bg-extra-device-bg -mx-[20px] overflow-y-scroll scrollbar-none'>
      <ScheduleAddBtn onClick={() => addModal(MODAL_TYPE.SCHEDULE_ADD)} />

      <AddScheduleModal />

      <div className='bg-white mb-2'>
        <CalendarForm
          handleDayClick={(day: TemporarySelectedDateState) =>
            setSelectedCalendarDate(day)
          }
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
