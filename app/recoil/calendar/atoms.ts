import { TemporarySelectedDateState } from '@/components/Calendar/CalendarModal';
import { atom } from 'recoil';

export const selectedDateState = atom<TemporarySelectedDateState>({
  key: 'selectedDateState',
  default: {
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().getMonth() + 1,
    selectedDay: new Date().getDate(),
  },
});
