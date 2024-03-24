import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { selectedDateState } from '@/recoil/calendar/atoms';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import DateScrollPicker from './DateScrollPicker';

const CalendarModal = ({ setSelectedDate }: { setSelectedDate: any }) => {
  const [temporarySelectedDate, setTemporarySelectedDate] = useState({
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().getMonth(),
    selectedDay: new Date().getDay(),
  });
  const handleConfirmButtonClick = () => {
    setSelectedDate(temporarySelectedDate);
  };
  return (
    <Modal type={MODAL_TYPE.WHEEL_CALENDAR} variant={MODAL_VARIANT.HALF_SLIDE}>
      <Modal.Header title='' titleType='left-X' />
      <div className='h-full p-5 flex flex-col justify-between items-center'>
        <DateScrollPicker setTemporarySelectedDate={setTemporarySelectedDate} />
        <Modal.Button onClick={(event) => handleConfirmButtonClick()}>
          확인
        </Modal.Button>
      </div>
    </Modal>
  );
};

export default CalendarModal;
