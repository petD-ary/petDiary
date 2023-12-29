'use client';
import Input from '@/components/Input';
import { authObjState, stepState } from '@/recoil/Account/atoms';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Heading from '../Heading';
import axios from '@/libs/axios';
import Button from '@/components/Button';
import getNicknameValidation from './GetNicknameValidation';

const UserForm = () => {
  const setStep = useSetRecoilState(stepState);

  const [nickname, setNickname] = useState('');
  const [error, setError] = useState<string | null>(null);
  // const [success, setSuccess] = useState<string | null>(null);
  const [checkNickname, setCheckNickname] = useState(false);
  const [validNickname, setValidNickname] = useState<any[]>([]);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nicknameCheck = await getNicknameValidation(nickname);
    console.log(
      '🚀 ~ file: index.tsx:38 ~ handleSubmit ~ nicknameCheck:',
      nicknameCheck.data
    );

    if (handleCheckNickname(nickname)) {
      return setError('특수문자 ~!@#$%^&*()_제외');
    } else if (nicknameCheck.data && !nicknameCheck.data.message) {
      setError('이미 등록되어 있는 닉네임 입니다.');
    } else {
      return setStep((prev) => prev + 1);
    }
  };

  return (
    <>
      <Heading title='닉네임 설정' subTitle='닉네임을 입력해 주세요' />

      <form onSubmit={(e) => handleSubmit(e)} className='w-full pt-6 pb-16'>
        <div className='flex flex-col pt-6 pb-3'>
          <Input onChange={handleChange} value={nickname} error={error}>
            <Input.Label isRequired>닉네임</Input.Label>
            <Input.TextInput
              error={error !== null ? true : false}
              placeholder='닉네임을 입력해 주세요'
            />
            <Input.Error>{error}</Input.Error>
            {/* <Input.Success>{success}</Input.Success> */}
          </Input>
        </div>

        <div className='flex flex-col pt-6 pb-3'>
          <Button
            isDisabled={nickname !== '' ? false : true}
            variant='contained'
            type='submit'
          >
            다음
          </Button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
