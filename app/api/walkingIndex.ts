import axios from 'axios';

export async function walkingIndex(sido: string) {
  console.log(sido, 'sido');
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
    console.log(response, 'response');

    return response.data.response.body.items;
  } catch (error) {
    console.log(error);
  }
}
