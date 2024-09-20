'use client';
import React, { useState } from 'react';

import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { useModal } from '@/hooks/view/useModal';
import Button from '@/components/Button';
import { putNickname } from '@/apis/users';
import { useUser } from '@/hooks/queries/useUser';
import Input from '../Input';

const NicknameChangeModal = ({
  initialNickname,
}: {
  initialNickname: string;
}) => {
  const { removeModal } = useModal();
  const { refetch } = useUser();
  const [nickname, setNickname] = useState(initialNickname);

  const onClick = async () => {
    await putNickname(nickname);
    refetch();
  };

  return (
    <Modal type={MODAL_TYPE.NICKNAME_CHANGE} variant={MODAL_VARIANT.HALF_SLIDE}>
      <Modal.Header title={'닉네임 변경'} titleType='left' />
      <div className='p-4'>
        <Input.TextInput
          value={nickname}
          placeholder='닉네임을 입력해 주세요'
          onChange={(e) => {
            setNickname(() => e.target.value);
          }}
        />
      </div>
      <div className='flex w-full justify-between gap-3 p-4'>
        <Button variant='reset' type='reset' onClick={() => removeModal()}>
          취소
        </Button>
        <Button
          variant='contained'
          type='button'
          isDisabled={initialNickname === nickname}
          onClick={onClick}
        >
          저장
        </Button>
      </div>
    </Modal>
  );
};

export default NicknameChangeModal;
