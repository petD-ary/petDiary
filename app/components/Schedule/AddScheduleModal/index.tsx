'use client';
import React, { FormEvent } from 'react';
import { useModal } from '@/hooks/view/useModal';
import convertObjToDate from './convertObjToDate';
import { addSchedules } from '@/apis/schedules';
import ScheduleForm from '../ScheduleForm';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { scheduleFormState } from '@/recoil/Schedule/atom';
import { reverseKST } from '@/utils/calculateDay';

const AddScheduleModal = () => {
  const { removeModal } = useModal();
  const schedule = useRecoilValue(scheduleFormState);
  const resetSchedule = useResetRecoilState(scheduleFormState);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const postData = {
      ...schedule,
      repeatCount: schedule.repeatCount === 0 ? 1 : schedule.repeatCount,
      startTime: reverseKST(convertObjToDate(schedule.startTime).toISOString()),
      endTime: reverseKST(convertObjToDate(schedule.endTime).toISOString()),
    };

    await addSchedules(postData).finally(() => {
      resetSchedule();
      removeModal();
    });
  };

  return <ScheduleForm type='add' handleSubmit={(e) => handleSubmit(e)} />;
};

export default AddScheduleModal;
