import './globals.css';
import type { Metadata } from 'next';
import { ConfigProvider } from 'antd';
import Script from 'next/script';
import ToastProvider from '@/components/Toast/ToastProvider';

import Navbar from '@/components/Navbar';
import pretendard from '@/components/Pretendard';
import HeadingComponent from '@/components/Heading';
import QueryWrapper from '@/components/Wrapper/QueryWrapper';
import RecoilRootWrapper from '@/components/Wrapper/RecoilRootWrapper';
import SearchModal from '@/components/SearchModal';

export const metadata: Metadata = {
  title: '반려동물 앱',
  description: '반려동물 케어 가이드 서비스',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={`${pretendard.className} scrollbar-none min-h-screen`}>
        <ConfigProvider theme={{ hashed: false }}>
          <QueryWrapper>
            <RecoilRootWrapper>
              <ToastProvider />
              <div className='w-screen h-screen m-0 relative'>
                <HeadingComponent />
                <SearchModal />
                <div className='h-[calc(100%-116px)]'>{children}</div>
                <Navbar />
              </div>
            </RecoilRootWrapper>
          </QueryWrapper>
        </ConfigProvider>
        <Script
          type='text/javascript'
          strategy='beforeInteractive'
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=clusterer&autoload=false`}
        />
      </body>
    </html>
  );
}
