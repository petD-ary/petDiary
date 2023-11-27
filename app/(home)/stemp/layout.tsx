import Container from '@/components/Container';
import React from 'react';
import ChangePageBtn from '@/components/ChangePageBtn';

const StempLayout = ({ children }: { children: React.ReactNode }) => {
  const StempList = [
    { path: '/stemp/walk', title: '산책' },
    { path: '/stemp/play', title: '놀아주기' },
  ];

  return (
    <React.Fragment>
      <ChangePageBtn PageList={StempList} />
      {children}
    </React.Fragment>
  );
};

export default StempLayout;
