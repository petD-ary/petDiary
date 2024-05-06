import { useContext } from 'react';
import { CalendarContext } from '@/components/Calendar/CalendarPicker';

const useCalendarContext = () => {
  const context = useContext(CalendarContext);

  if (context === undefined) {
    throw new Error('<Input /> 태그 안에서 사용해주세요.');
  }
  return context;
};

export default useCalendarContext;
