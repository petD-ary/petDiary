import { atom } from 'recoil';

export const scheduleDataState = atom({
  key: 'scheduleData',
  default: {
    data: [],
    isSuccess: false,
  },
});
