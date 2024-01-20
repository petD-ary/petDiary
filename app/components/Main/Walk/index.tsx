'use client';
import { getAirQuality, getAirQualityImage } from '@/utils/getAirQuality';
import { walkingIndex } from '@/utils/walkingIndex';
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

  const fetchData = async (sido: string, area: string) => {
    try {
      const data = await walkingIndex(sido);
      const areaData = data.find((d: { cityName: string }) => d.cityName === area);

      if (areaData) {
        const pm10Value = +areaData.pm10Value || 0;
        const pm25Value = +areaData.pm25Value || 0;

        const stateResult = getAirQuality(pm10Value, pm25Value);
        const stateImgResult = getAirQualityImage(stateResult);

        setState({ state: stateResult, img: stateImgResult });
      }
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
