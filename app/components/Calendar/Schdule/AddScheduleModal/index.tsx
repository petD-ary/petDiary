'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { convertKoreanDateFormat } from '@/utils/calculateDay';
import Input from '@/components/Input';
import IconLocation from '@/assets/images/schedule/icon_location.svg';
import { useModal } from '@/hooks/useModal';
import ScheduleLocationModal from '../ScheduleLocationModal';

export interface ScheduleState {
  title: string;
  address: string;
  lat: number;
  lng: number;
  alarm: string;
  repeat: 'none' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'yearly';
  repeatCount: number;
  startTime: string | Date;
  endTime: string | Date;
  memo: string;
}

export const SCHEDULE_TYPE = {
  TITLE: 'title',
  ADDRESS: 'address',
  LAT: 'lat',
  LNG: 'lng',
  ALARM: 'alarm',
  REPEAT: 'repeat',
  REPEAT_COUNT: 'repeatCount',
  START_TIME: 'startTime',
  END_TIME: 'endTime',
  MEMO: 'memo',
};
const AddScheduleModal = () => {
  const { addModal } = useModal();
  const today = new Date();
  const setEndTime = new Date().setMinutes(today.getMinutes() + 30);

  const [schedule, setSchedule] = useState<ScheduleState>({
    title: '',
    address: '',
    lat: 0,
    lng: 0,
    alarm: '',
    repeat: 'none',
    repeatCount: 0,
    startTime: today,
    endTime: new Date(setEndTime),
    memo: '',
  });

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    return setSchedule((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  console.log('🚀 ~ AddScheduleModal ~ schedule:', schedule);
  return (
    <Modal type={MODAL_TYPE.SCHEDULE_ADD} variant={MODAL_VARIANT.ALL}>
      <Modal.Header title='새로운 일정' titleType='left' />

      <ScheduleLocationModal
        schedule={schedule}
        setSchedule={(e) => handleChangeValue(e)}
      />
      <form
        className='pt-6 pb-10 px-5 flex flex-col gap-8'
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input name={SCHEDULE_TYPE.TITLE} isRequired>
          <Input.Label>제목</Input.Label>
          <Input.TextInput
            placeholder='제목을 입력해 주세요'
            value={schedule.title}
            onChange={(e) => handleChangeValue(e)}
          />
        </Input>

        <Input name={SCHEDULE_TYPE.ADDRESS}>
          <Input.Label>위치</Input.Label>
          <button
            type='button'
            className='w-full flex gap-1 items-center body1 text-text-title py-[15px] px-3 border border-extra-border rounded-lg'
            onClick={() => addModal(MODAL_TYPE.SCHEDULE_LOCATION)}
          >
            <IconLocation />
            일정 위치 검색
          </button>
        </Input>

        <Input name={SCHEDULE_TYPE.ALARM}>
          <Input.Label>알림</Input.Label>
        </Input>

        <Input name={SCHEDULE_TYPE.ADDRESS}>
          <Input.Label>시간 설정</Input.Label>
        </Input>

        <Input name={SCHEDULE_TYPE.ADDRESS}>
          <Input.Label>반복 알림</Input.Label>
        </Input>

        <Input name={SCHEDULE_TYPE.ADDRESS}>
          <Input.Label>메모</Input.Label>
        </Input>
      </form>
    </Modal>
  );
};

export default AddScheduleModal;
