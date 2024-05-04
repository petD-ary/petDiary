import { PetObjProps } from '@/components/Account/PetInfoForm';
import fetchApi from '../fetchApi';
import getToken from '@/utils/getToken';

export const deletePet = async (id: number) => {
  return await fetchApi('/pets', 'DELETE', { id: id });
};

export const addPet = async (data: PetObjProps) => {
  return await fetchApi('/pets', 'POST', data);
};

export const updatePet = async (data: FormData) => {
  const accessToken = getToken('accessToken');

  return await fetchApi('/pets', 'POST', data, {
    Authorization: `Bearer ${accessToken?.value}`,
    'Content-Type': 'multipart/form-data',
  });
};
