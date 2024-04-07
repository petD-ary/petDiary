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
  const isAccountPage = currentUrl.includes('/account');

  if (isAccountPage) return null;

  return (
    <button
      className='absolute bottom-6 right-6 z-10
      bg-blue-500 hover:bg-blue-400
      text-white font-bold
      rounded-full shadow-level3
      transition-all flex items-center justify-center h-12 w-12'
      onClick={onClick}
    >
      <IconPlus />
    </button>
  );
};

export default ScheduleAddBtn;
