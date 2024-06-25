import { Body } from '@/constants/Typography/TypographyList';
import React, { ReactNode } from 'react';

interface OptionButtonProps {
  children?: ReactNode;
  selected?: boolean;
  onClick: () => void;
}

const OptionButton = ({
  children,
  selected = false,
  onClick,
}: OptionButtonProps) => {
  return (
    <div
      className={`w-full p-[14px] flex items-center gap-3 cursor-pointer border rounded-md text ${Body.body1} ${selected ? 'border-primary-500 text-primary-500' : 'border-grayColor-100 text-text-primary'}`}
      onClick={onClick}
    >
      <span
        className={`inline-block rounded-full p-1 bg-white border-[6px] ${selected ? 'border-primary-500' : 'border-grayColor-100'}`}
      />
      {children}
    </div>
  );
};

export default OptionButton;
