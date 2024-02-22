import { FormEvent } from 'react';

export type PetObjValue = string | boolean;

export interface PetInfoProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  submitValue: string;
}

interface InputType {
  [key: string]: string;
}

export const INPUT_TYPE: InputType = {
  TYPE: 'petType',
  BREED: 'breed',
  NAME: 'name',
  GENDER: 'gender',
  NEUTERED: 'neutered',
  BIRTHDAY: 'birthday',
  ADOPTIONDATE: 'adoptionDate',
  WEIGHT: 'weight',
};
