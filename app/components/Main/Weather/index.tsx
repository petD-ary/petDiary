'use client';
import WeatherCard from './WeatherCard';
import useGeolocation from '@/hooks/useGeolocation';
import { Fragment, useEffect, useState } from 'react';
import getWeatherData from './getWeatherData';
import WeatherModal from './WeatherModal';

export interface DataState {
  weather: string;
  icon: string;
  temp: { main: string; max: string; min: string };
}

const Weather = () => {
  const geolocation = useGeolocation();
  const [data, setData] = useState<DataState | null>(null);

  const conditions = !geolocation.position || !data;

  useEffect(() => {
    if (geolocation.position !== null && geolocation.error === null) {
      getWeatherData(geolocation.position).then((res) =>
        setData(res !== null ? res : null)
      );
    }
  }, [geolocation]);

  if (conditions) return <WeatherCard isLoading={conditions} />;

  return (
    <Fragment>
      <WeatherCard data={data} />
      <WeatherModal data={data} />
    </Fragment>
  );
};

export default Weather;
