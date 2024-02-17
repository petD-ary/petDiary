import instance from '@/libs/axios';

export async function getPetData() {
  try {
    const response = await instance('/pets');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
