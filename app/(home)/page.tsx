import Container from '@/components/Container';
import CurrLocation from '@/components/Main/CurrLocation';
import Weather from '@/components/Main/Weather';
import { MainAnimalHeader } from '@/components/Heading/TypeHeader';
import Profile from '@/components/Main/Profile';
import Walk from '@/components/Main/Walk';
import PetEditModal from '@/components/Main/Profile/PetEditModal';

export default function Home() {
  return (
    <Container className='bg-extra-divice-bg h-full grid grid-cols-1 grid-rows-none gap-3 justify-center items-start'>
      <MainAnimalHeader />
      <Profile />
      <CurrLocation />
      <div className='grid grid-cols-2 gap-3 mb-3'>
        <Weather />
        <Walk />
      </div>
      <PetEditModal />
    </Container>
  );
}
