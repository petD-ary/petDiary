'use client';
import Image from 'next/image';
import AuthButton from '../Input/AuthButton';
import { useRouter } from 'next/navigation';

const ComplatedPage = () => {
  const router = useRouter();

  return (
    <div
      className='w-full flex flex-col justify-center items-center
    pt-[162px] text-center
    '
    >
      <div className='relative w-[200px] h-[200px]'>
        <Image
          src=''
          alt=''
          fill
          sizes='100%'
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      <h3 className='text-[32px] font-semibold pt-12 pb-3'>
        회원가입이 완료되었습니다.
      </h3>
      <p>
        사랑하는 반려동물과의 행복한 나날들
        <br />펫 다이어리와 함께 해보아요!
      </p>

      <AuthButton
        type='button'
        content='시작하기'
        onClick={() => router.push('/login')}
        disabled={false}
      />
    </div>
  );
};

export default ComplatedPage;
