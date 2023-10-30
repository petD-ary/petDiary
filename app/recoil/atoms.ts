import { atom } from 'recoil';

export const stepState = atom<number>({
  key: 'stepState',
  default: 0,
});

export const variantModalState = atom<boolean>({
  key: 'variantModalState',
  default: true,
});
