import { PetObjProps } from '@/components/Account/PetInfoForm';
import axios from '@/libs/axios';

export const addPetData = async (data: PetObjProps) => {
  try {
    const response = await axios.post('/pets', data);
    console.log('🚀 ~ addPetData ~ response:', response);
    if (response.data) {
      return response.data;
    } else {
      return response.status;
    }
  } catch (e) {
    console.log('🚀 ~ addPetData ~ e:', e);
  }
};
