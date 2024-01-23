import Container from '@/components/Container';
import CurrLocation from '@/components/Main/CurrLocation';
import Weather from '@/components/Main/Weather';

export default function Home() {
  return (
    <Container className='bg-extra-divice-bg h-full grid grid-cols-1 gap-3'>
      <CurrLocation />
      <div className='grid grid-cols-2 gap-3'>
        <Weather />
        {/* 산책 지수 위치를 잡기 위해 임시로 복사 */}
        <Weather />
      </div>
    </Container>
  );
}
