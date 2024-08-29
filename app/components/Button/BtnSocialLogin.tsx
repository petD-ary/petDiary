'use client';
import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

import { ProviderType } from '../Login/Constant';

interface BtnSocialLoginProps {
  children: ReactNode;
  className?: string;
  href: string;
}

const BtnSocialLogin = ({ children, className, href }: BtnSocialLoginProps) => {
  const router = useRouter();
  const handleClickLogin = async () => {
    router.push(href);
  };
  return (
    <button
      onClick={handleClickLogin}
      className={`w-full py-2 flex justify-center items-center gap-1 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default BtnSocialLogin;
