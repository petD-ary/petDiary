'use client';
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from 'react';
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
import { ScheduleState } from '../../Schdule/type';
import { SCHEDULE_TYPE, repeatList } from '../../Schdule/constants';
import ScheduleAlarmModal from '../ScheduleAlarmModal';
import ScheduleRepeatModal from '../ScheduleRepeatModal';
import IconDown from '@/assets/images/icon-down.svg';
import { Body } from '@/constants/Typography/TypographyList';
import Button from '@/components/Button';

const AddScheduleModal = () => {
  const { addModal } = useModal();
  const { setToasts } = useToast();

  const today = new Date();
  const setStartTime = scheduleDateFormat(today);
  const endTime = new Date().setMinutes(today.getMinutes() + 30);
  const setEndTime = scheduleDateFormat(new Date(endTime));

  const [error, setError] = useState(false);

  const [schedule, setSchedule] = useState<ScheduleState>({
    title: '',
    address: '',
    lat: 0,
    lng: 0,
    alarm: '반복 안함',
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

  console.log('🚀 ~ AddScheduleModal ~ schedule:', schedule);
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

  const handleChangeValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    return setSchedule((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const repeatValue = useMemo(() => {
    const value = repeatList.filter(({ key }) => key === schedule.repeat);
    return value[0];
  }, [schedule.repeat]);

  return (
    <Modal type={MODAL_TYPE.SCHEDULE_ADD} variant={MODAL_VARIANT.ALL}>
      <Modal.Header title='새로운 일정' titleType='left' />

      <ScheduleLocationModal
        schedule={schedule}
        setSchedule={(value) => setSchedule(value)}
      />
      <ScheduleAlarmModal schedule={schedule} setSchedule={setSchedule} />
      <ScheduleRepeatModal schedule={schedule} setSchedule={setSchedule} />

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

        <Input name={SCHEDULE_TYPE.REPEAT}>
          <Input.Label>반복 알림</Input.Label>
          <div
            onClick={() => addModal(MODAL_TYPE.SCHEDULE_REPEAT)}
            className='w-full p-4 cursor-pointer rounded-lg border text-text-title border-text-dividers focus:border-text-border transition-colors'
          >
            <p className={`flex justify-between items-center ${Body.body1}`}>
              {repeatValue.content}
              <span>
                <IconDown />
              </span>
            </p>
          </div>
        </Input>
        {schedule.repeat !== 'none' ? (
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
            onChange={(e) => handleChangeValue(e)}
            maxLength={100}
            className='h-[150px]'
          />
        </Input>
        <Button
          type='submit'
          variant='contained'
          isDisabled={schedule.title === ''}
        >
          추가
        </Button>
      </form>
    </Modal>
  );
};

export default AddScheduleModal;
