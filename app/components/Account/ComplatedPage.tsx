'use client';
import { useRouter } from 'next/navigation';
import AccountComplated from '@/assets/images/account/account-complated.svg';
import Title1 from '../Typography/Title1';
import Body2 from '../Typography/Body2';
import Button from '../Button';

const ComplatedPage = () => {
  const router = useRouter();

  return (
    <div>
      <div>
        <AccountComplated />
      </div>
      <div className='flex flex-col gap-3 items -center'>
        <Title1>회원가입이 완료되었습니다</Title1>
        <Body2 className='-tracking-[0.375px]'>
          사랑하는 반려동물과의 행복한 나날들 펫 다이어리와 함께 해보아요!
        </Body2>
      </div>
      <Button variant='contained' onClick={() => router.push('/')}>
        시작하기
      </Button>
    </div>
  );
};

export default ComplatedPage;
