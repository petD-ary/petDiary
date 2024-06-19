import { ToastProps } from '@/components/Toast';
import { toastState } from '@/recoil/atoms';
import { Key } from 'react';
import { useSetRecoilState } from 'recoil';

const useToast = () => {
  const setToast = useSetRecoilState(toastState);
  const TOAST_DURATION = 3000;

  /**
   * @param newToast {id: string, message: string}
   */
  const addToast = (newToast: ToastProps) => {
    setToast((prev) => {
      const newToastList = [...prev];
      newToastList.push(newToast);
      return newToastList;
    });
  };

  /**
   * @param id key 값을 받아와 해당 키값과 같은 오브젝트를 삭제 후 반환
   */
  const removeToast = (id: Key) => {
    setToast((prev) => {
      const filteredToastList = prev.filter((toast) => toast.id !== id);
      return filteredToastList;
    });
  };

  /**
   * @param message 토스트 메세지
   */
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
