import React from 'react';
import Top from '@/assets/images/info/btn-top.svg';

const GoTopBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className='absolute right-6 bottom-6 w-11 h-11 bg-secondary-500 rounded-full cursor-pointer flex justify-center items-center shadow-[0_4px_8px_rgba(0,0,0,0.16)]'
      onClick={onClick}
    >
      <Top />
    </div>
  );
};

export default GoTopBtn;
