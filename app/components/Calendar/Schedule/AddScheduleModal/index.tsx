'use client';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import Input from '@/components/Input';
import IconLocation from '@/assets/images/schedule/icon_location.svg';
import { useModal } from '@/hooks/useModal';
import ScheduleLocationModal from '../ScheduleLocationModal';
import TimeFormatter from './TimeFormatter';
import { handleformattedDate } from '@/components/Account/PetInfoForm';
import scheduleDateFormat from '@/utils/scheduleDateFormat';
import useToast from '@/hooks/useToast';
import PickCalendar from './PickCalendar';
import SetDateObj from './SetDateObj';

export interface ScheduleState {
  title: string;
  address: string;
  lat: number;
  lng: number;
  alarm: string;
  repeat: 'none' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'yearly';
  repeatCount: number;
  startTime: { date: string; time: { hh: string; mm: string } };
  endTime: { date: string; time: { hh: string; mm: string } };
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
  const { addToast, setToasts } = useToast();
  const [error, setError] = useState(true);
  const today = new Date();
  const setStartTime = scheduleDateFormat(today);
  const endTime = new Date().setMinutes(today.getMinutes() + 30);
  const setEndTime = scheduleDateFormat(new Date(endTime));

  const [schedule, setSchedule] = useState<ScheduleState>({
    title: '',
    address: '',
    lat: 0,
    lng: 0,
    alarm: '',
    repeat: 'none',
    repeatCount: 0,
    startTime: setStartTime,
    endTime: setEndTime,
    memo: '',
  });

  const handleChangeDate = (day: Date, type: 'startTime' | 'endTime') => {
    setSchedule((prev) => ({
      ...prev,
      [type]: { ...prev[type], date: handleformattedDate(day) },
    }));
  };

  useEffect(() => {
    const start = SetDateObj(schedule.startTime);
    const end = SetDateObj(schedule.endTime);
    if (start >= end) {
      setToasts('시간 설정을 다시 확인해주세요');
    }
  }, [schedule.startTime, schedule.endTime]);

  const handleChangeTime = (
    time: string,
    type: 'startTime' | 'endTime',
    variant: 'hh' | 'mm',
  ) => {
    if (variant === 'hh') {
      Number(time) > 23 ? (time = '00') : time;
    }
    if (variant === 'mm') {
      Number(time) > 60 ? (time = '00') : time;
    }

    if (type === 'startTime') {
      const hour = '';
      const minute = '';

      setSchedule((prev) => ({
        ...prev,
        endTime: { ...prev.endTime, time: { hh: hour, mm: minute } },
      }));
    }

    setSchedule((prev) => ({
      ...prev,
      [type]: { ...prev[type], time: { ...prev[type].time, [variant]: time } },
    }));
  };

  const [isSetTimeOpen, setIsSetTimeOpen] = useState({
    start: false,
    end: false,
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

  return (
    <Modal type={MODAL_TYPE.SCHEDULE_ADD} variant={MODAL_VARIANT.ALL}>
      <Modal.Header title='새로운 일정' titleType='left' />

      <ScheduleLocationModal
        schedule={schedule}
        setSchedule={(value) => setSchedule(value)}
      />
      <form
        className='pt-6 pb-10 px-5 flex flex-col gap-8 overflow-y-scroll h-[calc(100%-107px)] scrollbar-none'
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
            className='w-full flex gap-1 justify-between items-center body1 text-text-title py-[15px] pl-3 pr-4 border border-extra-border rounded-lg'
            onClick={() => addModal(MODAL_TYPE.SCHEDULE_LOCATION)}
          >
            <span className='flex gap-1 items-center'>
              <IconLocation />
              {schedule.address === '' ? '일정 위치 검색' : schedule.address}
            </span>
            {schedule.address !== '' && (
              <span className='text-primary-700'>변경</span>
            )}
          </button>
        </Input>

        <Input name={SCHEDULE_TYPE.ALARM}>
          <Input.Label>알림</Input.Label>
        </Input>

        <div>
          <Input.Label>시간 설정</Input.Label>
          <ul>
            <li
              onClick={() =>
                setIsSetTimeOpen((prev) => ({
                  start: !prev.start,
                  end: false,
                }))
              }
              className={`flex justify-between items-center px-3 py-2 border border-extra-border rounded-t-lg  ${isSetTimeOpen.start ? '' : 'border-b-0'}`}
            >
              <span>시작</span>
              <TimeFormatter
                time={schedule.startTime}
                selected={isSetTimeOpen.start}
              />
            </li>
            {isSetTimeOpen.start && (
              <PickCalendar
                type='startTime'
                scheduleTime={schedule.startTime}
                handleChangeDate={handleChangeDate}
                handleChangeTime={handleChangeTime}
              />
            )}
            <li
              onClick={() =>
                setIsSetTimeOpen((prev) => ({
                  start: false,
                  end: !prev.end,
                }))
              }
              className={`flex justify-between items-center px-3 py-2 border border-extra-border rounded-b-lg`}
            >
              <span>종료</span>
              <TimeFormatter
                time={schedule.endTime}
                selected={isSetTimeOpen.end}
              />
            </li>
            {isSetTimeOpen.end && (
              <PickCalendar
                type='endTime'
                scheduleTime={schedule.endTime}
                handleChangeDate={handleChangeDate}
                handleChangeTime={handleChangeTime}
              />
            )}
          </ul>
        </div>

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
