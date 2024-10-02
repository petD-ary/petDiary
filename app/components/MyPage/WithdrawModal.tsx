'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { useModal } from '@/hooks/view/useModal';
import Button from '@/components/Button';
import { kakaoWithdrawlink } from '@/utils/socialLogin';

const WithdrawModal = () => {
  const { removeModal } = useModal();
  const router = useRouter();

  const onClick = async () => {
    router.push(kakaoWithdrawlink);
  };

  return (
    <Modal type={MODAL_TYPE.WITHDRAW} variant={MODAL_VARIANT.CARD}>
      <p className='text-center pt-10 pb-6'>
        정말 회원탈퇴를 진행하시겠어요?
        <br />
        기록된 정보는 삭제됩니다.
      </p>
      <div className='flex w-full justify-between gap-3 p-4'>
        <Button variant='reset' type='reset' onClick={() => removeModal()}>
          아니요
        </Button>
        <Button variant='outlined' type='button' onClick={onClick}>
          네
        </Button>
      </div>
    </Modal>
  );
};

export default WithdrawModal;
