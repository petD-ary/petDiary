import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import React from 'react';
import AlarmList from './AlarmList';
import { ScheduleState } from '../../Schdule/type';

interface ScheduleAlarmModalProps {
  schedule: ScheduleState;
  setSchedule: (e: any) => void;
}

const alarmList = ['안함', '하루 전', '10분 전', '30분 전', '1시간 전'];

const ScheduleAlarmModal = ({
  schedule,
  setSchedule,
}: ScheduleAlarmModalProps) => {
  return (
    <Modal type={MODAL_TYPE.SCHEDULE_ALARM} variant={MODAL_VARIANT.HALF_SLIDE}>
      <Modal.Header title='알림 설정' titleType='left' />
      <ul className='h-full mx-5 my-5 overflow-y-scroll scrollbar-none'>
        {alarmList.map((item) => {
          return (
            <AlarmList
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

export default ScheduleAlarmModal;
