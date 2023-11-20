import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import RecoilRootWrapper from '@/components/RecoilRootWrapper';
import SideMenu from '@/components/SideMenu/SideMenu';
import Container from '@/components/Container';

const pretendard = localFont({
  src: [
    {
      path: '../assets/font/Pretendard-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/font/Pretendard-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/font/Pretendard-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/font/Pretendard-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: '반려동물 앱',
  description: '반려동물 케어 가이드 서비스',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={pretendard.className}>
        <RecoilRootWrapper>
          {/* 로그인이 됐을 때만 */}
          <SideMenu />
          <div className='flex'>
            <div className='flex-grow'></div>
            <Container>{children}</Container>
          </div>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
