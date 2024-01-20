'use client';
import { walkingIndex } from '@/utils/walkingIndex';
import React, { useEffect } from 'react';

import WeatherCard from '../WeatherCard/WeatherCard';
const walkData = {
  state: '좋음',
  img: '',
};
const Walk = () => {
  useEffect(() => {
    const data = walkingIndex();
    console.log(data, '산책지수');
  });
  return <WeatherCard weather={walkData} />;
};

export default Walk;
