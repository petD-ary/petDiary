'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo/pd_logo.png';
import IconBtnWrapper from '../Button/IconBtnWrapper';
import IconX from '@/assets/images/Icon-x.svg';
import IconBell from '@/assets/images/Icon-bell.svg';
import IconLeft from '@/assets/images/icon-left.svg';
import IconSearch from '@/assets/images/icon-search.svg';
import IconEdit from '@/assets/images/icon-edit.svg';
import { Caption, Title } from '@/constants/Typography/TypographyList';
import { useModal } from '@/hooks/useModal';
import { MODAL_TYPE } from '../Modal';

//Close
export const CloseHeader = () => (
  <div className='header justify-end'>
    <IconBtnWrapper onClick={() => {}}>
      <IconX />
    </IconBtnWrapper>
  </div>
);

//Back
export const BackHeader = () => {
  return (
    <div className='header'>
      <IconBtnWrapper onClick={() => {}}>
        <IconLeft />
      </IconBtnWrapper>
    </div>
  );
};

//BackClose
export const BackCloseHeader = () => {
  return (
    <div className='header justify-between'>
      <IconBtnWrapper onClick={() => {}}>
        <IconLeft />
      </IconBtnWrapper>
      <IconBtnWrapper onClick={() => {}}>
        <IconX />
      </IconBtnWrapper>
    </div>
  );
};

//Alert
export const AlertHeader = () => {
  return (
    <div className='header justify-between'>
      <Link href='/' className='px-3'>
        <Image
          src={logo.src}
          alt='Pet diary logo'
          width={logo.width}
          height={logo.height}
        />
      </Link>
      <IconBtnWrapper onClick={() => {}}>
        <IconBell />
      </IconBtnWrapper>
    </div>
  );
};

//Interactive
export const InteractiveHeader = () => {
  return (
    <div className='header justify-between'>
      <Link href='/' className='px-3'>
        <Image
          src={logo.src}
          alt='Pet diary logo'
          width={logo.width}
          height={logo.height}
        />
      </Link>
      <div>
        <IconBtnWrapper onClick={() => {}}>
          <IconBell />
        </IconBtnWrapper>
        <IconBtnWrapper onClick={() => {}}>
          <IconSearch />
        </IconBtnWrapper>
      </div>
    </div>
  );
};

//login
export const LogoHeader = () => {
  return (
    <div className='header'>
      <Link href='/' className='px-3'>
        <Image
          src={logo.src}
          alt='Pet diary logo'
          width={logo.width}
          height={logo.height}
        />
      </Link>
    </div>
  );
};

//main
export const MainAnimalHeader = (props: { petCount: number }) => {
  const { addModal } = useModal();
  return (
    <div className='flex items-center justify-between py-4'>
      <div className='flex gap-2 '>
        <div className={`${Title.title2} text-text-title`}>내 반려동물</div>
        <div className={`text-primary-500 ${Title.title2}`}>
          {props.petCount}
        </div>
      </div>
      <div
        className={`py-2 pl-2 pr-3 flex items-center gap-2 border border-secondary-100 rounded ${Caption.caption1} text-secondary-500 cursor-pointer`}
        onClick={() => addModal(MODAL_TYPE.PET_EDIT_LIST)}
      >
        <IconEdit />
        수정
      </div>
    </div>
  );
};
