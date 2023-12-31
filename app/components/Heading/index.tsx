"use client";

import { HeaderMap } from "@/types/header";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import {
  AlertHeader,
  LogoHeader,
  CloseHeader,
  InteractiveHeader,
  BackHeader,
  BackCloseHeader,
} from "./TypeHeader";

// 헤더 유형별 컴포넌트 정의
const HeaderElement = {
  Close: () => <CloseHeader />,
  Back: () => <BackHeader />,
  Home: () => <LogoHeader />,
  BackClose: () => <BackCloseHeader />,
  Alert: () => <InteractiveHeader />,
  Interactive: () => <InteractiveHeader />,
  Default: () => <div>default</div>,
};

// 현재 경로에 따른 헤더 컴포넌트 매핑
const headerMap: HeaderMap = {
  "/account": HeaderElement.Close,
  "/calender": HeaderElement.Back,
  "/login": HeaderElement.Home,
  "/4": HeaderElement.BackClose,
  "/": HeaderElement.Alert,
  "/5": HeaderElement.Interactive,
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
  return (
    // <header className="w-full md:max-w-3xl h-14 mx-auto px-2 py-1 flex items-center">{children}</header>
    <header>{children}</header>
  );
};

const Content = () => {
  const pathname = usePathname();
  const HeaderComponent = headerMap[pathname] || HeaderElement.Default; // 경로에 해당하는 헤더 컴포넌트 또는 기본값
  return <HeaderComponent />;
};

Heading.Content = Content;

export default HeadingComponent;
