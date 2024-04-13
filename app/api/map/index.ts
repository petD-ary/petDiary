import { PlaceListState } from '@/components/Calendar/Schdule/ScheduleLocationModal';
import { Coordinates } from '@/hooks/useGeolocation';
import { mapAxios } from '@/libs/axios';

export const getSearchPlace = async (
  geolocation: Coordinates | null,
  search: string,
  page: number,
) => {
  const url = `/search/keyword.json?page=${page}&size=15${geolocation && `&y=${geolocation.lat}`}${geolocation && `&x=${geolocation.lng}`}`;

  console.log('🚀 ~ url:', url);
  try {
    const    = await mapAxios.get(url, {
      params: { query: search },
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}`,
      },
    });
    console.log('🚀 ~ response:', response);

    return response.data as PlaceListState;
  } catch (e) {
    console.log('🚀 ~ getSearchPlace ~ e:', e);
  }
};
