import { ToastProps } from '@/components/Toast';
import { atom } from 'recoil';

export const userState = atom<null>({
  key: 'userState',
  default: null,
});

export const toastState = atom<ToastProps[]>({
  key: 'toastState',
  default: [],
});
