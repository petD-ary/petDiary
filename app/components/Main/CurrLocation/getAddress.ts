import { Coordinates } from '@/hooks/useGeolocation';
import axios from 'axios';
import { RegionState } from './index';

const getAddress = async (position: Coordinates) => {
  let result: null | RegionState = null;

  const URL = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${position.longitude}&y=${position.latitude}`;

  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: 'KakaoAK ' + process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
      },
    });
    const { data } = response;

    result = {
      city: data.documents[0].address.region_1depth_name,
      district: data.documents[0].address.region_2depth_name,
    };
  } catch (err) {
    console.log(err);
  }
  if (result) return result;
};

export default getAddress;
