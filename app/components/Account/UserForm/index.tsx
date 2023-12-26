'use client';
import Input from '@/components/Input';
import AuthButton from '@/components/Input/AuthButton';
import { authObjState, stepState } from '@/recoil/Account/atoms';
import { FormEvent, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import InputButton from '@/components/Input/InputButton';
import ShowInput from '@/components/Input/ShowInput';
import InputCheck from '@/components/Input/InputCheck';

const UserForm = () => {
  const setStep = useSetRecoilState(stepState);

  const [nickname, setNickname] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [checkNickname, setCheckNickname] = useState(false);

  const handleCheckNickname = () => {};

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // setStep((prev) => prev + 1);
  };

  const handleCheckedAvailability = async () => {};

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='w-full pt-6 pb-16'>
      <Input>
        <Input.Label isRequired>닉네임</Input.Label>
        <Input.TextInput
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder='닉네임을 입력해 주세요'
        />
        <Input.Button
          isDisabled={nickname === '' ? true : false}
          variant='outlined'
          onClick={handleCheckNickname}
        >
          중복체크
        </Input.Button>
        <Input.Button
          isDisabled={!checkNickname ? true : false}
          variant='contained'
          type='submit'
        >
          다음
        </Input.Button>
      </Input>
    </form>
  );
};

export default UserForm;
