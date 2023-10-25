'use client';
import Input from '@/components/Input';
import { FormEvent, useState } from 'react';
import styled from 'styled-components';

const AccountForm = styled.form`
  width: 100%;
  padding: 48px 0 60px;
`;

const UserForm = () => {
  const [userId, setUserId] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [err, setErr] = useState<boolean>(false);

  const correctPassword = (pw: string, pwCheck: string) => {
    if (pw !== pwCheck) {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {};

  return (
    <AccountForm onSubmit={(e) => handleSubmit(e)}>
      <Input
        label='아이디*'
        type='text'
        value={userId}
        setValue={(value: string) => setUserId(value)}
        placeholder='아이디를 입력해 주세요'
        required
        button='중복 확인'
      />
      <Input
        label='이메일*'
        type='text'
        value={email}
        setValue={(value: string) => setEmail(value)}
        placeholder='이메일을 입력해 주세요'
        required
      />
      <Input
        label='비밀번호*'
        type='password'
        value={password}
        setValue={(value: string) => setPassword(value)}
        placeholder='비밀번호를 입력해 주세요'
        required
        desc='6자 이상의 숫자와 특수문자를 포함해주세요 :)'
      />
      <Input
        label='비밀번호 확인*'
        type='password'
        value={passwordCheck}
        setValue={(value: string) => setPasswordCheck(value)}
        placeholder='비밀번호를 한번 더 입력해 주세요'
        required
      />
    </AccountForm>
  );
};

export default UserForm;
