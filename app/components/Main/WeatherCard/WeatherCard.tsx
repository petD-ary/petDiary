import React from 'react';
import Image from 'next/image';
import { Caption, Title } from '@/constants/Typography/TypographyList';

interface CardType {
  title?: string;
  weather?: string;
  temp?: string;
  addition?: React.ReactNode;
  icon?: string;
  isLoading?: boolean;
}

const WeatherCard: React.FC<CardType> = ({
  title,
  weather,
  addition,
  icon,
  temp,
  isLoading = false,
}) => {
  return (
    <div className='bg-white rounded-xl p-4 cursor-pointer'>
      <div className='flex flex-col justify-between'>
        <div className='text-2xl'>
          <div className={`${Caption.caption2} text-text-primary`}>{title}</div>
          <div
            className={`flex gap-2 text-text-title mt-1 ${Title.title3} ${
              isLoading ? 'w-40 h-[22px] bg-grayColor-100 animate-pulse' : ''
            }`}
          >
            <p>{temp}</p>
            <p>{weather}</p>
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
          {icon ? <Image fill src={icon} alt='오늘의 날씨 아이콘' /> : null}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
