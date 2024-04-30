'use client';
import React, { FormEvent } from 'react';
import { useModal } from '@/hooks/useModal';
import setDateObj from './setDateObj';
import { addSchedules } from '@/api/schedule';
import ScheduleForm from '../ScheduleForm';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { scheduleFormState } from '@/recoil/Schedule/atom';
import { convertKST, reverseKST } from '@/utils/calculateDay';

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

    const response = await addSchedules(postData);
    if (response?.status === 201) {
      setSchedule();
      removeModal();
    }
  };

  return <ScheduleForm type='add' handleSubmit={(e) => handleSubmit(e)} />;
};

export default AddScheduleModal;
