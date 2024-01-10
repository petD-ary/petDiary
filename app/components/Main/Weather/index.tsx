'use client';
import React, { useEffect, useState } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import axios from 'axios';
import weatherDescKo from './weatherDescKo';

const Weather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState('');
  const [temp, setTemp] = useState('');
  const [icon, setIcon] = useState('');

  const onGeoOk = (position: any) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`;
    axios.get(url).then((response) => {
      const { data } = response;
      const w_id = data.weather[0].id;
      const koWeather = weatherDescKo[w_id];
      const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      setWeather(`${koWeather}`);
      setTemp(`${Math.round(data.main.temp)}℃`);
      setIcon(iconURL);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onGeoOk);
  }, []);

  if (isLoading) return <WeatherCard title='오늘의 날씨' isLoading />;

  return (
    <WeatherCard
      title='오늘의 날씨'
      weather={weather}
      temp={temp}
      icon={icon}
    />
  );
};

export default Weather;
