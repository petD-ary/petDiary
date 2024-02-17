'use client';

import { PetData } from '@/types/petData';
import Image from 'next/image';
import dog from '@/assets/images/profile/dog/dog1x.webp';
import dogPng from '@/assets/images/profile/dog/dog.png';
import {
  calculateAge,
  calculateElapsedDays,
  convertKoreanDateFormat,
} from '@/utils/calculateDay';
import {
  Caption,
  Extra,
  SubTitle,
} from '@/constants/Typography/TypographyList';

const EditBtn = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-[6px] border border-secondary-100 bg-secondary-50 text-secondary-500 ${Caption.caption1}`}
    >
      수정
    </button>
  );
};

const PetEditCard = ({ data }: { data: PetData }) => {
  return (
    <div className='border border-extra-dividers rounded-[4px] p-4 flex justify-between items-center gap-3'>
      <div className='rounded-full overflow-hidden w-12 h-12'>
        <picture>
          <source srcSet={dogPng.src} />
          <Image src={dog} alt='profile' width={80} height={80} priority />
        </picture>
      </div>
      <div className='flex-grow'>
        <p
          className={`px-2 py-[6px] ${Extra} text-primary-500 bg-primary-50 rounded-md inline-block`}
        >
          {convertKoreanDateFormat(data.birthday)}생
        </p>
        <p className={`${SubTitle.subTitle2} text-text-title truncate`}>
          {data.name}
          <span className='text-text-secondary pl-2'>
            {data.breed} / {calculateAge(data.birthday)}살
          </span>
        </p>
      </div>
      <EditBtn />
    </div>
  );
};

export default PetEditCard;
