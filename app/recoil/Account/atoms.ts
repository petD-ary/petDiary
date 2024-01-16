import { atom } from 'recoil';

export const stepState = atom<number>({
  key: 'stepState',
  default: 0,
});

export const nicknameState = atom<string>({
  key: 'nicknameState',
  default: '',
});

export const tabState = atom<string>({
  key: 'tabState',
  default: '질병지식',
});
