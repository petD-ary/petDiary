import React from 'react';
import ChangePageBtn from '@/components/ChangePageBtn';

const StampLayout = ({ children }: { children: React.ReactNode }) => {
  const StampList = [
    { path: '/stamp/walk', title: '산책' },
    { path: '/stamp/play', title: '놀아주기' },
  ];

  return (
    <React.Fragment>
      <ChangePageBtn PageList={StampList} />
      {children}
    </React.Fragment>
  );
};

export default StampLayout;
