import { PetObjProps } from '@/components/Account/PetInfoForm';
import { atom } from 'recoil';

export const stepState = atom<number>({
  key: 'stepState',
  default: 0,
});

export const nicknameState = atom<string>({
  key: 'nicknameState',
  default: '',
});

export const petInfoState = atom<PetObjProps>({
  key: 'petInfoState',
  default: {
    petType: '강아지',
    breed: '',
    name: '',
    gender: '남아',
    neutered: false,
    birthday: '',
    adoptionDate: '',
    weight: '',
  },
});

export const unknownBirthdayState = atom<boolean>({
  key: 'unknownBirthdayState',
  default: false,
});

export const tabState = atom<string>({
  key: 'tabState',
  default: '질병지식',
});
