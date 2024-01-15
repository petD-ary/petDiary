import { fineDustApi } from '@/libs/axios';

export async function walkingIndex() {
  try {
    const response = await fineDustApi('/getCtprvnRItmMesureDnsty');
    console.log(response.data.khaiValue);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
