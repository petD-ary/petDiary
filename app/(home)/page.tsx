import { MainAnimalHeader } from '@/components/Heading/TypeHeader';
import Profile from '@/components/Main/Profile';
import Walk from '@/components/Main/Walk';
import { loader } from '@/libs/fetchUserAuthInfo';

export default async function Home() {
  const response = await loader();
  console.log(response);
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
