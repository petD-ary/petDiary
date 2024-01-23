'use client';
import useGeolocation from '@/hooks/useGeolocation';
import { useEffect, useState } from 'react';
import getAddress from './getAddress';
import IconLocation from '@/assets/images/icon-location.svg';
import { Body, Caption } from '@/constants/Typography/TypographyList';

export interface RegionState {
  city: string;
  district: string;
}

const CurrLocation = () => {
  const location = useGeolocation();
  const [region, setRegion] = useState<null | RegionState>();
  console.log('🚀 ~ CurrLocation ~ region:', region);

  useEffect(() => {
    if (location.position) {
      getAddress(location.position).then((address) => {
        setRegion(address);
      });
    }
  }, [location]);
  return (
    <div className='px-4 py-[15px] flex justify-between items-center bg-white rounded-xl'>
      <div
        className={`text-text-primary ${Caption.caption1} inline-flex gap-1 items-center`}
      >
        <IconLocation />
        <span>내 위치</span>
      </div>
      <p
        className={`text-secondary-900 ${Body.body3}`}
      >{`${region?.city} ${region?.district}`}</p>
    </div>
  );
};

export default CurrLocation;
