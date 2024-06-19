import React from 'react';
import { ScheduleOption } from '@/apis/schedules';
import Button from '@/components/Button';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';

const DeleteOptionModal = ({
  handleDeleteSchedule,
}: {
  handleDeleteSchedule: (option: ScheduleOption) => Promise<void>;
}) => {
  return (
    <Modal
      type={MODAL_TYPE.SCHEDULE_DELETE_OPTION}
      variant={MODAL_VARIANT.CARD}
    >
      <div className='flex flex-col px-5 py-4'>
        <p className='text-secondary-900 mx-auto text-center pt-10 pb-6'>
          반복되는 일정입니다. 이 일정을 삭제하시겠습니까?
        </p>
        <div
          className={`flex justify-between p-4 gap-3
        [&_li]:w-[calc((100%-12px)/2)]`}
        >
          <Button
            variant='reset'
            onClick={() => handleDeleteSchedule('onlyOne')}
          >
            이 일정만 삭제
          </Button>
          <Button
            variant='outlined'
            className=''
            onClick={() => handleDeleteSchedule('since')}
          >
            이후 모든 일정 삭제
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteOptionModal;
