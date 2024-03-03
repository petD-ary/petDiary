import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import dayjs from 'dayjs';
import { useState } from 'react';
import { WheelPicker } from './WheelPicker';

const CalendarModal = () => {
  const yearItems = Array.from({ length: 100 }, (_, i) => {
    const year = new Date().getFullYear() - 50 + i;
    return {
      value: year,
      label: `${year}년`,
    };
  });

  const monthItems = Array.from({ length: 12 }, (_, i) => {
    return {
      value: i + 1,
      label: `${i + 1}월`,
    };
  });
  const [year, setYear] = useState(yearItems[50].value);
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  return (
    <Modal type={MODAL_TYPE.CALENDAR} variant={MODAL_VARIANT.HALF_SLIDE}>
      <Modal.Header title='' titleType='left-X' />
      <div className='h-full p-5 flex flex-col justify-between items-center'>
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <span style={{ textAlign: 'center', width: '100%' }}>
            {year}년 {month}월
          </span>
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <WheelPicker items={yearItems} value={year} onChange={setYear} />
            <WheelPicker items={monthItems} value={month} onChange={setMonth} />
          </div>
        </div>
        <Modal.Button>확인</Modal.Button>
      </div>
    </Modal>
  );
};

export default CalendarModal;
