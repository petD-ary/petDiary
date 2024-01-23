'use client';
import WeatherCard from './WeatherCard/WeatherCard';
import useGeolocation from '@/hooks/useGeolocation';
import { useEffect, useState } from 'react';
import getWeatherData from './getWeatherData';

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

  return <WeatherCard data={data} />;
};

export default Weather;
