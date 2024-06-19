import { ReactNode } from 'react';
import { Btn } from '../../constants/Typography/TypographyList';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  onClick?: () => void;
  variant: 'contained' | 'blueContained' | 'outlined' | 'reset' | 'delete';
  size?: 'S' | 'M' | 'L';
  textType?: 'button1' | 'button2';
}

const Button = ({
  children,
  className,
  type = 'button',
  onClick,
  isDisabled,
  size = 'L',
  textType = 'button1',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      {...rest}
      className={`${className} w-full border rounded-lg text-center py-5
      text-button font-semibold transition-colors
      disabled:text-white disabled:bg-grayColor-200 disabled:border-grayColor-200
  ${
    rest.variant === 'contained'
      ? `bg-primary-500 text-white border-primary-500
      hover:bg-white hover:text-primary-500
      active:bg-white active:text-primary-500
      `
      : ''
  }
  ${
    rest.variant === 'outlined'
      ? `bg-white text-primary-700 border-primary-500
      hover:bg-primary-500 hover:text-white
      active:bg-primary-500 active:text-white`
      : ''
  }
  ${
    rest.variant === 'blueContained'
      ? `bg-secondary-50 text-secondary-500 border-secondary-100
      hover:border-secondary-200 active:border-secondary-200`
      : ''
  }
  ${
    rest.variant === 'delete'
      ? `text-error border-error/50
  active:bg-error active:text-white active:border-error
  hover:bg-error hover:text-white hover:border-error`
      : ''
  }
  ${
    rest.variant === 'reset'
      ? `text-text-primary border-extra-border
  active:bg-grayColor-10 active:border-extra-active
  hover:bg-grayColor-10 hover:border-extra-active`
      : ''
  }
  ${textType === 'button1' ? `${Btn.button1}` : ''}
  ${textType === 'button2' ? `${Btn.button2}` : ''}
  `}
    >
      {children}
    </button>
  );
};

export default Button;
