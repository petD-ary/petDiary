import axios from '@/libs/axios';

export async function getPetData() {
  try {
    const response = await axios('/pets');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
