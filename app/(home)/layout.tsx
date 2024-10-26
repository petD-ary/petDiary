import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

import Navbar from '@/components/Navbar';
import pretendard from '@/components/Pretendard';
import HeadingComponent from '@/components/Heading';
import ToastProvider from '@/components/Toast/ToastProvider';
import QueryWrapper from '@/components/Wrapper/QueryWrapper';
import RecoilRootWrapper from '@/components/Wrapper/RecoilRootWrapper';

export const metadata: Metadata = {
  title: '펫 다이어리',
  description: '반려동물 케어 가이드 서비스',
  keywords: [
    '펫다이어리',
    '반려동물',
    '케어',
    '강아지',
    '고양이',
    '가이드',
    '펫',
    '다이어리',
    '지식 공유',
    '산책 날씨',
  ],
  openGraph: {
    title: '펫 다이어리 - 당신과 반려동물의 특별한 일상을 기록하세요!',
    description:
      '반려동물과 함께하는 모든 순간을 체계적으로 관리하고 추억을 남길 수 있는 반려동물 전용 다이어리 서비스, 펫다이어리! 반려동물의 프로필 저장, 일정 관리, 산책 날씨 확인, 반려동물 관련 지식 게시판 등 다양한 기능으로 더욱 편리하게 반려동물의 일상을 기록해보세요.',
    images: '/open_graph.png',
    siteName: '펫 다이어리 - 당신과 반려동물의 특별한 일상을 기록하세요!',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={`${pretendard.className} scrollbar-none min-h-screen`}>
        <QueryWrapper>
          <RecoilRootWrapper>
            <ToastProvider />
            <div className='w-screen h-screen m-0 relative'>
              <HeadingComponent />
              <div className='h-[calc(100%-116px)]'>{children}</div>
              <Navbar />
            </div>
          </RecoilRootWrapper>
        </QueryWrapper>
        <Script
          type='text/javascript'
          strategy='beforeInteractive'
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=clusterer&autoload=false`}
        />
      </body>
    </html>
  );
}
