'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IconWrapper, TitleWrapper } from './Styled';
import Image from 'next/image';
import backBtn from '@/assets/images/backBtn.png';

const Heading = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <TitleWrapper>
      <IconWrapper onClick={() => router.back()}>
        <Image
          src={backBtn}
          alt='뒤로 가기'
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </IconWrapper>
      <h2>{title}</h2>
    </TitleWrapper>
  );
};

export default Heading;
