import Heading from '@/components/Account/Heading';
import { Fragment } from 'react';
import BtnSocialLogin from '@/components/Button/BtnSocialLogin';

import LoginImg from '@/assets/images/login/login-image.svg';

import SocialLoginList from '@/components/Login/Constant';
import Container from '@/components/Container';
import { Btn, Caption } from '@/components/Typography/TypographyList';

const LoginPage = () => {
  return (
    <Fragment>
      <div className='flex flex-col'>
        <Heading
          title='로그인'
          subTitle='로그인을 진행하고 펫 다이어리를 이용해 보세요'
        />
        <div className='flex-grow w-full h-full flex justify-center items-center mb-[306px]'>
          <LoginImg />
        </div>
      </div>
      <Container className='fixed left-1/2 bottom-0 -translate-x-1/2'>
        <div className='flex flex-col gap-2 py-5'>
          {SocialLoginList.map(({ content, Icon, onClick, className }) => (
            <BtnSocialLogin
              className={`border ${className}`}
              onClick={onClick}
              key={content}
            >
              <div
                className={`p-2 ${
                  content === '구글'
                    ? 'm-2 pl-[2px] pt-[3px] pr-[3px] pb-[2px]'
                    : ''
                }`}
              >
                {<Icon />}
              </div>
              <p
                className={`text-text-primary ${Btn.button1}`}
              >{`${content}로 시작하기`}</p>
            </BtnSocialLogin>
          ))}
        </div>

        <div className='text-center pt-5 pb-8 md:pb-10'>
          <p className={`text-text-primary ${Caption.caption2}`}>
            로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을
            의미하여, 서비스 이용을 위해 이메일과 이름, 성별, 위치를 수집합니다.
          </p>
        </div>
      </Container>
    </Fragment>
  );
};

export default LoginPage;
