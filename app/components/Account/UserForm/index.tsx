'use client';
import Input from '@/components/Input';
import AuthButton from '@/components/Input/AuthButton';
import { stepState } from '@/recoil/atoms';
import { FormEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authService } from '@/firebase';

const UserForm = () => {
  const setStep = useSetRecoilState(stepState);

  const [userId, setUserId] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordCheck, setPasswordCheck] = useState<string>('');

  const confirm =
    userId === '' ||
    email === '' ||
    password === '' ||
    passwordCheck === '' ||
    password.length < 5 ||
    password !== passwordCheck;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(authService, email, password)
      .then((userCredential) => {
        const user = userCredential;
        console.log('🚀 ~ file: index.tsx:32 ~ .then ~ user:', user.user);

        updateProfile(user.user, { displayName: userId });

        setStep((prev) => prev + 1);
      })
      .catch((err) => {
        const errCode = err.code;
        const errMsg = err.message;
      });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='w-full pt-6 pb-16'>
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
        type={showPassword ? 'text' : 'password'}
        value={password}
        setValue={(value: string) => setPassword(value)}
        placeholder='비밀번호를 입력해 주세요'
        required
        desc='6자 이상의 숫자와 특수문자를 포함해주세요'
        handleChangeType={() => setShowPassword((prev) => !prev)}
        showPassword={showPassword}
      />
      <Input
        label='비밀번호 확인*'
        type='password'
        value={passwordCheck}
        setValue={(value: string) => setPasswordCheck(value)}
        placeholder='비밀번호를 한번 더 입력해 주세요'
        required
        checkbox={passwordCheck === '' ? undefined : password === passwordCheck}
      />
      <AuthButton type='submit' content='다음 단계로' disabled={confirm} />
    </form>
  );
};

export default UserForm;
