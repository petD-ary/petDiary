'use client';
import React, { useEffect, useState } from 'react';
import Container from '@/components/Container';
import MyPageBtn from '@/components/MyPage/MyPageBtn';

const MyPage = () => {
  const [nickname, setNickname] = useState<string | null>(null);

  useEffect(() => {
    const getNickname = async () => {
      setNickname('닉네임');
    };
    getNickname();
  }, []);
  return (
    <Container className='bg-extra-device-bg h-full px-5 flex flex-col justify-between pt-10 pb-5'>
      <div className='flex justify-between items-center'>
        <div>
          <p className='pb-2 text-title3 font-semibold text-grayColor-800'>
            {nickname} 님
          </p>
          <p className='text-text-secondary text-body2'>환영합니다</p>
        </div>
        <span className='cursor-pointer text-caption1 font-semibold py-[6px] px-3 border border-accent/50 text-accent bg-white rounded-full'>
          로그아웃
        </span>
      </div>

      <div className='flex flex-col items-center gap-3 [&_>_div]:w-full'>
        <MyPageBtn>닉네임 변경</MyPageBtn>
        <MyPageBtn>반려동물 수정</MyPageBtn>
        <MyPageBtn>내가 쓴 글</MyPageBtn>
        <div className='cursor-pointer w-full text-body2 text-text-tertiary px-3 py-4 text-center'>
          회원 탈퇴
        </div>
      </div>
    </Container>
  );
};

export default MyPage;
