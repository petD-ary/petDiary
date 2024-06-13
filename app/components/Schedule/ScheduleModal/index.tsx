import { useState } from 'react';

import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import DaySchedules from './DaySchedules';
import MonthSchedules from './MonthSchedules';

const tabName = [
  { name: '일일 일정', value: 'oneDay' },
  { name: '월별 일정', value: 'oneMonth' },
];

const ScheduleModal = () => {
  const [tab, setTab] = useState('oneDay');

  return (
    <Modal type={MODAL_TYPE.SCHEDULE_DETAIL} variant={MODAL_VARIANT.ALL}>
      <Modal.Header title={''} titleType='left' />
      <div className='relative'>
        <div className='flex px-6 mb-[10px]'>
          {tabName.map((v) => (
            <div
              key={v.value}
              className={`w-[120px] text-center cursor-pointer ${v.value === tab ? 'text-text-title' : 'text-text-tertiary'}`}
              onClick={() => setTab(v.value)}
            >
              {v.name}
            </div>
          ))}
        </div>
        <div className='flex px-6'>
          {tabName.map((v) => (
            <div
              key={v.value}
              className={`w-[120px] h-[1.5px] z-10 ${v.value === tab ? 'bg-primary-500' : 'bg-white'}`}
            />
          ))}
        </div>
        <div className='absolute w-full h-[1.5px] bg-gray-100' />
      </div>

      {tab === 'oneDay' ? <DaySchedules /> : <MonthSchedules />}
    </Modal>
  );
};

export default ScheduleModal;
