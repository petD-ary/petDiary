'use client';
import React, { FormEvent } from 'react';
import { useModal } from '@/hooks/useModal';
import setDateObj from './setDateObj';
import { addSchedules } from '@/apis/schedules';
import ScheduleForm from '../ScheduleForm';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { scheduleFormState } from '@/recoil/Schedule/atom';
import { reverseKST } from '@/utils/calculateDay';

const AddScheduleModal = () => {
  const { removeModal } = useModal();
  const schedule = useRecoilValue(scheduleFormState);
  const setSchedule = useResetRecoilState(scheduleFormState);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const postData = {
      ...schedule,
      repeatCount: schedule.repeatCount === 0 ? 1 : schedule.repeatCount,
      startTime: reverseKST(setDateObj(schedule.startTime).toISOString()),
      endTime: reverseKST(setDateObj(schedule.endTime).toISOString()),
    };

    await addSchedules(postData).finally(() => {
      setSchedule();
      removeModal();
    });
  };

  return <ScheduleForm type='add' handleSubmit={(e) => handleSubmit(e)} />;
};

export default AddScheduleModal;
