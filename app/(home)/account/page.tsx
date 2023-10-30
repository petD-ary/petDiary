'use client';

import Breadcrumb from '@/components/Account/Breadcrumb';
import UserForm from '@/components/Account/UserForm';

import { useRecoilValue } from 'recoil';
import Link from 'next/link';
import { Container } from './styled';
import { stepState, variantModalState } from '@/recoil/atoms';
import VariantModal from '@/components/Account/VariantModal';

const AccountPage = () => {
  const step = useRecoilValue(stepState);
  const isOpen = useRecoilValue(variantModalState);

  const variantData = [
    { id: '0', title: '노르웨이숲' },
    { id: '1', title: '니벨룽' },
    { id: '2', title: '데본 렉스' },
    { id: '3', title: '도이치 랭하' },
    { id: '4', title: '돈스코이' },
    { id: '5', title: '라이코이' },
    { id: '6', title: '랙돌' },
    { id: '7', title: '러시안 블루' },
    { id: '8', title: '맨덜레이' },
    { id: '9', title: '맹크스' },
    { id: '10', title: '맹크스' },
    { id: '11', title: '맹크스' },
    { id: '12', title: '맹크스' },
    { id: '14', title: '맹크스' },
    { id: '15', title: '맹크스' },
  ];

  return (
    <Container>
      <Breadcrumb step={step} />

      {step === 0 && <UserForm />}
      {step === 1 && isOpen && (
        <VariantModal variant='고양이' variantData={variantData} />
      )}

      <p>
        이미 계정이 있으신가요?<Link href='/login'>로그인</Link>
      </p>
    </Container>
  );
};

export default AccountPage;
