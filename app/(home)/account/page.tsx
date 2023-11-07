'use client';

import Breadcrumb from '@/components/Account/Breadcrumb';
import UserForm from '@/components/Account/UserForm';

import { useRecoilValue } from 'recoil';
import Link from 'next/link';
import { stepState } from '@/recoil/atoms';

import { PetInForm } from '@/components/Account/PetInfoForm';
import ComplatedPage from '@/components/Account/ComplatedPage';

const AccountPage = () => {
  const step = useRecoilValue(stepState);

  return (
    <div
      className='w-[488px] mx-auto pb-[150px]
    flex flex-col justify-center items-center'
    >
      <Breadcrumb step={step} />

      {step === 0 && <UserForm />}
      {step === 1 && <PetInForm />}
      {step === 2 && <ComplatedPage />}

      {step === 0 && (
        <p className='text-sm'>
          이미 계정이 있으신가요?
          <Link href='/login' className='pl-[6px] underline font-semibold'>
            로그인
          </Link>
        </p>
      )}
    </div>
  );
};

export default AccountPage;
