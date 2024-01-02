import Heading from '@/components/Account/Heading';
import { Fragment, ReactNode, useEffect } from 'react';
import BtnSocialLogin from '@/components/Button/BtnSocialLogin';

import LoginImg from '@/assets/images/login/login-image.svg';
import Google from '@/assets/images/login/Google.svg';
import KaKao from '@/assets/images/login/Kakao.svg';
import Naver from '@/assets/images/login/Naver.svg';

import { googleLogin, kakaoLogin, naverLogin } from '@/utils/SocialLogin';
import SubTitle from '@/components/Typography/SubTitle';
import SocialLoginList from '@/components/Login/Constant';
import Container from '@/components/Container';
import Caption2 from '@/components/Typography/Caption2';

const LoginPage = () => {
  return (
    <Fragment>
      <Heading title='로그인' subTitle='로그인을 진행하고 펫 다이어리를 이용해 보세요' />
      <div className='w-full flex justify-center pt-20'>
        <LoginImg />
      </div>
      <Container className='fixed left-1/2 bottom-0 -translate-x-1/2'>
        <div className='flex flex-col gap-2 py-5'>
          {SocialLoginList.map(({ content, Icon, onClick, className }) => (
            <BtnSocialLogin className={`border ${className}`} onClick={onClick} key={content}>
              <div className='p-2'>{<Icon />}</div>
              <SubTitle className='text-text-primary'>{`${content}로 시작하기`}</SubTitle>
            </BtnSocialLogin>
          ))}
        </div>

        <div className='text-center pt-5 pb-8 md:pb-10'>
          <Caption2 className='text-text-primary leading-[1.4]'>
            로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하여, 서비스 이용을 위해
            이메일과 이름, 성별, 위치를 수집합니다.
          </Caption2>
        </div>
      </Container>
    </Fragment>
  );
};

export default LoginPage;
