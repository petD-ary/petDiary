'use client';
import React, { useState } from 'react';

import { ScheduleOption } from '@/apis/schedules';
import Button from '@/components/Button';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import RepeatScheduleOption from '../RepeatScheduleOption';

const DeleteOptionModal = ({
  handleDeleteSchedule,
}: {
  handleDeleteSchedule: (option: ScheduleOption) => Promise<void>;
}) => {
  const [selected, setSelected] = useState<ScheduleOption>('all');

  return (
    <Modal
      type={MODAL_TYPE.SCHEDULE_DELETE_OPTION}
      variant={MODAL_VARIANT.CARD}
    >
      <div className='flex flex-col px-5 py-4'>
        <p className='text-secondary-900 mx-auto text-center pt-10 pb-6'>
          반복되는 일정입니다.
          <br />
          일정을 삭제하시겠습니까?
        </p>
        <RepeatScheduleOption
          selected={selected}
          setSelected={(value) => setSelected(value)}
        />
        <div className='py-3'>
          <Button
            variant='contained'
            onClick={() => handleDeleteSchedule(selected)}
          >
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteOptionModal;
