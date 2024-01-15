'use client';
import { walkingIndex } from '@/utils/WalkingIndex';
import React, { useEffect } from 'react';

import WeatherCard from '../WeatherCard/WeatherCard';
const walkData = {
  state: '좋음',
  img: '',
};
const Walk = () => {
  useEffect(() => {
    const data = walkingIndex();
    console.log(data);
  });
  return <WeatherCard weather={walkData} />;
};

export default Walk;
