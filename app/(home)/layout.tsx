import './globals.css';
import type { Metadata } from 'next';
import RecoilRootWrapper from '@/components/RecoilRootWrapper';
import pretendard from '@/components/Pretendard';
import Navbar from '@/components/Navbar';
import HeadingComponent from '@/components/Heading';
import { ConfigProvider } from 'antd';

export const metadata: Metadata = {
  title: '반려동물 앱',
  description: '반려동물 케어 가이드 서비스',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
<<<<<<< HEAD
      <body className={pretendard.className}>
        <ConfigProvider theme={{ hashed: false }}>
          <RecoilRootWrapper>
            <HeadingComponent />
            <Container>{children}</Container>
            <Navbar />
          </RecoilRootWrapper>
        </ConfigProvider>
=======
      <body className={`${pretendard.className} scrollbar-none min-h-screen`}>
        <RecoilRootWrapper>
          <div className='flex flex-col min-h-screen'>
            <HeadingComponent />
            <div className='flex-grow'>{children}</div>
          </div>
          <Navbar />
        </RecoilRootWrapper>
>>>>>>> 1ce20810e33feb61bf8112deada8cf04539e309f
      </body>
    </html>
  );
}
