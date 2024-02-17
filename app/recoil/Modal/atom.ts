import { atom, selector } from 'recoil';

export const modalState = atom<string[]>({
  key: 'modalState',
  default: [],
});
