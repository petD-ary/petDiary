'use client';

import {
  Body,
  Caption,
  Extra,
  Title,
} from '@/constants/Typography/TypographyList';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import birth from '@/assets/images/profile/birth.png';
import born from '@/assets/images/profile/born.png';
import together from '@/assets/images/profile/together.png';
import dog from '@/assets/images/profile/dog/dog1x.webp';
import dogPng from '@/assets/images/profile/dog/dog.png';
import { getPetData } from '@/utils/FetchPetData';
import { PetData } from '@/types/petData';
import {
  calculateElapsedDays,
  calculateRemainingDays,
} from '@/utils/calculateDay';

const Profile = ({ user }: any) => {
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
    <div className='py-6 bg-white rounded-xl drop-shadow-[0_-4px_12px_rgba(0,0,0,0.04)]'>
      {petData?.map((item) => (
        <div key={item.name}>
          <div className='flex flex-col items-center gap-3 mb-4'>
            <div className='rounded-full overflow-hidden w-20 h-20 '>
              <picture>
                <source srcSet={dogPng.src} />
                <Image
                  src={dog}
                  alt='profile'
                  width={80}
                  height={80}
                  priority
                />
              </picture>

              {item.name}
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
              <span className={`${Caption.caption2} text-gray-500`}>생일</span>
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
              <Image src={together} alt='profile' width={44} height={44} />
              <span className={`${Caption.caption2}  text-gray-500`}>
                함께한지
              </span>
              <div className={`${Body.body2}`}>
                {calculateElapsedDays(item.adoptionDate)}일
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
