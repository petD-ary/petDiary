import { ReactNode } from 'react';

interface IconBtnWrapperProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (value?: any) => void;
  disabled?: boolean;
}

const IconBtnWrapper = ({
  children,
  type = 'button',
  onClick,
  ...rest
}: IconBtnWrapperProps) => {
  return (
    <button type={type} onClick={onClick} className='p-4' {...rest}>
      {children}
    </button>
  );
};

export default IconBtnWrapper;
