import { ToastProps } from '@/components/Toast';
import { toastState } from '@/recoil/atoms';
import { Key } from 'react';
import { useSetRecoilState } from 'recoil';

const useToast = () => {
  const setToast = useSetRecoilState(toastState);
  const TOAST_DURATION = 3000;

  const addToast = (newToast: ToastProps) => {
    setToast((prev) => {
      const newToastList = [...prev];
      newToastList.push(newToast);
      return newToastList;
    });
  };

  const removeToast = (id: Key) => {
    setToast((prev) => {
      const filteredToastList = prev.filter((toast) => toast.id !== id);
      return filteredToastList;
    });
  };

  const setToasts = (message: string) => {
    const key = Date.now();
    addToast({ id: key, message: message });
    setTimeout(() => {
      removeToast(key);
    }, TOAST_DURATION);
  };
  return { addToast, removeToast, setToasts };
};

export default useToast;
