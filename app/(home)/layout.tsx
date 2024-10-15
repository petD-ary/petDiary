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
      <head>
        {/* Google Analytics or Google Tag Manager */}
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-THLG446S6C'
          strategy='afterInteractive'
        />
        <Script id='gtag-init' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-THLG446S6C');
          `}
        </Script>
      </head>
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
