'use client';
import React, { ChangeEvent, useState } from 'react';

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
  const [error, setError] = useState<string | null>(null);

  const onClick = () => {
    removeModal();
    setError(null);
    setNickname(initialNickname);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setNickname(e.target.value);
  };

  const handleCheckNickname = (str: string) => {
    let checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;

    if (checkSpc.test(str)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async () => {
    if (handleCheckNickname(nickname)) {
      return setError('특수문자 ~!@#$%^&*()_제외');
    } else {
      const nicknameCheck = await putNickname(nickname);

      if (nicknameCheck.message) {
        return setError('이미 등록되어 있는 닉네임 입니다.');
      } else {
        refetch();
      }
    }
  };

  return (
    <Modal
      type={MODAL_TYPE.NICKNAME_CHANGE}
      variant={MODAL_VARIANT.HALF_SLIDE}
      onClick={onClick}
    >
      <Modal.Header title={'닉네임 변경'} titleType='left' onClick={onClick} />
      <div className='p-4'>
        <Input.TextInput
          value={nickname}
          placeholder='닉네임을 입력해 주세요'
          onChange={handleChange}
        />
        <Input.Error>{error}</Input.Error>
      </div>
      <div className='flex w-full justify-between gap-3 p-4'>
        <Button variant='reset' type='reset' onClick={onClick}>
          취소
        </Button>
        <Button
          variant='contained'
          type='button'
          isDisabled={initialNickname === nickname}
          onClick={handleSubmit}
        >
          저장
        </Button>
      </div>
    </Modal>
  );
};

export default NicknameChangeModal;
