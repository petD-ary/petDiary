import Container from '@/components/Container';
import CurrLocation from '@/components/Main/CurrLocation';
import Weather from '@/components/Main/Weather';
import { MainAnimalHeader } from '@/components/Heading/TypeHeader';
import Profile from '@/components/Main/Profile';
import PetEditModal from '@/components/Main/PetEditModal/PetEditModal';
// import Walk from '@/components/Main/Walk';

export default function Home() {
  return (
    <Container className='bg-extra-divice-bg min-h-[calc(100vh_-_56px)]'>
      <div className='grid grid-cols-1 grid-rows-none gap-3 justify-center items-start'>
        <MainAnimalHeader />
        <PetEditModal />
        <Profile />
        <CurrLocation />
        <div className='grid grid-cols-2 gap-3 mb-3'>
          <Weather />
          {/* <Walk /> */}
        </div>
      </div>
    </Container>
  );
}
