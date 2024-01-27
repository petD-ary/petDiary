import React from 'react';
import dogPng from '@/assets/images/profile/dog/dog.png';
import dog from '@/assets/images/profile/dog/dog1x.webp';
import Image from 'next/image';
import { calculateElapsedDays } from '@/utils/calculateDay';
import Button from '../Button';
import { Caption, Extra, SubTitle } from '@/constants/Typography/TypographyList';
const petData = {
  name: '콩이',
  birth: '2020.09.24',
  breed: '믹스견',
};
const PetEditContent = () => {
  return (
    <div className='bg-white p-4 rounded border flex items-center justify-between'>
      <div className='flex gap-3 items-center '>
        <div className='rounded-full overflow-hidden  '>
          <picture>
            <source srcSet={dogPng.src} />
            <Image src={dog} alt='profile' width={48} height={48} priority />
          </picture>
        </div>
        <div>
          <span className={`px-2 py-1 ${Extra} text-primary-500 bg-primary-50 rounded-md`}>
            {petData.birth}
          </span>

          <div className='flex items-center gap-2  mt-[6px]'>
            <div className={`${SubTitle.subTitle2}`}>{petData.name}</div>
            <div className={`${Caption.caption2}`}>
              {petData.breed}/ {calculateElapsedDays(petData.birth)}살
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button className={`${Caption.caption1}`} children={'수정'} variant={'outlined'} />
      </div>
    </div>
  );
};

export default PetEditContent;
