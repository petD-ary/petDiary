import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { useState } from 'react';
import ScheduleDetail from './ScheduleDetail';

const tabName = [
  { name: '일정 상세', value: 'detail' },
  { name: '전체 일정', value: 'whole' },
];

const ScheduleDetailModal = () => {
  const [tab, setTab] = useState('detail');

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

      {tab === 'detail' ? <ScheduleDetail /> : <div>전체 일정</div>}
    </Modal>
  );
};

export default ScheduleDetailModal;
