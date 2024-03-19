import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { selectedDateState } from '@/recoil/calendar/atoms';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import CalendarForm from '..';
import DateScrollPicker from '../CalendarModal/DateScrollPicker';

const CalendarInputModal = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [temporarySelectedDate, setTemporarySelectedDate] = useState({
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().getMonth(),
    selectedDay: new Date().getDay(),
  });

  const handleConfirmButtonClick = () => {
    setSelectedDate(temporarySelectedDate);
  };
  return (
    <Modal type={MODAL_TYPE.CALENDAR} variant={MODAL_VARIANT.HALF_SLIDE}>
      <Modal.Header title='' titleType='left-X' />
      <div className=' p-10 '>
        <CalendarForm />
      </div>
      <Modal.Button onClick={(event) => handleConfirmButtonClick()}>
        확인
      </Modal.Button>
    </Modal>
  );
};

export default CalendarInputModal;
