import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import React from 'react';
import { ScheduleState } from '../AddScheduleModal';
import RepeatList from './RepeatList';

interface ScheduleRepeatModalProps {
  schedule: ScheduleState;
  setSchedule: (e: any) => void;
}

const repeatList = ['반복 안함', '매일', '매주', '2주마다', '매월', '매년'];

const ScheduleRepeatModal = ({
  schedule,
  setSchedule,
}: ScheduleRepeatModalProps) => {
  return (
    <Modal type={MODAL_TYPE.SCHEDULE_REPEAT} variant={MODAL_VARIANT.HALF_SLIDE}>
      <Modal.Header title='반복' titleType='left' />
      <ul className='h-full mx-5 my-5 overflow-y-scroll scrollbar-none '>
        {repeatList.map((item) => {
          return (
            <RepeatList
              key={item}
              content={item}
              schedule={schedule}
              setSchedule={setSchedule}
            />
          );
        })}
      </ul>
      <Modal.Button children='확인' />
    </Modal>
  );
};

export default ScheduleRepeatModal;
