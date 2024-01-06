import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo/pd_logo.png';
<<<<<<< HEAD

=======
>>>>>>> d63ce1a2f042f71775f7eb66d8c520301dc0f42c
import IconBtnWrapper from '../Button/IconBtnWrapper';
import IconX from '@/assets/images/Icon-x.svg';
import IconBell from '@/assets/images/Icon-bell.svg';
import IconLeft from '@/assets/images/icon-left.svg';
import IconSearch from '@/assets/images/icon-search.svg';

//Close
export const CloseHeader = () => (
<<<<<<< HEAD
  <header className='header justify-end'>
=======
  <div className='header justify-end'>
>>>>>>> d63ce1a2f042f71775f7eb66d8c520301dc0f42c
    <IconBtnWrapper onClick={() => {}}>
      <IconX />
    </IconBtnWrapper>
  </div>
);

//Back
export const BackHeader = () => {
  return (
<<<<<<< HEAD
    <header className='header'>
=======
    <div className='header'>
>>>>>>> d63ce1a2f042f71775f7eb66d8c520301dc0f42c
      <IconBtnWrapper onClick={() => {}}>
        <IconLeft />
      </IconBtnWrapper>
    </div>
  );
};

//BackClose
export const BackCloseHeader = () => {
  return (
<<<<<<< HEAD
    <header className='header justify-between'>
=======
    <div className='header justify-between'>
>>>>>>> d63ce1a2f042f71775f7eb66d8c520301dc0f42c
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
<<<<<<< HEAD
    <header className='header justify-between'>
      <Link href='/' className='px-3'>
        <Image src={logo.src} alt='Pet diary logo' width={75} height={18} />
=======
    <div className='header justify-between'>
      <Link href='/' className='px-3'>
        <Image
          src={logo.src}
          alt='Pet diary logo'
          width={logo.width}
          height={logo.height}
        />
>>>>>>> d63ce1a2f042f71775f7eb66d8c520301dc0f42c
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
<<<<<<< HEAD
    <header className='header  justify-between'>
      <Link href='/' className='px-3'>
        <Image src={logo.src} alt='Pet diary logo' width={75} height={18} />
=======
    <div className='header justify-between'>
      <Link href='/' className='px-3'>
        <Image
          src={logo.src}
          alt='Pet diary logo'
          width={logo.width}
          height={logo.height}
        />
>>>>>>> d63ce1a2f042f71775f7eb66d8c520301dc0f42c
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
<<<<<<< HEAD
    <header className='header'>
      <Link href='/' className='px-3'>
        <Image src={logo.src} alt='Pet diary logo' width={75} height={18} />
=======
    <div className='header'>
      <Link href='/' className='px-3'>
        <Image
          src={logo.src}
          alt='Pet diary logo'
          width={logo.width}
          height={logo.height}
        />
>>>>>>> d63ce1a2f042f71775f7eb66d8c520301dc0f42c
      </Link>
    </div>
  );
};
