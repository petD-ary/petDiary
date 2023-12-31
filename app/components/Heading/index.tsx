"use client";

import { HeaderMap, HeaderProps } from "@/types/header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, createContext, useContext, useEffect, useMemo } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo/pd_logo.png";

// 헤더 유형별 컴포넌트 정의
const HeaderElement = {
  Close: () => <div>Close</div>,
  Back: () => <div>Back</div>,
  Home: () => <LogoHeader />,
  BackClose: () => <div>BackClose</div>,
  Alert: () => <div>Alert</div>,
  Interactive: () => <div>Interactive</div>,
  Default: () => <div>default</div>,
};

// 현재 경로에 따른 헤더 컴포넌트 매핑
const headerMap: HeaderMap = {
  "/1": HeaderElement.Close,
  "/2": HeaderElement.Back,
  "/login": HeaderElement.Home,
  "/3": HeaderElement.BackClose,
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
  return <header>{children}</header>;
};

const Content = () => {
  const pathname = usePathname();
  const HeaderComponent = headerMap[pathname] || HeaderElement.Default; // 경로에 해당하는 헤더 컴포넌트 또는 기본값
  return <HeaderComponent />;
};

const LogoHeader = () => {
  return (
    <Link href="/" className="px-3">
      <Image src={logo.src} alt="Pet diary logo" width={75} height={18} />
    </Link>
  );
};

Heading.Content = Content;

export default HeadingComponent;
