'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IconWrapper, TitleWrapper } from './styled';
import Image from 'next/image';
import backBtn from '@/assets/images/backBtn.png';

const Heading = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <TitleWrapper>
      <IconWrapper onClick={() => router.back()}>
        <div>
          <Image
            src={backBtn}
            alt='뒤로 가기'
            fill
            sizes='100%'
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </IconWrapper>
      <h2>{title}</h2>
    </TitleWrapper>
  );
};

export default Heading;
