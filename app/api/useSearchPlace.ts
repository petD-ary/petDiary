import { useInfiniteQuery } from 'react-query';
import { getSearchPlace } from './map';
import { Coordinates } from '@/hooks/useGeolocation';

interface SearchPlaceProps {
  geolocation: Coordinates | null;
  search: string;
  page?: number;
}

const useSearchPlace = (data: SearchPlaceProps) => {
  return useInfiniteQuery(
    ['searchPlace'],
    ({ pageParam = 1 }) =>
      getSearchPlace(data.geolocation, data.search, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        !lastPage?.meta.is_end ? true : false;
      },
      staleTime: 1,
    },
  );
};

export default useSearchPlace;
