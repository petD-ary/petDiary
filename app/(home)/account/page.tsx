'use client';

import Breadcrumb from '@/components/Account/Breadcrumb';
import UserForm from '@/components/Account/UserForm';

import { useRecoilValue } from 'recoil';
import { stepState } from '@/recoil/Account/atoms';

import { PetInForm } from '@/components/Account/PetInfoForm';
import ComplatedPage from '@/components/Account/ComplatedPage';
import Container from '@/components/Container';

const AccountPage = () => {
  const step = useRecoilValue(stepState);

  return (
    <div className=''>
      <Breadcrumb step={step} />

      {step === 0 && <UserForm />}
      {step === 1 && <PetInForm />}
      {step === 2 && <ComplatedPage />}
    </div>
  );
};

export default AccountPage;
