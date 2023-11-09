'use client';
import Input from '@/components/Input';
import AuthButton from '@/components/Input/AuthButton';
import { authObjState, stepState } from '@/recoil/Account/atoms';
import { FormEvent, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authService, dbService } from '@/firebase';
import { DocumentData, collection, getDocs } from 'firebase/firestore';

const UserForm = () => {
  const setStep = useSetRecoilState(stepState);

  const [authObj, setAuthObj] = useRecoilState(authObjState);
  const { userId, email, password, passwordCheck } = authObj;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userIdCheck, setUserIdCheck] = useState<boolean | null>(null);

  const confirm =
    userId === '' ||
    !userIdCheck ||
    email === '' ||
    password === '' ||
    passwordCheck === '' ||
    password.length < 5 ||
    password !== authObj.passwordCheck;

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
      <Input
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
      />
      {userIdCheck ? (
        <p className='pt-5 pl-5 text-grayColor-400'>
          사용 가능한 아이디입니다.
        </p>
      ) : (
        userIdCheck !== null && (
          <p className='pt-5 pl-5 text-grayColor-400'>
            이미 사용 중인 아이디입니다.
          </p>
        )
      )}
      <Input
        label='이메일*'
        type='text'
        value={email}
        setValue={(value) =>
          setAuthObj((authObj) => ({ ...authObj, email: value }))
        }
        placeholder='이메일을 입력해 주세요'
        required
      />
      <Input
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
      <Input
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
