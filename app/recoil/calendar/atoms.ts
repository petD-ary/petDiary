import { atom } from 'recoil';

export const selectedDateState = atom({
  key: 'selectedDateState',
  default: {
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().getMonth(),
    selectedDay: new Date().getDay(),
  },
});
