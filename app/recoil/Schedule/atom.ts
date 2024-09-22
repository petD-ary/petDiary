import { atom } from 'recoil';

import { ScheduleState } from '@/components/Schedule/type';
import { setTimes } from '@/utils/scheduleDateFormat';

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
const setTime = setTimes(today);

export const scheduleFormState = atom<ScheduleState>({
  key: 'scheduleFormState',
  default: {
    title: '',
    place: '',
    address: '',
    lat: 0,
    lng: 0,
    alarm: 'none',
    repeat: 'none',
    repeatCount: 0,
    startTime: setTime.startTime,
    endTime: setTime.endTime,
    memo: '',
  },
});
