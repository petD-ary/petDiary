import { PetObjProps } from '@/components/Account/PetInfoForm';
import fetchApi from '../fetchApi';

export const deletePet = async (id: number) => {
  return await fetchApi('/pets', 'DELETE', { id: id });
};

export const addPet = async (data: PetObjProps) => {
  return await fetchApi('/pets', 'POST', data);
};

export const updatePet = async (data: FormData) => {
  return await fetchApi('/pets', 'PUT', data, {
    'Content-Type': 'multipart/form-data',
  });
};
