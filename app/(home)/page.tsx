'use client';

import Weather from '@/components/Main/Weather';
import Walk from '@/components/Main/Walk';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { petInfoState } from '@/recoil/Main/atoms';
import Heading from '@/components/Heading';
import { MainAnimalHeader } from '@/components/Heading/TypeHeader';

export default function Home() {
  const [petInfo, setPetInfo] = useRecoilState(petInfoState);
  useEffect(() => {
    setPetInfo({ name: '김콩', born: '1,004', together: '1,004' });
  }, []);

  return (
    <div className='max-w-[1500px] min-w-[300px] mx-auto p-14'>
      <MainAnimalHeader />
      {/* main header 
       - animal count
      - edit btn
      */}
      {/* main profile 
       - profile
      - name
      - birth
      - born
      - together
      */}
      {/* location 
       - my location title
      - location name
      */}
      {/* weather & walk state 
      - title
      - walk state? ! icon
      - weather & walk state 
      - icon
      */}
    </div>
  );
}
