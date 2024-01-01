'use client';
import React from 'react';
import Container from '@/components/Container';
import ChangePageBtn from '@/components/ChangePageBtn';

const Board = ({ children }: { children: React.ReactNode }) => {
  const boardList = [
    { path: '/board/knowledge', title: '반려지식' },
    { path: '/board/community', title: '커뮤니티' },
  ];

  return (
    <React.Fragment>
      <ChangePageBtn PageList={boardList} />
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default Board;
