import { atom } from 'recoil';

export const userState = atom<null>({
  key: 'userState',
  default: null,
});
