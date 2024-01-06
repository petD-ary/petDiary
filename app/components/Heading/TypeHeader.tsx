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
  <header className='header justify-end'>
    <IconBtnWrapper onClick={() => {}}>
      <IconX />
    </IconBtnWrapper>
  </header>
);

//Back
export const BackHeader = () => {
  return (
    <header className='header'>
      <IconBtnWrapper onClick={() => {}}>
        <IconLeft />
      </IconBtnWrapper>
    </header>
  );
};

//BackClose
export const BackCloseHeader = () => {
  return (
    <header className='header justify-between'>
      <IconBtnWrapper onClick={() => {}}>
        <IconLeft />
      </IconBtnWrapper>
      <IconBtnWrapper onClick={() => {}}>
        <IconX />
      </IconBtnWrapper>
    </header>
  );
};

//Alert
export const AlertHeader = () => {
  return (
    <header className='header justify-between'>
      <Link href='/' className='px-3'>
        <Image src={logo.src} alt='Pet diary logo' width={75} height={18} />
      </Link>
      <IconBtnWrapper onClick={() => {}}>
        <IconBell />
      </IconBtnWrapper>
    </header>
  );
};

//Interactive
export const InteractiveHeader = () => {
  return (
    <header className='header  justify-between'>
      <Link href='/' className='px-3'>
        <Image src={logo.src} alt='Pet diary logo' width={75} height={18} />
      </Link>
      <div>
        <IconBtnWrapper onClick={() => {}}>
          <IconBell />
        </IconBtnWrapper>
        <IconBtnWrapper onClick={() => {}}>
          <IconSearch />
        </IconBtnWrapper>
      </div>
    </header>
  );
};

//login
export const LogoHeader = () => {
  return (
    <header className='header'>
      <Link href='/' className='px-3'>
        <Image src={logo.src} alt='Pet diary logo' width={75} height={18} />
      </Link>
    </header>
  );
};
