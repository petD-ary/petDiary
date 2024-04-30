import { ScheduleData } from '@/components/Calendar/Schedule/type';
import axios from '@/libs/axios';

export const addSchedules = async (data: ScheduleData) => {
  try {
    const response = await axios.post('/schedules', data);
    return response;
  } catch (e) {
    console.log('🚀 ~ addSchedules ~ e:', e);
  }
};
