import { Caption } from '@/constants/Typography/TypographyList';
import React, { ReactNode } from 'react';

interface ScheduleTagProps {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'grayScale';
}

const ScheduleTag = ({ children, variant = 'grayScale' }: ScheduleTagProps) => {
  return (
    <span
      className={`${Caption.caption1} py-[6px] px-3 rounded text-nowrap
      ${variant === 'primary' && 'bg-primary-50 text-primary-800'}
      ${variant === 'secondary' && 'bg-secondary-50 text-secondary-800'}
      ${variant === 'grayScale' && 'bg-grayColor-10 text-grayColor-800'}
      `}
    >
      {children}
    </span>
  );
};

export default ScheduleTag;
