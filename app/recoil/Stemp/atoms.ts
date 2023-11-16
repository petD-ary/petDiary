import { atom } from 'recoil';

export const stempModalState = atom<boolean>({
  key: 'stempModalState',
  default: false,
});
