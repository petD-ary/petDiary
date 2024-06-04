import { ReactNode } from 'react';

const MyPageBtn = ({
  children,
  onClick,
}: {
  children?: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className='cursor-pointer w-full text-body2 text-text-primary px-3 py-4 bg-white border border-extra-deviders rounded-lg'
    >
      {children}
    </div>
  );
};

export default MyPageBtn;
