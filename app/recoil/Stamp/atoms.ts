import { atom } from 'recoil';

export const stampModalState = atom<boolean>({
  key: 'stampModalState',
  default: false,
});
