'use client';
import Input from '@/components/Input';
import AuthButton from '@/components/Input/AuthButton';
import { authObjState, stepState } from '@/recoil/Account/atoms';
import { FormEvent, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { dbService } from '@/firebase';
import { DocumentData, collection, getDocs } from 'firebase/firestore';
import InputButton from '@/components/Input/InputButton';
import ShowInput from '@/components/Input/ShowInput';
import InputCheck from '@/components/Input/InputCheck';

const UserForm = () => {
  const setStep = useSetRecoilState(stepState);

  const [authObj, setAuthObj] = useRecoilState(authObjState);
  const { userId, email, password, passwordCheck } = authObj;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userIdCheck, setUserIdCheck] = useState<boolean | null>(null);
  const [emailCheck, setEmailCheck] = useState<boolean | null>(null);

  const confirm =
    userId === '' ||
    !userIdCheck ||
    email === '' ||
    !emailCheck ||
    password === '' ||
    passwordCheck === '' ||
    password.length < 5 ||
    password !== authObj.passwordCheck;

  const handleCheckedEmail = async () => {
    if (email !== '') {
      /* 서버에서 사용자 정보 받아오기 */
      const querySnapshot = await getDocs(collection(dbService, 'userInfo'));

      let userIdList: DocumentData[] = [];
      querySnapshot.forEach((doc) =>
        userIdList.push({ id: doc.id, ...doc.data() })
      );

      /* 서버에서 받아온 사용자 정보로 email 유효성 검사 */
      const result = userIdList.filter((item) => item.email === email);
      setEmailCheck((prev) =>
        result.length === 0 ? true : prev === null ? false : prev
      );
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStep((prev) => prev + 1);
  };

  const handleCheckedAvailability = async () => {
    if (userId !== '') {
      /* 서버에서 사용자 정보 받아오기 */
      const querySnapshot = await getDocs(collection(dbService, 'userInfo'));

      let userIdList: DocumentData[] = [];
      querySnapshot.forEach((doc) =>
        userIdList.push({ id: doc.id, ...doc.data() })
      );

      /* 서버에서 받아온 사용자 정보로 displayname 유효성 검사 */
      const result = userIdList.filter((item) => item.displayname === userId);
      setUserIdCheck(result.length === 0);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='w-full pt-6 pb-16'>
      <InputButton
        label='아이디*'
        type='text'
        value={userId}
        setValue={(value) =>
          setAuthObj((authObj) => ({ ...authObj, userId: value }))
        }
        placeholder='아이디를 입력해 주세요'
        required
        button='중복 확인'
        btnOnClick={() => handleCheckedAvailability()}
        desc={
          userIdCheck
            ? userId !== ''
              ? '사용 가능한 아이디입니다.'
              : '아이디를 입력해주세요.'
            : userIdCheck !== null
            ? '이미 사용 중인 아이디입니다.'
            : null
        }
      />

      <InputButton
        label='이메일*'
        type='text'
        value={email}
        setValue={(value) => {
          setAuthObj((authObj) => ({ ...authObj, email: value }));
        }}
        placeholder='이메일을 입력해 주세요'
        required
        button='중복 확인'
        btnOnClick={() => handleCheckedEmail()}
        desc={
          emailCheck
            ? email !== ''
              ? '사용 가능한 이메일입니다.'
              : '이메일을 입력해주세요.'
            : emailCheck !== null
            ? '이미 가입되어 있는 이메일입니다.'
            : null
        }
      />

      <ShowInput
        label='비밀번호*'
        type={showPassword ? 'text' : 'password'}
        value={password}
        setValue={(value) =>
          setAuthObj((authObj) => ({ ...authObj, password: value }))
        }
        placeholder='비밀번호를 입력해 주세요'
        required
        desc='6자 이상의 숫자와 특수문자를 포함해주세요'
        handleChangeType={() => setShowPassword((prev) => !prev)}
        showPassword={showPassword}
      />

      <InputCheck
        label='비밀번호 확인*'
        type='password'
        value={passwordCheck}
        setValue={(value) =>
          setAuthObj((authObj) => ({ ...authObj, passwordCheck: value }))
        }
        placeholder='비밀번호를 한번 더 입력해 주세요'
        required
        checkbox={passwordCheck === '' ? undefined : password === passwordCheck}
      />
      <AuthButton type='submit' content='다음 단계로' disabled={confirm} />
    </form>
  );
};

export default UserForm;
