import React, { ReactNode } from 'react';

interface BtnSocialLoginProps {
  children: ReactNode;
  className?: string;
  onClick: (e?: any) => void;
}

const BtnSocialLogin = ({
  children,
  className,
  onClick,
}: BtnSocialLoginProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-2 flex justify-center items-center gap-1 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default BtnSocialLogin;
