'use client';
import { useRouter } from 'next/navigation';
import AccountCompleted from '@/assets/images/account/account-complated.svg';
import Button from '../Button';
import { SubTitle, Title } from '../../constants/Typography/TypographyList';

const CompletedPage = () => {
  const router = useRouter();

  return (
    <div className='relative'>
      <div className='flex justify-center items-center pt-[138px] pb-[84px]'>
        <AccountCompleted />
      </div>

      <div className='flex flex-col gap-3 items-center py-5 mb-0 md:mb-6'>
        <h2 className={`text-text-title ${Title.title2}`}>
          회원가입이 완료되었습니다
        </h2>
        <p className={`text-text-tertiary ${SubTitle.subTitle3}`}>
          사랑하는 반려동물과의 행복한 나날들 펫 다이어리와 함께 해보아요!
        </p>
      </div>
      <div className='fixed md:static bottom-0 left-1/2 -translate-x-1/2 md:translate-x-0 w-full max-w-3xl px-5 py-3'>
        <Button
          variant='contained'
          onClick={() => router.push('/')}
          textType='button1'
        >
          시작하기
        </Button>
      </div>
    </div>
  );
};

export default CompletedPage;
