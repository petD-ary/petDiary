import { MainAnimalHeader } from '@/components/Heading/TypeHeader';
import Profile from '@/components/Main/Profile';
import Walk from '@/components/Main/Walk';
import { getUser } from '@/libs/fetchUserAuthInfo';

export default async function Home() {
  const user = await getUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='max-w-[1500px] min-w-[300px] mx-auto'>
      <div className=''>
        <MainAnimalHeader />
        <Profile user={user} />
        <Walk />
      </div>
    </div>
  );
}
