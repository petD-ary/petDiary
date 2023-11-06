import React from 'react';

interface AuthButtonProps {
  type: 'button' | 'submit' | 'reset';
  content: string;
  onClick?: () => void;
  disabled: boolean;
  css?: string;
}

function AuthButton({
  type,
  content,
  onClick,
  disabled,
  css,
}: AuthButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
      w-full h-[60px]
      text-white bg-black
      rounded-lg
      mt-20
      ${
        disabled
          ? 'disabled:opacity-50 disabled:cursor-default'
          : 'hover:bg-grayColor-300 active:bg-grayColor-400'
      }
      transition-colors
      ${css}
      `}
    >
      {content}
    </button>
  );
}

export default AuthButton;
