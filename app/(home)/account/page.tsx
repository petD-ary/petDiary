
'use client';

import Breadcrumb from '@/components/Account/Breadcrumb';
import UserForm from '@/components/Account/UserForm';

import { useRecoilValue } from 'recoil';
import Link from 'next/link';
import { Container } from './styled';
import { stepState } from '@/recoil/atoms';

const AccountPage = () => {
  const step = useRecoilValue(stepState);

  return (
    <Container>
      <Breadcrumb step={step} />

      {step === 0 && <UserForm />}

      <p>
        이미 계정이 있으신가요?<Link href='/login'>로그인</Link>
      </p>
    </Container>
  );
};

export default AccountPage;
