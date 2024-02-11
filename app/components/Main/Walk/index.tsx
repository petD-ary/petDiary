'use client';
import { walkingIndex } from '@/api/walkingIndex';
import useGeolocation from '@/hooks/useGeolocation';
import { getAirQuality, getAirQualityImage } from '@/utils/getAirQuality';

import React, { useEffect, useState } from 'react';
import getAddress from '../CurrLocation/getAddress';
import WalkingIndex from './ WalkingIndex';

const Walk = () => {
  const location = useGeolocation();
  const [state, setState] = useState({
    state: '좋음',
    img: '',
  });

  const fetchData = async (sido?: string, area?: string) => {
    try {
      if (sido && area) {
        const data = await walkingIndex(sido);
        const areaData = data.find(
          (d: { cityName: string }) => d.cityName === area,
        );
        if (areaData) {
          const pm10Value = +areaData.pm10Value || 0;
          const pm25Value = +areaData.pm25Value || 0;

          const stateResult = getAirQuality(pm10Value, pm25Value);
          const stateImgResult = getAirQualityImage(stateResult);
          console.log(stateResult, stateImgResult);
          setState({ state: stateResult, img: stateImgResult });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (location.position) {
      getAddress(location.position).then((address) => {
        fetchData(address?.city, address?.district);
      });
    }
  }, [location.position]);

  return <WalkingIndex weather={state} />;
};

export default Walk;
