import axios from '@/libs/axios';

export async function walkingIndex(sido: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_AIRKOREA_URL}/B552584/ArpltnStatsSvc/getCtprvnMesureSidoLIst`,
      {
        params: {
          serviceKey: `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
          returnType: 'json',
          numOfRows: '50',
          searchCondition: 'HOUR',
          sidoName: sido,
        },
      },
    );
    return response.data.response.body.items;
  } catch (error) {
    console.log(error);
  }
}
