'use client';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { Body } from '@/constants/Typography/TypographyList';
import Input from '@/components/Input';
import IconLocation from '@/assets/images/schedule/icon_location.svg';
import { useModal } from '@/hooks/useModal';
import ScheduleLocationModal from '../ScheduleLocationModal';
import ScheduleAlarmModal from '../ScheduleAlarmModal';
import IconDown from '@/assets/images/icon-down.svg';
import ScheduleRepeatModal from '../ScheduleRepeatModal';
import Button from '@/components/Button';
export interface ScheduleState {
  title: string;
  address: string;
  lat: number;
  lng: number;
  alarm: string;
  repeat: string;
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
    alarm: '반복 안함',
    repeat: '반복 안함',
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

  const handleChangeMemo = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setSchedule((prev) => ({
      ...prev,
      memo: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);

    setSchedule((prev) => ({
      ...prev,
      repeatCount: value,
    }));
  };

  const getBackgroundGradient = () => {
    const progress = (schedule.repeatCount / 50) * 100;
    return `linear-gradient(to right, #9213E0 ${progress}%, #FBF6FE ${progress}%)`;
  };

  return (
    <Modal type={MODAL_TYPE.SCHEDULE_ADD} variant={MODAL_VARIANT.ALL}>
      <Modal.Header title='새로운 일정' titleType='left' />

      <ScheduleLocationModal
        schedule={schedule}
        setSchedule={(e) => handleChangeValue(e)}
      />
      <ScheduleAlarmModal schedule={schedule} setSchedule={setSchedule} />
      <ScheduleRepeatModal schedule={schedule} setSchedule={setSchedule} />

      <form
        className='pt-6 pb-10 flex flex-col gap-8 '
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
          <div
            onClick={() => addModal(MODAL_TYPE.SCHEDULE_ALARM)}
            className='w-full p-4 cursor-pointer rounded-lg border text-text-title border-text-dividers focus:border-text-border transition-colors'
          >
            <p className={`flex justify-between items-center ${Body.body1}`}>
              {schedule.alarm === '' ? '안함' : schedule.alarm}
              <span>
                <IconDown />
              </span>
            </p>
          </div>
        </Input>

        <Input name={SCHEDULE_TYPE.ADDRESS}>
          <Input.Label>시간 설정</Input.Label>
        </Input>

        <Input name={SCHEDULE_TYPE.REPEAT}>
          <Input.Label>반복 알림</Input.Label>
          <div
            onClick={() => addModal(MODAL_TYPE.SCHEDULE_REPEAT)}
            className='w-full p-4 cursor-pointer rounded-lg border text-text-title border-text-dividers focus:border-text-border transition-colors'
          >
            <p className={`flex justify-between items-center ${Body.body1}`}>
              {schedule.repeat === '' ? '반복안함' : schedule.repeat}
              <span>
                <IconDown />
              </span>
            </p>
          </div>
        </Input>
        {schedule.repeat !== '반복 안함' ? (
          <Input name={SCHEDULE_TYPE.REPEAT_COUNT}>
            <div className='flex flex-col items-center'>
              <div className='flex justify-between w-full'>
                <span className='text-caption1'>반복 횟수 설정</span>
                <span className='text-caption1 text-purple-500'>
                  {schedule.repeatCount}회
                </span>
              </div>
              <div className='relative w-full'>
                <input
                  type='range'
                  min='0'
                  max='50'
                  step='1'
                  value={schedule.repeatCount}
                  onChange={handleChangeRange}
                  className='rangeInput '
                  style={{ background: getBackgroundGradient() }}
                />
              </div>
              <div className='flex justify-between w-full text-caption1 text-neutral-500'>
                <span>없음</span>
                <span>25회</span>
                <span>50회</span>
              </div>
            </div>
          </Input>
        ) : (
          ''
        )}
        <Input name={SCHEDULE_TYPE.MEMO}>
          <Input.Label>메모</Input.Label>
          <Input.TextArea
            placeholder='메모를 입력해 주세요'
            value={schedule.memo}
            onChange={handleChangeMemo}
            maxLength={100}
          />
        </Input>
      </form>
      <Button variant='contained' type='submit'>
        추가
      </Button>
    </Modal>
  );
};

export default AddScheduleModal;
