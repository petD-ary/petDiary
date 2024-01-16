import { MainAnimalHeader } from '@/components/Heading/TypeHeader';
import Profile from '@/components/Main/Profile';
import Walk from '@/components/Main/Walk';

export default function Home() {
  return (
    <div className='max-w-[1500px] min-w-[300px] mx-auto'>
      <div className=''>
        <MainAnimalHeader />
        <Profile />
        <Walk />
      </div>
    </div>
  );
}
