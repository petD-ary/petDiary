import React from 'react';
import dogPng from '@/assets/images/profile/dog/dog.png';
import dog from '@/assets/images/profile/dog/dog1x.webp';
import Image from 'next/image';
import { calculateElapsedDays } from '@/utils/calculateDay';
import Button from '../Button';
import { Caption, Extra, SubTitle } from '@/constants/Typography/TypographyList';
import { PetData } from '../Main/Profile/PetEditModal';
type PetEditContentProps = {
  petData: PetData[];
};
const PetEditContent = ({ petData }: PetEditContentProps) => {
  return (
    <>
      {petData?.map((item: any) => (
        <div key={item.name} className='bg-white p-4 rounded border flex items-center justify-between'>
          <div className='flex gap-3 items-center '>
            <div className='rounded-full overflow-hidden  '>
              <picture>
                <source srcSet={dogPng.src} />
                <Image src={dog} alt='profile' width={48} height={48} priority />
              </picture>
            </div>
            <div>
              <span className={`px-2 py-1 ${Extra} text-primary-500 bg-primary-50 rounded-md`}>
                {item.birth}
              </span>

              <div className='flex items-center gap-2  mt-[6px]'>
                <div className={`${SubTitle.subTitle2}`}>{item.name}</div>
                <div className={`${Caption.caption2}`}>
                  {item.breed}/ {calculateElapsedDays(item.birth)}살
                </div>
              </div>
            </div>
          </div>

          <span>
            <Button
              className={`${Caption.caption1} py-[6px] px-3 rounded-full `}
              children={'수정'}
              variant={'blueContained'}
            />
          </span>
        </div>
      ))}
    </>
  );
};

export default PetEditContent;
