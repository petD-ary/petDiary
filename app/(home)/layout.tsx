import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import RecoilRootWrapper from "@/components/RecoilRootWrapper";
import SideMenu from "@/components/SideMenu/SideMenu";

import Script from "next/script";
import { Head, Html } from "next/dist/pages/_document";

const pretendard = localFont({
  src: [
    {
      path: "../assets/font/Pretendard-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/Pretendard-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/font/Pretendard-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/font/Pretendard-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "반려동물 앱",
  description: "반려동물 케어 가이드 서비스",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Html lang="ko">
      <Head>
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"
          integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={pretendard.className}>
        {/* 로그인이 됐을 때만 */}
        {/* <SideMenu /> */}
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </Html>
  );
}
