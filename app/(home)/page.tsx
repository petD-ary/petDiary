'use client';

import Weather from '@/components/Main/Weather';
import Walk from '@/components/Main/Walk';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { petInfoState } from '@/recoil/Main/atoms';

export default function Home() {
  const [petInfo, setPetInfo] = useRecoilState(petInfoState);
  useEffect(() => {
    setPetInfo({ name: '김콩', born: '1,004', together: '1,004' });
  }, []);

  return <div className='max-w-[1500px] min-w-[300px] mx-auto p-14'></div>;
}
