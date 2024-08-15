import Google from '@/assets/images/login/Google.svg';
import KaKao from '@/assets/images/login/Kakao.svg';
import Naver from '@/assets/images/login/Naver.svg';
import { googleLogin, kakaoLogin, naverLogin } from '@/utils/socialLogin';

const socialLoginList = [
  {
    content: '구글',
    Icon: Google,
    onClick: googleLogin,
    className: 'border-grayColor-100 bg-white',
  },
  {
    content: '카카오',
    Icon: KaKao,
    onClick: kakaoLogin,
    className: 'border-[#E0CC00] bg-[#FAE300]',
  },
  {
    content: '네이버',
    Icon: Naver,
    onClick: naverLogin,
    className: 'border-[#1AAD00] bg-[#1EC800]',
  },
];

export default socialLoginList;
