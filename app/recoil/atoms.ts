import { atom } from 'recoil';

export const stepState = atom<number>({
  key: 'stepState',
  default: 0,
});
