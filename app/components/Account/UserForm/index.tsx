'use client';
import Input from '@/components/Input';
import { authObjState, stepState } from '@/recoil/Account/atoms';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Heading from '../Heading';
import axios from '@/libs/axios';
import Button from '@/components/Button';

const UserForm = () => {
  const setStep = useSetRecoilState(stepState);

  const [nickname, setNickname] = useState('');
  const [error, setError] = useState<string | null>(null);
  // const [success, setSuccess] = useState<string | null>(null);
  const [checkNickname, setCheckNickname] = useState(false);
  const [validNickname, setValidNickname] = useState<any[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* axios.get('/users').then((result) => {
      setCheckNickname(result.data.length === 0 ? true : false);
      const data = [result.data];
      setValidNickname(data);
    }); */

    if (handleCheckNickname(nickname)) {
      setError('특수문자 ~!@#$%^&*()_제외');
    }
    // else if (validNickname.length > 0) {
    // setError('이미 등록되어 있는 닉네임 입니다');
    // }
    else {
      setError(null);
    }

    /* 다음단계로 */
    if (/* checkNickname && */ error === null) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className='pt-4 flex flex-col'>
        <div></div>
        <Heading title='닉네임 설정' subTitle='닉네임을 입력해 주세요' />
      </div>

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
