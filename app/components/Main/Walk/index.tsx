import React from 'react';
import Temperatures from '../Weather/Temperatures';
import WeatherCard from '../WeatherCard/WeatherCard';
const walkData = {
  state: '좋음',
  img: '',
};
const Walk = () => {
  return <WeatherCard weather={walkData} />;
};

export default Walk;
