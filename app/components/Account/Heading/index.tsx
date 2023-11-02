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
    <div
      className={`
      h-[100px] w-full px-12 relative
      ${title === '회원가입' ? 'border-b border-b-grayColor-100' : ''}
      `}
    >
      {title === '회원가입' ? (
        <div
          onClick={() => handleClickRoute()}
          className='w-[28px] h-[28px] absolute [&_img]:p-[6px] left-[48px] bottom-5'
        >
          <Image
            src={backBtn}
            alt='뒤로 가기'
            fill
            sizes='100%'
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      ) : null}

      <h2 className='text-[20px] font-bold absolute bottom-5 left-1/2 -translate-x-1/2'>
        {title}
      </h2>
    </div>
  );
};

export default Heading;
