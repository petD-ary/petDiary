import axios from '@/libs/axios';

export async function getPetData() {
  try {
    const response = await axios('/pets');
    return response.data.sort((a: any, b: any) => a.id - b.id);
  } catch (error) {
    console.log(error);
  }
}
