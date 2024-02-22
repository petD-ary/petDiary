import axios from '@/libs/axios';

const updatedPetData = async (data: any) => {
  try {
    const response = await axios.put('/pets', data);
    console.log('🚀 ~ updatedPetData ~ response:', response);
    // if (response) {
    //   return true;
    // } else return false;
    return;
  } catch (error) {
    console.log('🚀 ~ updatedPetData ~ error:', error);
  }
};

export default updatedPetData;
