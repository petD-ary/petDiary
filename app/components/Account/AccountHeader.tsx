'use client';
import { stepState } from '@/recoil/Account/atoms';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import IconBtnWrapper from '../Button/IconBtnWrapper';

import IconX from '@/assets/images/Icon-x.svg';
import IconLeft from '@/assets/images/icon-left.svg';

const AccountHeader = () => {
  const router = useRouter();
  const [step, setStep] = useRecoilState(stepState);

  const handleClickRoute = () => {
    if (step > 0 && step <= 2) {
      return setStep((prev) => prev - 1);
    } else if (step === 0) {
      return router.back();
    }
  };

  if (step === 2) return;
  return (
    <div
      className={`w-full flex ${
        step !== 0 ? 'justify-between' : 'justify-end'
      }`}
    >
      {step !== 0 ? (
        <button type='button' onClick={handleClickRoute} className='p-4'>
          <IconLeft />
        </button>
      ) : null}

      <IconBtnWrapper onClick={() => router.push('/login')}>
        <IconX />
      </IconBtnWrapper>
    </div>
  );
};

export default AccountHeader;
