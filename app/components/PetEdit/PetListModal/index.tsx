'use client';

import React from 'react';
import dogPng from '@/assets/images/profile/dog/dog.png';
import dog from '@/assets/images/profile/dog/dog1x.webp';
import Image from 'next/image';
import { calculateElapsedDays } from '@/utils/calculateDay';

import {
  Caption,
  Extra,
  SubTitle,
  Title,
} from '@/constants/Typography/TypographyList';
import { PetData } from '@/types/petData';
import Button from '@/components/Button';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { useModal } from '@/hooks/useModal';
const petData = [
  {
    name: '콩이',
    birth: '2020.09.24',
    breed: '믹스견',
  },
  {
    name: '콩이',
    birth: '2020.09.24',
    breed: '믹스견',
  },
];
type PetEditContentProps = {
  petData: PetData[];
};
const PetListModal = () => {
  const { addModal } = useModal();
  return (
    <Modal type={MODAL_TYPE.PETEDITLIST} variant={MODAL_VARIANT.FULLCARD}>
      <Modal.Header title='' titleType='left-X' />
      <div className='flex gap-2 mb-10'>
        <div className={`${Title.title2} text-text-title`}>내 반려동물</div>
        <div className={`text-primary-500 ${Title.title2}`}>
          {petData.length}
        </div>
      </div>
      {petData?.map((item: any) => (
        <div
          key={item.name}
          className='bg-white p-4 rounded flex items-center justify-between'
        >
          <div className='flex gap-3 items-center p-4'>
            <div className='rounded-full overflow-hidden  '>
              <picture>
                <source srcSet={dogPng.src} />
                <Image
                  src={dog}
                  alt='profile'
                  width={48}
                  height={48}
                  priority
                />
              </picture>
            </div>
            <div>
              <span
                className={`px-2 py-1 ${Extra} text-primary-500 bg-primary-50 rounded-md`}
              >
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
      <Button
        className='border-purple-600 mt-3'
        children={'반려동물추가'}
        variant={'outlined'}
        onClick={() => addModal(MODAL_TYPE.PETADD)}
      />
    </Modal>
  );
};

export default PetListModal;
