import axios from 'axios';
import { NextPageContext } from 'next';

export async function loader(context: NextPageContext | undefined) {
  const userToken = context?.req?.cookies?.userToken;

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
