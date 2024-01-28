'use client';

import { HeaderMap } from '@/types/header';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import {
  AlertHeader,
  LogoHeader,
  CloseHeader,
  InteractiveHeader,
  BackHeader,
  BackCloseHeader,
} from './TypeHeader';
import Container from '@/components/Container';

// 헤더 유형별 컴포넌트 정의
const HeaderElement = {
  Close: () => <CloseHeader />,
  Back: () => <BackHeader />,
  Home: () => <LogoHeader />,
  BackClose: () => <BackCloseHeader />,
  Alert: () => <AlertHeader />,
  Interactive: () => <InteractiveHeader />,
  Default: () => <div></div>,
};

// 현재 경로에 따른 헤더 컴포넌트 매핑
const headerMap: HeaderMap = {
  '/반려정보1': HeaderElement.Close,
  '/반려정보2': HeaderElement.Back,
  '/login': HeaderElement.Home,
  '/반려정보3': HeaderElement.BackClose,
  '/': HeaderElement.Alert,
  '/calender': HeaderElement.Interactive,
  '/info': HeaderElement.Interactive,
  '/myPage': HeaderElement.Interactive,
  //  경로 추가
};

const HeadingComponent = () => {
  return (
    <Heading>
      <Heading.Content />
    </Heading>
  );
};

const Heading = ({ children }: { children: ReactNode }) => {
  return <header className='bg-white'>{children}</header>;
};

const Content = () => {
  const pathname = usePathname();
  const HeaderComponent = headerMap[pathname] || HeaderElement.Default; // 경로에 해당하는 헤더 컴포넌트 또는 기본값

  if (pathname.includes('/account')) return null;
  return <HeaderComponent />;
};

Heading.Content = Content;

export default HeadingComponent;
