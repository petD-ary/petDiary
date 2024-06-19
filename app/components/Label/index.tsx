import React, { ReactNode } from 'react';

const Label = ({
  children,
  variant = 'red',
}: {
  children?: ReactNode;
  variant?: 'red' | 'green' | 'yellow' | 'blue' | 'magenta';
}) => {
  return (
    <span
      className={`inline-block rounded px-1 py-[2px] text-caption2 font-medium
  ${variant === 'red' && 'bg-error/5 text-error'}
  ${variant === 'green' && 'bg-success/5 text-success'}
  ${variant === 'yellow' && 'bg-accent/5 text-accent'}
  ${variant === 'blue' && 'bg-secondary-500/5 text-secondary-500'}
  ${variant === 'magenta' && 'bg-accent2/5 text-accent2'}
  `}
    >
      {children}
    </span>
  );
};

export default Label;
