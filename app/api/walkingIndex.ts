import { fineDustApi } from '@/libs/axios';

export async function walkingIndex(sido: string) {
  try {
    const response = await fineDustApi('/getCtprvnMesureSidoLIst', {
      params: { sidoName: sido },
    });
    return response.data.response.body.items;
  } catch (error) {
    console.log(error);
  }
}
