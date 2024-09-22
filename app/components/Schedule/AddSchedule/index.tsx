'use client';
import React, { FormEvent } from 'react';
import { QueryObserverResult } from 'react-query';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import { useModal } from '@/hooks/view/useModal';
import convertObjToDate from './convertObjToDate';
import { addSchedules } from '@/apis/schedules';
import ScheduleForm from '../ScheduleFormModal';
import { scheduleFormState } from '@/recoil/Schedule/atom';

const AddScheduleModal = ({
  refetch,
}: {
  refetch: () => Promise<QueryObserverResult<any, any>>;
}) => {
  const { removeModal } = useModal();
  const schedule = useRecoilValue(scheduleFormState);
  const resetSchedule = useResetRecoilState(scheduleFormState);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const postData = {
      ...schedule,
      repeatCount: schedule.repeatCount === 0 ? 1 : schedule.repeatCount,
      startTime: convertObjToDate(schedule.startTime).toISOString(),
      endTime: convertObjToDate(schedule.endTime).toISOString(),
    };

    try {
      await addSchedules(postData);
      resetSchedule();
      refetch();
      removeModal();
    } catch (error) {
      // console.log('🚀 ~ handleSubmit ~ error:', error);
    }
  };

  return <ScheduleForm type='add' handleSubmit={(e) => handleSubmit(e)} />;
};

export default AddScheduleModal;
