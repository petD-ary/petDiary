import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  onClick?: () => void;
  variant: 'contained' | 'outlined';
  size?: 'S' | 'M' | 'L';
}

const Button = ({
  children,
  className,
  type = 'button',
  onClick,
  isDisabled,
  size = 'L',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled ? isDisabled : false}
      {...rest}
      className={`${className} w-full border rounded-lg text-center py-5
      text-button font-semibold
  ${
    rest.variant === 'contained'
      ? 'bg-primary-500 text-white border-primary-500 disabled:text-white disabled:bg-grayColor-200 disabled:border-grayColor-200'
      : ''
  }
  ${
    rest.variant === 'outlined'
      ? 'bg-white text-primary-500 border-primary-700 disabled:border-grayColor-200 disabled:text-grayColor-200'
      : ''
  }`}
    >
      {children}
    </button>
  );
};

export default Button;
