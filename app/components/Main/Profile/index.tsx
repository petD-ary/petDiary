'use client';

import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Extra, Title } from '@/constants/Typography/TypographyList';
import dog from '@/assets/images/profile/dog/dog1x.webp';
import dogPng from '@/assets/images/profile/dog/dog.png';
import cat from '@/assets/images/profile/cat/cat1x.webp';
import catPng from '@/assets/images/profile/cat/cat.png';
import { getPetData } from '@/utils/getPetData';
import { PetData } from '@/types/petData';
import { calculateAge } from '@/utils/calculateDay';
import './index.css';
import { MainAnimalHeader } from '@/components/Heading/TypeHeader';
import DDayIcon from './DDayIcon';

const Profile = () => {
  const [petData, setPetData] = useState<PetData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const petData = await getPetData();
        setPetData(petData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <MainAnimalHeader petCount={petData?.length} />
      <div className='py-6 overflow-hidden bg-white rounded-xl drop-shadow-[0_-4px_12px_rgba(0,0,0,0.04)]'>
        <Swiper
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
        >
          {petData?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className='flex flex-col items-center gap-3 mb-4'>
                  <div className='rounded-full overflow-hidden w-20 h-20 shadow-level1'>
                    {item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt='profile'
                        width={80}
                        height={80}
                        priority
                      />
                    ) : (
                      <picture>
                        <source
                          srcSet={
                            item.petType === '고양이' ? catPng.src : dogPng.src
                          }
                        />
                        <Image
                          src={item.petType === '고양이' ? cat : dog}
                          alt='profile'
                          width={80}
                          height={80}
                          className='object-cover'
                          priority
                        />
                      </picture>
                    )}
                  </div>
                  <div className='flex flex-row items-center gap-2'>
                    {item.birthday && (
                      <div
                        className={`px-2 py-1 ${Extra} text-primary-500 bg-primary-50`}
                      >
                        {calculateAge(item.birthday)}살
                      </div>
                    )}
                    <div className={`${Title.title3}`}>{item.name}</div>
                  </div>
                </div>
                <div className='max-w-[400px] mx-auto gap-2 flex flex-row justify-center'>
                  {item.birthday && (
                    <>
                      <DDayIcon type='born' dDay={item.birthday} />
                      <DDayIcon type='birth' dDay={item.birthday} />
                    </>
                  )}
                  <DDayIcon type='together' dDay={item.adoptionDate} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {!petData?.length && <Skeleton />}
      </div>
    </Fragment>
  );
};

const Skeleton = () => (
  <div className='flex flex-col items-center gap-3 mb-4'>
    <div className='w-20 h-20 bg-grayColor-100 rounded-full animate-pulse' />
    <div className='w-[60%] h-[22px] bg-grayColor-100 animate-pulse' />
    <div className='w-full gap-2 flex justify-center'>
      {Array.from(Array(3), (_, key) => (
        <div
          key={key}
          className='w-11 h-[84px] my-2 mx-4 flex flex-col items-center [&_div]:animate-pulse [&_div]:bg-grayColor-100'
        >
          <div className='h-11 rounded-2xl w-full'></div>
          <div className='h-[14px] w-2/3 mt-2 mb-1'></div>
          <div className='h-4 w-full'></div>
        </div>
      ))}
    </div>
    <div className='w-8 h-2 m-1 bg-grayColor-100 animate-pulse' />
  </div>
);

export default Profile;
