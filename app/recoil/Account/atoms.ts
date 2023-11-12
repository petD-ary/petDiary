import { atom } from 'recoil';

export const stepState = atom<number>({
  key: 'stepState',
  default: 0,
});

export const variantModalState = atom<boolean>({
  key: 'variantModalState',
  default: false,
});

interface AuthObjStateProps {
  userId: string;
  email: string;
  password: string;
  passwordCheck: string;
}

export const authObjState = atom<AuthObjStateProps>({
  key: 'authObjState',
  default: {
    userId: '',
    email: '',
    password: '',
    passwordCheck: '',
  },
});
