import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { useState } from 'react';

import DateScrollPicker from './DateScrollPicker';

const CalendarModal = ({ setSelectedDate }: { setSelectedDate: any }) => {
  const [temporarySelectedDate, setTemporarySelectedDate] = useState({
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().getMonth() + 1,
    selectedDay: new Date().getDay(),
  });

  const handleConfirmButtonClick = () => {
    setSelectedDate(temporarySelectedDate);
  };
  return (
    <Modal type={MODAL_TYPE.WHEEL_CALENDAR} variant={MODAL_VARIANT.HALF_SLIDE}>
      <Modal.Header title='' titleType='left-X' />
      <div className='h-full p-5 flex flex-col justify-between items-center'>
        <DateScrollPicker
          temporarySelectedDate={temporarySelectedDate}
          setTemporarySelectedDate={setTemporarySelectedDate}
        />
        <Modal.Button onClick={(event) => handleConfirmButtonClick()}>
          확인
        </Modal.Button>
      </div>
    </Modal>
  );
};

export default CalendarModal;
