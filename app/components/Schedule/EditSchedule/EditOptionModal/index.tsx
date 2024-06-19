import { ScheduleOption } from '@/apis/schedules';
import Button from '@/components/Button';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import React from 'react';

const EditOptionModal = ({
  handleUpdatedSchedule,
}: {
  handleUpdatedSchedule: (option: ScheduleOption) => Promise<void>;
}) => {
  return (
    <Modal type={MODAL_TYPE.SCHEDULE_EDIT_OPTION} variant={MODAL_VARIANT.CARD}>
      <div className='flex flex-col px-5 py-4'>
        <p className='text-secondary-900 mx-auto text-center pt-10 pb-6'>
          반복되는 일정입니다.
        </p>
        <div
          className={`flex justify-between p-4 gap-3
        [&_li]:w-[calc((100%-12px)/2)]`}
        >
          <Button
            variant='reset'
            onClick={() => handleUpdatedSchedule('onlyOne')}
          >
            이 일정만 적용
          </Button>
          <Button
            variant='outlined'
            className=''
            onClick={() => handleUpdatedSchedule('since')}
          >
            이후 일정에 대해 적용
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditOptionModal;
