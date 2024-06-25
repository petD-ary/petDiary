'use client';
import React, { useState } from 'react';

import { ScheduleOption } from '@/apis/schedules';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import OptionButton from '../OptionButton';
import Button from '@/components/Button';

type SelectedType = 'onlyOne' | 'since' | 'all';

const EditOptionModal = ({
  handleUpdatedSchedule,
}: {
  handleUpdatedSchedule: (option: ScheduleOption) => Promise<void>;
}) => {
  const [selected, setSelected] = useState<SelectedType>('all');

  return (
    <Modal type={MODAL_TYPE.SCHEDULE_EDIT_OPTION} variant={MODAL_VARIANT.CARD}>
      <div className='flex flex-col px-5 py-4'>
        <p className='text-secondary-900 mx-auto text-center pt-10 pb-6'>
          반복되는 일정입니다.
        </p>
        <div className={`flex flex-col justify-between gap-3 pb-4`}>
          <OptionButton
            selected={selected === 'onlyOne'}
            onClick={() => {
              setSelected('onlyOne');
            }}
          >
            선택된 일정만
          </OptionButton>

          <OptionButton
            selected={selected === 'since'}
            onClick={() => {
              setSelected('since');
            }}
          >
            이후 일정
          </OptionButton>
          <OptionButton
            selected={selected === 'all'}
            onClick={() => {
              setSelected('all');
            }}
          >
            모든 일정
          </OptionButton>
        </div>
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
