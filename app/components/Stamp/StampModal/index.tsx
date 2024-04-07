import useClickOutsideArea from '@/hooks/useClickOutsideArea';
import { stampModalState } from '@/recoil/Stamp/atoms';
import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';

const StampModal = ({ todayChecked }: { todayChecked: boolean }) => {
  const setIsOpen = useSetRecoilState(stampModalState);
  const ref = useRef(null);

  const handleOpenModal = () => {
    setIsOpen(false);
  };

  useClickOutsideArea(ref, handleOpenModal);

  return (
    <div className='fixed z-50 w-full h-full top-0 left-0 bg-black/30'>
      <div
        ref={ref}
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        max-w-[500px] w-full bg-white
        flex flex-col items-center rounded-lg overflow-hidden
        shadow-[0_10px_20px_rgba(0,0,0,0.25)]
        pt-[60px]'
      >
        <div className='w-[120px] h-[120px] relative bg-grayColor-200 rounded-xl'></div>
        <p className='pt-12 pb-[60px] text-lg font-semibold'>
          {todayChecked
            ? '이미 오늘의 스탬프를 찍었어요!'
            : '오늘의 스탬프 찍기 완료!'}
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className='w-full bg-black text-white py-3'
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default StampModal;
