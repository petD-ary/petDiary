import { fineDustApi } from '@/libs/axios';

export async function walkingIndex() {
  try {
    const response = await fineDustApi('/getCtprvnMesureSidoLIst');
    console.log(response.data.response.body);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
