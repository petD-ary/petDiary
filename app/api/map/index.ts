import { Coordinates } from '@/hooks/useGeolocation';
import { mapAxios } from '@/libs/axios';

export const getSearchPlace = async (
  geolocation: Coordinates,
  search: string,
  page: number,
) => {
  const url = `/search/keyword.json?page=${page}&size=15&y=${geolocation.lat}&x=${geolocation.lng}`;

  try {
    const response = await mapAxios.get(url, {
      params: { query: search },
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}`,
      },
    });

    return response;
  } catch (e) {
    console.log('🚀 ~ getSearchPlace ~ e:', e);
  }
};
