import React from 'react';
import Image from 'next/image';
import { Caption, Title } from '@/constants/Typography/TypographyList';
import { DataState } from '..';

interface CardType {
  data?: DataState;
  addition?: React.ReactNode;
  isLoading?: boolean;
}

const WeatherCard: React.FC<CardType> = ({
  data,
  addition,
  isLoading = false,
}) => {
  return (
    <div className='bg-white rounded-xl p-4 cursor-pointer'>
      <div className='flex flex-col justify-between'>
        <div className='text-2xl'>
          <div className={`${Caption.caption2} text-text-primary`}>
            오늘의 날씨
          </div>
          <div
            className={`flex gap-2 text-text-title mt-1 ${Title.title3} ${
              isLoading ? 'w-40 h-[22px] bg-grayColor-100 animate-pulse' : ''
            }`}
          >
            <p>{data?.temp.main}</p>
            <p>{data?.weather}</p>
          </div>
        </div>
        {addition}
      </div>
      <div className='w-full flex justify-end'>
        <div
          className={`relative w-11 h-11 bg-grayColor-100 rounded-2xl ${
            isLoading ? 'animate-pulse' : ''
          }`}
        >
          {data?.icon ? (
            <Image fill src={data?.icon} alt='오늘의 날씨 아이콘' />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
