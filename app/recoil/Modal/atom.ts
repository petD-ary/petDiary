import { atom } from 'recoil';

export const modalState = atom<string[]>({
  key: 'modalState',
  default: [],
});
