import { ScheduleState } from '@/components/Schedule/type';
import scheduleDateFormat from '@/utils/scheduleDateFormat';
import { atom } from 'recoil';

export const scheduleDataState = atom({
  key: 'scheduleData',
  default: {
    data: [],
    isSuccess: false,
  },
});

export const scheduleListState = atom({
  key: 'scheduleListState',
  default: {
    startDay: new Date(),
    endDay: new Date(),
  },
});

const today = new Date();
const setStartTime = scheduleDateFormat(today);
const endTime = new Date().setMinutes(today.getMinutes() + 30);
const setEndTime = scheduleDateFormat(new Date(endTime));

export const scheduleFormState = atom<ScheduleState>({
  key: 'scheduleFormState',
  default: {
    title: '',
    address: '',
    lat: 0,
    lng: 0,
    alarm: 'none',
    repeat: 'none',
    repeatCount: 0,
    startTime: setStartTime,
    endTime: setEndTime,
    memo: '',
  },
});
