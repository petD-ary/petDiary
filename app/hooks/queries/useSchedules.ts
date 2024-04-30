import { getSchedules } from '@/apis/schedules';
import { querySchedulesKey } from '@/constants/queryKey';
import { useQuery } from 'react-query';

export const useGetSchedules = (from: string, to: string) => {
  return useQuery([querySchedulesKey], () => getSchedules(from, to), {
    staleTime: 0,
    cacheTime: 5 * 60 * 1000, // 5분
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: 1 * 60 * 1000, // 1분
  });
};
