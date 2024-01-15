import { fineDustApi } from '@/libs/axios';

export async function walkingIndex() {
  try {
    const response = await fineDustApi('/getCtprvnRltmMesureDnsty');
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
