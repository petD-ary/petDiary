import { ScheduleData } from '@/components/Calendar/Schedule/type';
import axios from '@/libs/axios';
import getToken from '@/utils/getToken';

export const addSchedules = async (data: ScheduleData) => {
  const accessToken = getToken('accessToken');

  try {
    const response = await axios.post('/schedules', data, {
      headers: { Authorization: `Bearer ${accessToken?.value}` },
    });
    return response;
  } catch (e) {
    console.log('🚀 ~ addSchedules ~ e:', e);
  }
};
