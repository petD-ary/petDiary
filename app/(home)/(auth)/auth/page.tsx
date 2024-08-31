'use client';
import { Suspense, useEffect } from 'react';

import Loading from '@/components/Loading';
import { setToken } from '@/utils/getToken';
import { useRouter, useSearchParams } from 'next/navigation';
import { reissueAccessToken } from '@/apis/auth';

const LoginLoading = () => {
  const router = useRouter();
  const refreshToken = useSearchParams().get('refreshToken');
  const status = useSearchParams().get('status');

  useEffect(() => {
    if (refreshToken) {
      (async () => {
        await setToken('refreshToken', refreshToken, {
          maxAge: 7 * 24 * 60 * 60,
        });

        await reissueAccessToken();

        if (status === 'temporary') {
          await setToken('status', status, {
            maxAge: 3 * 60,
          });
          router.push('/account');
        } else {
          router.push('/');
        }
      })();
    }
  }, [refreshToken, status]);

  return (
    <div className='text-center flex justify-center items-center h-screen'>
      <Loading />
    </div>
  );
};

const AuthPage = () => {
  return (
    <Suspense>
      <LoginLoading />
    </Suspense>
  );
};

export default AuthPage;
