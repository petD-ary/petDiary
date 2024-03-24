import IconPlus from '@/assets/images/icon-plusW.svg';
import { usePathname } from 'next/navigation';
import { MouseEventHandler } from 'react';

interface AddButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
{
  /* dropshadow 언니껄로 수정 */
}
const ScheduleAddBtn = ({ onClick }: AddButtonProps) => {
  const currentUrl = usePathname();
  const isAccountPage = currentUrl.includes('account');

  if (isAccountPage) return null;

  return (
    <button
      className='fixed bottom-[80px] right-[25px] z-10 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-full drop-shadow-floatBtn hover:shadow-xl transition-shadow flex items-center justify-center h-12 w-12'
      style={{ boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.16)' }}
      onClick={onClick}
    >
      <IconPlus />
    </button>
  );
};

export default ScheduleAddBtn;
