'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  return (
    <div
      className='w-[calc(100%_-_96px)] h-[100px]
    mx-auto flex justify-between items-center'
    >
      <h1 className='text-lg px-[6px] py-[2px]'>
        <Link href='/'>Logo</Link>
      </h1>
      <button
        className='px-5 py-[10px] bg-black text-white
        hover:opacity-80 transition-opacity'
        onClick={() => router.push('/account')}
      >
        회원가입
      </button>
    </div>
  );
};

export default Header;
