import { PlaceListState } from '@/components/Schedule/ScheduleLocationModal';
import { Coordinates } from '@/hooks/useGeolocation';
import { mapAxios } from '@/libs/axios';

export const getSearchPlace = async (
  geolocation: Coordinates | null,
  search: string,
  page: number,
) => {
  const url = `/search/keyword.json?page=${page}&size=15${geolocation ? `&y=${geolocation.lat}` : ''}${geolocation ? `&x=${geolocation.lng}` : ''}`;

  if (search === undefined || search === '') return;

  try {
    const response = await mapAxios.get(url, {
      params: { query: search },
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}`,
      },
    });

    return response.data as PlaceListState;
  } catch (e) {
    console.log('🚀 ~ getSearchPlace ~ e:', e);
  }
};
