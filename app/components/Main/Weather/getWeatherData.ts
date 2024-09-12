import axios from 'axios';

import weatherDescKo from '@/components/Main/Weather/weatherDescKo';
import { DataState } from './index';
import { Coordinates } from '@/hooks/util/useGeolocation';

const getWeatherData = async (position: Coordinates | null) => {
  if (position === null) return undefined;
  let result: null | DataState = null;

  const { lat, lng } = position;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat ?? 37.541}&lon=${lng ?? 126.986}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    const { data } = response;

    const w_id = data.weather[0].id;
    const koWeather = weatherDescKo[w_id];
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    const geolocationData = {
      weather: koWeather,
      icon: iconURL,
      temp: {
        main: Math.round(data.main.temp) + '°',
        max: Math.round(data.main.temp_max) + '°',
        min: Math.round(data.main.temp_min) + '°',
      },
    };
    result = geolocationData;
  } catch (e) {
    console.log('🚀 ~ onGeoOk ~ e:', e);
  }

  return result;
};

export default getWeatherData;
