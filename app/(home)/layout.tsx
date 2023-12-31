import './globals.css';
import type { Metadata } from 'next';
import RecoilRootWrapper from '@/components/RecoilRootWrapper';
import pretendard from '@/components/Pretendard';
import Container from '@/components/Container';
import Navbar from '@/components/Navbar';

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
      <body className={`${pretendard.className} scrollbar-none`}>
        <RecoilRootWrapper>
          <Container>
            {children}
          </Container>
          <Navbar />
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
