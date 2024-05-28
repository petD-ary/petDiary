import { useModal } from '@/hooks/view/useModal';
import useToast from '@/hooks/view/useToast';
import scheduleDateFormat from '@/utils/scheduleDateFormat';
import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ScheduleData } from './type';
import { handleformattedDate } from '@/components/Account/PetInfoForm';
import convertObjToDate from './AddScheduleModal/convertObjToDate';
import { SCHEDULE_TYPE, alarmList, repeatList } from './constants';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import ScheduleLocationModal from './ScheduleLocationModal';
import ScheduleAlarmModal from './ScheduleAlarmModal';
import ScheduleRepeatModal from './ScheduleRepeatModal';
import Input from '@/components/Input';
import IconDown from '@/assets/images/icon-down.svg';
import IconLocation from '@/assets/images/schedule/icon_location.svg';
import { Body } from '@/constants/Typography/TypographyList';
import TimeFormatter from './AddScheduleModal/TimeFormatter';
import PickCalendar from './AddScheduleModal/PickCalendar';
import Button from '@/components/Button';
import { useRecoilState } from 'recoil';
import { scheduleFormState } from '@/recoil/Schedule/atom';

interface ScheduleFormProps {
  type: 'add' | 'update';
  handleSubmit: (event: FormEvent) => Promise<void>;
  data?: ScheduleData;
}
const ScheduleForm = ({ type, handleSubmit, data }: ScheduleFormProps) => {
  const { addModal } = useModal();
  const { setToasts } = useToast();

  const [schedule, setSchedule] = useRecoilState(scheduleFormState);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (data) {
      const start = scheduleDateFormat(data.startTime);
      const end = scheduleDateFormat(data.endTime);
      setSchedule({ ...data, startTime: start, endTime: end });
    }
  }, []);

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

  useEffect(() => {
    // 일정 시작 시간보다 종료 시간을 이르게 설정할 경우 토스트 팝업
    const start = convertObjToDate(schedule.startTime);
    const end = convertObjToDate(schedule.endTime);
    if (start >= end) {
      setToasts('시간 설정을 다시 확인해주세요');
      setError(true);
    } else {
      setError(false);
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

  const repeatValue = useMemo(() => {
    const value = repeatList.filter(({ key }) => key === schedule.repeat);
    return value[0];
  }, [schedule.repeat]);

  const alarmValue = useMemo(() => {
    const value = alarmList.filter(({ key }) => key === schedule.alarm);
    return value[0];
  }, [schedule.alarm]);

  const handleAutoSetEndTime = useCallback(() => {
    setSchedule((prev) => {
      const startTime = convertObjToDate(prev.startTime);
      const setEndTime = startTime.setMinutes(startTime.getMinutes() + 30);
      const updatedEndTime = new Date(setEndTime);

      return {
        ...prev,
        endTime: {
          date: `${updatedEndTime.getFullYear()}-${updatedEndTime.getMonth() + 1}-${updatedEndTime.getDate()}`,
          time: {
            hh: String(updatedEndTime.getHours()),
            mm: String(updatedEndTime.getMinutes()),
          },
        },
      };
    });
  }, [handleChangeTime]);

  return (
    <Modal type={MODAL_TYPE.SCHEDULE_ADD} variant={MODAL_VARIANT.ALL}>
      <Modal.Header
        title={type === 'add' ? '새로운 일정' : '일정 수정'}
        titleType='left'
      />

      <ScheduleLocationModal />
      <ScheduleAlarmModal />
      <ScheduleRepeatModal />

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
            className='w-full p-4 cursor-pointer rounded-lg border text-text-title border-extra-border focus:border-extra-active transition-colors'
          >
            <p className={`flex justify-between items-center ${Body.body1}`}>
              {alarmValue.content}
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
              onClick={() => {
                setIsSetTimeOpen((prev) => ({
                  start: !prev.start,
                  end: false,
                }));
              }}
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
                handleAutoSetEndTime={handleAutoSetEndTime}
                error={error}
              />
            )}
            <li
              onClick={() => {
                setIsSetTimeOpen((prev) => ({
                  start: false,
                  end: !prev.end,
                }));
              }}
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
                error={error}
              />
            )}
          </ul>
        </div>

        <Input name={SCHEDULE_TYPE.REPEAT}>
          <Input.Label>반복 알림</Input.Label>
          <div
            onClick={() => addModal(MODAL_TYPE.SCHEDULE_REPEAT)}
            className='w-full p-4 cursor-pointer rounded-lg border text-text-title border-extra-border focus:border-extra-active transition-colors'
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
        ) : null}
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
        {type === 'update' && (
          <Button
            type='submit'
            variant='contained'
            isDisabled={schedule.title === ''}
          >
            일정 삭제
          </Button>
        )}
        <Button
          type='submit'
          variant='contained'
          isDisabled={schedule.title === ''}
        >
          {type === 'add' ? '추가' : '수정'}
        </Button>
      </form>
    </Modal>
  );
};

export default ScheduleForm;
