import Container from '@/components/Container';
import CurrLocation from '@/components/Main/CurrLocation';
import Weather from '@/components/Main/Weather';
import Profile from '@/components/Main/Profile';
import PetEditModal from '@/components/Main/PetListModal';
import Walk from '@/components/Main/Walk';

export default function Home() {
  return (
    <Container className='bg-extra-device-bg h-[calc(100dvh-120px)] overflow-y-auto'>
      <div className='grid grid-cols-1 grid-rows-none gap-3 justify-center items-start'>
        <PetEditModal />
        <Profile />
        <CurrLocation />
        <div className='grid grid-cols-2 gap-3 mb-3'>
          <Weather />
          <Walk />
        </div>
      </div>
    </Container>
  );
}
