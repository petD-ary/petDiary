import React, { FormEvent } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import { scheduleFormState } from '@/recoil/Schedule/atom';
import convertObjToDate from '../AddSchedule/convertObjToDate';
import {
  deleteSchedules,
  ScheduleOption,
  updateSchedules,
} from '@/apis/schedules';
import ScheduleForm from '../ScheduleFormModal';
import { useModal } from '@/hooks/view/useModal';
import EditOptionModal from './EditOptionModal';
import { MODAL_TYPE } from '@/components/Modal';
import DeleteOptionModal from './DeleteOptionModal';

const EditScheduleModal = () => {
  const { removeModal, addModal } = useModal();
  const schedule = useRecoilValue(scheduleFormState);
  const resetSchedule = useResetRecoilState(scheduleFormState);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (schedule.repeat !== 'none') {
      return addModal(MODAL_TYPE.SCHEDULE_EDIT_OPTION);
    }
    const postData = {
      ...schedule,
      repeatCount: schedule.repeatCount === 0 ? 1 : schedule.repeatCount,
      startTime: convertObjToDate(schedule.startTime).toISOString(),
      endTime: convertObjToDate(schedule.endTime).toISOString(),
    };

    await updateSchedules('none', postData).finally(() => {
      resetSchedule();
      removeModal();
    });
  };

  const handleDelete = async (option?: ScheduleOption) => {
    if (schedule.id) {
      await deleteSchedules(option ?? 'none', schedule.id);
      removeModal();
    }
    removeModal();
  };

  const handleUpdatedSchedule = async (options: ScheduleOption) => {
    const postData = {
      ...schedule,
      repeatCount: schedule.repeatCount === 0 ? 1 : schedule.repeatCount,
      startTime: convertObjToDate(schedule.startTime).toISOString(),
      endTime: convertObjToDate(schedule.endTime).toISOString(),
    };

    await updateSchedules(options, postData).finally(() => {
      removeModal();
      resetSchedule();
      removeModal();
    });
  };

  return (
    <>
      <DeleteOptionModal
        handleDeleteSchedule={(option) => handleDelete(option)}
      />
      <EditOptionModal
        handleUpdatedSchedule={(option) => handleUpdatedSchedule(option)}
      />
      <ScheduleForm
        type='update'
        handleSubmit={(e) => handleSubmit(e)}
        handleDelete={() => handleDelete()}
      />
    </>
  );
};

export default EditScheduleModal;
