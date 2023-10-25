'use client';

import styled from 'styled-components';
import Breadcrumb from '@/components/Account/Breadcrumb';
import UserForm from '@/components/Account/UserForm';
import { useState } from 'react';
import Link from 'next/link';

const Container = styled.div`
  width: 488px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px;

  & button[type='submit'] {
    width: 100%;
    background: #000;
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    padding: 20px 0;
    margin-bottom: 64px;
  }

  & p > a {
    padding-left: 6px;
    text-decoration: underline;
    font-weight: 600;
  }
`;

const AccountPage = () => {
  const [step, setStep] = useState(0);

  return (
    <Container>
      <Breadcrumb step={step} />

      {step === 0 && <UserForm />}
      {step === 1 && <UserForm />}

      <button type='submit' onClick={() => setStep((prev) => prev + 1)}>
        {step === 0 ? '다음 단계로' : ''}
        {step === 1 ? '가입하기' : ''}
        {step === 2 ? '시작하기' : ''}
      </button>

      <p>
        이미 계정이 있으신가요?<Link href='/login'>로그인</Link>
      </p>
    </Container>
  );
};

export default AccountPage;
