import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo/pd_logo.png';
import IconBtnWrapper from '../Button/IconBtnWrapper';
import IconX from '@/assets/images/Icon-x.svg';
import IconBell from '@/assets/images/Icon-bell.svg';
import IconLeft from '@/assets/images/icon-left.svg';
import IconSearch from '@/assets/images/icon-search.svg';

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
