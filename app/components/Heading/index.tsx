"use client";

import { ContextType, HeaderProps } from "@/types/header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo/pd_logo.png";
import router from "next/router";

const HeadingContext = createContext<ContextType | null>({
  isClose: false,
  isBack: false,
  isHome: false,
  isBackClose: false,
  isAlert: false,
  isInteractive: false,
});

const Heading: React.FC<HeaderProps> = ({ children }) => {
  // 현재 경로
  const currentPath = router.pathname;

  // 현재 경로 컨텍스트 값 메모이제이션
  const contextValue = useMemo<ContextType>(
    () => ({
      isClose: currentPath === "/",
      isBack: currentPath === "/",
      isHome: currentPath === "/",
      isBackClose: currentPath === "/",
      isAlert: currentPath === "/",
      isInteractive: currentPath === "/",
    }),
    [currentPath]
  );

  return (
    <HeadingContext.Provider value={contextValue}>
      <header> {children}</header>
    </HeadingContext.Provider>
  );
};

const Content = () => {
  const { isHome } = useContext(HeadingContext);
  if (isHome) return <LogoHeader />;
};

const LogoHeader = () => {
  return (
    <Link href="/" className="px-3">
      <Image src={logo.src} alt="Pet diary logo" width={75} height={18} />
    </Link>
  );
};

Heading.Content = Content;

export default Heading;
