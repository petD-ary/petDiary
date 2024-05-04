import { useInfiniteQuery } from 'react-query';
import { getSearchPlace } from '../../apis/map';
import { Coordinates } from '@/hooks/useGeolocation';

interface SearchPlaceProps {
  geolocation: Coordinates | null;
  search: string;
}

const useSearchPlace = (data: SearchPlaceProps) => {
  return useInfiniteQuery(
    ['searchPlace', data.search],
    ({ pageParam = 1 }) =>
      getSearchPlace(data.geolocation, data.search, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return !lastPage?.meta.is_end ? nextPage : false;
      },
    },
  );
};

export default useSearchPlace;
