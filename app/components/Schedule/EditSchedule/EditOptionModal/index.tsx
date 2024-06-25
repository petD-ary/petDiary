'use client';
import React, { useState } from 'react';

import { ScheduleOption } from '@/apis/schedules';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import Button from '@/components/Button';
import RepeatScheduleOption from '../RepeatScheduleOption';

const EditOptionModal = ({
  handleUpdatedSchedule,
}: {
  handleUpdatedSchedule: (option: ScheduleOption) => Promise<void>;
}) => {
  const [selected, setSelected] = useState<ScheduleOption>('all');

  return (
    <Modal type={MODAL_TYPE.SCHEDULE_EDIT_OPTION} variant={MODAL_VARIANT.CARD}>
      <div className='flex flex-col px-5 py-4'>
        <p className='text-secondary-900 mx-auto text-center pt-10 pb-6'>
          반복되는 일정입니다.
        </p>
        <RepeatScheduleOption
          selected={selected}
          setSelected={(value) => setSelected(value)}
        />
        <div className='py-3'>
          <Button
            variant='contained'
            onClick={() => handleUpdatedSchedule(selected)}
          >
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditOptionModal;
