import { atom } from 'recoil';

export const searchModalState = atom<boolean>({
  key: 'searchModalState',
  default: false,
});
