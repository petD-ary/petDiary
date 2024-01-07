import axios from 'axios';

export async function loader() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}
