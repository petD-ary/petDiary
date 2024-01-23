'use client';
import { processDustSetData } from '@/utils/getAirQuality';
import { walkingIndex } from '@/api/walkingIndex';
import React, { useEffect, useState } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';

const Walk = () => {
  const [state, setState] = useState({
    state: '좋음',
    img: '',
  });
  const [location, setLocation] = useState({
    sidoName: '서울',
    area: '강남구',
  });

  const fetchAreaData = async (sido: string, area: string) => {
    const data = await walkingIndex(sido);
    return data.find((d: { cityName: string }) => d.cityName === area);
  };

  // 기존 fetchData 함수에서 두 함수를 사용
  const fetchData = async (sido: string, area: string) => {
    try {
      const areaData = await fetchAreaData(sido, area);
      processDustSetData(areaData, setState);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const { sidoName, area } = location;
    fetchData(sidoName, area);
  }, []);

  return <WeatherCard weather={state} />;
};

export default Walk;
