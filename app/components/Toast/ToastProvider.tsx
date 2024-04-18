'use client';
import { toastState } from '@/recoil/atoms';
import { useRecoilValue } from 'recoil';
import Toast from '.';

const ToastProvider = () => {
  const toasts = useRecoilValue(toastState);
  return (
    <div className='fixed z-30 bottom-10 left-1/2 -translate-x-1/2 flex flex-col gap-5'>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};

export default ToastProvider;
