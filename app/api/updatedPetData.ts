import axios from '@/libs/axios';
import getToken from '@/utils/getToken';

const updatedPetData = async (data: any) => {
  try {
    const accessToken = getToken('accessToken')?.value;
    return await axios.put('/pets', data, {
      headers: { Authorization: 'Bearer ' + `${accessToken}` },
    });
  } catch (error) {
    console.log('🚀 ~ updatedPetData ~ error:', error);
  }
};

export default updatedPetData;
