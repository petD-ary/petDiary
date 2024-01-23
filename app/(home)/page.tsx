import Container from '@/components/Container';
import CurrLocation from '@/components/Main/CurrLocation';
import Weather from '@/components/Main/Weather';
import { MainAnimalHeader } from '@/components/Heading/TypeHeader';
import Profile from '@/components/Main/Profile';
import Walk from '@/components/Main/Walk';

export default function Home() {
  return (
    <Container className='bg-extra-divice-bg h-full grid grid-cols-1 gap-3'>
      <MainAnimalHeader />
      <Profile />
      <CurrLocation />
      <div className='grid grid-cols-2 gap-3'>
        <Weather />
        <Walk />
      </div>
    </Container>
  );
}
