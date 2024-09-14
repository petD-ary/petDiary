'use client';
import { useModal } from '@/hooks/view/useModal';
import { usePathname } from 'next/navigation';

import IconPlus from '@/assets/images/icon-plusW.svg';
import { MODAL_TYPE } from '@/components/Modal';

const ScheduleAddBtn = () => {
  const currentUrl = usePathname();
  const { addModal } = useModal();

  const isAccountPage = currentUrl.includes('/account');

  if (isAccountPage) return null;

  return (
    <button
      className='absolute bottom-6 right-6 z-10
      bg-blue-500 hover:bg-blue-400
      text-white font-bold
      rounded-full shadow-level3
      transition-all flex items-center justify-center h-12 w-12'
      onClick={() => addModal(MODAL_TYPE.SCHEDULE_ADD)}
    >
      <IconPlus />
    </button>
  );
};

export default ScheduleAddBtn;
