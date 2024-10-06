'use client';
import { useMemo } from 'react';
import Image from 'next/image';

import { PetData } from '@/types/petData';

import dog from '@/assets/images/profile/dog/dog1x.webp';
import cat from '@/assets/images/profile/cat/cat1x.webp';
import { calculateAge, convertKoreanDateFormat } from '@/utils/calculateDay';
import {
  Caption,
  Extra,
  SubTitle,
} from '@/constants/Typography/TypographyList';
import { useModal } from '@/hooks/view/useModal';
import { MODAL_TYPE } from '@/components/Modal';

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

const PetListCard = ({
  data,
  setSelectedData,
}: {
  data: PetData;
  setSelectedData: (id: number) => void;
}) => {
  const { addModal } = useModal();

  const imageUrl = useMemo(() => {
    const defaultImage = data.petType === '고양이' ? cat : dog;
    return data.imageUrl ? data.imageUrl : defaultImage;
  }, []);

  return (
    <div className='border border-extra-dividers rounded-[4px] p-4 flex justify-between items-center gap-3'>
      <div className='rounded-full overflow-hidden w-12 h-12'>
        <Image
          src={imageUrl}
          alt='profile'
          width={80}
          height={80}
          priority={!data.imageUrl}
        />
      </div>
      <div className='flex-grow'>
        {data.birthday && (
          <p
            className={`px-2 py-[6px] ${Extra} text-primary-500 bg-primary-50 rounded-md inline-block`}
          >
            {convertKoreanDateFormat(data.birthday)}생
          </p>
        )}
        <p className={`${SubTitle.subTitle2} text-text-title truncate`}>
          {data.name}
          <span className='text-text-secondary pl-2'>
            {data.breed}
            {data.birthday && <span> / {calculateAge(data.birthday)}살</span>}
          </span>
        </p>
      </div>
      <EditBtn
        onClick={() => {
          addModal(MODAL_TYPE.PET_EDIT);
          setSelectedData(data.id);
        }}
      />
    </div>
  );
};

export default PetListCard;
