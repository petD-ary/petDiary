import React from 'react';
import Image from 'next/image';
import IconArrowRight from '@/assets/images/icon-arrow-right.svg';
import { Caption, Title } from '@/constants/Typography/TypographyList';
import { DataState } from '.';
import { useModal } from '@/hooks/view/useModal';
import { MODAL_TYPE } from '@/components/Modal';

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
  const { addModal } = useModal();

  return (
    <div className='bg-white rounded-xl p-4'>
      <div className='flex flex-col justify-between pb-2'>
        <div className='text-2xl'>
          <div
            className={`${Caption.caption2} text-text-primary flex justify-between`}
          >
            <div>오늘의 날씨</div>
            <div
              className='w-5 h-5 flex justify-center items-center cursor-pointer'
              onClick={() => addModal(MODAL_TYPE.WEATHER)}
            >
              <IconArrowRight />
            </div>
          </div>
          <div
            className={`flex gap-2 text-text-title mt-1 ${Title.title3} ${
              isLoading
                ? 'max-w-40 w-full h-[22px] bg-grayColor-100 animate-pulse'
                : ''
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
            <Image
              fill
              src={data?.icon}
              sizes='100%'
              alt='오늘의 날씨 아이콘'
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
