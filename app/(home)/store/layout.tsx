'use client';
import ChangePageBtn from '@/components/ChangePageBtn';
import Search from '@/components/Store/Search';
import { searchModalState } from '@/recoil/Store/atoms';
import React from 'react';
import { useRecoilValue } from 'recoil';

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  const isOpen = useRecoilValue(searchModalState);

  const StoreList = [
    { path: '/store/shop', title: '구매하기' },
    { path: '/store/sell', title: '판매/나눔 하기' },
  ];

  return (
    <div className='relative'>
      <ChangePageBtn PageList={StoreList} search store />
      {isOpen && (
        <Search
          searchQuery={[
            { id: 0, query: '뼈다귀 치약' },
            { id: 1, query: '과일맛 츄르' },
            { id: 2, query: '유산균' },
            { id: 3, query: '배변패드' },
          ]}
          products={[
            { id: 0, productId: 0 },
            { id: 1, productId: 3 },
            { id: 2, productId: 9 },
            { id: 3, productId: 12 },
          ]}
        />
      )}
      {children}
    </div>
  );
};

export default StoreLayout;
