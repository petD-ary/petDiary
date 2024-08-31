import Google from '@/assets/images/login/Google.svg';
import KaKao from '@/assets/images/login/Kakao.svg';
import Naver from '@/assets/images/login/Naver.svg';
import { googlelink, kakaolink, naverlink } from '@/utils/socialLogin';

export type ProviderType = 'google' | 'kakao' | 'naver';
export interface SocialLoginList {
  content: string;
  Icon: any;
  className: string;
  href: string;
}

const socialLoginList: SocialLoginList[] = [
  {
    content: '구글',
    Icon: Google,
    className: 'border-grayColor-100 bg-white',
    href: googlelink,
  },
  {
    content: '카카오',
    Icon: KaKao,
    className: 'border-[#E0CC00] bg-[#FAE300]',
    href: kakaolink,
  },
  {
    content: '네이버',
    Icon: Naver,
    className: 'border-[#1AAD00] bg-[#1EC800]',
    href: naverlink,
  },
];

export default socialLoginList;
