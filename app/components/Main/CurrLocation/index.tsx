'use client';
import { useEffect, useState } from 'react';

import useGeolocation from '@/hooks/util/useGeolocation';
import getAddress from './getAddress';
import IconLocation from '@/assets/images/icon-location.svg';
import { Body, Caption } from '@/constants/Typography/TypographyList';

export interface RegionState {
  city: string;
  district: string;
}

const CurrLocation = () => {
  const location = useGeolocation();
  const [region, setRegion] = useState<null | RegionState | undefined>(null);

  useEffect(() => {
    (async () => {
      const address = await getAddress(location.position);

      setRegion(address);
    })();
  }, [location]);

  return (
    <div className='px-4 py-[15px] flex justify-between items-center bg-white rounded-xl'>
      <div
        className={`text-text-primary ${Caption.caption1} inline-flex gap-1 items-center`}
      >
        <IconLocation />
        <span>내 위치</span>
      </div>
      {region === null ? (
        <div className={`w-32 h-[22px] bg-grayColor-100 animate-pulse`} />
      ) : region ? (
        <p
          className={`text-secondary-900 ${Body.body3}`}
        >{`${region?.city} ${region?.district}`}</p>
      ) : (
        <p className={`text-secondary-500 ${Body.body3}`}>
          위치 설정을 해주세요
        </p>
      )}
    </div>
  );
};

export default CurrLocation;
