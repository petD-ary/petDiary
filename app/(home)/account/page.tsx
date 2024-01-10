'use client';

import Breadcrumb from '@/components/Account/Breadcrumb';
import UserForm from '@/components/Account/UserForm';

import { useRecoilValue } from 'recoil';
import { stepState } from '@/recoil/Account/atoms';

import { PetInfoForm } from '@/components/Account/PetInfoForm';
import ComplatedPage from '@/components/Account/ComplatedPage';
import { Fragment } from 'react';

const AccountPage = () => {
  const step = useRecoilValue(stepState);

  return (
    <Fragment>
      <Breadcrumb step={step} />

      {step === 0 && <UserForm />}
      {step === 1 && <PetInfoForm />}
      {step === 2 && <ComplatedPage />}
    </Fragment>
  );
};

export default AccountPage;
