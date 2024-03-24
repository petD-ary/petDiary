import { getSchedules } from '@/apis/schedules';
import { querySchedulesKey } from '@/constants/queryKey';
import { useQuery } from 'react-query';

export const useGetSchedules = (from: string, to: string) => {
  return useQuery([querySchedulesKey], () => getSchedules(from, to), {
    staleTime: 1,
  });
};
