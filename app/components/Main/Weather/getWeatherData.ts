import weatherDescKo from '@/components/Main/Weather/weatherDescKo';
import axios from 'axios';
import { DataState } from './index';

const getWeatherData = async (position: any) => {
  let result: null | DataState = null;

  const { latitude, longitude } = position;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`;

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
        main: data.main.temp + '℃',
        max: data.main.temp_max + '℃',
        min: data.main.temp_min + '℃',
      },
    };
    result = geolocationData;
  } catch (e) {
    console.log('🚀 ~ onGeoOk ~ e:', e);
  }

  return result;
};

export default getWeatherData;
