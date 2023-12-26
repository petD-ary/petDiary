import Image from 'next/image';
import Logo from '@/assets/images/common/logo/pd_logo_white.png';

const Splash = () => {
  return (
    <div className='bg-primary-500'>
      <p className='text-white text-sm font-medium leading-primary'>
        집사의 감동을 넘어 반려동물의 감동으로
      </p>
      <Image src={Logo.src} alt='Pet diary logo' />
    </div>
  );
};

export default Splash;
