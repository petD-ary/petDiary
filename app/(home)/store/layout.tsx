import ChangePageBtn from '@/components/ChangePageBtn';
import React from 'react';

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  const StoreList = [
    { path: '/store/shop', title: '구매하기' },
    { path: '/store/sell', title: '판매/나눔 하기' },
  ];

  return (
    <React.Fragment>
      <ChangePageBtn PageList={StoreList} />
      {children}
    </React.Fragment>
  );
};

export default StoreLayout;
