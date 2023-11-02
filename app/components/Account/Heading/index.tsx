'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IconWrapper, TitleWrapper } from './styled';
import Image from 'next/image';
import backBtn from '@/assets/images/backBtn.png';
import { useRecoilState } from 'recoil';
import { stepState } from '@/recoil/atoms';

const Heading = ({ title }: { title: string }) => {
  const router = useRouter();
  const [step, setStep] = useRecoilState(stepState);

  const handleClickRoute = () => {
    if (step > 0 && step <= 2) {
      return setStep((prev) => prev - 1);
    } else if (step === 0) {
      return router.back();
    }
  };

  return (
    <div>
      <TitleWrapper title={title}>
        {title === '회원가입' ? (
          <IconWrapper onClick={() => handleClickRoute()}>
            <Image
              src={backBtn}
              alt='뒤로 가기'
              fill
              sizes='100%'
              style={{ objectFit: 'contain' }}
              priority
            />
          </IconWrapper>
        ) : null}

        <h2>{title}</h2>
      </TitleWrapper>
    </div>
  );
};

export default Heading;
