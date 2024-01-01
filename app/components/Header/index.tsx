'use client';
import { usePathname, useRouter } from 'next/navigation';
import IconX from '@/assets/images/Icon-x.svg';
import IconLeft from '@/assets/images/icon-left.svg';
import logo from '@/assets/images/logo/pd_logo.png';
import { useRecoilState } from 'recoil';
import { stepState } from '@/recoil/Account/atoms';
import IconBtnWrapper from '../Button/IconBtnWrapper';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  type: 'logo' | 'search' | 'default' | 'account';
}

const Header = ({ type }: HeaderProps) => {
  return (
    <header className='w-full md:max-w-3xl h-14 mx-auto px-2 py-1 flex items-center'>
      {type === 'account' ? <AccountHeader /> : null}
      {type === 'search' ? <SearchHeader /> : null}
      {type === 'logo' ? <LogoHeader /> : null}
      {type === 'default' ? <DefaultHeader /> : null}
    </header>
  );
};

const LogoHeader = () => {
  const pathname = usePathname();

  if (pathname.includes('login'))
    return (
      <div className='px-3'>
        <Image src={logo.src} alt='Pet diary logo' width={75} height={18} />
      </div>
    );

  return (
    <Link href='/' className='px-3'>
      <Image src={logo.src} alt='Pet diary logo' width={75} height={18} />
    </Link>
  );
};

const SearchHeader = () => {
  return <div></div>;
};

const DefaultHeader = () => {
  return <div></div>;
};

const AccountHeader = () => {
  const router = useRouter();
  const [step, setStep] = useRecoilState(stepState);

  const handleClickRoute = () => {
    if (step > 0 && step <= 2) {
      return setStep((prev) => prev - 1);
    } else if (step === 0) {
      return router.back();
    }
  };

  return (
    <div className={`w-full flex ${step !== 0 ? 'justify-between' : 'justify-end'}`}>
      {step !== 0 ? (
        <button type='button' onClick={handleClickRoute} className='p-4'>
          <IconLeft />
        </button>
      ) : null}

      <IconBtnWrapper onClick={() => router.push('/login')}>
        <IconX />
      </IconBtnWrapper>
    </div>
  );
};

export default Header;
