'use client';
import { Fragment, useEffect, useState } from 'react';

import WeatherCard from './WeatherCard';
import useGeolocation from '@/hooks/util/useGeolocation';
import getWeatherData from './getWeatherData';
import WeatherModal from './WeatherModal';

export interface DataState {
  weather: string;
  icon: string;
  temp: { main: string; max: string; min: string };
}

const Weather = () => {
  const geolocation = useGeolocation();
  const [data, setData] = useState<DataState | null | undefined>(null);

  useEffect(() => {
    (async () => {
      const weatherData = await getWeatherData(geolocation.position);
      setData(weatherData);
    })();
  }, [geolocation]);

  if (data === null) return <WeatherCard isLoading={data === null} />;

  return (
    <Fragment>
      <WeatherCard data={data} />
      <WeatherModal data={data} />
    </Fragment>
  );
};

export default Weather;
