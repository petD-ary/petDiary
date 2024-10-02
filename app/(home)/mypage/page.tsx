'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import Container from '@/components/Container';
import MyPageBtn from '@/components/MyPage/MyPageBtn';
import { logout } from '@/apis/users';
import { useModal } from '@/hooks/view/useModal';
import { MODAL_TYPE } from '@/components/Modal';
import NicknameChangeModal from '@/components/MyPage/NicknameChangeModal';
import { useUser } from '@/hooks/queries/useUser';
import WithdrawModal from '@/components/MyPage/WithdrawModal';

const MyPage = () => {
  const router = useRouter();
  const { addModal } = useModal();
  const { data } = useUser();

  const onClick = async () => {
    await logout();
    router.push('/login');
  };

  return (
    <Container className='bg-extra-device-bg h-full px-5 flex flex-col justify-between pt-10 pb-5'>
      {data?.nickname && (
        <NicknameChangeModal initialNickname={data.nickname} />
      )}
      <WithdrawModal />

      <div className='flex justify-between items-center'>
        <div>
          <p className='pb-2 text-title3 font-semibold text-grayColor-800'>
            {data?.nickname} 님
          </p>
          <p className='text-text-secondary text-body2'>환영합니다</p>
        </div>
        <span
          onClick={onClick}
          className='cursor-pointer text-caption1 font-semibold py-[6px] px-3 border border-accent/50 text-accent bg-white rounded-full'
        >
          로그아웃
        </span>
      </div>

      <div className='flex flex-col items-center gap-3 [&_>_div]:w-full'>
        <MyPageBtn onClick={() => addModal(MODAL_TYPE.NICKNAME_CHANGE)}>
          닉네임 변경
        </MyPageBtn>
        <MyPageBtn onClick={() => router.push('pet-info')}>
          반려동물 수정
        </MyPageBtn>
        {/* <MyPageBtn>내가 쓴 글</MyPageBtn> */}
        <div
          onClick={() => addModal(MODAL_TYPE.WITHDRAW)}
          className='cursor-pointer w-full text-body2 text-text-tertiary px-3 py-4 text-center'
        >
          회원 탈퇴
        </div>
      </div>
    </Container>
  );
};

export default MyPage;
