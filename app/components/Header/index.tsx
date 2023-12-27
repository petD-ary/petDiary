'use client';
import { useRouter } from 'next/navigation';
import IconX from '@/assets/images/Icon-x.svg';
import IconLeft from '@/assets/images/icon-left.svg';

import { useRecoilState } from 'recoil';
import { stepState } from '@/recoil/Account/atoms';
import IconBtnWrapper from '../Button/IconBtnWrapper';

interface HeaderProps {
  type: 'logo' | 'two-icon' | 'default' | 'account';
}

const Header = ({ type }: HeaderProps) => {
  return (
    <header className='w-full md:max-w-3xl mx-auto px-2 py-1'>
      {type === 'account' ? <AccountHeader /> : null}
      {type === 'two-icon' ? <div></div> : null}
    </header>
  );
};

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

  return (
    <div className={`flex ${step !== 0 ? 'justify-between' : 'justify-end'}`}>
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

export default Header;
