'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Body,
  Caption,
  Extra,
  Title,
} from '@/constants/Typography/TypographyList';
import birth from '@/assets/images/profile/birth.png';
import born from '@/assets/images/profile/born.png';
import together from '@/assets/images/profile/together.png';
import dog from '@/assets/images/profile/dog/dog1x.webp';
import dogPng from '@/assets/images/profile/dog/dog.png';
import cat from '@/assets/images/profile/cat/cat1x.webp';
import catPng from '@/assets/images/profile/cat/cat.png';
import { getPetData } from '@/utils/getPetData';
import { PetData } from '@/types/petData';
import {
  calculateElapsedDays,
  calculateRemainingDays,
} from '@/utils/calculateDay';
import './index.css';
import { MainAnimalHeader } from '@/components/Heading/TypeHeader';

const Profile = ({ user }: any) => {
  const [petData, setPetData] = useState<PetData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log('debugger');
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
    <div>
      <MainAnimalHeader petCount={petData.length} />
      <div className='py-6 overflow-hidden bg-white rounded-xl drop-shadow-[0_-4px_12px_rgba(0,0,0,0.04)]'>
        <Swiper slidesPerView={1}>
          {petData?.map((item) => (
            <SwiperSlide key={item.name}>
              <div>
                <div className='flex flex-col items-center gap-3 mb-4'>
                  <div className='rounded-full overflow-hidden w-20 h-20 '>
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
                        priority
                      />
                    </picture>
                  </div>
                  <div className='flex flex-row items-center gap-2'>
                    <div
                      className={`px-2 py-1 ${Extra} text-primary-500 bg-primary-50`}
                    >
                      {calculateElapsedDays(item.createdAt)}살
                    </div>
                    <div className={`${Title.title3}`}>{item.name}</div>
                  </div>
                </div>
                <div className='max-w-[400px] mx-auto gap-2 flex flex-row justify-center'>
                  <div className='text-center py-2 px-4'>
                    <Image src={birth} alt='profile' width={44} height={44} />
                    <span className={`${Caption.caption2} text-gray-500`}>
                      생일
                    </span>
                    <div className={`${Body.body2}`}>
                      D-{calculateRemainingDays(item.adoptionDate)}
                    </div>
                  </div>
                  <div className='text-center  py-2 px-4'>
                    <Image src={born} alt='profile' width={44} height={44} />
                    <span className={`${Caption.caption2}  text-gray-500`}>
                      태어난지
                    </span>
                    <div className={`${Body.body2}`}>
                      {calculateElapsedDays(item.adoptionDate)}일
                    </div>
                  </div>
                  <div className='text-center  py-2 px-4'>
                    <Image
                      src={together}
                      alt='profile'
                      width={44}
                      height={44}
                    />
                    <span className={`${Caption.caption2}  text-gray-500`}>
                      함께한지
                    </span>
                    <div className={`${Body.body2}`}>
                      {calculateElapsedDays(item.adoptionDate)}일
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Profile;
