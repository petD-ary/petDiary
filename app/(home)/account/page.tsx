'use client';

import Breadcrumb from '@/components/Account/Breadcrumb';
import UserForm from '@/components/Account/UserForm';

import { useRecoilValue } from 'recoil';
import Link from 'next/link';
import { Container } from './styled';
import { stepState, variantModalState } from '@/recoil/atoms';
import VariantModal from '@/components/Account/VariantModal';

import { PetInForm } from '@/components/Account/PetInfoForm';

const AccountPage = () => {
  const step = useRecoilValue(stepState);
  const isOpen = useRecoilValue(variantModalState);

  return (
    <Container>
      <Breadcrumb step={step} />

      {step === 0 && <UserForm />}
      {/* step === 1 && isOpen && (
        <VariantModal variant='고양이' variantData={variantData} />
      ) */}
      {step === 1 && <PetInForm />}
      <p>
        이미 계정이 있으신가요?<Link href='/login'>로그인</Link>
      </p>
    </Container>
  );
};

export default AccountPage;
